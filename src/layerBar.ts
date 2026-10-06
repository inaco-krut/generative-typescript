// Top-centre bar: pick a base layer to draw, select / size / tune / stack the layers you have, and set the canvas background.
// Matches the glyph panel's look: dark rounded surface, segmented buttons, slim sliders with readouts.

import { bgTypes, lookNames, lookSliders, modeNames, sizePresets, styleSliders } from './baseLayers';
import type { Background, BaseLayer } from './presets';

export interface LayerBarState {
  order: { index: number; look: number }[]; // back to front
  selected: number; // selected layer index, -1 = none
  armed: number; // look waiting for a rectangle to be drawn, -1 = none
  sel: { layer: Readonly<BaseLayer>; pos: number; count: number } | null;
  paletteNames: string[];
  bg: Background;
  paper: string; // palette colours used when the background colours are left on 'palette'
  ink: string;
}

export interface LayerBarHost {
  state(): LayerBarState;
  arm(look: number): void;
  select(index: number): void;
  setValue(slot: number, v: number): void;
  setStyle(key: string, v: number | string): void;
  setSize(id: string): void;
  moveLayer(to: 'back' | 'down' | 'up' | 'front'): void;
  remove(): void;
  setBg(patch: Partial<Background>): void;
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

interface SliderRow {
  wrap: HTMLElement;
  label: HTMLElement;
  input: HTMLInputElement;
  read: HTMLElement;
}

function slider(onInput: (v: number) => void): SliderRow {
  const wrap = el('label', 'lb-slider');
  const label = el('span', 'lb-label');
  const input = el('input');
  input.type = 'range';
  const read = el('output', 'lb-read');
  wrap.append(label, input, read);
  input.addEventListener('input', () => onInput(Number(input.value)));
  return { wrap, label, input, read };
}

function setSlider(s: SliderRow, v: number, min: number, max: number, step: number): void {
  if (s.input.min !== String(min)) s.input.min = String(min);
  if (s.input.max !== String(max)) s.input.max = String(max);
  if (s.input.step !== String(step)) s.input.step = String(step);
  if (Number(s.input.value) !== v) s.input.value = String(v);
  s.read.textContent = step >= 1 ? String(Math.round(v)) : v.toFixed(step >= 0.1 ? 1 : 2);
  s.input.style.setProperty('--fill', `${((v - min) / (max - min)) * 100}%`);
}

export class LayerBar {
  readonly root = el('div');
  private lookBtns: HTMLButtonElement[] = [];
  private hint = el('span', 'lb-hint');
  private tabs = el('div', 'lb-tabs');
  private tabKey = '';
  private editRow = el('div', 'lb-row');
  private sizeSel = el('select', 'lb-select');
  private sliders: SliderRow[] = [];
  private stack: HTMLButtonElement[] = [];
  private styleRow = el('div', 'lb-row');
  private styleBtn = el('button', 'lb-btn', 'Style');
  private styleOpen = true;
  private modeSel = el('select', 'lb-select');
  private modeField = el('label', 'lb-field');
  private palSel = el('select', 'lb-select');
  private palKey = '';
  private styleSl: SliderRow[] = [];
  private bgBtn = el('button', 'lb-btn', 'Background');
  private bgRow = el('div', 'lb-row');
  private bgOpen = false;
  private bgType = el('select', 'lb-select');
  private bgColor = el('input');
  private bgLine = el('input');
  private bgPalette = el('button', 'lb-btn', 'Palette');
  private bgLineWrap = el('label', 'lb-field');
  private bgSliders: SliderRow[] = [];

  constructor(private host: LayerBarHost) {
    const r = this.root;
    r.id = 'layerbar';

    // row 1: what to draw
    const top = el('div', 'lb-row lb-top');
    top.append(el('span', 'lb-title', 'Base layer'));
    const chips = el('div', 'lb-chips');
    lookNames.forEach((name, i) => {
      const b = el('button', 'lb-chip', name);
      b.title = `Draw a ${name.toLowerCase()} layer: click, then drag a rectangle on the canvas`;
      b.addEventListener('click', () => host.arm(i));
      this.lookBtns.push(b);
      chips.append(b);
    });
    this.bgBtn.title = 'What the canvas looks like behind and around the base layers';
    this.bgBtn.addEventListener('click', () => {
      this.bgOpen = !this.bgOpen;
      this.update();
    });
    top.append(this.hint, this.bgBtn);

    // row 2: existing layers
    this.tabs.hidden = true;

    // row 3: the selected layer
    this.sizeSel.title = 'Size preset';
    for (const p of sizePresets) {
      const o = el('option', undefined, p.label);
      o.value = p.id;
      this.sizeSel.append(o);
    }
    this.sizeSel.addEventListener('change', () => host.setSize(this.sizeSel.value));
    const sizeField = el('label', 'lb-field');
    sizeField.append(el('span', 'lb-label', 'Size'), this.sizeSel);
    const sliderBox = el('div', 'lb-sliders');
    for (let i = 0; i < 4; i++) {
      const s = slider((v) => host.setValue(i, v));
      this.sliders.push(s);
      sliderBox.append(s.wrap);
    }
    const seg = el('div', 'lb-seg');
    const defs: [string, string, 'back' | 'down' | 'up' | 'front'][] = [
      ['⤓', 'Send to back', 'back'], ['↓', 'Move back one step', 'down'], ['↑', 'Move forward one step', 'up'], ['⤒', 'Bring to front', 'front'],
    ];
    for (const [label, title, to] of defs) {
      const b = el('button', 'lb-btn', label);
      b.title = title;
      b.addEventListener('click', () => host.moveLayer(to));
      this.stack.push(b);
      seg.append(b);
    }
    const del = el('button', 'lb-btn lb-del', 'Delete');
    del.title = 'Remove this base layer (Delete key)';
    del.addEventListener('click', () => host.remove());
    this.styleBtn.title = 'Show or hide this layer\'s landscape and colour settings';
    this.styleBtn.addEventListener('click', () => {
      this.styleOpen = !this.styleOpen;
      this.update();
    });
    seg.append(del);
    this.editRow.append(sizeField, seg, this.styleBtn, sliderBox);

    // landscape + colour settings of the selected layer
    modeNames.forEach((n, i) => {
      const o = el('option', undefined, n);
      o.value = String(i);
      this.modeSel.append(o);
    });
    this.modeSel.addEventListener('change', () => host.setStyle('mode', Number(this.modeSel.value)));
    this.modeField.append(el('span', 'lb-label', 'Letters act as'), this.modeSel);
    this.palSel.addEventListener('change', () => host.setStyle('palette', this.palSel.value));
    const palField = el('label', 'lb-field');
    palField.append(el('span', 'lb-label', 'Palette'), this.palSel);
    const styleBox = el('div', 'lb-sliders');
    for (const d of styleSliders) {
      const sl = slider((v) => host.setStyle(d.key, v));
      sl.label.textContent = d.label;
      this.styleSl.push(sl);
      styleBox.append(sl.wrap);
    }
    this.styleRow.append(this.modeField, palField, styleBox);
    this.styleRow.hidden = true;
    this.editRow.hidden = true;

    // row 4: background
    this.bgType.title = 'Background pattern';
    bgTypes.forEach((n, i) => {
      const o = el('option', undefined, n);
      o.value = String(i);
      this.bgType.append(o);
    });
    this.bgType.addEventListener('change', () => host.setBg({ type: Number(this.bgType.value) }));
    const typeField = el('label', 'lb-field');
    typeField.append(el('span', 'lb-label', 'Pattern'), this.bgType);
    this.bgColor.type = 'color';
    this.bgColor.className = 'lb-color';
    this.bgColor.addEventListener('input', () => host.setBg({ color: this.bgColor.value }));
    const colorField = el('label', 'lb-field');
    colorField.append(el('span', 'lb-label', 'Colour'), this.bgColor);
    this.bgLine.type = 'color';
    this.bgLine.className = 'lb-color';
    this.bgLine.addEventListener('input', () => host.setBg({ line: this.bgLine.value }));
    this.bgLineWrap.append(el('span', 'lb-label', 'Lines'), this.bgLine);
    this.bgPalette.title = 'Use the palette colours again';
    this.bgPalette.addEventListener('click', () => host.setBg({ color: '', line: '' }));
    const keys: [keyof Background, string][] = [['spacing', 'Spacing'], ['weight', 'Weight'], ['strength', 'Strength']];
    const bgBox = el('div', 'lb-sliders');
    for (const [key, label] of keys) {
      const s = slider((v) => host.setBg({ [key]: v }));
      s.label.textContent = label;
      this.bgSliders.push(s);
      bgBox.append(s.wrap);
    }
    this.bgRow.append(typeField, colorField, this.bgLineWrap, this.bgPalette, bgBox);
    this.bgRow.hidden = true;

    r.append(top, chips, this.tabs, this.editRow, this.styleRow, this.bgRow);
    // the bar is UI: clicks on it must never reach the canvas
    r.addEventListener('pointerdown', (e) => e.stopPropagation());
  }

  update(): void {
    const s = this.host.state();
    this.lookBtns.forEach((b, i) => b.classList.toggle('on', s.armed === i));
    this.hint.textContent = s.armed >= 0 ? 'Drag on the canvas to size it · Esc cancels' : '';
    this.hint.hidden = s.armed < 0;
    this.bgBtn.classList.toggle('on', this.bgOpen);

    // layer tabs, listed back to front
    const key = s.order.map((o) => `${o.index}:${o.look}`).join(',') + `|${s.selected}`;
    this.tabs.hidden = s.order.length === 0;
    if (key !== this.tabKey) {
      this.tabKey = key;
      this.tabs.replaceChildren(el('span', 'lb-label', 'Layers'));
      s.order.forEach((o, n) => {
        const b = el('button', 'lb-tab', `${n + 1} ${lookNames[o.look]}`);
        b.classList.toggle('on', o.index === s.selected);
        b.addEventListener('click', () => this.host.select(o.index));
        this.tabs.append(b);
      });
    }

    // the selected layer
    this.editRow.hidden = !s.sel;
    if (!s.sel) this.styleRow.hidden = true;
    if (s.sel) {
      const L = s.sel.layer;
      const vals = [L.a, L.b, L.c, L.d];
      const defs = lookSliders[L.look] ?? lookSliders[0];
      this.sizeSel.value = L.size;
      this.sliders.forEach((sl, i) => {
        const d = defs[i];
        sl.wrap.hidden = !d;
        if (!d) return;
        sl.label.textContent = d.label;
        setSlider(sl, vals[i], d.min, d.max, d.step);
      });
      this.styleBtn.classList.toggle('on', this.styleOpen);
      this.styleRow.hidden = !this.styleOpen;
      if (this.styleOpen) {
        if (this.palKey !== s.paletteNames.join()) {
          this.palKey = s.paletteNames.join();
          this.palSel.replaceChildren(...['', ...s.paletteNames].map((n) => {
            const o = el('option', undefined, n || 'Canvas palette');
            o.value = n;
            return o;
          }));
        }
        this.palSel.value = L.palette;
        this.modeField.hidden = L.look === 5;
        this.modeSel.value = String(L.mode);
        styleSliders.forEach((d, i) => {
          const sl = this.styleSl[i];
          sl.wrap.hidden = !!d.looks && !d.looks.includes(L.look);
          if (!sl.wrap.hidden) setSlider(sl, L[d.key], d.min, d.max, d.step);
        });
      }
      this.stack[0].disabled = this.stack[1].disabled = s.sel.pos === 0;
      this.stack[2].disabled = this.stack[3].disabled = s.sel.pos === s.sel.count - 1;
    }

    // background
    this.bgRow.hidden = !this.bgOpen;
    if (this.bgOpen) {
      const bg = s.bg;
      this.bgType.value = String(bg.type);
      const col = bg.color || s.paper;
      const line = bg.line || s.ink;
      if (this.bgColor.value !== col.toLowerCase()) this.bgColor.value = col;
      if (this.bgLine.value !== line.toLowerCase()) this.bgLine.value = line;
      this.bgPalette.hidden = !bg.color && !bg.line;
      const patterned = bg.type !== 0;
      this.bgLineWrap.hidden = !patterned;
      this.bgSliders.forEach((sl) => (sl.wrap.hidden = !patterned));
      if (patterned) {
        setSlider(this.bgSliders[0], bg.spacing, 0.01, 0.2, 0.001);
        setSlider(this.bgSliders[1], bg.weight, 0.5, 6, 0.1);
        setSlider(this.bgSliders[2], bg.strength, 0.05, 1, 0.01);
      }
    }
  }
}
