// Floating readout that follows the selected glyph: solid/outline toggle and outline thickness.
// Styled as an instrument panel (monospace, hairlines, corner brackets, tick-marked slider).

export interface GlyphToolsHost {
  get(): { index: number; text: string; size: number; outline: boolean; outlineW: number; shortSide: number } | null;
  setOutline(on: boolean): void;
  setThickness(w: number): void;
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
  private solidBtn = el('button', 'gt-seg', 'SOLID');
  private lineBtn = el('button', 'gt-seg', 'OUTLINE');
  private slider = el('input');
  private readout = el('output', 'gt-read');
  private strokeRow = el('div', 'gt-row');

  constructor(private host: GlyphToolsHost) {
    const r = this.root;
    r.id = 'glyph-tools';
    r.hidden = true;
    for (const c of ['tl', 'tr', 'bl', 'br']) r.append(el('i', `gt-c ${c}`));

    const head = el('div', 'gt-head');
    head.append(this.idEl, this.sizeEl);

    const modeRow = el('div', 'gt-row');
    const seg = el('div', 'gt-segs');
    seg.append(this.solidBtn, this.lineBtn);
    modeRow.append(el('span', 'gt-label', 'RENDER'), seg);

    this.slider.type = 'range';
    this.slider.min = String(MIN_W);
    this.slider.max = String(MAX_W);
    this.slider.step = '0.0005';
    this.slider.className = 'gt-slider';
    this.slider.title = 'outline thickness';
    this.strokeRow.append(el('span', 'gt-label', 'STROKE'), this.slider, this.readout);

    r.append(head, modeRow, this.strokeRow);

    this.solidBtn.addEventListener('click', () => host.setOutline(false));
    this.lineBtn.addEventListener('click', () => host.setOutline(true));
    this.slider.addEventListener('input', () => host.setThickness(Number(this.slider.value)));
    // never let clicks on the panel reach the canvas (that would deselect the glyph)
    r.addEventListener('pointerdown', (e) => e.stopPropagation());
  }

  /** Update contents and position; `box` is the selected glyph's bounding box in CSS px. */
  update(box: { x0: number; x1: number; y0: number; y1: number } | null): void {
    const g = box ? this.host.get() : null;
    this.root.hidden = !g || !box;
    if (!g || !box) return;

    this.idEl.textContent = `GLYPH ${String(g.index + 1).padStart(2, '0')} · ${g.text.trim().slice(0, 10).toUpperCase() || '—'}`;
    this.sizeEl.textContent = `×${g.size.toFixed(2)}`;
    this.solidBtn.classList.toggle('on', !g.outline);
    this.lineBtn.classList.toggle('on', g.outline);
    this.strokeRow.classList.toggle('off', !g.outline);
    this.slider.disabled = !g.outline;
    if (Number(this.slider.value) !== g.outlineW) this.slider.value = String(g.outlineW);
    this.readout.textContent = `${(g.outlineW * g.shortSide).toFixed(1).padStart(4, '0')}PX`;
    // tick marks scale with the slider range
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
