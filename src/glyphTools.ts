// Floating panel that follows the selected glyph: every setting of that glyph lives here (the side panel does not repeat them):
// fill, colour, opacity, layering, text / font / morph, shape (weight, softness, warp) and transform (size, rotation, skew, stretch).
// Matches the rest of the UI: rounded surface, segmented control, slim slider with a readout.

export interface GlyphToolsHost {
  get(): {
    index: number; text: string; size: number; outline: boolean; outlineW: number; shortSide: number;
    color: string; opacity: number; custom: boolean; image: boolean; imageColor: boolean;
    layer: number; layers: number;
    rawText: string; text2: string; font: string; fonts: string[];
    rot: number; skew: number; stretch: number; grow: number; soft: number; warp: number; morph: number;
    count: number;
  } | null;
  setText(v: string): void;
  setText2(v: string): void;
  setFont(v: string): void;
  setNum(key: NumKey, v: number): void;
  resetTransform(): void;
  useText(): void;
  remove(): void;
  moveLayer(to: 'back' | 'down' | 'up' | 'front'): void;
  setOutline(on: boolean): void;
  setThickness(w: number): void;
  setColor(hex: string): void;
  usePalette(): void;
  setImageColor(on: boolean): void;
  setOpacity(v: number): void;
}

export type NumKey = 'size' | 'rot' | 'skew' | 'stretch' | 'grow' | 'soft' | 'warp' | 'morph';
const NUMS: { key: NumKey; label: string; min: number; max: number; step: number; group: 'shape' | 'xform' | 'morph'; title?: string }[] = [
  { key: 'grow', label: 'Weight', min: -0.05, max: 0.08, step: 0.001, group: 'shape', title: 'Bolder or thinner letterforms' },
  { key: 'soft', label: 'Soften', min: 0, max: 1, step: 0.005, group: 'shape' },
  { key: 'warp', label: 'Warp', min: 0, max: 1, step: 0.005, group: 'shape', title: 'Noise warp of the letterform' },
  { key: 'size', label: 'Size', min: 0.2, max: 4, step: 0.01, group: 'xform', title: 'Or drag a corner handle / scroll on the selected glyph' },
  { key: 'rot', label: 'Rotation', min: -180, max: 180, step: 0.5, group: 'xform' },
  { key: 'skew', label: 'Skew', min: -0.8, max: 0.8, step: 0.005, group: 'xform' },
  { key: 'stretch', label: 'Stretch', min: 0.3, max: 3, step: 0.01, group: 'xform' },
  { key: 'morph', label: 'Morph amount', min: 0, max: 1, step: 0.001, group: 'morph' },
];

const MIN_W = 0.002;
const MAX_W = 0.05;

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

export class GlyphTools {
  readonly root = el('div');
  private idEl = el('span', 'gt-id');
  private sizeEl = el('span', 'gt-size');
  private solidBtn = el('button', 'gt-seg', 'Solid');
  private lineBtn = el('button', 'gt-seg', 'Outline');
  private slider = el('input');
  private readout = el('output', 'gt-read');
  private strokeRow = el('div', 'gt-row');
  private colorIn = el('input');
  private colorRow = el('div', 'gt-row');
  private imgRow = el('div', 'gt-row');
  private origBtn = el('button', 'gt-seg', 'Original');
  private tintBtn = el('button', 'gt-seg', 'One colour');
  private autoBtn = el('button', 'gt-auto', 'Palette');
  private opacityIn = el('input');
  private opacityRead = el('output', 'gt-read');
  private layerRow = el('div', 'gt-row');
  private layerBtns: HTMLButtonElement[] = [];
  private textIn = el('input', 'gt-text');
  private text2In = el('input', 'gt-text');
  private fontSel = el('select', 'gt-select');
  private fontKey = '';
  private nums = new Map<NumKey, { row: HTMLElement; input: HTMLInputElement; read: HTMLElement }>();
  private textSec = el('div', 'gt-sec');
  private shapeSec = el('div', 'gt-sec');
  private xformSec = el('div', 'gt-sec');
  private morphRow: HTMLElement;
  private useTextBtn = el('button', 'gt-ghost', 'Use text instead');
  private delBtn = el('button', 'gt-danger', 'Delete glyph');

  constructor(private host: GlyphToolsHost) {
    const r = this.root;
    r.id = 'glyph-tools';
    r.hidden = true;

    const head = el('div', 'gt-head');
    head.append(this.idEl, this.sizeEl);

    const modeRow = el('div', 'gt-row');
    const seg = el('div', 'gt-segs');
    seg.append(this.solidBtn, this.lineBtn);
    modeRow.append(el('span', 'gt-label', 'Fill'), seg);

    this.slider.type = 'range';
    this.slider.min = String(MIN_W);
    this.slider.max = String(MAX_W);
    this.slider.step = '0.0005';
    this.slider.className = 'gt-slider';
    this.slider.title = 'outline thickness';
    this.strokeRow.append(el('span', 'gt-label', 'Thickness'), this.slider, this.readout);

    this.colorIn.type = 'color';
    this.colorIn.className = 'gt-color';
    this.colorIn.title = 'colour of this glyph';
    const colorRow = this.colorRow;
    this.autoBtn.title = 'Go back to the palette colours';
    const swatch = el('div', 'gt-colorwrap');
    swatch.append(this.colorIn, this.autoBtn);
    colorRow.append(el('span', 'gt-label', 'Colour'), swatch);

    this.opacityIn.type = 'range';
    this.opacityIn.min = '0';
    this.opacityIn.max = '1';
    this.opacityIn.step = '0.01';
    this.opacityIn.className = 'gt-slider';
    this.opacityIn.title = 'opacity';
    const opacityRow = el('div', 'gt-row');
    opacityRow.append(el('span', 'gt-label', 'Opacity'), this.opacityIn, this.opacityRead);

    const imgSeg = el('div', 'gt-segs');
    imgSeg.append(this.origBtn, this.tintBtn);
    this.imgRow.append(el('span', 'gt-label', 'Image'), imgSeg);

    const layerSeg = el('div', 'gt-segs four');
    const defs: [string, string, 'back' | 'down' | 'up' | 'front'][] = [['⤓', 'Send to back', 'back'], ['↓', 'Move back one step', 'down'], ['↑', 'Move forward one step', 'up'], ['⤒', 'Bring to front', 'front']];
    for (const [label, title, to] of defs) {
      const b = el('button', 'gt-seg', label);
      b.title = title;
      b.addEventListener('click', () => host.moveLayer(to));
      this.layerBtns.push(b);
      layerSeg.append(b);
    }
    this.layerRow.append(el('span', 'gt-label', 'Layer'), layerSeg);

    // sections: text, shape, transform (collapsible; the panel scrolls when the window is short)
    const section = (box: HTMLElement, title: string, open = true): HTMLElement => {
      const head = el('button', 'gt-sec-head', title);
      const body = el('div', 'gt-sec-body');
      box.append(head, body);
      box.classList.toggle('closed', !open);
      head.addEventListener('click', () => box.classList.toggle('closed'));
      return body;
    };
    const textBody = section(this.textSec, 'Text');
    this.textIn.type = 'text';
    this.textIn.title = 'The letters of this glyph (or just type on the canvas)';
    this.textIn.addEventListener('change', () => host.setText(this.textIn.value));
    this.textIn.addEventListener('keydown', (e) => { if (e.key === 'Enter') this.textIn.blur(); });
    this.fontSel.addEventListener('change', () => host.setFont(this.fontSel.value));
    this.text2In.type = 'text';
    this.text2In.placeholder = 'A second text to blend towards';
    this.text2In.addEventListener('change', () => host.setText2(this.text2In.value));
    this.text2In.addEventListener('keydown', (e) => { if (e.key === 'Enter') this.text2In.blur(); });
    const rowOf = (label: string, ...kids: HTMLElement[]) => {
      const row = el('div', 'gt-row');
      row.append(el('span', 'gt-label', label), ...kids);
      return row;
    };
    textBody.append(rowOf('Text', this.textIn), rowOf('Font', this.fontSel), rowOf('Morph to', this.text2In));
    const shapeBody = section(this.shapeSec, 'Shape');
    const xformBody = section(this.xformSec, 'Transform');
    for (const d of NUMS) {
      const input = el('input', 'gt-slider');
      input.type = 'range';
      input.min = String(d.min);
      input.max = String(d.max);
      input.step = String(d.step);
      if (d.title) input.title = d.title;
      const read = el('output', 'gt-read');
      const row = el('div', 'gt-row');
      row.append(el('span', 'gt-label', d.label), input, read);
      input.addEventListener('input', () => host.setNum(d.key, Number(input.value)));
      this.nums.set(d.key, { row, input, read });
      (d.group === 'shape' ? shapeBody : d.group === 'morph' ? textBody : xformBody).append(row);
    }
    this.morphRow = this.nums.get('morph')!.row;
    const reset = el('button', 'gt-ghost', 'Reset transform');
    reset.addEventListener('click', () => host.resetTransform());
    xformBody.append(reset);
    this.useTextBtn.addEventListener('click', () => host.useText());
    this.delBtn.addEventListener('click', () => host.remove());
    this.delBtn.title = 'Remove this glyph (Delete key)';

    r.append(head, modeRow, this.imgRow, colorRow, opacityRow, this.strokeRow, this.layerRow, this.textSec, this.shapeSec, this.xformSec, this.useTextBtn, this.delBtn);

    this.solidBtn.addEventListener('click', () => host.setOutline(false));
    this.lineBtn.addEventListener('click', () => host.setOutline(true));
    this.slider.addEventListener('input', () => host.setThickness(Number(this.slider.value)));
    this.colorIn.addEventListener('input', () => host.setColor(this.colorIn.value));
    this.autoBtn.addEventListener('click', () => host.usePalette());
    this.origBtn.addEventListener('click', () => host.setImageColor(true));
    this.tintBtn.addEventListener('click', () => host.setImageColor(false));
    this.opacityIn.addEventListener('input', () => host.setOpacity(Number(this.opacityIn.value)));
    // never let clicks on the panel reach the canvas (that would deselect the glyph)
    r.addEventListener('pointerdown', (e) => e.stopPropagation());
  }

  /** Update contents and position; `box` is the selected glyph's bounding box in CSS px. */
  update(box: { x0: number; x1: number; y0: number; y1: number } | null): void {
    const g = box ? this.host.get() : null;
    this.root.hidden = !g || !box;
    if (!g || !box) return;

    this.idEl.textContent = `Glyph ${g.index + 1} · ${g.text.trim().slice(0, 10) || '—'}`;
    this.sizeEl.textContent = `${g.size.toFixed(2)}×`;
    this.solidBtn.classList.toggle('on', !g.outline);
    this.lineBtn.classList.toggle('on', g.outline);
    this.strokeRow.classList.toggle('off', !g.outline);
    this.slider.disabled = !g.outline;
    if (Number(this.slider.value) !== g.outlineW) this.slider.value = String(g.outlineW);
    this.readout.textContent = `${(g.outlineW * g.shortSide).toFixed(0)} px`;
    if (this.colorIn.value !== g.color.toLowerCase()) this.colorIn.value = g.color;
    this.autoBtn.hidden = !g.custom; // only offered once a colour was chosen by hand
    // imported pictures: choose between their own colours and a single colour; colour only applies to the latter
    this.imgRow.hidden = !g.image || g.outline; // outlines are always a single colour
    this.origBtn.classList.toggle('on', g.imageColor);
    this.tintBtn.classList.toggle('on', !g.imageColor);
    this.colorRow.hidden = g.image && g.imageColor && !g.outline;
    if (Number(this.opacityIn.value) !== g.opacity) this.opacityIn.value = String(g.opacity);
    this.opacityRead.textContent = `${Math.round(g.opacity * 100)}%`;
    this.opacityIn.style.setProperty('--fill', `${g.opacity * 100}%`);
    this.layerRow.title = `Layer ${g.layer + 1} of ${g.layers}`;
    this.layerRow.hidden = g.layers < 2;
    this.layerBtns[0].disabled = this.layerBtns[1].disabled = g.layer === 0;
    this.layerBtns[2].disabled = this.layerBtns[3].disabled = g.layer === g.layers - 1;
    this.slider.style.setProperty('--fill', `${((g.outlineW - MIN_W) / (MAX_W - MIN_W)) * 100}%`);

    // text-only controls
    this.textSec.hidden = g.image;
    this.useTextBtn.hidden = !g.image;
    this.delBtn.hidden = g.count < 2;
    if (document.activeElement !== this.textIn && this.textIn.value !== g.rawText) this.textIn.value = g.rawText;
    if (document.activeElement !== this.text2In && this.text2In.value !== g.text2) this.text2In.value = g.text2;
    const fk = g.fonts.join('\n');
    if (fk !== this.fontKey) {
      this.fontKey = fk;
      this.fontSel.replaceChildren(...g.fonts.map((f) => {
        const o = el('option', undefined, f);
        o.value = f;
        return o;
      }));
    }
    this.fontSel.value = g.font;
    for (const d of NUMS) {
      const n = this.nums.get(d.key)!;
      const v = g[d.key];
      if (Number(n.input.value) !== v) n.input.value = String(v);
      n.read.textContent = d.step >= 1 ? String(Math.round(v)) : v.toFixed(d.step >= 0.1 ? 1 : d.step >= 0.01 ? 2 : 3);
      n.input.style.setProperty('--fill', `${((v - d.min) / (d.max - d.min)) * 100}%`);
    }
    this.morphRow.hidden = !g.text2.trim();

    // placement: below the selection box, else above it, else beside it (right, then left), always clear of the other menus
    const w = this.root.offsetWidth || 236;
    const h = this.root.offsetHeight || 104;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pad = 14;
    const left0 = Math.min(Math.max(8, box.x0 - 8), Math.max(8, vw - w - 8));
    if (box.y1 + pad + 8 + h <= vh - 8) {
      this.root.style.left = `${left0}px`;
      this.root.style.top = `${box.y1 + pad + 8}px`;
      return;
    }
    if (box.y0 - pad - 40 - h >= 8) {
      this.root.style.left = `${left0}px`;
      this.root.style.top = `${box.y0 - pad - 40 - h}px`;
      return;
    }
    const fx = document.getElementById('effects');
    const gui = document.querySelector('.lil-gui.root');
    const safeL = Math.max(8, fx && !fx.classList.contains('collapsed') ? fx.getBoundingClientRect().right + 8 : 8);
    const safeR = Math.min(vw - 8, gui ? gui.getBoundingClientRect().left - 8 : vw - 8);
    let left = box.x1 + pad + 8;
    if (left + w > safeR) left = box.x0 - pad - 8 - w;
    if (left < safeL) left = Math.min(box.x1, safeR) - w - pad;
    left = Math.max(safeL, Math.min(left, safeR - w));
    this.root.style.left = `${left}px`;
    this.root.style.top = `${Math.min(Math.max(8, box.y0), Math.max(8, vh - h - 8))}px`;
  }
}
