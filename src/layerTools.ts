// Floating panel that sits beside the selected base layer: size, the look's sliders, landscape + palette, stacking, delete.
// Same surface and controls as the glyph panel (gt-* styles).

import { blendNames, lookNames, lookSliders, modeNames, sizePresets, styleSliders } from './baseLayers';
import type { BaseLayer } from './presets';

export interface LayerToolsHost {
  get(): { index: number; layer: Readonly<BaseLayer>; pos: number; count: number; paletteNames: string[] } | null;
  setValue(slot: number, v: number): void;
  setStyle(key: string, v: number | string | boolean): void;
  setSize(id: string): void;
  moveLayer(to: 'back' | 'down' | 'up' | 'front'): void;
  remove(): void;
  presetNames(): string[];
  savePreset(name: string): void;
  applyPreset(name: string): void;
  deletePreset(name: string): void;
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

interface SliderRow {
  row: HTMLElement;
  label: HTMLElement;
  input: HTMLInputElement;
  read: HTMLElement;
}

function sliderRow(onInput: (v: number) => void): SliderRow {
  const row = el('div', 'gt-row');
  const label = el('span', 'gt-label');
  const input = el('input', 'gt-slider');
  input.type = 'range';
  const read = el('output', 'gt-read');
  row.append(label, input, read);
  input.addEventListener('input', () => onInput(Number(input.value)));
  return { row, label, input, read };
}

function setSlider(s: SliderRow, v: number, min: number, max: number, step: number): void {
  if (s.input.min !== String(min)) s.input.min = String(min);
  if (s.input.max !== String(max)) s.input.max = String(max);
  if (s.input.step !== String(step)) s.input.step = String(step);
  if (Number(s.input.value) !== v) s.input.value = String(v);
  s.read.textContent = step >= 1 ? String(Math.round(v)) : v.toFixed(step >= 0.1 ? 1 : step >= 0.01 ? 2 : 3);
  s.input.style.setProperty('--fill', `${((v - min) / (max - min)) * 100}%`);
}

function selectRow(label: string, select: HTMLSelectElement): HTMLElement {
  const row = el('div', 'gt-row');
  row.append(el('span', 'gt-label', label), select);
  return row;
}

export class LayerTools {
  readonly root = el('div');
  private idEl = el('span', 'gt-id');
  private sizeEl = el('span', 'gt-size');
  private sizeSel = el('select', 'gt-select');
  private lookRows: SliderRow[] = [];
  private blendSel = el('select', 'gt-select');
  private reactBtns: HTMLButtonElement[] = [];
  private opacityRow: SliderRow;
  private modeSel = el('select', 'gt-select');
  private modeRow: HTMLElement;
  private palSel = el('select', 'gt-select');
  private palKey = '';
  private styleRows: SliderRow[] = [];
  private layerBtns: HTMLButtonElement[] = [];
  private layerRow = el('div', 'gt-row');
  private presetSel = el('select', 'gt-select');
  private presetKey = '';
  private nameIn = el('input', 'gt-text');
  private delPreset = el('button', 'gt-auto', 'Delete');
  private picked = '';

  constructor(private host: LayerToolsHost) {
    const r = this.root;
    r.id = 'layer-tools';
    r.hidden = true;

    const head = el('div', 'gt-head');
    head.append(this.idEl, this.sizeEl);
    r.append(head);

    // saved presets: look + settings of a layer (not its rectangle)
    this.presetSel.addEventListener('change', () => {
      this.picked = this.presetSel.value;
      if (this.picked) host.applyPreset(this.picked);
    });
    this.nameIn.type = 'text';
    this.nameIn.placeholder = 'Name this layer…';
    this.nameIn.maxLength = 40;
    this.nameIn.addEventListener('keydown', (e) => {
      e.stopPropagation(); // typing a name must not trigger canvas shortcuts
      if (e.key === 'Enter') this.save();
    });
    const save = el('button', 'gt-auto', 'Save');
    save.title = 'Save this layer\'s look and settings as a preset';
    save.addEventListener('click', () => this.save());
    this.delPreset.title = 'Delete the preset chosen above';
    this.delPreset.addEventListener('click', () => {
      if (!this.picked) return;
      host.deletePreset(this.picked);
      this.picked = '';
    });
    const saveRow = el('div', 'gt-row gt-save');
    saveRow.append(this.nameIn, save, this.delPreset);
    r.append(selectRow('Preset', this.presetSel), saveRow, el('div', 'gt-rule'));

    for (const p of sizePresets) {
      const o = el('option', undefined, p.label);
      o.value = p.id;
      this.sizeSel.append(o);
    }
    this.sizeSel.addEventListener('change', () => host.setSize(this.sizeSel.value));
    r.append(selectRow('Size', this.sizeSel));

    blendNames.forEach((n, i) => {
      const o = el('option', undefined, n);
      o.value = String(i);
      this.blendSel.append(o);
    });
    this.blendSel.title = 'How this layer combines with what is below it. Marks only hides its background and keeps just the lines, bands, grout or particles';
    this.blendSel.addEventListener('change', () => host.setStyle('blend', Number(this.blendSel.value)));
    this.opacityRow = sliderRow((v) => host.setStyle('opacity', v));
    this.opacityRow.label.textContent = 'Opacity';
    const reactSeg = el('div', 'gt-segs');
    for (const [label, on] of [['On', true], ['Off', false]] as const) {
      const b = el('button', 'gt-seg', label);
      b.title = on ? 'The glyphs shape this layer' : 'This layer ignores the glyphs';
      b.addEventListener('click', () => host.setStyle('react', on));
      this.reactBtns.push(b);
      reactSeg.append(b);
    }
    const reactRow = el('div', 'gt-row');
    reactRow.append(el('span', 'gt-label', 'Glyphs'), reactSeg);
    r.append(reactRow, selectRow('Blend', this.blendSel), this.opacityRow.row);

    for (let i = 0; i < 4; i++) {
      const s = sliderRow((v) => host.setValue(i, v));
      this.lookRows.push(s);
      r.append(s.row);
    }

    r.append(el('div', 'gt-rule'));
    modeNames.forEach((n, i) => {
      const o = el('option', undefined, n);
      o.value = String(i);
      this.modeSel.append(o);
    });
    this.modeSel.addEventListener('change', () => host.setStyle('mode', Number(this.modeSel.value)));
    this.modeRow = selectRow('Letters', this.modeSel);
    this.modeSel.title = 'How the letters act on the terrain';
    this.palSel.addEventListener('change', () => host.setStyle('palette', this.palSel.value));
    r.append(this.modeRow, selectRow('Palette', this.palSel));
    for (const d of styleSliders) {
      const s = sliderRow((v) => host.setStyle(d.key, v));
      s.label.textContent = d.label;
      this.styleRows.push(s);
      r.append(s.row);
    }

    r.append(el('div', 'gt-rule'));
    const seg = el('div', 'gt-segs four');
    const defs: [string, string, 'back' | 'down' | 'up' | 'front'][] = [
      ['⤓', 'Send to back', 'back'], ['↓', 'Move back one step', 'down'], ['↑', 'Move forward one step', 'up'], ['⤒', 'Bring to front', 'front'],
    ];
    for (const [label, title, to] of defs) {
      const b = el('button', 'gt-seg', label);
      b.title = title;
      b.addEventListener('click', () => host.moveLayer(to));
      this.layerBtns.push(b);
      seg.append(b);
    }
    this.layerRow.append(el('span', 'gt-label', 'Layer'), seg);
    const del = el('button', 'gt-danger', 'Delete layer');
    del.title = 'Remove this base layer (Delete key)';
    del.addEventListener('click', () => host.remove());
    r.append(this.layerRow, del);

    // never let clicks on the panel reach the canvas (that would deselect the layer)
    r.addEventListener('pointerdown', (e) => e.stopPropagation());
    r.addEventListener('wheel', (e) => e.stopPropagation());
  }

  private save(): void {
    const name = this.nameIn.value.trim();
    if (!name) {
      this.nameIn.focus();
      return;
    }
    this.host.savePreset(name);
    this.picked = name;
    this.nameIn.value = '';
  }

  /** Update contents and position; `box` is the selected layer's rectangle in CSS px. */
  update(box: { x0: number; x1: number; y0: number; y1: number } | null): void {
    const g = box ? this.host.get() : null;
    this.root.hidden = !g || !box;
    if (!g || !box) return;
    const L = g.layer;

    this.idEl.textContent = `Layer ${g.pos + 1} · ${lookNames[L.look]}`;
    this.sizeEl.textContent = `${Math.round(box.x1 - box.x0)}×${Math.round(box.y1 - box.y0)}`;
    const names = this.host.presetNames();
    const pk = names.join('\n') + `|${this.picked}`;
    if (pk !== this.presetKey) {
      this.presetKey = pk;
      if (!names.includes(this.picked)) this.picked = '';
      this.presetSel.replaceChildren(...[''].concat(names).map((n) => {
        const o = el('option', undefined, n || (names.length ? 'Choose a preset…' : 'None saved yet'));
        o.value = n;
        return o;
      }));
      this.presetSel.value = this.picked;
    }
    this.delPreset.hidden = !this.picked;
    this.sizeSel.value = L.size;
    this.blendSel.value = String(L.blend);
    this.reactBtns[0].classList.toggle('on', L.react !== false);
    this.reactBtns[1].classList.toggle('on', L.react === false);
    setSlider(this.opacityRow, L.opacity, 0, 1, 0.01);
    const vals = [L.a, L.b, L.c, L.d];
    const defs = lookSliders[L.look] ?? lookSliders[0];
    this.lookRows.forEach((s, i) => {
      const d = defs[i];
      s.row.hidden = !d;
      if (!d) return;
      s.label.textContent = d.label;
      setSlider(s, vals[i], d.min, d.max, d.step);
    });
    const key = g.paletteNames.join();
    if (this.palKey !== key) {
      this.palKey = key;
      this.palSel.replaceChildren(...['', ...g.paletteNames].map((n) => {
        const o = el('option', undefined, n || 'Canvas palette');
        o.value = n;
        return o;
      }));
    }
    this.palSel.value = L.palette;
    this.modeRow.hidden = L.look === 5;
    this.modeSel.value = String(L.mode);
    styleSliders.forEach((d, i) => {
      const s = this.styleRows[i];
      s.row.hidden = !!d.looks && !d.looks.includes(L.look);
      if (!s.row.hidden) setSlider(s, L[d.key], d.min, d.max, d.step);
    });
    this.layerRow.hidden = g.count < 2;
    this.layerBtns[0].disabled = this.layerBtns[1].disabled = g.pos === 0;
    this.layerBtns[2].disabled = this.layerBtns[3].disabled = g.pos === g.count - 1;

    // beside the layer, but never over the other menus: stay between the Effects panel and the right-hand panel,
    // and below the top bar. Right of the layer if there is room, else left, else tucked inside its edge.
    const w = this.root.offsetWidth || 252;
    const h = this.root.offsetHeight || 300;
    const gap = 14;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const fx = document.getElementById('effects');
    const gui = document.querySelector('.lil-gui.root');
    const safeL = Math.max(8, fx && !fx.classList.contains('collapsed') ? fx.getBoundingClientRect().right + 8 : 8);
    const safeR = Math.min(vw - 8, gui ? gui.getBoundingClientRect().left - 8 : vw - 8);
    const bar = document.getElementById('layerbar');
    const barBottom = bar ? bar.getBoundingClientRect().bottom + 8 : 8;
    let left = box.x1 + gap;
    if (left + w > safeR) left = box.x0 - gap - w;
    if (left < safeL) left = Math.min(box.x1, safeR) - w - gap;
    left = Math.max(safeL, Math.min(left, safeR - w));
    const top = Math.min(Math.max(barBottom, box.y0), Math.max(barBottom, vh - h - 8));
    this.root.style.left = `${left}px`;
    this.root.style.top = `${top}px`;
  }
}
