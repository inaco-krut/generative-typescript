// Base layers: the generative looks (topography, ridgelines, ...) as rectangles you draw on the canvas.
// This file holds what the UI and renderer share: look names, slider definitions, size presets, background types.

import type { BaseLayer } from './presets';

export const MAX_LAYERS = 8;

export const lookNames = ['Topographic', 'Ridgeline', 'Op-art bands', 'Dungeon', 'Warped grid', 'Particle sea'];
export const SEA = 5;
export const TOPO = 0;

export interface LookSlider { label: string; min: number; max: number; step: number }
export const lookSliders: Record<number, (LookSlider | null)[]> = {
  0: [null, null, null, null],
  1: [
    { label: 'Rows', min: 16, max: 160, step: 1 },
    { label: 'Relief', min: 0, max: 4, step: 0.01 },
    { label: 'Letter lift', min: 0, max: 2, step: 0.01 },
    null,
  ],
  2: [{ label: 'Thickness', min: 0.1, max: 0.9, step: 0.01 }, null, null, null],
  3: [
    { label: 'Stones', min: 3, max: 30, step: 0.5 },
    { label: 'Grit', min: 0, max: 2, step: 0.01 },
    { label: 'Torchlight', min: 0, max: 2, step: 0.01 },
    { label: 'Relief', min: 0, max: 2, step: 0.01 },
  ],
  4: [
    { label: 'Cells', min: 6, max: 90, step: 0.5 },
    { label: 'Lens', min: 0, max: 14, step: 0.05 },
    null,
    null,
  ],
  5: [
    { label: 'Particles (k)', min: 10, max: 400, step: 1 },
    { label: 'Current', min: 0, max: 1.5, step: 0.01 },
    { label: 'Attract ↔ repel', min: -1, max: 1, step: 0.01 },
    { label: 'Edge slide', min: 0, max: 1, step: 0.01 },
  ],
};

export interface SizePreset { id: string; label: string; w?: number; h?: number }
export const sizePresets: SizePreset[] = [
  { id: 'free', label: 'Freeform' },
  { id: 'full', label: 'Full canvas' },
  { id: '1:1', label: 'Square 1:1 · 1080 × 1080', w: 1080, h: 1080 },
  { id: '4:5', label: 'Portrait 4:5 · 1080 × 1350', w: 1080, h: 1350 },
  { id: '9:16', label: 'Story 9:16 · 1080 × 1920', w: 1080, h: 1920 },
  { id: '16:9', label: 'Landscape 16:9 · 1920 × 1080', w: 1920, h: 1080 },
  { id: '3:2', label: 'Photo 3:2 · 1800 × 1200', w: 1800, h: 1200 },
  { id: '2:3', label: 'Poster 2:3 · 1200 × 1800', w: 1200, h: 1800 },
  { id: 'a4', label: 'A4 portrait · 2480 × 3508', w: 2480, h: 3508 },
  { id: '3:1', label: 'Banner 3:1 · 1500 × 500', w: 1500, h: 500 },
  { id: '21:9', label: 'Cinema 21:9 · 2560 × 1080', w: 2560, h: 1080 },
];

/** Rectangle (canvas fractions, centred) for a size preset, fitted into the viewport with a margin. */
export function fitSize(id: string, vw: number, vh: number): Pick<BaseLayer, 'x0' | 'y0' | 'x1' | 'y1'> | null {
  if (id === 'full') return { x0: 0, y0: 0, x1: 1, y1: 1 };
  const p = sizePresets.find((s) => s.id === id);
  if (!p || !p.w || !p.h) return null;
  const k = Math.min((0.86 * vw) / p.w, (0.86 * vh) / p.h);
  const fw = (p.w * k) / vw;
  const fh = (p.h * k) / vh;
  return { x0: (1 - fw) / 2, y0: (1 - fh) / 2, x1: (1 + fw) / 2, y1: (1 + fh) / 2 };
}

export const bgTypes = ['Solid colour', 'Grid', 'Horizontal lines', 'Vertical lines', 'Dots', 'Diagonal lines'];

/** Layer indices from back to front (ties follow the list order). */
export function layerOrder(layers: BaseLayer[]): number[] {
  const z = (i: number) => layers[i].z ?? i;
  return layers.map((_, i) => i).sort((a, b) => z(a) - z(b) || a - b);
}

/** Landscape / colour sliders every layer has; `looks` lists the looks they apply to (null = all). */
export interface StyleSlider { key: 'influence' | 'slope' | 'rough' | 'freq' | 'warp' | 'drift' | 'seed' | 'spacing' | 'lineWidth' | 'tint' | 'shade'; label: string; min: number; max: number; step: number; looks: number[] | null }
export const styleSliders: StyleSlider[] = [
  { key: 'influence', label: 'Reach', min: 0.02, max: 0.8, step: 0.01, looks: null },
  { key: 'slope', label: 'Relief', min: 0, max: 3, step: 0.01, looks: [0, 1, 2, 3, 4] },
  { key: 'rough', label: 'Roughness', min: 0, max: 1.5, step: 0.01, looks: [0, 1, 2, 3, 4] },
  { key: 'freq', label: 'Scale', min: 0.3, max: 8, step: 0.01, looks: null },
  { key: 'warp', label: 'Turbulence', min: 0, max: 2, step: 0.01, looks: null },
  { key: 'drift', label: 'Evolution', min: 0, max: 0.3, step: 0.001, looks: null },
  { key: 'seed', label: 'Seed', min: 0, max: 10, step: 0.001, looks: null },
  { key: 'spacing', label: 'Interval', min: 0.004, max: 0.06, step: 0.001, looks: [0, 2] },
  { key: 'lineWidth', label: 'Line weight', min: 0.3, max: 4, step: 0.05, looks: [0, 1, 4, 5] },
  { key: 'tint', label: 'Tint', min: 0, max: 1, step: 0.01, looks: [0, 2, 3, 4] },
  { key: 'shade', label: 'Hillshade', min: 0, max: 1, step: 0.01, looks: [0] },
];
export const modeNames = ['Offset lines', 'Mountain', 'Basin'];
export const blendNames = ['Normal', 'Marks only', 'Multiply', 'Screen', 'Overlay', 'Difference', 'Add'];
