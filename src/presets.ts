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
  animate: boolean;
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
  animate: true,
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
};

export const presetNames = Object.keys(presets);
