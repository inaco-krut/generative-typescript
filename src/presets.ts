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
}

export interface Params {
  glyphs: GlyphDef[];
  effects: EffectLayer[]; // stacked effect layers, applied in order
  mode: number; // 0 offset lines, 1 mountain, 2 basin
  // how the landscape is drawn
  look: number; // 0 topographic, 1 ridgeline, 2 op-art bands, 3 mosaic, 4 warped grid, 5 particle waves
  lookA: number; // look-specific sliders; their meaning depends on `look`
  lookB: number;
  lookC: number;
  lookD: number;
  // letter shape (all glyphs)
  shapeBlend: number; // how much neighbouring letters fuse together
  shapeSoft: number; // corner softening
  shapeGrow: number; // letter weight
  shapeWarp: number; // noise warp of the letterforms
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
  fill: number;
  fillAuto: boolean; // true: letter fill uses the palette's index colour
  fillColor: string; // custom letter fill colour, used when fillAuto is off
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
  text: 'A', font: 'Playfair Display', size: 1, posX: 0, posY: 0, rot: 0, skew: 0, stretch: 1, text2: '', morph: 0,
};

export const defaultParams: Params = {
  glyphs: [{ ...defaultGlyph }],
  effects: [],
  mode: 0,
  look: 0,
  lookA: 0,
  lookB: 0,
  lookC: 0,
  lookD: 0,
  shapeBlend: 0,
  shapeSoft: 0,
  shapeGrow: 0,
  shapeWarp: 0,
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
  fill: 0.0,
  fillAuto: true,
  fillColor: '#111111',
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
export type PresetData = Partial<Params> & Partial<GlyphDef>;

export const presets: Record<string, PresetData> = {
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
  'Look: Particle waves': {
    glyphs: [{ text: 'Flow', font: 'Archivo Black', size: 1.5, posX: 0, posY: 0, rot: 0, skew: 0, stretch: 0.85, text2: '', morph: 0 }],
    look: 5, lookA: 130, lookB: 0.09, lookC: 0.9, lookD: 0.5, mode: 1, palette: 'White dots', fill: 0, rough: 0.2, freq: 2, warp: 0.5,
    influence: 0.7, slope: 0.5, wobble: 0.2, drift: 0.07, lineWidth: 1.1, grain: 0, animate: true, details: false,
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
  const { text, font, size, posX, posY, glyphs, ...rest } = data;
  const legacy: Partial<GlyphDef> = {};
  if (text !== undefined) legacy.text = text;
  if (font !== undefined) legacy.font = font;
  if (size !== undefined) legacy.size = size;
  if (posX !== undefined) legacy.posX = posX;
  if (posY !== undefined) legacy.posY = posY;
  const list = glyphs && glyphs.length ? glyphs : [legacy];
  return {
    ...structuredClone(defaultParams),
    ...structuredClone(rest),
    glyphs: structuredClone(list).map((g) => ({ ...defaultGlyph, ...g })),
  };
}
