import * as THREE from 'three';
import GUI from 'lil-gui';
import {
  blurBoxFragmentShader, blurDownFragmentShader, blurFragmentShader, compositeFragmentShader, fragmentShader,
  postFragmentShader, vertexShader,
} from './shader';
import { effectDefs, effectFragmentShader, newLayer, type EffectDef, type EffectLayer } from './effects';
import { EffectsPanel } from './effectsUI';
import { renderGlyphSDF } from './glyph';
import { GlyphStore, MAX_GLYPHS, boundsOf, defaultBounds, unionBounds } from './glyphs';
import { builtinFonts, ensureFont, loadFontFile, type FontDef } from './fonts';
import { palettes, paletteNames } from './palettes';
import { renderDetails } from './details';
import {
  builtinPresetNames, defaultGlyph, loadUserPresets, presets, resolvePreset, storeUserPresets, type GlyphDef, type Params,
} from './presets';

const MODES = { 'Offset lines': 0, Mountain: 1, Basin: 2 } as const;

const params: Params = resolvePreset(presets['R&D Mountain']);
const store = new GlyphStore();
// per-glyph animation state; these arrays are shared with the shader uniforms
const gPos = Array.from({ length: MAX_GLYPHS }, () => new THREE.Vector2());
const gSize: number[] = new Array(MAX_GLYPHS).fill(1);
const gMorph: number[] = new Array(MAX_GLYPHS).fill(1);
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
  uBlend: { value: params.shapeBlend },
  uSoft: { value: params.shapeSoft },
  uGrow: { value: params.shapeGrow },
  uShapeWarp: { value: params.shapeWarp },
  uShapeWarpScale: { value: params.shapeWarpScale },
  uShapeWarpSpeed: { value: params.shapeWarpSpeed },
  uMode: { value: params.mode },
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
  uFill: { value: params.fill },
  uMask: { value: null as THREE.Texture | null },
  uMaskOn: { value: 0 },
  uOutputH: { value: 0 },
  uPaper: { value: color('#000') },
  uInk: { value: color('#000') },
  uIndex: { value: color('#000') },
  uFillCol: { value: color('#000') },
  uLow: { value: color('#000') },
  uMid: { value: color('#000') },
  uHigh: { value: color('#000') },
};

// everything the shared glyph shader code needs, handed to every pass that evaluates the letter shapes
const glyphUniforms = {
  uTime: uniforms.uTime,
  uFromArr: uniforms.uFromArr, uToArr: uniforms.uToArr, uCount: uniforms.uCount,
  uGPos: uniforms.uGPos, uGSize: uniforms.uGSize, uGMorph: uniforms.uGMorph, uGXform: uniforms.uGXform,
  uBlend: uniforms.uBlend, uSoft: uniforms.uSoft, uGrow: uniforms.uGrow,
  uShapeWarp: uniforms.uShapeWarp, uShapeWarpScale: uniforms.uShapeWarpScale, uShapeWarpSpeed: uniforms.uShapeWarpSpeed,
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
  uFill: uniforms.uFill,
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

function renderFrame(): void {
  renderer.setRenderTarget(sceneRT);
  renderer.render(scene, camera);
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

/** (Re)build glyph `i`'s distance field from its text and font. */
async function loadGlyph(i: number, morph: boolean): Promise<void> {
  const g = params.glyphs[i];
  if (!g) return;
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
  syncFillColor();
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

function syncFillColor(): void {
  uniforms.uFillCol.value.set(params.fillAuto ? palettes[params.palette].index : params.fillColor);
}

function syncUniforms(): void {
  syncFillColor();
  postUniforms.uGlass.value = params.glass;
  postUniforms.uGlassLight.value = params.glassLight;
  postUniforms.uBlur.value = params.blur;
  uniforms.uMode.value = params.mode;
  const n = Math.min(params.glyphs.length, MAX_GLYPHS);
  uniforms.uCount.value = n;
  for (let i = 0; i < n; i++) {
    const g = params.glyphs[i];
    gPos[i].set(g.posX, g.posY);
    gSize[i] = g.size;
    const m = glyphMatrices(g).inv;
    gXform[i].set(m[0], m[1], m[2], m[3]);
    if ((g.text2 ?? '').trim()) gMorph[i] = Math.min(Math.max(g.morph, 0), 1); // manual morph
  }
  uniforms.uBlend.value = params.shapeBlend;
  uniforms.uSoft.value = params.shapeSoft;
  uniforms.uGrow.value = params.shapeGrow;
  uniforms.uShapeWarp.value = params.shapeWarp;
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
  uniforms.uFill.value = params.fill;
}

// ---------------------------------------------------------------- GUI

(window as unknown as { __params: typeof params }).__params = params; // handy for scripted tests
const gui = new GUI({ title: 'Typographic Topography' });
const glyphPick = { glyph: 0 };
// lil-gui swallows key presses while one of its buttons has focus, which would block typing and shortcuts
gui.domElement.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest('button');
  if (btn) (btn as HTMLElement).blur();
});
const refreshGui = () => {
  glyphPick.glyph = activeIdx;
  gui.controllersRecursive().forEach((c) => c.updateDisplay());
};
const clamp = (v: number, lo: number, hi: number) => Math.round(Math.min(Math.max(v, lo), hi) * 1000) / 1000;

const userPresets = loadUserPresets();
const allPresetNames = () => [...builtinPresetNames, ...Object.keys(userPresets).filter((n) => !(n in presets))];
const presetState = { preset: 'R&D Mountain', name: '' };

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
  fillCtl.disable(params.textAuto);
  letterColorCtl.disable(params.fillAuto);
  void rebuildAll(true);
}
const presetCtl = gui.add(presetState, 'preset', allPresetNames()).name('preset').onChange(applyPreset);
const nameCtl = gui.add(presetState, 'name').name('save as…');

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
    if (!stored) console.warn('Could not write to localStorage; preset lasts until you reload.');
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
gui.add(presetActions, 'save').name('save preset');
gui.add(presetActions, 'remove').name('delete selected preset');

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
};

const glyphLabel = (i: number) => {
  const t = params.glyphs[i].text.trim() || '·';
  return `${i + 1}: ${t.length > 12 ? t.slice(0, 11) + '…' : t}`;
};
function refreshGlyphPicker(): void {
  const opts: Record<string, number> = {};
  params.glyphs.forEach((_, i) => (opts[glyphLabel(i)] = i));
  glyphPickCtl.options(opts);
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
  reset() {
    const g = activeGlyph();
    const base = (resolvePreset(presets[presetState.preset] ?? userPresets[presetState.preset] ?? {})).glyphs[activeIdx];
    g.posX = 0;
    g.posY = 0;
    g.rot = 0;
    g.skew = 0;
    g.stretch = 1;
    g.size = base?.size ?? defaultGlyph.size;
    refreshGui();
  },
};

const gGlyph = gui.addFolder('Glyphs');
const glyphPickCtl = gGlyph
  .add(glyphPick, 'glyph', { '1: R&D': 0 })
  .name('editing')
  .onChange((i: number) => {
    activeIdx = i;
    selectedIdx = i;
    refreshGui();
  });
gGlyph.add(glyphActions, 'add').name('add glyph');
gGlyph.add(glyphActions, 'remove').name('delete this glyph');
gGlyph
  .add(active, 'text')
  .name('character(s)')
  .onFinishChange(() => {
    void loadGlyph(activeIdx, true);
    refreshGlyphPicker();
  });
const fontCtl = gGlyph.add(active, 'font', fonts.map((f) => f.family)).onChange(() => void loadGlyph(activeIdx, true));
gGlyph.add(active, 'size', 0.2, 4, 0.01).name('glyph size');
gGlyph.add(active, 'posX', -1.5, 1.5, 0.001).name('position x');
gGlyph.add(active, 'posY', -1.5, 1.5, 0.001).name('position y');
gGlyph.add(active, 'rot', -180, 180, 0.5).name('rotation');
gGlyph.add(active, 'skew', -0.8, 0.8, 0.005).name('skew');
gGlyph.add(active, 'stretch', 0.3, 3, 0.01).name('stretch');
gGlyph.add(glyphActions, 'reset').name('reset position, size & shape');
gGlyph.add(active, 'text2').name('morph to (text)').onFinishChange(() => void loadGlyph(activeIdx, false));
gGlyph.add(active, 'morph', 0, 1, 0.001).name('morph amount');
gGlyph.add(params, 'mode', MODES).name('letters act as');
gGlyph.add(params, 'influence', 0.02, 0.8, 0.01).name('influence radius');
gGlyph.add(params, 'slope', 0, 3, 0.01).name('glyph relief');
gGlyph.add(params, 'wobble', 0, 1, 0.01).name('terrain at edge');

const gShape = gui.addFolder('Letter shape');
gShape.add(params, 'shapeBlend', 0, 1, 0.005).name('blend letters together');
gShape.add(params, 'shapeSoft', 0, 1, 0.005).name('soften corners');
gShape.add(params, 'shapeGrow', -0.05, 0.08, 0.001).name('weight (thin ↔ bold)');
gShape.add(params, 'shapeWarp', 0, 1, 0.005).name('warp letterforms');
gShape.add(params, 'shapeWarpScale', 0.5, 12, 0.05).name('warp scale');
gShape.add(params, 'shapeWarpSpeed', 0, 1, 0.005).name('warp speed');

const gTerrain = gui.addFolder('Terrain');
gTerrain.add(params, 'rough', 0, 1.5, 0.01).name('roughness');
gTerrain.add(params, 'freq', 0.3, 8, 0.01).name('scale');
gTerrain.add(params, 'warp', 0, 2, 0.01).name('domain warp');
gTerrain.add(params, 'drift', 0, 0.3, 0.001).name('drift speed');
gTerrain.add(params, 'seed', 0, 10, 0.001);

const gLines = gui.addFolder('Contours');
gLines.add(params, 'spacing', 0.004, 0.06, 0.001).name('interval');
gLines.add(params, 'lineWidth', 0.3, 4, 0.05).name('line width');

const gDetail = gui.addFolder('Detail layer (animation off)');
gDetail.add(params, 'details').name('show when paused');
gDetail.add(params, 'showLabels').name('elevation labels');
gDetail.add(params, 'showSpots').name('spot heights');
gDetail.add(params, 'showNotes').name('annotations');
gDetail.add(params, 'labelStep', 10, 500, 1).name('metres per line');
gDetail.add(params, 'labelBase', 0, 3000, 1).name('base elevation (m)');
gDetail.add(params, 'labelSize', 6, 16, 0.5).name('label size');
const fillCtl = gDetail.addColor(params, 'textFill').name('text fill (custom)');
gDetail.add(params, 'textAuto').name('text fill from palette').onChange((auto: boolean) => fillCtl.disable(auto));
fillCtl.disable(params.textAuto);
gDetail.add(params, 'words').name('words');
gDetail.add(params, 'caption').name('caption');

const gStyle = gui.addFolder('Style');
gStyle.add(params, 'palette', paletteNames).onChange(applyPalette);
gStyle.add(params, 'tint', 0, 1, 0.01).name('elevation tint');
gStyle.add(params, 'shade', 0, 1, 0.01).name('hillshade');
gStyle.add(params, 'grain', 0, 0.2, 0.001).name('paper grain');
gStyle.add(params, 'glass', 0, 1, 0.01).name('glass overlay');
gStyle.add(params, 'glassLight', 0, 1, 0.01).name('glass light streak');
gStyle.add(params, 'blur', 0, 1, 0.01).name('background blur');
gStyle.add(params, 'fill', 0, 1, 0.01).name('letter fill');
const letterColorCtl = gStyle.addColor(params, 'fillColor').name('letter fill colour');
gStyle.add(params, 'fillAuto').name('letter fill from palette').onChange((auto: boolean) => letterColorCtl.disable(auto));
letterColorCtl.disable(params.fillAuto);

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
gui.add(params, 'animate').name('animate (off = details)');
gui.add(actions, 'randomize').name('randomize (space)');
gui.add(actions, 'uploadFont').name('upload font…');
gui.add(actions, 'savePNG').name('save PNG');
gui.add(actions, 'copySettings').name('copy settings (JSON)');

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
        avoidGlyph: params.fill > 0.3,
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
  const want = fieldSupported && !params.animate && params.details && !isMorphing();
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
  // keep the look faithful at thumbnail size: lines and grain are measured in pixels
  uniforms.uLineW.value = Math.max(0.35, (uniforms.uLineW.value * h) / prevRes.y);
  uniforms.uGrain.value = 0;
  renderer.setRenderTarget(tinyRT[0]);
  renderer.render(scene, camera);
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

function updateSelectionUI(): void {
  const ok = selectedIdx >= 0 && selectedIdx < params.glyphs.length;
  selBox.style.display = ok ? 'block' : 'none';
  if (!ok) return;
  const g = glyphBox(selectedIdx);
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
