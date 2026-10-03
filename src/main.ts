import * as THREE from 'three';
import GUI from 'lil-gui';
import { fragmentShader, vertexShader } from './shader';
import { SDF_SIZE, renderGlyphSDF } from './glyph';
import { builtinFonts, ensureFont, loadFontFile, type FontDef } from './fonts';
import { palettes, paletteNames } from './palettes';

const MODES = { 'Offset lines': 0, Mountain: 1, Basin: 2 } as const;

const params = {
  text: 'A',
  font: 'Playfair Display',
  mode: MODES['Offset lines'] as number,
  size: 1.0,
  influence: 0.3,
  slope: 1.0,
  wobble: 0.15,
  rough: 0.32,
  freq: 1.5,
  warp: 0.45,
  drift: 0.04,
  seed: 0.42,
  spacing: 0.014,
  lineWidth: 1.1,
  palette: 'Survey',
  tint: 0.7,
  shade: 0.12,
  grain: 0.035,
  fill: 0.0,
  animate: true,
};

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
  uPaper: { value: color('#000') },
  uInk: { value: color('#000') },
  uIndex: { value: color('#000') },
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

function resize(): void {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  uniforms.uRes.value.copy(size);
}
window.addEventListener('resize', resize);
resize();

// ---------------------------------------------------------------- glyph + morph

const fonts: FontDef[] = [...builtinFonts];
let loadToken = 0;
let morphStart = -1;
const MORPH_SECONDS = 0.9;

async function setGlyph(): Promise<void> {
  const text = params.text || ' ';
  const font = fonts.find((f) => f.family === params.font) ?? fonts[0];
  const token = ++loadToken;
  await ensureFont(font, text);
  if (token !== loadToken) return;

  const next = makeTexture(renderGlyphSDF(text, font));
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
  document.body.style.background = p.paper;
}

function syncUniforms(): void {
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

const gStyle = gui.addFolder('Style');
gStyle.add(params, 'palette', paletteNames).onChange(applyPalette);
gStyle.add(params, 'tint', 0, 1, 0.01).name('elevation tint');
gStyle.add(params, 'shade', 0, 1, 0.01).name('hillshade');
gStyle.add(params, 'grain', 0, 0.2, 0.001).name('paper grain');
gStyle.add(params, 'fill', 0, 1, 0.01).name('letter fill');

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
    canvas.toBlob((blob) => {
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
};
gui.add(params, 'animate').name('animate terrain');
gui.add(actions, 'randomize').name('randomize (space)');
gui.add(actions, 'uploadFont').name('upload font…');
gui.add(actions, 'savePNG').name('save PNG');

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
