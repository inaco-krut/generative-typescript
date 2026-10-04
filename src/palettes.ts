export interface Palette {
  paper: string;
  ink: string;
  index: string;
  low: string;
  mid: string;
  high: string;
}

export const palettes: Record<string, Palette> = {
  Survey: { paper: '#f1ead8', ink: '#7a6350', index: '#2e2118', low: '#cfd9b5', mid: '#ead9a8', high: '#c9a27a' },
  Blueprint: { paper: '#0d2a4a', ink: '#6fa6d8', index: '#eaf4ff', low: '#123a63', mid: '#1b5189', high: '#2f73b3' },
  Midnight: { paper: '#0b0d12', ink: '#4b5568', index: '#ff7a59', low: '#11151d', mid: '#1c2330', high: '#2d3850' },
  Aurora: { paper: '#070c18', ink: '#3ddbd9', index: '#f0f6ff', low: '#0d1a33', mid: '#1b3b66', high: '#5a3a92' },
  Ink: { paper: '#f7f7f5', ink: '#8a8a86', index: '#111111', low: '#efefec', mid: '#deded9', high: '#c8c8c2' },
  'White dots': { paper: '#030304', ink: '#6d6d74', index: '#ffffff', low: '#0a0a0d', mid: '#15151a', high: '#22222a' },
  Ember: { paper: '#1a0f0c', ink: '#c4623a', index: '#ffd7a8', low: '#2a1612', mid: '#4a2218', high: '#7a3820' },
};

export const paletteNames = Object.keys(palettes);
