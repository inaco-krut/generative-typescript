import * as THREE from 'three';
import GUI from 'lil-gui';
import {
  blurBoxFragmentShader, blurDownFragmentShader, blurFragmentShader, compositeFragmentShader, fragmentShader,
  seaBackdropFragmentShader, particleInitFragmentShader, particlePointFragmentShader, particlePointVertexShader,
  particleSimFragmentShader, postFragmentShader, vertexShader,
} from './shader';
import { effectDefs, effectFragmentShader, newLayer, type EffectDef, type EffectLayer } from './effects';
import { EffectsPanel } from './effectsUI';
import { GlyphTools } from './glyphTools';
import { decodeImage, importImage, renderGlyphSDF, type DecodedImage } from './glyph';
import { GlyphStore, MAX_GLYPHS, boundsOf, defaultBounds, unionBounds } from './glyphs';
import { builtinFonts, ensureFont, loadFontFile, type FontDef } from './fonts';
import { palettes, paletteNames } from './palettes';
import { renderDetails } from './details';
import {
  builtinPresetNames, defaultGlyph, loadUserPresets, presets, resolvePreset, storeUserPresets, type GlyphDef, type Params,
} from './presets';

const MODES = { 'Offset lines': 0, Mountain: 1, Basin: 2 } as const;

const params: Params = resolvePreset(presets.hubworks);
const store = new GlyphStore();
// per-glyph animation state; these arrays are shared with the shader uniforms
const gPos = Array.from({ length: MAX_GLYPHS }, () => new THREE.Vector2());
const gSize: number[] = new Array(MAX_GLYPHS).fill(1);
const gMorph: number[] = new Array(MAX_GLYPHS).fill(1);
const gOut: number[] = new Array(MAX_GLYPHS).fill(0);
const gSoft: number[] = new Array(MAX_GLYPHS).fill(0);
const gGrow: number[] = new Array(MAX_GLYPHS).fill(0);
const gWarp: number[] = new Array(MAX_GLYPHS).fill(0);
const gOp: number[] = new Array(MAX_GLYPHS).fill(1);
const gImg: number[] = new Array(MAX_GLYPHS).fill(0);
const gOrder: number[] = Array.from({ length: MAX_GLYPHS }, (_, i) => i); // glyph indices, back to front
const gFill = Array.from({ length: MAX_GLYPHS }, () => new THREE.Color());
const gStroke = Array.from({ length: MAX_GLYPHS }, () => new THREE.Color());
const gXform = Array.from({ length: MAX_GLYPHS }, () => new THREE.Vector4(1, 0, 0, 1));
const morphStart: number[] = new Array(MAX_GLYPHS).fill(-1);
const loadTokens: number[] = new Array(MAX_GLYPHS).fill(0);
let activeIdx = 0; // glyph the panel edits
let selectedIdx = -1; // glyph with the selection box (-1 = none)

// ---------------------------------------------------------------- renderer

const canvas = document.getElementById('view') as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

const color = (hex: string) => new THREE.Color(hex);

const uniforms = {
  uRes: { value: new THREE.Vector2(1, 1) },
  uTime: { value: 0 },
  uFromArr: { value: store.fromTex },
  uToArr: { value: store.toTex },
  uCount: { value: 0 },
  uGPos: { value: gPos },
  uGSize: { value: gSize },
  uGMorph: { value: gMorph },
  uGXform: { value: gXform },
  uGOut: { value: gOut },
  uBlend: { value: params.shapeBlend },
  uGSoft: { value: gSoft },
  uGGrow: { value: gGrow },
  uGWarp: { value: gWarp },
  uGFill: { value: gFill },
  uGStroke: { value: gStroke },
  uGOp: { value: gOp },
  uImgArr: { value: store.imgTex },
  uGImg: { value: gImg },
  uGOrder: { value: gOrder },
  uShapeWarpScale: { value: params.shapeWarpScale },
  uShapeWarpSpeed: { value: params.shapeWarpSpeed },
  uMode: { value: params.mode },
  uLook: { value: params.look },
  uLookA: { value: params.lookA },
  uLookB: { value: params.lookB },
  uLookC: { value: params.lookC },
  uLookD: { value: params.lookD },
  uHeightTex: { value: null as THREE.Texture | null },
  uInfluence: { value: params.influence },
  uSlope: { value: params.slope },
  uWobble: { value: params.wobble },
  uRough: { value: params.rough },
  uFreq: { value: params.freq },
  uWarp: { value: params.warp },
  uDrift: { value: params.drift },
  uSeed: { value: params.seed },
  uSpacing: { value: params.spacing },
  uLineW: { value: params.lineWidth },
  uTint: { value: params.tint },
  uShade: { value: params.shade },
  uGrain: { value: params.grain },
  uMask: { value: null as THREE.Texture | null },
  uMaskOn: { value: 0 },
  uOutputH: { value: 0 },
  uPaper: { value: color('#000') },
  uInk: { value: color('#000') },
  uIndex: { value: color('#000') },
  uLow: { value: color('#000') },
  uMid: { value: color('#000') },
  uHigh: { value: color('#000') },
};

// everything the shared glyph shader code needs, handed to every pass that evaluates the letter shapes
const glyphUniforms = {
  uTime: uniforms.uTime,
  uFromArr: uniforms.uFromArr, uToArr: uniforms.uToArr, uCount: uniforms.uCount,
  uGPos: uniforms.uGPos, uGSize: uniforms.uGSize, uGMorph: uniforms.uGMorph, uGXform: uniforms.uGXform, uGOut: uniforms.uGOut,
  uBlend: uniforms.uBlend, uGSoft: uniforms.uGSoft, uGGrow: uniforms.uGGrow, uGWarp: uniforms.uGWarp,
  uGFill: uniforms.uGFill, uGStroke: uniforms.uGStroke, uGOp: uniforms.uGOp,
  uImgArr: uniforms.uImgArr, uGImg: uniforms.uGImg, uGOrder: uniforms.uGOrder,
  uShapeWarpScale: uniforms.uShapeWarpScale, uShapeWarpSpeed: uniforms.uShapeWarpSpeed,
};

const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader });
scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

// detail layer: a transparent canvas on top for labels, plus a mask that knocks contour lines out behind them
const overlay = document.createElement('canvas');
const overlayCtx = overlay.getContext('2d')!;
const maskCanvas = document.createElement('canvas');
const maskCtx = maskCanvas.getContext('2d')!;
const maskTex = new THREE.CanvasTexture(maskCanvas);
uniforms.uMask.value = maskTex;
const overlayTex = new THREE.CanvasTexture(overlay);

// map -> sceneRT, then a final pass adds the detail layer and the glass overlay
const sceneRT = new THREE.WebGLRenderTarget(1, 1, { depthBuffer: false });
const postUniforms = {
  uRes: uniforms.uRes,
  uScene: { value: sceneRT.texture },
  uOverlay: { value: overlayTex },
  uOverlayOn: { value: 0 },
  uBlurTex: { value: null as THREE.Texture | null },
  uBlur: { value: params.blur },
  uGlass: { value: params.glass },
  uGlassLight: { value: params.glassLight },
  ...glyphUniforms,
};
const postScene = new THREE.Scene();
postScene.add(
  new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.ShaderMaterial({ uniforms: postUniforms, vertexShader, fragmentShader: postFragmentShader }),
  ),
);

// background blur: map + detail layer -> half res (glyph areas masked out) -> quarter res -> gaussian
const floatRT = renderer.extensions.has('EXT_color_buffer_float') || renderer.extensions.has('EXT_color_buffer_half_float');
const makeBlurRT = () =>
  new THREE.WebGLRenderTarget(1, 1, {
    type: floatRT ? THREE.HalfFloatType : THREE.UnsignedByteType,
    depthBuffer: false,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
  });
const blurHalf = makeBlurRT();
const blurQuarter = makeBlurRT();
const blurTemp = makeBlurRT();
postUniforms.uBlurTex.value = blurQuarter.texture;

const fxMaterials = {
  down: new THREE.ShaderMaterial({
    uniforms: {
      uRes: uniforms.uRes,
      uOutRes: { value: new THREE.Vector2() },
      uScene: { value: sceneRT.texture },
      uOverlay: { value: overlayTex },
      uOverlayOn: postUniforms.uOverlayOn,
      ...glyphUniforms,
    },
    vertexShader,
    fragmentShader: blurDownFragmentShader,
  }),
  box: new THREE.ShaderMaterial({
    uniforms: { uSrc: { value: blurHalf.texture }, uSrcRes: { value: new THREE.Vector2() }, uOutRes: { value: new THREE.Vector2() } },
    vertexShader,
    fragmentShader: blurBoxFragmentShader,
  }),
  gauss: new THREE.ShaderMaterial({
    uniforms: {
      uSrc: { value: null as THREE.Texture | null },
      uOutRes: { value: new THREE.Vector2() },
      uDir: { value: new THREE.Vector2() },
      uSigma: { value: 1 },
    },
    vertexShader,
    fragmentShader: blurFragmentShader,
  }),
};
const fxMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), fxMaterials.down);
const fxScene = new THREE.Scene();
fxScene.add(fxMesh);

function fxPass(material: THREE.ShaderMaterial, target: THREE.WebGLRenderTarget): void {
  fxMesh.material = material;
  (material.uniforms.uOutRes?.value as THREE.Vector2 | undefined)?.set(target.width, target.height);
  renderer.setRenderTarget(target);
  renderer.render(fxScene, camera);
}

function runBlur(): void {
  fxPass(fxMaterials.down, blurHalf);
  (fxMaterials.box.uniforms.uSrcRes.value as THREE.Vector2).set(blurHalf.width, blurHalf.height);
  fxPass(fxMaterials.box, blurQuarter);
  // sigma in quarter-res texels; the slider scales with the canvas height so exports match the screen
  const sigma = (params.blur * params.blur * 0.035 * uniforms.uRes.value.y) / 4; // quadratic: fine control at the low end
  fxMaterials.gauss.uniforms.uSigma.value = sigma;
  fxMaterials.gauss.uniforms.uSrc.value = blurQuarter.texture;
  (fxMaterials.gauss.uniforms.uDir.value as THREE.Vector2).set(1, 0);
  fxPass(fxMaterials.gauss, blurTemp);
  fxMaterials.gauss.uniforms.uSrc.value = blurTemp.texture;
  (fxMaterials.gauss.uniforms.uDir.value as THREE.Vector2).set(0, 1);
  fxPass(fxMaterials.gauss, blurQuarter);
}

// ---- effect stack: composite (map + detail layer) -> one pass per layer, ping-ponging between two targets
const makeFullRT = () => new THREE.WebGLRenderTarget(1, 1, { depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter });
const effRT = [makeFullRT(), makeFullRT()];
let detailsOn = false; // is the detail layer currently valid and showing?

const compositeMat = new THREE.ShaderMaterial({
  uniforms: {
    uRes: uniforms.uRes,
    uScene: { value: sceneRT.texture },
    uOverlay: { value: overlayTex },
    uOverlayOn: { value: 0 },
  },
  vertexShader,
  fragmentShader: compositeFragmentShader,
});

const effectMats = new Map<string, THREE.ShaderMaterial>();
function effectMaterial(def: EffectDef): THREE.ShaderMaterial {
  let m = effectMats.get(def.id);
  if (!m) {
    m = new THREE.ShaderMaterial({
      uniforms: {
        uRes: uniforms.uRes,
        uPrev: { value: null as THREE.Texture | null },
        uOpacity: { value: 1 },
        uLayerBlend: { value: 0 },
        uA: { value: new THREE.Vector4() },
        uB: { value: new THREE.Vector4() },
        uC1: { value: new THREE.Vector3() },
        uC2: { value: new THREE.Vector3() },
        ...glyphUniforms,
      },
      vertexShader,
      fragmentShader: effectFragmentShader(def),
    });
    effectMats.set(def.id, m);
  }
  return m;
}

// colour pickers give sRGB hex; the effect shaders work on the same raw values the canvas shows
const hexToVec3 = (hex: string, out: THREE.Vector3) => {
  const n = parseInt(hex.slice(1), 16) || 0;
  return out.set(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
};

const blendIndex: Record<string, number> = { normal: 0, add: 1, multiply: 2, screen: 3, overlay: 4, difference: 5 };

function setLayerUniforms(mat: THREE.ShaderMaterial, layer: EffectLayer, prev: THREE.Texture): void {
  const u = mat.uniforms;
  const p = layer.p;
  u.uPrev.value = prev;
  u.uOpacity.value = layer.opacity;
  u.uLayerBlend.value = blendIndex[layer.blend] ?? 0;
  u.uA.value.set(p[0] ?? 0, p[1] ?? 0, p[2] ?? 0, p[3] ?? 0);
  u.uB.value.set(p[4] ?? 0, p[5] ?? 0, p[6] ?? 0, p[7] ?? 0);
  hexToVec3(layer.c1, u.uC1.value);
  hexToVec3(layer.c2, u.uC2.value);
}

/** Runs every visible layer in order; returns the final texture, or null when there is nothing to run. */
function runEffects(): THREE.Texture | null {
  const layers = params.effects.filter((l) => l.on && effectDefs.some((d) => d.id === l.id));
  if (!layers.length) return null;
  compositeMat.uniforms.uOverlayOn.value = detailsOn ? 1 : 0;
  fxPass(compositeMat, effRT[0]);
  let cur = 0;
  for (const layer of layers) {
    const def = effectDefs.find((d) => d.id === layer.id) as EffectDef;
    const mat = effectMaterial(def);
    setLayerUniforms(mat, layer, effRT[cur].texture);
    fxPass(mat, effRT[1 - cur]);
    cur = 1 - cur;
  }
  return effRT[cur].texture;
}

// The ridgeline look needs the height field as a texture: render it at half resolution first.
let heightRT: THREE.WebGLRenderTarget | null = null;
const blankTex = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1);
blankTex.needsUpdate = true;
function renderHeightField(): void {
  const size = uniforms.uRes.value;
  const w = Math.max(1, Math.ceil(size.x / 2));
  const h = Math.max(1, Math.ceil(size.y / 2));
  if (!heightRT || heightRT.width !== w || heightRT.height !== h) {
    heightRT?.dispose();
    heightRT = new THREE.WebGLRenderTarget(w, h, {
      type: THREE.HalfFloatType, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
    });
  }
  const prev = size.clone();
  size.set(w, h);
  uniforms.uHeightTex.value = blankTex; // never sample the texture we are rendering into
  uniforms.uOutputH.value = 1;
  renderer.setRenderTarget(heightRT);
  renderer.render(scene, camera);
  uniforms.uOutputH.value = 0;
  size.copy(prev);
  uniforms.uHeightTex.value = heightRT.texture;
}

// Particle sea: every particle keeps its own position and velocity in a float texture that is stepped each frame
// (ping-pong). The letters are obstacles in the current; the points are then drawn as GL points.
let simRT: THREE.WebGLRenderTarget[] | null = null;
let simSide = 0;
let simRead = 0;
let simDt = 0;
let simInit = true;
let seaPoints: THREE.Points | null = null;
const seaScene = new THREE.Scene();
const seaBg = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2),
  new THREE.ShaderMaterial({
    uniforms: { uRes: uniforms.uRes, uPaper: uniforms.uPaper, ...glyphUniforms },
    vertexShader,
    fragmentShader: seaBackdropFragmentShader,
    depthTest: false,
    depthWrite: false,
  }),
);
seaBg.renderOrder = 0;
seaBg.frustumCulled = false;
seaScene.add(seaBg);

const simMat = new THREE.ShaderMaterial({
  uniforms: {
    uState: { value: null as THREE.Texture | null },
    uOutRes: { value: new THREE.Vector2() },
    uDt: { value: 0 },
    uAspect: { value: 1 },
    uLookB: uniforms.uLookB, uLookC: uniforms.uLookC, uLookD: uniforms.uLookD,
    uDrift: uniforms.uDrift, uSeed: uniforms.uSeed, uFreq: uniforms.uFreq, uWarp: uniforms.uWarp, uInfluence: uniforms.uInfluence,
    ...glyphUniforms,
  },
  vertexShader,
  fragmentShader: particleSimFragmentShader,
});
const initMat = new THREE.ShaderMaterial({
  uniforms: { uSeed: uniforms.uSeed, uOutRes: { value: new THREE.Vector2() } },
  vertexShader,
  fragmentShader: particleInitFragmentShader,
});
const pointsMat = new THREE.ShaderMaterial({
  uniforms: {
    uState: { value: null as THREE.Texture | null },
    uRes: uniforms.uRes,
    uPx: { value: 2 },
    uTime: uniforms.uTime,
    uSide: { value: 1 },
    uDotColor: { value: uniforms.uIndex.value },
  },
  vertexShader: particlePointVertexShader,
  fragmentShader: particlePointFragmentShader,
  transparent: true,
  depthTest: false,
  depthWrite: false,
});

function ensureSea(): void {
  const side = Math.ceil(Math.sqrt(Math.max(10, Math.round(params.lookA)) * 1000));
  if (simRT && side === simSide) return;
  simRT?.forEach((r) => r.dispose());
  simRT = [0, 1].map(
    () =>
      new THREE.WebGLRenderTarget(side, side, {
        type: THREE.FloatType, depthBuffer: false, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
      }),
  );
  simSide = side;
  simInit = true;
  const n = side * side;
  const ref = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) {
    ref[i * 2] = ((i % side) + 0.5) / side;
    ref[i * 2 + 1] = (Math.floor(i / side) + 0.5) / side;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  geo.setAttribute('ref', new THREE.BufferAttribute(ref, 2));
  if (seaPoints) {
    seaScene.remove(seaPoints);
    seaPoints.geometry.dispose();
  }
  seaPoints = new THREE.Points(geo, pointsMat);
  seaPoints.frustumCulled = false;
  seaPoints.renderOrder = 1;
  seaScene.add(seaPoints);
}

/** Scripted-test hook: advance the sea by n steps of 1/30 s without waiting for real frames. */
(window as unknown as { __warmSea: (n: number) => void }).__warmSea = (n: number) => {
  const prev = simDt;
  simDt = 1 / 30;
  for (let i = 0; i < n; i++) {
    time += simDt;
    uniforms.uTime.value = time;
    stepSea();
  }
  simDt = prev;
};

function stepSea(): void {
  ensureSea();
  const rts = simRT as THREE.WebGLRenderTarget[];
  if (simInit) {
    fxPass(initMat, rts[0]);
    simInit = false;
    simRead = 0;
  }
  if (simDt > 0) {
    simMat.uniforms.uState.value = rts[simRead].texture;
    simMat.uniforms.uDt.value = Math.min(simDt, 0.05);
    simMat.uniforms.uAspect.value = uniforms.uRes.value.x / uniforms.uRes.value.y;
    fxPass(simMat, rts[1 - simRead]);
    simRead = 1 - simRead;
  }
  pointsMat.uniforms.uState.value = rts[simRead].texture;
  pointsMat.uniforms.uSide.value = simSide;
  pointsMat.uniforms.uPx.value = Math.max(1, params.lineWidth * 2.1 * (uniforms.uRes.value.y / 800));
}

function renderFrame(): void {
  if (params.look === 1 && floatRT) renderHeightField();
  if (params.look === 5) stepSea();
  renderer.setRenderTarget(sceneRT);
  if (params.look === 5) renderer.render(seaScene, camera);
  else renderer.render(scene, camera);
  const stacked = runEffects();
  const src = stacked ?? sceneRT.texture;
  postUniforms.uScene.value = src;
  fxMaterials.down.uniforms.uScene.value = src;
  postUniforms.uOverlayOn.value = detailsOn && !stacked ? 1 : 0; // the stack already contains the detail layer
  if (params.blur > 0.001) runBlur();
  renderer.setRenderTarget(null);
  renderer.render(postScene, camera);
}

function resize(): void {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  uniforms.uRes.value.copy(size);
  maskTex.dispose(); // re-upload at the new size
  overlayTex.dispose();
  sceneRT.setSize(size.x, size.y);
  const hw = Math.max(1, Math.ceil(size.x / 2));
  const hh = Math.max(1, Math.ceil(size.y / 2));
  blurHalf.setSize(hw, hh);
  blurQuarter.setSize(Math.max(1, Math.ceil(hw / 2)), Math.max(1, Math.ceil(hh / 2)));
  blurTemp.setSize(blurQuarter.width, blurQuarter.height);
  effRT[0].setSize(size.x, size.y);
  effRT[1].setSize(size.x, size.y);
  overlay.width = maskCanvas.width = size.x;
  overlay.height = maskCanvas.height = size.y;
}
window.addEventListener('resize', resize);
resize();

// ---------------------------------------------------------------- glyphs + morph

const fonts: FontDef[] = [...builtinFonts];
let sdfVersion = 0;
const MORPH_SECONDS = 0.9;
const sdfCache = new Map<string, Float32Array>();

function sdfFor(font: FontDef, text: string): Float32Array {
  const key = `${font.family}|${text}`;
  let sdf = sdfCache.get(key);
  if (!sdf) {
    sdf = renderGlyphSDF(text, font);
    sdfCache.set(key, sdf);
    if (sdfCache.size > 32) sdfCache.delete(sdfCache.keys().next().value as string);
  }
  return sdf;
}

let toastTimer = 0;
function toast(message: string): void {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el?.classList.remove('show'), 4200);
}

const hashString = (str: string) => {
  let h = 5381;
  for (let k = 0; k < str.length; k++) h = ((h << 5) + h + str.charCodeAt(k)) | 0;
  return `${str.length}:${h}`;
};

/** Imported silhouettes go through the same distance-field route as text. */
const imageCache = new Map<string, DecodedImage>();

async function loadImageGlyph(i: number, morph: boolean): Promise<void> {
  const g = params.glyphs[i];
  const token = ++loadTokens[i];
  const key = `img|${hashString(g.image)}`;
  let decoded = imageCache.get(key);
  if (!decoded) {
    try {
      decoded = await decodeImage(g.image);
    } catch {
      if (token !== loadTokens[i] || !params.glyphs[i]) return;
      toast('That image could not be read, so the glyph went back to text');
      g.image = '';
      return loadGlyph(i, morph);
    }
    imageCache.set(key, decoded);
    if (imageCache.size > 8) imageCache.delete(imageCache.keys().next().value as string);
  }
  if (token !== loadTokens[i] || !params.glyphs[i]) return; // superseded
  store.set(i, decoded.sdf, boundsOf(decoded.sdf) ?? { ...defaultBounds }, morph);
  store.setImage(i, decoded.rgba);
  gMorph[i] = morph ? 0 : 1;
  morphStart[i] = morph ? performance.now() : -1;
  sdfVersion++;
}

/** (Re)build glyph `i`'s distance field from its text and font. */
async function loadGlyph(i: number, morph: boolean): Promise<void> {
  const g = params.glyphs[i];
  if (!g) return;
  if (g.image) return loadImageGlyph(i, morph);
  const text = g.text || ' ';
  const text2 = (g.text2 ?? '').trim();
  const font = fonts.find((f) => f.family === g.font) ?? fonts[0];
  const token = ++loadTokens[i];
  await ensureFont(font, text + text2);
  if (token !== loadTokens[i] || !params.glyphs[i]) return; // superseded

  const sdf = sdfFor(font, text);
  const bounds = boundsOf(sdf) ?? { ...defaultBounds };
  if (text2) {
    // two shapes scrubbed by hand with the morph slider
    const sdf2 = sdfFor(font, text2);
    store.setPair(i, sdf, sdf2, unionBounds(bounds, boundsOf(sdf2) ?? bounds));
    morphStart[i] = -1;
  } else {
    store.set(i, sdf, bounds, morph);
    gMorph[i] = morph ? 0 : 1;
    morphStart[i] = morph ? performance.now() : -1;
  }
  sdfVersion++;
}

/** Reload every glyph; layers beyond the glyph count are emptied. */
function rebuildAll(morph: boolean): Promise<void[]> {
  for (let i = params.glyphs.length; i < MAX_GLYPHS; i++) {
    loadTokens[i]++;
    store.clear(i);
    gMorph[i] = 1;
    morphStart[i] = -1;
  }
  return Promise.all(params.glyphs.map((_, i) => loadGlyph(i, morph)));
}

const isMorphing = () => morphStart.some((t) => t >= 0);

// ---------------------------------------------------------------- palette / params

function applyPalette(): void {
  const p = palettes[params.palette];
  uniforms.uPaper.value.set(p.paper);
  uniforms.uInk.value.set(p.ink);
  uniforms.uIndex.value.set(p.index);
  uniforms.uLow.value.set(p.low);
  uniforms.uMid.value.set(p.mid);
  uniforms.uHigh.value.set(p.high);
  if (params.textAuto) params.textFill = p.index;
  document.body.style.background = p.paper;
}

/** Forward (local -> world) and inverse linear maps for a glyph's rotation, skew and stretch. */
function glyphMatrices(g: GlyphDef) {
  const t = (g.rot * Math.PI) / 180;
  const c = Math.cos(t);
  const s = Math.sin(t);
  const k = g.skew;
  const st = g.stretch;
  const f = [c * st, c * k - s, s * st, s * k + c]; // R * K * S
  const det = f[0] * f[3] - f[1] * f[2] || 1;
  return { f, inv: [f[3] / det, -f[1] / det, -f[2] / det, f[0] / det] };
}

/** A glyph's colours: '' follows the palette; the outline falls back to the fill colour. */
const glyphFillHex = (g: GlyphDef) => g.color || palettes[params.palette].index;
const glyphStrokeHex = (g: GlyphDef) => g.strokeColor || glyphFillHex(g);

/** Glyph indices from back to front (ties follow the glyph order). */
function stackOrder(): number[] {
  const n = Math.min(params.glyphs.length, MAX_GLYPHS);
  const z = (i: number) => params.glyphs[i].z ?? i;
  return Array.from({ length: n }, (_, i) => i).sort((a, b) => z(a) - z(b) || a - b);
}

function moveLayer(to: 'back' | 'down' | 'up' | 'front'): void {
  const g = params.glyphs[selectedIdx];
  if (!g) return;
  const order = stackOrder();
  const pos = order.indexOf(selectedIdx);
  const dst = to === 'back' ? 0 : to === 'front' ? order.length - 1 : Math.min(Math.max(pos + (to === 'up' ? 1 : -1), 0), order.length - 1);
  order.splice(pos, 1);
  order.splice(dst, 0, selectedIdx);
  order.forEach((gi, r) => { params.glyphs[gi].z = r; });
  refreshGui();
}

function syncUniforms(): void {
  postUniforms.uGlass.value = params.glass;
  postUniforms.uGlassLight.value = params.glassLight;
  postUniforms.uBlur.value = params.blur;
  uniforms.uMode.value = params.mode;
  const n = Math.min(params.glyphs.length, MAX_GLYPHS);
  uniforms.uCount.value = n;
  stackOrder().forEach((gi, r) => { gOrder[r] = gi; });

  for (let i = 0; i < n; i++) {
    const g = params.glyphs[i];
    gPos[i].set(g.posX, g.posY);
    gSize[i] = g.size;
    const m = glyphMatrices(g).inv;
    gXform[i].set(m[0], m[1], m[2], m[3]);
    gOut[i] = g.outline ? Math.max(g.outlineW, 0.0005) : 0;
    gSoft[i] = g.soft;
    gGrow[i] = g.grow;
    gWarp[i] = g.warp;
    gOp[i] = g.opacity;
    gImg[i] = g.image && g.imageColor && !g.outline ? 1 : 0; // outlines are drawn in a single colour
    gFill[i].set(glyphFillHex(g));
    gStroke[i].set(glyphStrokeHex(g));
    if ((g.text2 ?? '').trim()) gMorph[i] = Math.min(Math.max(g.morph, 0), 1); // manual morph
  }
  uniforms.uLook.value = params.look;
  uniforms.uLookA.value = params.lookA;
  uniforms.uLookB.value = params.lookB;
  uniforms.uLookC.value = params.lookC;
  uniforms.uLookD.value = params.lookD;
  uniforms.uBlend.value = params.shapeBlend;
  uniforms.uShapeWarpScale.value = params.shapeWarpScale;
  uniforms.uShapeWarpSpeed.value = params.shapeWarpSpeed;
  uniforms.uInfluence.value = params.influence;
  uniforms.uSlope.value = params.slope;
  uniforms.uWobble.value = params.wobble;
  uniforms.uRough.value = params.rough;
  uniforms.uFreq.value = params.freq;
  uniforms.uWarp.value = params.warp;
  uniforms.uDrift.value = params.drift;
  uniforms.uSeed.value = params.seed;
  uniforms.uSpacing.value = params.spacing;
  uniforms.uLineW.value = params.lineWidth;
  uniforms.uTint.value = params.tint;
  uniforms.uShade.value = params.shade;
  uniforms.uGrain.value = params.grain;
}

// ---------------------------------------------------------------- GUI

(window as unknown as { __params: typeof params }).__params = params; // handy for scripted tests
const gui = new GUI({ title: 'Typographic Topography', width: 304 });
gui.domElement.classList.add('ui-modern');
const glyphPick = { glyph: 0 };
// lil-gui swallows key presses while one of its buttons has focus, which would block typing and shortcuts
gui.domElement.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest('button');
  if (btn) (btn as HTMLElement).blur();
});
const refreshGui = () => {
  glyphPick.glyph = activeIdx;
  gui.controllersRecursive().forEach((c) => c.updateDisplay());
  applyVisibility();
};
const clamp = (v: number, lo: number, hi: number) => Math.round(Math.min(Math.max(v, lo), hi) * 1000) / 1000;

const userPresets = loadUserPresets();
const allPresetNames = () => [...builtinPresetNames, ...Object.keys(userPresets).filter((n) => !(n in presets))];
const presetState = { preset: 'hubworks', name: '' };

function applyPreset(name: string): void {
  Object.assign(params, resolvePreset(presets[name] ?? userPresets[name]));
  // e.g. an uploaded font from another session is gone: fall back to the default font
  for (const g of params.glyphs) if (!fonts.some((f) => f.family === g.font)) g.font = defaultGlyph.font;
  params.glyphs = params.glyphs.slice(0, MAX_GLYPHS);
  activeIdx = 0;
  selectedIdx = -1;
  applyPalette();
  refreshGlyphPicker();
  refreshGui();
  panel.rebuild();
  relabelLook(false);
  normaliseLabels();
  applyVisibility();
  refreshGui();
  void rebuildAll(true);
}
const tip = <T extends { domElement: HTMLElement }>(c: T, text: string): T => {
  c.domElement.title = text;
  return c;
};
const presetCtl = tip(gui.add(presetState, 'preset', allPresetNames()).name('Preset').onChange(applyPreset), 'Start from a saved look');
tip(gui.add(params, 'animate').name('Motion'), 'Pause to see map labels, resume to animate');
const quick = { shuffle: () => actions.randomize() };
tip(gui.add(quick, 'shuffle').name('Shuffle terrain & palette'), 'Random seed, scale and palette (or press space)');
const gPresets = gui.addFolder('Save presets').close();
const nameCtl = gPresets.add(presetState, 'name').name('Name');

const presetActions = {
  save() {
    let name = presetState.name.trim();
    if (!name) {
      nameCtl.domElement.querySelector('input')?.focus();
      return;
    }
    if (name in presets) name += ' (mine)'; // built-ins stay untouched
    userPresets[name] = structuredClone(params);
    const stored = storeUserPresets(userPresets);
    presetCtl.options(allPresetNames());
    presetState.preset = name;
    presetState.name = '';
    presetCtl.updateDisplay();
    nameCtl.updateDisplay();
    if (!stored) toast('Browser storage is full or blocked, so this preset only lasts until you reload (pictures make presets large)');
  },
  remove() {
    if (!(presetState.preset in userPresets)) return; // built-ins cannot be deleted
    delete userPresets[presetState.preset];
    storeUserPresets(userPresets);
    presetState.preset = 'Default';
    presetCtl.options(allPresetNames());
    applyPreset('Default');
  },
};
gPresets.add(presetActions, 'save').name('Save current look');
gPresets.add(presetActions, 'remove').name('Delete selected preset');

// The panel edits one glyph at a time (the active one); these accessors forward to it.
const activeGlyph = () => params.glyphs[activeIdx] ?? params.glyphs[0];
const active = {
  get text() { return activeGlyph().text; },
  set text(v: string) { activeGlyph().text = v; },
  get font() { return activeGlyph().font; },
  set font(v: string) { activeGlyph().font = v; },
  get size() { return activeGlyph().size; },
  set size(v: number) { activeGlyph().size = v; },
  get posX() { return activeGlyph().posX; },
  set posX(v: number) { activeGlyph().posX = v; },
  get posY() { return activeGlyph().posY; },
  set posY(v: number) { activeGlyph().posY = v; },
  get rot() { return activeGlyph().rot; },
  set rot(v: number) { activeGlyph().rot = v; },
  get skew() { return activeGlyph().skew; },
  set skew(v: number) { activeGlyph().skew = v; },
  get stretch() { return activeGlyph().stretch; },
  set stretch(v: number) { activeGlyph().stretch = v; },
  get text2() { return activeGlyph().text2; },
  set text2(v: string) { activeGlyph().text2 = v; },
  get morph() { return activeGlyph().morph; },
  set morph(v: number) { activeGlyph().morph = v; },
  get grow() { return activeGlyph().grow; },
  set grow(v: number) { activeGlyph().grow = v; },
  get soft() { return activeGlyph().soft; },
  set soft(v: number) { activeGlyph().soft = v; },
  get warp() { return activeGlyph().warp; },
  set warp(v: number) { activeGlyph().warp = v; },
};

const glyphLabel = (i: number) => {
  const g = params.glyphs[i];
  const t = g.text.trim() || '·';
  const name = g.image ? `▣ ${t}` : t;
  return `${i + 1}: ${name.length > 12 ? name.slice(0, 11) + '…' : name}`;
};
function refreshGlyphPicker(): void {
  const opts: Record<string, number> = {};
  params.glyphs.forEach((_, i) => (opts[glyphLabel(i)] = i));
  glyphPickCtl.options(opts);
  applyVisibility();
  refreshGui();
}

const glyphActions = {
  add() {
    if (params.glyphs.length >= MAX_GLYPHS) return;
    const base = activeGlyph();
    params.glyphs.push({
      ...base,
      text: String.fromCharCode(65 + (params.glyphs.length % 26)),
      size: clamp(base.size * 0.6, 0.2, 4),
      opacity: base.opacity < 0.3 ? 0.9 : base.opacity,
      posX: clamp(base.posX + 0.3, -1.2, 1.2),
      posY: clamp(base.posY - 0.25, -1.2, 1.2),
    });
    activeIdx = selectedIdx = params.glyphs.length - 1;
    void loadGlyph(activeIdx, false);
    refreshGlyphPicker();
  },
  remove() {
    if (params.glyphs.length <= 1) return; // keep at least one glyph
    params.glyphs.splice(activeIdx, 1);
    activeIdx = Math.min(activeIdx, params.glyphs.length - 1);
    selectedIdx = -1;
    void rebuildAll(false);
    refreshGlyphPicker();
  },
  addImage() {
    imageInput.click();
  },
  useText() {
    const g = activeGlyph();
    if (!g.image) return;
    g.image = '';
    g.text = 'A';
    void loadGlyph(activeIdx, true);
    refreshGlyphPicker();
  },
  reset() {
    const g = activeGlyph();
    const base = (resolvePreset(presets[presetState.preset] ?? userPresets[presetState.preset] ?? {})).glyphs[activeIdx];
    g.posX = 0;
    g.posY = 0;
    g.rot = 0;
    g.skew = 0;
    g.stretch = 1;
    g.outline = base?.outline ?? false;
    g.outlineW = base?.outlineW ?? defaultGlyph.outlineW;
    g.size = base?.size ?? defaultGlyph.size;
    refreshGui();
  },
};

// ---- visibility: hide controls that do not apply to the current look
const visRules: { show: (v: boolean) => unknown; when: () => boolean }[] = [];
const showWhen = <T extends { show: (v: boolean) => unknown }>(c: T, when: () => boolean): T => {
  visRules.push({ show: (v) => c.show(v), when });
  return c;
};
function applyVisibility(): void {
  for (const r of visRules) r.show(r.when());
}
const isTopo = () => params.look === 0;
const isSea = () => params.look === 5;

const gGlyph = gui.addFolder('Glyph');
const glyphPickCtl = showWhen(
  gGlyph
    .add(glyphPick, 'glyph', { '1: R&D': 0 })
    .name('Editing')
    .onChange((i: number) => {
      activeIdx = i;
      selectedIdx = i;
      refreshGui();
    }),
  () => params.glyphs.length > 1,
);
const isImage = () => !!activeGlyph().image;
showWhen(
  tip(
    gGlyph
      .add(active, 'text')
      .name('Text')
      .onFinishChange(() => {
        void loadGlyph(activeIdx, true);
        refreshGlyphPicker();
      }),
    'Type here, or just type anywhere on the canvas',
  ),
  () => !isImage(),
);
const fontCtl = showWhen(
  gGlyph.add(active, 'font', fonts.map((f) => f.family)).name('Font').onChange(() => void loadGlyph(activeIdx, true)),
  () => !isImage(),
);
tip(gGlyph.add(active, 'size', 0.2, 4, 0.01).name('Size'), 'Or drag a corner handle / scroll on the selected glyph');
gGlyph.add(active, 'rot', -180, 180, 0.5).name('Rotation');

const gShape2 = gGlyph.addFolder('Shape').close(); // weight, softness and warp: not in the floating panel
gShape2.add(active, 'grow', -0.05, 0.08, 0.001).name('Weight');
gShape2.add(active, 'soft', 0, 1, 0.005).name('Soften corners');
gShape2.add(active, 'warp', 0, 1, 0.005).name('Warp');
gGlyph.add(glyphActions, 'add').name('+ Add text glyph');
tip(gGlyph.add(glyphActions, 'addImage').name('+ Add image…'), 'A PNG with a transparent background; its silhouette becomes a glyph. You can also drop a file on the canvas');
showWhen(gGlyph.add(glyphActions, 'useText').name('Switch back to text'), isImage);
showWhen(gGlyph.add(glyphActions, 'remove').name('− Delete this glyph'), () => params.glyphs.length > 1);
const gXf = gGlyph.addFolder('Skew, stretch & morph').close();
gXf.add(active, 'skew', -0.8, 0.8, 0.005).name('Skew');
gXf.add(active, 'stretch', 0.3, 3, 0.01).name('Stretch');
showWhen(tip(gXf.add(active, 'text2').name('Morph to').onFinishChange(() => void loadGlyph(activeIdx, false)), 'A second text to blend towards'), () => !isImage());
showWhen(gXf.add(active, 'morph', 0, 1, 0.001).name('Morph amount'), () => !isImage());
gXf.add(glyphActions, 'reset').name('Reset transform');
showWhen(
  tip(gGlyph.add(params, 'shapeBlend', 0, 1, 0.005).name('Blend glyphs'), 'Fuses neighbouring glyphs into one shape (shared by all)'),
  () => params.glyphs.length > 1,
);

// How the landscape is drawn. The three sliders mean different things per look.
const LOOKS = { 'Topographic map': 0, Ridgeline: 1, 'Op-art bands': 2, Mosaic: 3, 'Warped grid': 4, 'Particle sea': 5 } as const;
type LookKey = 'lookA' | 'lookB' | 'lookC' | 'lookD';
interface LookSlider { label: string; min: number; max: number; step: number; value: number }
const lookDefs: Record<number, (LookSlider | null)[]> = {
  0: [null, null, null, null],
  1: [
    { label: 'rows', min: 16, max: 160, step: 1, value: 64 },
    { label: 'relief height', min: 0, max: 4, step: 0.01, value: 1.8 },
    { label: 'letter lift', min: 0, max: 2, step: 0.01, value: 0.8 },
    null,
  ],
  2: [{ label: 'band thickness', min: 0.1, max: 0.9, step: 0.01, value: 0.5 }, null, null, null],
  3: [
    { label: 'tile count', min: 6, max: 80, step: 0.5, value: 22 },
    { label: 'density near letters', min: 0, max: 5, step: 0.05, value: 1.8 },
    { label: 'grout width', min: 0.2, max: 4, step: 0.05, value: 1.5 },
    null,
  ],
  4: [
    { label: 'grid cells', min: 6, max: 90, step: 0.5, value: 28 },
    { label: 'lens strength', min: 0, max: 14, step: 0.05, value: 6 },
    null,
    null,
  ],
  5: [
    { label: 'particles (thousands)', min: 10, max: 400, step: 1, value: 170 },
    { label: 'current speed', min: 0, max: 1.5, step: 0.01, value: 0.55 },
    { label: 'letters: attract ↔ repel', min: -1, max: 1, step: 0.01, value: 0.6 },
    { label: 'slide along edges', min: 0, max: 1, step: 0.01, value: 0.55 },
  ],
};

const gLook = gui.addFolder('Look');
const lookCtl = gLook.add(params, 'look', LOOKS).name('Style');
const lookKeys: LookKey[] = ['lookA', 'lookB', 'lookC', 'lookD'];
const lookSliders = lookKeys.map((key) => gLook.add(params, key, 0, 1, 0.01));
showWhen(gLook.add(params, 'lineWidth', 0.3, 4, 0.05).name('Line / dot weight'), () => params.look !== 2);
function relabelLook(resetValues: boolean): void {
  const defs = lookDefs[params.look] ?? lookDefs[0];
  lookSliders.forEach((c, i) => {
    const d = defs[i];
    c.show(!!d);
    if (!d) return;
    c.name(d.label).min(d.min).max(d.max).step(d.step);
    if (resetValues) params[lookKeys[i]] = d.value;
    c.updateDisplay();
  });
}
lookCtl.onChange(() => {
  relabelLook(true);
  if (params.look === 5) for (const g of params.glyphs) if (g.opacity < 0.3) g.opacity = 0.9; // the sea draws the letters through their fill
  applyVisibility();
  refreshGui();
});
relabelLook(false);

const gLand = gui.addFolder('Landscape');
showWhen(gLand.add(params, 'mode', MODES).name('Letters act as'), () => !isSea());
tip(gLand.add(params, 'influence', 0.02, 0.8, 0.01).name('Reach'), 'How far from the letters the landscape is reshaped');
showWhen(gLand.add(params, 'slope', 0, 3, 0.01).name('Relief'), () => !isSea());
showWhen(gLand.add(params, 'rough', 0, 1.5, 0.01).name('Roughness'), () => !isSea());
gLand.add(params, 'freq', 0.3, 8, 0.01).name('Scale');
gLand.add(params, 'warp', 0, 2, 0.01).name('Turbulence');
gLand.add(params, 'drift', 0, 0.3, 0.001).name('Evolution speed');
gLand.add(params, 'seed', 0, 10, 0.001).name('Seed');
showWhen(gLand.add(params, 'spacing', 0.004, 0.06, 0.001).name('Interval'), () => params.look === 0 || params.look === 2);

const gColor = gui.addFolder('Colour & finish').close();
gColor
  .add(params, 'palette', paletteNames)
  .name('Palette')
  .onChange(() => {
    applyPalette();
    refreshGui();
  });
showWhen(gColor.add(params, 'tint', 0, 1, 0.01).name('Elevation tint'), () => [0, 2, 3, 4].includes(params.look));
showWhen(gColor.add(params, 'shade', 0, 1, 0.01).name('Hillshade'), isTopo);
gColor.add(params, 'grain', 0, 0.2, 0.001).name('Grain');
gColor.add(params, 'blur', 0, 1, 0.01).name('Background blur');
gColor
  .add(params, 'glass', 0, 1, 0.01)
  .name('Glass')
  .onChange(() => applyVisibility());
showWhen(gColor.add(params, 'glassLight', 0, 1, 0.01).name('Glass light'), () => params.glass > 0.001);

const gLabels = showWhen(gui.addFolder('Map labels (when paused)').close(), isTopo);
const syncDetails = () => {
  params.details = params.showLabels || params.showSpots || params.showNotes;
};
gLabels.add(params, 'showLabels').name('Elevation numbers').onChange(syncDetails);
gLabels.add(params, 'showSpots').name('Peak heights').onChange(syncDetails);
gLabels.add(params, 'showNotes').name('Notes & icons').onChange(syncDetails);
gLabels.add(params, 'labelSize', 6, 16, 0.5).name('Size');
gLabels.add(params, 'words').name('Words');
gLabels.add(params, 'caption').name('Caption');
tip(
  gLabels
    .addColor(params, 'textFill')
    .name('Label colour')
    .onChange(() => {
      params.textAuto = false;
    }),
  'Follows the palette until you pick your own',
);

/** The three label toggles are the truth; older presets used a separate master switch. */
function normaliseLabels(): void {
  if (!params.details) params.showLabels = params.showSpots = params.showNotes = false;
  syncDetails();
}
normaliseLabels();

const actions = {
  randomize() {
    params.seed = Math.random() * 10;
    params.freq = 1.2 + Math.random() * 3.5;
    params.warp = Math.random() * 1.2;
    params.rough = 0.3 + Math.random() * 0.8;
    params.spacing = 0.01 + Math.random() * 0.025;
    params.palette = paletteNames[Math.floor(Math.random() * paletteNames.length)];
    applyPalette();
    refreshGui();
  },
  savePNG() {
    simDt = 0; // export exactly what is on screen
    renderFrame();
    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `topography-${params.glyphs[0]?.text || 'glyph'}.png`;
      a.click();
      URL.revokeObjectURL(a.href);
    });
  },
  uploadFont() {
    fileInput.click();
  },
  copySettings() {
    const json = JSON.stringify(params, null, 2);
    navigator.clipboard.writeText(json).then(
      () => console.info('Settings copied:\n' + json),
      () => console.info(json),
    );
  },
};

const gExport = gui.addFolder('Export & tools').close();
gExport.add(actions, 'savePNG').name('Save image (PNG)');
gExport.add(actions, 'copySettings').name('Copy settings (JSON)');
gExport.add(actions, 'uploadFont').name('Upload font…');
applyVisibility();

const imageInput = document.getElementById('image-file') as HTMLInputElement;

async function addImageGlyph(file: File): Promise<void> {
  if (params.glyphs.length >= MAX_GLYPHS) {
    toast(`Up to ${MAX_GLYPHS} glyphs at once`);
    return;
  }
  let imported;
  try {
    imported = await importImage(file);
  } catch {
    toast('That file could not be read as an image');
    return;
  }
  const base = activeGlyph();
  const first = params.glyphs.length === 1;
  params.glyphs.push({
    ...defaultGlyph,
    text: file.name.replace(/\.[^.]+$/, '').slice(0, 24) || 'image',
    font: base.font,
    image: imported.dataUrl,
    imageColor: true, // show the picture itself
    opacity: 1,
    size: first ? 1.1 : clamp(base.size * 0.8, 0.2, 4),
    posX: first ? 0 : clamp(base.posX + 0.3, -1.2, 1.2),
    posY: first ? 0 : clamp(base.posY - 0.25, -1.2, 1.2),
  });
  activeIdx = selectedIdx = params.glyphs.length - 1;
  void loadGlyph(activeIdx, false);
  refreshGlyphPicker();
  refreshGui();
}

imageInput.addEventListener('change', async () => {
  for (const f of Array.from(imageInput.files ?? [])) await addImageGlyph(f);
  imageInput.value = '';
});
window.addEventListener('dragover', (e) => {
  if (e.dataTransfer?.types.includes('Files')) e.preventDefault();
});
window.addEventListener('drop', async (e) => {
  const files = Array.from(e.dataTransfer?.files ?? []).filter((f) => f.type.startsWith('image/'));
  if (!files.length) return;
  e.preventDefault();
  for (const f of files) await addImageGlyph(f);
});

const fileInput = document.getElementById('font-file') as HTMLInputElement;
fileInput.addEventListener('change', async () => {
  const file = fileInput.files?.[0];
  if (!file) return;
  const def = await loadFontFile(file, fonts.length);
  fonts.push(def);
  fontCtl.options(fonts.map((f) => f.family));
  activeGlyph().font = def.family;
  refreshGui();
  fileInput.value = '';
  void loadGlyph(activeIdx, true);
});

// type a character anywhere (outside the panel's inputs) to swap the active glyph's text
window.addEventListener('keydown', (e) => {
  const t = e.target as HTMLElement;
  if (t.tagName === 'INPUT' || t.tagName === 'SELECT' || t.tagName === 'TEXTAREA') return;
  if (e.ctrlKey || e.metaKey || e.altKey || e.key.length !== 1) return;
  e.preventDefault();
  if (e.key === ' ') {
    params.seed = Math.random() * 10;
    refreshGui();
    return;
  }
  if (activeGlyph().image) return; // an imported image has no text to replace
  activeGlyph().text = e.key;
  void loadGlyph(activeIdx, true);
  refreshGlyphPicker();
});

// ---------------------------------------------------------------- detail layer (shown when paused)

const fieldSupported = renderer.extensions.has('EXT_color_buffer_float');
if (!fieldSupported) console.warn('EXT_color_buffer_float missing: detail layer disabled');
let fieldTarget: THREE.WebGLRenderTarget | null = null;
let shownKey = '';
let pendingKey = '';
let dueAt = 0;
let computing = false;

const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / Math.max(xs.length, 1);

function hideDetails(): void {
  detailsOn = false;
  uniforms.uMaskOn.value = 0;
  shownKey = '';
}

function detailKey(): string {
  const size = uniforms.uRes.value;
  return `${JSON.stringify({ ...params, animate: false, glass: 0, glassLight: 0, blur: 0, effects: [] })}|${size.x}x${size.y}|${time.toFixed(4)}|${sdfVersion}`;
}

async function computeDetails(key: string): Promise<void> {
  if (computing) return;
  computing = true;
  try {
    await Promise.all(
      ['400', '700'].map((w) => document.fonts.load(`${w} 12px "JetBrains Mono"`).catch(() => [])),
    );
    if (key !== detailKey()) return; // settings changed while fonts loaded

    // read the height field back from the GPU, at a capped resolution
    const W = overlay.width;
    const H = overlay.height;
    const k = Math.min(1, 1100 / Math.max(W, H));
    const gw = Math.round(W * k);
    const gh = Math.round(H * k);
    if (!fieldTarget || fieldTarget.width !== gw || fieldTarget.height !== gh) {
      fieldTarget?.dispose();
      fieldTarget = new THREE.WebGLRenderTarget(gw, gh, {
        type: THREE.FloatType, format: THREE.RGBAFormat, depthBuffer: false,
        minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
      });
    }
    syncUniforms();
    const prevRes = uniforms.uRes.value.clone();
    uniforms.uRes.value.set(gw, gh);
    uniforms.uOutputH.value = 1;
    renderer.setRenderTarget(fieldTarget);
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    uniforms.uOutputH.value = 0;
    uniforms.uRes.value.copy(prevRes);
    const buf = new Float32Array(gw * gh * 4);
    renderer.readRenderTargetPixels(fieldTarget, 0, 0, gw, gh, buf);
    const field = new Float32Array(gw * gh);
    const dist = new Float32Array(gw * gh); // distance to the glyphs, as drawn (blend, warp and all)
    for (let i = 0; i < field.length; i++) {
      field[i] = buf[i * 4];
      dist[i] = buf[i * 4 + 1];
    }
    const m = Math.min(W, H);
    const glyphDist = (x: number, y: number) => {
      const gx = Math.min(gw - 1, Math.max(0, Math.floor((x / W) * gw)));
      const gy = Math.min(gh - 1, Math.max(0, Math.floor(((H - y) / H) * gh)));
      return dist[gy * gw + gx] * m;
    };

    renderDetails(
      {
        field, gw, gh, W, H,
        cx: W / 2 + mean(params.glyphs.map((g) => g.posX)) * Math.min(W, H),
        cy: H / 2 - mean(params.glyphs.map((g) => g.posY)) * Math.min(W, H),
        glyphDist },
      {
        labels: params.showLabels,
        spots: params.showSpots,
        notes: params.showNotes,
        avoidGlyph: params.glyphs.some((g) => g.opacity > 0.3),
        spacing: params.spacing,
        metersPerLine: params.labelStep,
        baseElevation: params.labelBase,
        labelSize: params.labelSize,
        words: params.words.split(',').map((w) => w.trim()).filter(Boolean),
        caption: params.caption,
        seed: params.seed,
        textColor: params.textAuto ? palettes[params.palette].index : params.textFill,
      },
      overlayCtx,
      maskCtx,
    );
    maskTex.needsUpdate = true;
    overlayTex.needsUpdate = true;
    uniforms.uMaskOn.value = 1;
    detailsOn = true;
    shownKey = key;
  } finally {
    computing = false;
  }
}

function updateDetails(): void {
  const want = fieldSupported && !params.animate && params.details && params.look === 0 && !isMorphing();
  if (!want) {
    if (shownKey || pendingKey) hideDetails();
    pendingKey = '';
    return;
  }
  const key = detailKey();
  if (key === shownKey) return;
  if (key !== pendingKey) {
    // settings just changed: hide stale labels and wait for things to settle
    pendingKey = key;
    dueAt = performance.now() + 150;
    hideDetails();
    return;
  }
  if (performance.now() >= dueAt) void computeDetails(key);
}

// ---------------------------------------------------------------- effects panel + gallery thumbnails

const THUMB_W = 176;
const thumbSize = () => {
  const r = uniforms.uRes.value;
  return { w: THUMB_W, h: Math.max(1, Math.round((THUMB_W * r.y) / r.x)) };
};
const tinyRT = [makeFullRT(), makeFullRT()];
let thumbQueue: EffectDef[] = [];
let thumbKey = '';
let thumbDueAt = 0;
let thumbsStale = true;

const panel = new EffectsPanel({
  getLayers: () => params.effects,
  setLayers: (layers) => {
    params.effects = layers;
  },
  requestThumbs: () => {
    thumbsStale = true;
    thumbKey = '';
  },
  get thumbSize() {
    return thumbSize();
  },
});
document.body.appendChild(panel.root);
if (window.innerWidth < 900) panel.root.classList.add('collapsed'); // keep small screens uncluttered

/** Render the artwork small, then queue one preview per effect (a few per frame, so shaders compile gradually). */
function startThumbs(): void {
  const { w, h } = thumbSize();
  for (const rt of tinyRT) if (rt.width !== w || rt.height !== h) rt.setSize(w, h);
  const prevRes = uniforms.uRes.value.clone();
  const maskOn = uniforms.uMaskOn.value;
  uniforms.uRes.value.set(w, h);
  uniforms.uMaskOn.value = 0;
  syncUniforms();
  const pxBefore = pointsMat.uniforms.uPx.value as number;
  // keep the look faithful at thumbnail size: lines and grain are measured in pixels
  uniforms.uLineW.value = Math.max(0.35, (uniforms.uLineW.value * h) / prevRes.y);
  uniforms.uGrain.value = 0;
  renderer.setRenderTarget(tinyRT[0]);
  if (params.look === 5) {
    pointsMat.uniforms.uPx.value = Math.max(1, (pxBefore * h) / prevRes.y);
    renderer.render(seaScene, camera);
    pointsMat.uniforms.uPx.value = pxBefore;
  } else renderer.render(scene, camera);
  renderer.setRenderTarget(null);
  uniforms.uRes.value.copy(prevRes);
  uniforms.uMaskOn.value = maskOn;
  thumbQueue = [...effectDefs];
}

function stepThumbs(): void {
  const { w, h } = thumbSize();
  for (let n = 0; n < 3 && thumbQueue.length; n++) {
    const def = thumbQueue.shift() as EffectDef;
    const mat = effectMaterial(def);
    setLayerUniforms(mat, newLayer(def), tinyRT[0].texture);
    mat.uniforms.uOpacity.value = 1;
    const prevRes = uniforms.uRes.value.clone();
    uniforms.uRes.value.set(w, h);
    fxPass(mat, tinyRT[1]);
    renderer.setRenderTarget(null);
    const buf = new Uint8Array(w * h * 4);
    renderer.readRenderTargetPixels(tinyRT[1], 0, 0, w, h, buf);
    uniforms.uRes.value.copy(prevRes);
    panel.setThumbnail(def.id, buf, w, h);
  }
}

function updateThumbs(): void {
  if (panel.collapsed) return;
  if (thumbQueue.length) {
    stepThumbs();
    return;
  }
  // re-render previews a moment after the artwork changes (not on every animation frame)
  const key = `${JSON.stringify({ ...params, effects: [], animate: false, glass: 0, glassLight: 0, blur: 0 })}|${sdfVersion}|${uniforms.uRes.value.x}x${uniforms.uRes.value.y}`;
  if (key !== thumbKey) {
    thumbKey = key;
    thumbDueAt = performance.now() + 700;
    thumbsStale = true;
  } else if (thumbsStale && performance.now() >= thumbDueAt && !isMorphing()) {
    thumbsStale = false;
    startThumbs();
  }
}

// ---------------------------------------------------------------- select / move / scale glyphs

const selBox = document.createElement('div');
selBox.id = 'selection';
for (const corner of ['nw', 'ne', 'sw', 'se'] as const) {
  const h = document.createElement('div');
  h.className = `handle ${corner}`;
  h.addEventListener('pointerdown', (e) => beginScale(e));
  selBox.appendChild(h);
}
const rotHandle = document.createElement('div');
rotHandle.className = 'handle rot';
rotHandle.title = 'drag to rotate (hold Shift to snap)';
rotHandle.addEventListener('pointerdown', (e) => beginRotate(e));
selBox.appendChild(rotHandle);
document.body.appendChild(selBox);

type Drag =
  | { kind: 'move'; idx: number; sx: number; sy: number; px: number; py: number }
  | { kind: 'scale'; idx: number; cx: number; cy: number; d0: number; size0: number }
  | { kind: 'rotate'; idx: number; cx: number; cy: number; a0: number; rot0: number };
let drag: Drag | null = null;
const SEL_PAD = 8;

/** Glyph `i`'s centre and (axis-aligned) bounding box in CSS px, including rotation, skew and stretch. */
function glyphBox(i: number) {
  const g = params.glyphs[i];
  const m = Math.min(window.innerWidth, window.innerHeight);
  const cx = window.innerWidth / 2 + g.posX * m;
  const cy = window.innerHeight / 2 - g.posY * m;
  const b = store.bounds[i];
  const f = glyphMatrices(g).f;
  const xs: number[] = [];
  const ys: number[] = [];
  for (const [u, v] of [[b.u0, b.v0], [b.u1, b.v0], [b.u1, b.v1], [b.u0, b.v1]]) {
    const lx = (u - 0.5) * g.size;
    const ly = (v - 0.5) * g.size;
    xs.push(f[0] * lx + f[1] * ly);
    ys.push(f[2] * lx + f[3] * ly);
  }
  return {
    m, cx, cy,
    x0: cx + Math.min(...xs) * m,
    x1: cx + Math.max(...xs) * m,
    y0: cy - Math.max(...ys) * m,
    y1: cy - Math.min(...ys) * m,
  };
}

/** Topmost glyph under a point, or -1. */
function hitGlyph(x: number, y: number): number {
  for (let i = params.glyphs.length - 1; i >= 0; i--) {
    const g = glyphBox(i);
    if (x >= g.x0 - SEL_PAD && x <= g.x1 + SEL_PAD && y >= g.y0 - SEL_PAD && y <= g.y1 + SEL_PAD) return i;
  }
  return -1;
}

function beginRotate(e: PointerEvent): void {
  if (selectedIdx < 0) return;
  e.preventDefault();
  e.stopPropagation();
  const g = glyphBox(selectedIdx);
  drag = {
    kind: 'rotate', idx: selectedIdx, cx: g.cx, cy: g.cy,
    a0: Math.atan2(e.clientY - g.cy, e.clientX - g.cx), rot0: params.glyphs[selectedIdx].rot,
  };
}

function beginScale(e: PointerEvent): void {
  if (selectedIdx < 0) return;
  e.preventDefault();
  e.stopPropagation();
  const g = glyphBox(selectedIdx);
  drag = {
    kind: 'scale', idx: selectedIdx, cx: g.cx, cy: g.cy,
    d0: Math.max(10, Math.hypot(e.clientX - g.cx, e.clientY - g.cy)), size0: params.glyphs[selectedIdx].size,
  };
}

canvas.style.touchAction = 'none';
canvas.addEventListener('pointerdown', (e) => {
  (document.activeElement as HTMLElement | null)?.blur?.();
  const hit = hitGlyph(e.clientX, e.clientY);
  if (hit >= 0) {
    selectedIdx = hit;
    activeIdx = hit;
    const g = params.glyphs[hit];
    drag = { kind: 'move', idx: hit, sx: e.clientX, sy: e.clientY, px: g.posX, py: g.posY };
    refreshGui();
    e.preventDefault();
  } else {
    selectedIdx = -1;
  }
});
canvas.addEventListener('pointermove', (e) => {
  if (drag) return;
  const hit = hitGlyph(e.clientX, e.clientY);
  canvas.style.cursor = hit < 0 ? 'default' : hit === selectedIdx ? 'move' : 'pointer';
});
window.addEventListener('pointermove', (e) => {
  if (!drag) return;
  const g = params.glyphs[drag.idx];
  if (!g) return;
  if (drag.kind === 'move') {
    const m = Math.min(window.innerWidth, window.innerHeight);
    g.posX = clamp(drag.px + (e.clientX - drag.sx) / m, -1.5, 1.5);
    g.posY = clamp(drag.py - (e.clientY - drag.sy) / m, -1.5, 1.5);
  } else if (drag.kind === 'rotate') {
    // screen angles run clockwise (y points down); glyph rotation is counter-clockwise
    let deg = drag.rot0 - ((Math.atan2(e.clientY - drag.cy, e.clientX - drag.cx) - drag.a0) * 180) / Math.PI;
    deg = ((((deg + 180) % 360) + 360) % 360) - 180;
    if (e.shiftKey) deg = Math.round(deg / 15) * 15;
    g.rot = clamp(deg, -180, 180);
  } else {
    const d = Math.hypot(e.clientX - drag.cx, e.clientY - drag.cy);
    g.size = clamp(drag.size0 * (d / drag.d0), 0.2, 4);
  }
  refreshGui();
});
window.addEventListener('pointerup', () => { drag = null; });
canvas.addEventListener(
  'wheel',
  (e) => {
    if (selectedIdx < 0) return;
    e.preventDefault();
    const g = params.glyphs[selectedIdx];
    g.size = clamp(g.size * Math.exp(-e.deltaY * 0.0015), 0.2, 4);
    refreshGui();
  },
  { passive: false },
);
window.addEventListener('keydown', (e) => {
  const t = e.target as HTMLElement;
  if (selectedIdx < 0 || t.tagName === 'INPUT' || t.tagName === 'SELECT' || t.tagName === 'TEXTAREA') return;
  const step = e.shiftKey ? 0.02 : 0.004;
  const moves: Record<string, [number, number]> = {
    ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, step], ArrowDown: [0, -step],
  };
  if (e.key === 'Escape') {
    selectedIdx = -1;
  } else if (moves[e.key]) {
    e.preventDefault();
    const g = params.glyphs[selectedIdx];
    g.posX = clamp(g.posX + moves[e.key][0], -1.5, 1.5);
    g.posY = clamp(g.posY + moves[e.key][1], -1.5, 1.5);
    refreshGui();
  } else if (e.key === 'Delete' || e.key === 'Backspace') {
    e.preventDefault();
    glyphActions.remove();
  }
});

const glyphTools = new GlyphTools({
  get: () => {
    const g = params.glyphs[selectedIdx];
    if (!g) return null;
    return {
      index: selectedIdx, text: g.image ? 'Image' : g.text, size: g.size, outline: g.outline, outlineW: g.outlineW,
      shortSide: Math.min(uniforms.uRes.value.x, uniforms.uRes.value.y),
      // in outline mode the colour edits the outline; otherwise the fill
      color: g.outline ? glyphStrokeHex(g) : glyphFillHex(g),
      opacity: g.opacity,
      custom: !!g.color || !!g.strokeColor,
      image: !!g.image,
      imageColor: g.imageColor,
      layer: stackOrder().indexOf(selectedIdx), layers: stackOrder().length,
    };
  },
  moveLayer,
  setOutline: (on) => {
    const g = params.glyphs[selectedIdx];
    if (!g) return;
    g.outline = on;
    // the outline is drawn with the letter fill colour; at zero fill it would be invisible
    if (on && g.opacity < 0.3) g.opacity = 0.9;
    refreshGui();
  },
  setColor: (hex) => {
    const g = params.glyphs[selectedIdx];
    if (!g) return;
    if (g.outline) g.strokeColor = hex;
    else g.color = hex;
    refreshGui();
  },
  setImageColor: (on) => {
    const g = params.glyphs[selectedIdx];
    if (!g) return;
    g.imageColor = on;
    refreshGui();
  },
  usePalette: () => {
    const g = params.glyphs[selectedIdx];
    if (!g) return;
    g.color = '';
    g.strokeColor = '';
    refreshGui();
  },
  setOpacity: (v) => {
    const g = params.glyphs[selectedIdx];
    if (!g) return;
    g.opacity = v;
    refreshGui();
  },
  setThickness: (w) => {
    const g = params.glyphs[selectedIdx];
    if (!g) return;
    g.outlineW = w;
    refreshGui();
  },
});
document.body.appendChild(glyphTools.root);

function updateSelectionUI(): void {
  const ok = selectedIdx >= 0 && selectedIdx < params.glyphs.length;
  selBox.style.display = ok ? 'block' : 'none';
  if (!ok) {
    glyphTools.update(null);
    return;
  }
  const g = glyphBox(selectedIdx);
  glyphTools.update(g);
  selBox.style.left = `${g.x0 - SEL_PAD}px`;
  selBox.style.top = `${g.y0 - SEL_PAD}px`;
  selBox.style.width = `${g.x1 - g.x0 + SEL_PAD * 2}px`;
  selBox.style.height = `${g.y1 - g.y0 + SEL_PAD * 2}px`;
}

// ---------------------------------------------------------------- loop

const clock = new THREE.Clock();
let time = 0;

function frame(): void {
  const dt = clock.getDelta();
  if (params.animate) time += dt;
  simDt = params.animate ? dt : 0;
  uniforms.uTime.value = time;

  for (let i = 0; i < MAX_GLYPHS; i++) {
    if (morphStart[i] < 0) continue;
    const t = Math.min((performance.now() - morphStart[i]) / (MORPH_SECONDS * 1000), 1);
    gMorph[i] = t * t * (3 - 2 * t); // smoothstep ease
    if (t >= 1) morphStart[i] = -1;
  }

  syncUniforms();
  renderFrame();
  updateDetails();
  updateThumbs();
  updateSelectionUI();
  requestAnimationFrame(frame);
}

applyPalette();
refreshGlyphPicker();
void rebuildAll(false); // first glyphs appear immediately rather than morphing from nothing
requestAnimationFrame(frame);
