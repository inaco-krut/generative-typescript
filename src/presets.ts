export interface GlyphDef {
  text: string;
  font: string;
  size: number;
  posX: number; // offset from the centre, in short-side units (+x right)
  posY: number; // (+y up)
}

export interface Params {
  glyphs: GlyphDef[];
  mode: number; // 0 offset lines, 1 mountain, 2 basin
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

export const defaultGlyph: GlyphDef = { text: 'A', font: 'Playfair Display', size: 1, posX: 0, posY: 0 };

export const defaultParams: Params = {
  glyphs: [{ ...defaultGlyph }],
  mode: 0,
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
