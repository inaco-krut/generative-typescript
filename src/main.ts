import * as THREE from 'three';
import GUI from 'lil-gui';
import {
  blurBoxFragmentShader, blurDownFragmentShader, blurFragmentShader, fragmentShader, postFragmentShader, vertexShader,
} from './shader';
import { SDF_SIZE, renderGlyphSDF } from './glyph';
import { GlyphStore, MAX_GLYPHS, boundsOf, defaultBounds } from './glyphs';
import { builtinFonts, ensureFont, loadFontFile, type FontDef } from './fonts';
import { palettes, paletteNames } from './palettes';
import { renderDetails } from './details';
import {
  builtinPresetNames, defaultGlyph, loadUserPresets, presets, resolvePreset, storeUserPresets, type Params,
} from './presets';

const MODES = { 'Offset lines': 0, Mountain: 1, Basin: 2 } as const;

const params: Params = resolvePreset(presets['R&D Mountain']);
const store = new GlyphStore();
// per-glyph animation state; these arrays are shared with the shader uniforms
const gPos = Array.from({ length: MAX_GLYPHS }, () => new THREE.Vector2());
const gSize: number[] = new Array(MAX_GLYPHS).fill(1);
const gMorph: number[] = new Array(MAX_GLYPHS).fill(1);
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
  uFromArr: uniforms.uFromArr,
  uToArr: uniforms.uToArr,
  uCount: uniforms.uCount,
  uGPos: uniforms.uGPos,
  uGSize: uniforms.uGSize,
  uGMorph: uniforms.uGMorph,
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
      uFromArr: uniforms.uFromArr,
      uToArr: uniforms.uToArr,
      uCount: uniforms.uCount,
      uGPos: uniforms.uGPos,
      uGSize: uniforms.uGSize,
      uGMorph: uniforms.uGMorph,
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
  const out = material.uniforms.uOutRes.value as THREE.Vector2;
  out.set(target.width, target.height);
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

function renderFrame(): void {
  renderer.setRenderTarget(sceneRT);
  renderer.render(scene, camera);
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

/** (Re)build glyph `i`'s distance field from its text and font. */
async function loadGlyph(i: number, morph: boolean): Promise<void> {
  const g = params.glyphs[i];
  if (!g) return;
  const text = g.text || ' ';
  const font = fonts.find((f) => f.family === g.font) ?? fonts[0];
  const token = ++loadTokens[i];
  await ensureFont(font, text);
  if (token !== loadTokens[i] || !params.glyphs[i]) return; // superseded

  const key = `${font.family}|${text}`;
  let sdf = sdfCache.get(key);
  if (!sdf) {
    sdf = renderGlyphSDF(text, font);
    sdfCache.set(key, sdf);
    if (sdfCache.size > 24) sdfCache.delete(sdfCache.keys().next().value as string);
  }
  store.set(i, sdf, boundsOf(sdf) ?? { ...defaultBounds }, morph);
  sdfVersion++;
  gMorph[i] = morph ? 0 : 1;
  morphStart[i] = morph ? performance.now() : -1;
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
  }
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
gGlyph.add(glyphActions, 'reset').name('reset position & size');
gGlyph.add(params, 'mode', MODES).name('letters act as');
gGlyph.add(params, 'influence', 0.02, 0.8, 0.01).name('influence radius');
gGlyph.add(params, 'slope', 0, 3, 0.01).name('glyph relief');
gGlyph.add(params, 'wobble', 0, 1, 0.01).name('terrain at edge');

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

/** Distance from a canvas pixel to the nearest glyph edge, in canvas pixels (negative inside). */
function glyphDistPx(cx: number, cy: number, W: number, H: number): number {
  const n = SDF_SIZE;
  const m = Math.min(W, H);
  let best = 1e9;
  params.glyphs.forEach((g, i) => {
    const sdf = store.sdf[i];
    if (!sdf) return;
    const u = ((cx - W / 2) / m - g.posX) / g.size + 0.5;
    const v = ((H / 2 - cy) / m - g.posY) / g.size + 0.5;
    const cu = Math.min(Math.max(u, 0), 1);
    const cv = Math.min(Math.max(v, 0), 1);
    const col = Math.min(n - 1, Math.floor(cu * n));
    const row = Math.min(n - 1, Math.floor((1 - cv) * n));
    best = Math.min(best, (sdf[row * n + col] + Math.hypot(u - cu, v - cv)) * g.size * m);
  });
  return best;
}

const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / Math.max(xs.length, 1);

function hideDetails(): void {
  postUniforms.uOverlayOn.value = 0;
  uniforms.uMaskOn.value = 0;
  shownKey = '';
}

function detailKey(): string {
  const size = uniforms.uRes.value;
  return `${JSON.stringify({ ...params, animate: false, glass: 0, glassLight: 0, blur: 0 })}|${size.x}x${size.y}|${time.toFixed(4)}|${sdfVersion}`;
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
    for (let i = 0; i < field.length; i++) field[i] = buf[i * 4];

    renderDetails(
      {
        field, gw, gh, W, H,
        cx: W / 2 + mean(params.glyphs.map((g) => g.posX)) * Math.min(W, H),
        cy: H / 2 - mean(params.glyphs.map((g) => g.posY)) * Math.min(W, H),
        glyphDist: (x, y) => glyphDistPx(x, y, W, H) },
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
    postUniforms.uOverlayOn.value = 1;
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

// ---------------------------------------------------------------- select / move / scale glyphs

const selBox = document.createElement('div');
selBox.id = 'selection';
for (const corner of ['nw', 'ne', 'sw', 'se'] as const) {
  const h = document.createElement('div');
  h.className = `handle ${corner}`;
  h.addEventListener('pointerdown', (e) => beginScale(e));
  selBox.appendChild(h);
}
document.body.appendChild(selBox);

type Drag =
  | { kind: 'move'; idx: number; sx: number; sy: number; px: number; py: number }
  | { kind: 'scale'; idx: number; cx: number; cy: number; d0: number; size0: number };
let drag: Drag | null = null;
const SEL_PAD = 8;

/** Glyph `i`'s centre and bounding box in CSS px. */
function glyphBox(i: number) {
  const g = params.glyphs[i];
  const m = Math.min(window.innerWidth, window.innerHeight);
  const cx = window.innerWidth / 2 + g.posX * m;
  const cy = window.innerHeight / 2 - g.posY * m;
  const b = store.bounds[i];
  return {
    m, cx, cy,
    x0: cx + (b.u0 - 0.5) * g.size * m,
    x1: cx + (b.u1 - 0.5) * g.size * m,
    y0: cy - (b.v1 - 0.5) * g.size * m,
    y1: cy - (b.v0 - 0.5) * g.size * m,
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
  updateSelectionUI();
  requestAnimationFrame(frame);
}

applyPalette();
refreshGlyphPicker();
void rebuildAll(false); // first glyphs appear immediately rather than morphing from nothing
requestAnimationFrame(frame);
