export interface Params {
  text: string;
  font: string;
  mode: number; // 0 offset lines, 1 mountain, 2 basin
  size: number;
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

export const defaultParams: Params = {
  text: 'A',
  font: 'Playfair Display',
  mode: 0,
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
export const presets: Record<string, Partial<Params>> = {
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

export function loadUserPresets(): Record<string, Params> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Record<string, Params>;
  } catch {
    return {};
  }
}

export function storeUserPresets(all: Record<string, Params>): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    return true;
  } catch {
    return false; // storage blocked (private window etc.)
  }
}
