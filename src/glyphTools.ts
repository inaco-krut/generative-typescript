// Floating panel that follows the selected glyph: solid/outline, colour, opacity and outline thickness.
// These are the only place these settings live (the side panel does not repeat them).
// Matches the rest of the UI: rounded surface, segmented control, slim slider with a readout.

export interface GlyphToolsHost {
  get(): {
    index: number; text: string; size: number; outline: boolean; outlineW: number; shortSide: number;
    color: string; opacity: number; custom: boolean; image: boolean; imageColor: boolean;
    layer: number; layers: number;
  } | null;
  moveLayer(to: 'back' | 'down' | 'up' | 'front'): void;
  setOutline(on: boolean): void;
  setThickness(w: number): void;
  setColor(hex: string): void;
  usePalette(): void;
  setImageColor(on: boolean): void;
  setOpacity(v: number): void;
}

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

    r.append(head, modeRow, this.imgRow, colorRow, opacityRow, this.strokeRow, this.layerRow);

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

    // sit just below the selection box; flip above it when there is no room
    const pad = 14;
    const w = this.root.offsetWidth || 236;
    const h = this.root.offsetHeight || 104;
    let top = box.y1 + pad + 8;
    if (top + h > window.innerHeight - 8) top = Math.max(8, box.y0 - pad - 40 - h);
    const left = Math.min(Math.max(8, box.x0 - 8), Math.max(8, window.innerWidth - w - 8));
    this.root.style.left = `${left}px`;
    this.root.style.top = `${top}px`;
  }
}
