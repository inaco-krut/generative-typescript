import * as THREE from 'three';
import GUI from 'lil-gui';
import { fragmentShader, vertexShader } from './shader';
import { SDF_SIZE, renderGlyphSDF } from './glyph';
import { builtinFonts, ensureFont, loadFontFile, type FontDef } from './fonts';
import { palettes, paletteNames } from './palettes';
import { renderDetails } from './details';
import {
  builtinPresetNames, defaultParams, loadUserPresets, presets, storeUserPresets, type Params,
} from './presets';

const MODES = { 'Offset lines': 0, Mountain: 1, Basin: 2 } as const;

const params: Params = { ...defaultParams, ...presets['R&D Mountain'] };

// ---------------------------------------------------------------- renderer

const canvas = document.getElementById('view') as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

const blank = makeTexture(new Float32Array(SDF_SIZE * SDF_SIZE).fill(1));
const color = (hex: string) => new THREE.Color(hex);

const uniforms = {
  uRes: { value: new THREE.Vector2(1, 1) },
  uTime: { value: 0 },
  uFrom: { value: blank },
  uTo: { value: blank },
  uMorph: { value: 1 },
  uMode: { value: params.mode },
  uSize: { value: params.size },
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

function makeTexture(sdf: Float32Array): THREE.DataTexture {
  const n = SDF_SIZE;
  const half = new Uint16Array(n * n);
  // canvas rows run top-down, texture rows bottom-up
  for (let y = 0; y < n; y++) {
    const src = (n - 1 - y) * n;
    for (let x = 0; x < n; x++) half[y * n + x] = THREE.DataUtils.toHalfFloat(sdf[src + x]);
  }
  const tex = new THREE.DataTexture(half, n, n, THREE.RedFormat, THREE.HalfFloatType);
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

// detail layer: a transparent canvas on top for labels, plus a mask that knocks contour lines out behind them
const overlay = document.createElement('canvas');
overlay.id = 'overlay';
document.body.appendChild(overlay);
const overlayCtx = overlay.getContext('2d')!;
const maskCanvas = document.createElement('canvas');
const maskCtx = maskCanvas.getContext('2d')!;
const maskTex = new THREE.CanvasTexture(maskCanvas);
uniforms.uMask.value = maskTex;

function resize(): void {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  uniforms.uRes.value.copy(size);
  maskTex.dispose(); // re-upload at the new size
  overlay.width = maskCanvas.width = size.x;
  overlay.height = maskCanvas.height = size.y;
}
window.addEventListener('resize', resize);
resize();

// ---------------------------------------------------------------- glyph + morph

const fonts: FontDef[] = [...builtinFonts];
let loadToken = 0;
let currentSDF: Float32Array | null = null; // CPU copy, used to keep details clear of the glyph
let sdfVersion = 0;
let morphStart = -1;
const MORPH_SECONDS = 0.9;

async function setGlyph(): Promise<void> {
  const text = params.text || ' ';
  const font = fonts.find((f) => f.family === params.font) ?? fonts[0];
  const token = ++loadToken;
  await ensureFont(font, text);
  if (token !== loadToken) return;

  const sdf = renderGlyphSDF(text, font);
  currentSDF = sdf;
  sdfVersion++;
  const next = makeTexture(sdf);
  const old = uniforms.uFrom.value;
  uniforms.uFrom.value = uniforms.uTo.value; // morph from whatever was showing
  uniforms.uTo.value = next;
  if (old !== blank && old !== uniforms.uFrom.value) old.dispose();
  uniforms.uMorph.value = 0;
  morphStart = performance.now();
}

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
  uniforms.uMode.value = params.mode;
  uniforms.uSize.value = params.size;
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

const userPresets = loadUserPresets();
const allPresetNames = () => [...builtinPresetNames, ...Object.keys(userPresets).filter((n) => !(n in presets))];
const presetState = { preset: 'R&D Mountain', name: '' };

function applyPreset(name: string): void {
  Object.assign(params, defaultParams, presets[name] ?? userPresets[name]);
  if (!fonts.some((f) => f.family === params.font)) params.font = defaultParams.font; // e.g. an uploaded font from another session
  applyPalette();
  gui.controllersRecursive().forEach((c) => c.updateDisplay());
  fillCtl.disable(params.textAuto);
  letterColorCtl.disable(params.fillAuto);
  setGlyph();
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
    userPresets[name] = { ...params };
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

const gGlyph = gui.addFolder('Glyph');
gGlyph.add(params, 'text').name('character(s)').onFinishChange(setGlyph);
const fontCtl = gGlyph.add(params, 'font', fonts.map((f) => f.family)).onChange(setGlyph);
gGlyph.add(params, 'mode', MODES).name('letter acts as');
gGlyph.add(params, 'size', 0.5, 2, 0.01).name('glyph size');
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
    gui.controllersRecursive().forEach((c) => c.updateDisplay());
  },
  savePNG() {
    renderer.render(scene, camera);
    // composite the detail layer (if showing) onto a copy of the WebGL frame
    const out = document.createElement('canvas');
    out.width = canvas.width;
    out.height = canvas.height;
    const octx = out.getContext('2d')!;
    octx.drawImage(canvas, 0, 0);
    if (overlay.style.opacity === '1') octx.drawImage(overlay, 0, 0);
    out.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `topography-${params.text || 'glyph'}.png`;
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
  params.font = def.family;
  fontCtl.updateDisplay();
  fileInput.value = '';
  setGlyph();
});

// type a character anywhere (outside the panel's inputs) to swap the glyph
window.addEventListener('keydown', (e) => {
  const t = e.target as HTMLElement;
  if (t.tagName === 'INPUT' || t.tagName === 'SELECT' || t.tagName === 'TEXTAREA') return;
  if (e.ctrlKey || e.metaKey || e.altKey || e.key.length !== 1) return;
  e.preventDefault();
  if (e.key === ' ') {
    params.seed = Math.random() * 10;
    gui.controllersRecursive().forEach((c) => c.updateDisplay());
    return;
  }
  params.text = e.key;
  gui.controllersRecursive().forEach((c) => c.updateDisplay());
  setGlyph();
});

// ---------------------------------------------------------------- detail layer (shown when paused)

const fieldSupported = renderer.extensions.has('EXT_color_buffer_float');
if (!fieldSupported) console.warn('EXT_color_buffer_float missing: detail layer disabled');
let fieldTarget: THREE.WebGLRenderTarget | null = null;
let shownKey = '';
let pendingKey = '';
let dueAt = 0;
let computing = false;

/** Distance from a canvas pixel to the glyph edge, in canvas pixels (negative inside). */
function glyphDistPx(cx: number, cy: number, W: number, H: number): number {
  if (!currentSDF) return 1e9;
  const n = SDF_SIZE;
  const m = Math.min(W, H);
  const u = (cx - W / 2) / m / params.size + 0.5;
  const v = (H / 2 - cy) / m / params.size + 0.5;
  const cu = Math.min(Math.max(u, 0), 1);
  const cv = Math.min(Math.max(v, 0), 1);
  const col = Math.min(n - 1, Math.floor(cu * n));
  const row = Math.min(n - 1, Math.floor((1 - cv) * n));
  return (currentSDF[row * n + col] + Math.hypot(u - cu, v - cv)) * params.size * m;
}

function hideDetails(): void {
  overlay.style.opacity = '0';
  uniforms.uMaskOn.value = 0;
  shownKey = '';
}

function detailKey(): string {
  const size = uniforms.uRes.value;
  return `${JSON.stringify({ ...params, animate: false })}|${size.x}x${size.y}|${time.toFixed(4)}|${sdfVersion}`;
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
      { field, gw, gh, W, H, glyphDist: (x, y) => glyphDistPx(x, y, W, H) },
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
    uniforms.uMaskOn.value = 1;
    overlay.style.opacity = '1';
    shownKey = key;
  } finally {
    computing = false;
  }
}

function updateDetails(): void {
  const want = fieldSupported && !params.animate && params.details && morphStart < 0;
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

// ---------------------------------------------------------------- loop

const clock = new THREE.Clock();
let time = 0;

function frame(): void {
  const dt = clock.getDelta();
  if (params.animate) time += dt;
  uniforms.uTime.value = time;

  if (morphStart >= 0) {
    const t = Math.min((performance.now() - morphStart) / (MORPH_SECONDS * 1000), 1);
    uniforms.uMorph.value = t * t * (3 - 2 * t); // smoothstep ease
    if (t >= 1) morphStart = -1;
  }

  syncUniforms();
  renderer.render(scene, camera);
  updateDetails();
  requestAnimationFrame(frame);
}

applyPalette();
setGlyph().then(() => {
  // first glyph shows immediately rather than morphing from nothing
  uniforms.uFrom.value = uniforms.uTo.value;
  uniforms.uMorph.value = 1;
  morphStart = -1;
});
requestAnimationFrame(frame);
