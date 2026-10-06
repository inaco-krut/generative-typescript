import type { EffectLayer } from './effects';

export interface GlyphDef {
  text: string;
  font: string;
  size: number;
  posX: number; // offset from the centre, in short-side units (+x right)
  posY: number; // (+y up)
  rot: number; // rotation in degrees
  skew: number; // horizontal shear
  stretch: number; // horizontal stretch
  text2: string; // optional second shape to morph towards ('' = none)
  morph: number; // 0..1 blend between text and text2
  outline: boolean; // draw only an outline instead of a solid fill
  outlineW: number; // outline thickness, short-side units
  image: string; // imported picture (image data URL); when set it replaces the text
  imageColor: boolean; // draw the picture's own colours (false: only its shape, in the glyph colour)
  // appearance, per glyph
  color: string; // fill colour; '' follows the palette
  strokeColor: string; // outline colour; '' = same as the fill colour
  opacity: number; // 0 = not filled in, 1 = solid
  z?: number; // stacking position (higher = in front); unset follows the glyph order
  // shape, per glyph
  grow: number; // weight: > 0 bolder, < 0 thinner
  soft: number; // corner softening
  warp: number; // noise warp of the letterform
}

/** A generative base layer, drawn only inside its rectangle (fractions of the canvas, y pointing down). */
export interface BaseLayer {
  look: number; // 0 topographic, 1 ridgeline, 2 op-art bands, 3 mosaic, 4 warped grid, 5 particle sea
  a: number; // look-specific sliders; their meaning depends on `look`
  b: number;
  c: number;
  d: number;
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  size: string; // size preset id ('free' = drawn by hand)
  // landscape and colour settings, individual to each layer
  mode: number; // how letters act on the terrain: 0 offset lines, 1 mountain, 2 basin
  influence: number;
  slope: number;
  rough: number;
  freq: number;
  warp: number;
  drift: number;
  seed: number;
  spacing: number;
  lineWidth: number;
  tint: number;
  shade: number;
  palette: string; // '' follows the canvas palette
  react: boolean; // do the glyphs shape this layer (terrain bends around them, particles steer around them)?
  blend: number; // 0 normal, 1 marks only (hides the layer's background), 2 multiply, 3 screen, 4 overlay, 5 difference, 6 add
  opacity: number;
  z?: number; // stacking position among base layers (higher = in front); unset follows the list order
}

/** The canvas behind everything: a solid colour, optionally with a simple pattern on top. */
export interface Background {
  type: number; // 0 solid, 1 grid, 2 horizontal lines, 3 vertical lines, 4 dots, 5 diagonal lines
  color: string; // '' follows the palette's paper colour
  line: string; // pattern colour; '' follows the palette's ink colour
  spacing: number; // distance between lines, as a share of the canvas's short side
  weight: number; // line thickness in px
  strength: number; // pattern opacity
}

export interface Params {
  glyphs: GlyphDef[];
  effects: EffectLayer[]; // stacked effect layers, applied in order
  mode: number; // 0 offset lines, 1 mountain, 2 basin
  layers: BaseLayer[]; // base layers (topography, ridgelines, ...), each drawn only inside its own rectangle
  bg: Background; // what the canvas looks like outside (and behind) the base layers
  // letter shape shared by all glyphs
  shapeBlend: number; // how much neighbouring letters fuse together
  shapeWarpScale: number;
  shapeWarpSpeed: number;
  influence: number;
  slope: number;
  wobble: number;
  rough: number;
  freq: number;
  warp: number;
  drift: number;
  seed: number;
  spacing: number;
  lineWidth: number;
  palette: string;
  tint: number;
  shade: number;
  grain: number;
  glass: number; // glass overlay strength, 0 = off
  blur: number; // background blur (everything except the glyphs), 0 = off
  glassLight: number; // brightness of the glass's light streak, rim and edge light (1 = full)
  animate: boolean;
  // static detail layer (shown when animation is off)
  details: boolean;
  showLabels: boolean;
  showSpots: boolean;
  showNotes: boolean;
  labelStep: number; // metres per contour line
  labelBase: number; // metres at height 0
  labelSize: number;
  textAuto: boolean; // true: text follows the palette's index colour
  textFill: string; // custom text colour, used when textAuto is off
  words: string;
  caption: string;
}

export const defaultGlyph: GlyphDef = {
  text: 'A', font: 'Playfair Display', size: 1, posX: 0, posY: 0, rot: 0, skew: 0, stretch: 1, text2: '', morph: 0, outline: false, outlineW: 0.012, image: '', imageColor: false,
  color: '', strokeColor: '', opacity: 0.9, grow: 0, soft: 0, warp: 0,
};

export const defaultParams: Params = {
  glyphs: [{ ...defaultGlyph }],
  effects: [],
  mode: 0,
  layers: [],
  bg: { type: 0, color: '', line: '', spacing: 0.05, weight: 1, strength: 0.35 },
  shapeBlend: 0,
  shapeWarpScale: 3,
  shapeWarpSpeed: 0.15,
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
  glass: 0,
  glassLight: 1,
  blur: 0,
  animate: true,
  details: true,
  showLabels: true,
  showSpots: true,
  showNotes: true,
  labelStep: 111,
  labelBase: 500,
  labelSize: 9,
  textAuto: true,
  textFill: '#ffffff',
  words: 'RIDGE, BASIN, SUMMIT, BEARING',
  caption: 'LINES OF EQUAL HEIGHT TRACE THE QUIET SHAPE OF THE LAND BENEATH THE LETTER',
};

// A preset only lists what differs from the defaults. To add one: tweak the panel, press
// "copy settings (JSON)", and paste the result here under a new name.
// Presets (and presets saved by older versions) may still describe a single glyph with top-level fields.
// Older presets also carried shared appearance/shape settings; they are turned into per-glyph values on load.
interface LegacyShared {
  look?: number; // older presets had one look covering the whole canvas
  lookA?: number;
  lookB?: number;
  lookC?: number;
  lookD?: number;
  fill?: number;
  fillAuto?: boolean;
  fillColor?: string;
  shapeSoft?: number;
  shapeGrow?: number;
  shapeWarp?: number;
}
export type PresetData = Omit<Partial<Params>, 'glyphs' | 'bg'> & { bg?: Partial<Background> } &
  Partial<GlyphDef> &
  LegacyShared & { glyphs?: Partial<GlyphDef>[] };

export const presets: Record<string, PresetData> = {
  // an empty canvas with a single letter: add base layers from the bar at the top
  'Blank space': { layers: [], glyphs: [{ text: 'A', font: 'Playfair Display', size: 1.1, opacity: 1 }], animate: true, details: false },
  Default: {},
  hubworks: {
    "glyphs": [
      {
        "text": "Hubworks",
        "font": "Inter",
        "size": 1.855,
        "posX": -0.008,
        "posY": 0.042,
        "rot": 0,
        "skew": 0.36,
        "stretch": 0.82,
        "text2": "",
        "morph": 0
      }
    ],
    "effects": [
      {
        "id": "echo",
        "on": true,
        "opacity": 0.1,
        "blend": "normal",
        "p": [
          0.0025,
          0.1,
          6,
          1
        ],
        "c1": "#ff5a36",
        "c2": "#000000"
      },
      {
        "id": "grid",
        "on": true,
        "opacity": 0.05,
        "blend": "normal",
        "p": [
          5,
          1,
          4,
          0.36
        ],
        "c1": "#4aa3ff",
        "c2": "#000000"
      },
      {
        "id": "pixelate",
        "on": false,
        "opacity": 0.07,
        "blend": "normal",
        "p": [
          10
        ],
        "c1": "#ffffff",
        "c2": "#000000"
      },
      {
        "id": "grain",
        "on": true,
        "opacity": 0.1,
        "blend": "normal",
        "p": [
          0.04,
          1.2,
          1,
          0.2
        ],
        "c1": "#ffffff",
        "c2": "#000000"
      },
      {
        "id": "glitch",
        "on": true,
        "opacity": 0.46,
        "blend": "normal",
        "p": [
          0.06,
          4,
          0.8,
          0
        ],
        "c1": "#ffffff",
        "c2": "#000000"
      }
    ],
    "mode": 1,
    "shapeBlend": 0,
    "shapeSoft": 0,
    "shapeGrow": -0.001,
    "shapeWarp": 0.315,
    "shapeWarpScale": 6.2,
    "shapeWarpSpeed": 0.195,
    "influence": 0.53,
    "slope": 0.25,
    "wobble": 0.07,
    "rough": 0.27,
    "freq": 2.31,
    "warp": 0,
    "drift": 0.152,
    "seed": 3.854,
    "spacing": 0.03,
    "lineWidth": 1.1,
    "palette": "Midnight",
    "tint": 0.39,
    "shade": 0.04,
    "grain": 0.067,
    "glass": 0,
    "glassLight": 1,
    "blur": 0,
    "fill": 1,
    "fillAuto": true,
    "fillColor": "#111111",
    "animate": true,
    "details": false,
    "showLabels": true,
    "showSpots": true,
    "showNotes": true,
    "labelStep": 111,
    "labelBase": 500,
    "labelSize": 9,
    "textAuto": true,
    "textFill": "#ffffff",
    "words": "RIDGE, BASIN, SUMMIT, BEARING",
    "caption": "LINES OF EQUAL HEIGHT TRACE THE QUIET SHAPE OF THE LAND BENEATH THE LETTER"
  },
  // Looks: the same landscape and letters, drawn four other ways. Pick one, then tune the sliders.
  'Look: Particle sea': {
    glyphs: [{ text: 'Tide', font: 'Archivo Black', size: 1.5, posX: 0, posY: 0, rot: 0, skew: 0, stretch: 0.9, text2: '', morph: 0 }],
    look: 5, lookA: 170, lookB: 0.55, lookC: 0.6, lookD: 0.55, mode: 1, palette: 'White dots', fill: 0.9, fillAuto: false, fillColor: '#4a4d5a', freq: 1.6, warp: 0.5,
    influence: 0.3, drift: 0.07, lineWidth: 1.1, grain: 0, animate: true, details: false,
  },
  'Look: Ridgeline': {
    glyphs: [{ text: 'Hub', font: 'Inter', size: 1.3, posX: 0, posY: -0.02, rot: 0, skew: 0, stretch: 1, text2: '', morph: 0 }],
    look: 1, lookA: 64, lookB: 1.8, lookC: 0.8, mode: 1, palette: 'Survey', fill: 0.9, fillColor: '#1d1a16', fillAuto: false,
    rough: 0.32, freq: 1.8, warp: 0.4, influence: 0.45, slope: 0.4, wobble: 0.3, lineWidth: 1.1, grain: 0.05, animate: false, details: false,
  },
  'Look: Op-art bands': {
    glyphs: [{ text: 'Hub', font: 'Archivo Black', size: 1.3, posX: 0, posY: 0, rot: 0, skew: 0, stretch: 1, text2: '', morph: 0 }],
    look: 2, lookA: 0.5, mode: 0, palette: 'Ink', fill: 1, spacing: 0.03, tint: 0, rough: 0.5, freq: 2.2, warp: 0.6, influence: 0.7, slope: 1, wobble: 0.25,
    grain: 0.02, animate: false, details: false,
  },
  'Look: Mosaic': {
    glyphs: [{ text: 'Hub', font: 'Playfair Display', size: 1.3, posX: 0, posY: 0, rot: 0, skew: 0, stretch: 1, text2: '', morph: 0 }],
    look: 3, lookA: 22, lookB: 1.8, lookC: 1.5, mode: 1, palette: 'Survey', fill: 0.9, fillColor: '#1d1a16', fillAuto: false,
    rough: 0.45, freq: 2, warp: 0.5, influence: 0.5, slope: 0.6, wobble: 0.2, lineWidth: 1, grain: 0.04, animate: false, details: false,
  },
  'Look: Warped grid': {
    glyphs: [{ text: 'Hub', font: 'Space Grotesk', size: 1.3, posX: 0, posY: 0, rot: 0, skew: 0, stretch: 1, text2: '', morph: 0 }],
    look: 4, lookA: 28, lookB: 6, mode: 1, palette: 'Blueprint', fill: 0.9, fillAuto: true,
    rough: 0.3, freq: 1.6, warp: 0.4, influence: 0.5, slope: 0.8, wobble: 0.2, lineWidth: 0.9, grain: 0.03, animate: false, details: false,
  },
  'R&D Mountain': {
    text: 'R&D',
    font: 'Pacifico',
    mode: 1,
    size: 0.8,
    influence: 0.27,
    slope: 0.27,
    wobble: 0.08,
    rough: 0.45,
    freq: 2.04,
    warp: 0,
    drift: 0.027,
    seed: 3.239,
    spacing: 0.028,
    lineWidth: 0.9,
    palette: 'Survey',
    tint: 0.26,
    shade: 0,
    grain: 0.05,
    fill: 0.75,
    animate: true,
  },
  'Cyclopathic Few': {
    text: 'cyclopathic few',
    font: 'Roboto Mono',
    mode: 1,
    size: 0.8,
    influence: 0.27,
    slope: 0.27,
    wobble: 0.08,
    rough: 0.12,
    freq: 2.04,
    warp: 0,
    drift: 0.152,
    seed: 3.854,
    spacing: 0.03,
    lineWidth: 1.1,
    palette: 'Midnight',
    tint: 0.39,
    shade: 0.04,
    grain: 0.067,
    fill: 1,
    animate: true,
  },
};

export const builtinPresetNames = Object.keys(presets);

// --- user presets, kept in this browser's localStorage ---
const STORAGE_KEY = 'typographic-topography:presets';

export function loadUserPresets(): Record<string, PresetData> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Record<string, PresetData>;
  } catch {
    return {};
  }
}

export function storeUserPresets(all: Record<string, PresetData>): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    return true;
  } catch {
    return false; // storage blocked (private window etc.)
  }
}

/** Turns preset data (current or legacy single-glyph format) into a complete, independent Params object. */
export function resolvePreset(data: PresetData): Params {
  const { text, font, size, posX, posY, glyphs, fill, fillAuto, fillColor, shapeSoft, shapeGrow, shapeWarp, look, lookA, lookB, lookC, lookD, bg, ...rest } = data;
  const legacy: Partial<GlyphDef> = {};
  if (text !== undefined) legacy.text = text;
  if (font !== undefined) legacy.font = font;
  if (size !== undefined) legacy.size = size;
  if (posX !== undefined) legacy.posX = posX;
  if (posY !== undefined) legacy.posY = posY;
  const list = glyphs && glyphs.length ? glyphs : [legacy];
  // what an older preset implied for every glyph (they shared one fill and one set of shape settings)
  const shared: Partial<GlyphDef> = {
    opacity: fill ?? 0,
    color: fillAuto === false && fillColor ? fillColor : '',
    soft: shapeSoft ?? 0,
    grow: shapeGrow ?? 0,
    warp: shapeWarp ?? 0,
  };
  // older presets drew one look over the whole canvas: that becomes a full-canvas base layer
  const merged = { ...structuredClone(defaultParams), ...structuredClone(rest) };
  const style = layerStyle(merged); // layers without their own settings inherit the preset's shared ones
  const layers: BaseLayer[] = rest.layers
    ? structuredClone(rest.layers).map((l) => ({ ...fullLayer(l.look ?? 0, style), ...l }))
    : [{ ...fullLayer(look ?? 0, style), ...legacyLook(lookA, lookB, lookC, lookD) }];
  return {
    ...merged,
    layers,
    bg: { ...defaultParams.bg, ...bg },
    glyphs: structuredClone(list).map((g) => ({ ...defaultGlyph, ...shared, ...g })),
  };
}

/** Slider values each look starts with. */
export const lookDefaults: Record<number, [number, number, number, number]> = {
  0: [0, 0, 0, 0],
  1: [64, 1.8, 0.8, 0],
  2: [0.5, 0, 0, 0],
  3: [22, 1.8, 1.5, 0],
  4: [28, 6, 0, 0],
  5: [170, 0.55, 0.6, 0.55],
};

/** The landscape settings a layer starts with, taken from a set of (shared, older-style) parameters. */
export function layerStyle(p: Pick<Params, 'mode' | 'influence' | 'slope' | 'rough' | 'freq' | 'warp' | 'drift' | 'seed' | 'spacing' | 'lineWidth' | 'tint' | 'shade'>) {
  const { mode, influence, slope, rough, freq, warp, drift, seed, spacing, lineWidth, tint, shade } = p;
  return { mode, influence, slope, rough, freq, warp, drift, seed, spacing, lineWidth, tint, shade, palette: '' };
}

export function fullLayer(look: number, style = layerStyle(defaultParams)): BaseLayer {
  const [a, b, c, d] = lookDefaults[look] ?? lookDefaults[0];
  return { look, a, b, c, d, x0: 0, y0: 0, x1: 1, y1: 1, size: 'full', react: true, blend: 0, opacity: 1, ...style };
}

function legacyLook(a?: number, b?: number, c?: number, d?: number): Partial<BaseLayer> {
  const out: Partial<BaseLayer> = {};
  if (a !== undefined) out.a = a;
  if (b !== undefined) out.b = b;
  if (c !== undefined) out.c = c;
  if (d !== undefined) out.d = d;
  return out;
}

// --- base layer presets: a layer's look and settings (not its rectangle or stacking), kept in this browser ---
export type LayerPreset = Omit<BaseLayer, 'x0' | 'y0' | 'x1' | 'y1' | 'size' | 'z'>;
const LAYER_KEY = 'typographic-topography:layer-presets';

export function loadLayerPresets(): Record<string, LayerPreset> {
  try {
    return JSON.parse(localStorage.getItem(LAYER_KEY) ?? '{}') as Record<string, LayerPreset>;
  } catch {
    return {};
  }
}

export function storeLayerPresets(all: Record<string, LayerPreset>): boolean {
  try {
    localStorage.setItem(LAYER_KEY, JSON.stringify(all));
    return true;
  } catch {
    return false;
  }
}
