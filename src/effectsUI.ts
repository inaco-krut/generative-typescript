import { blendModes, effectById, effectDefs, newLayer, type BlendMode, type EffectLayer } from './effects';

export interface PanelHost {
  getLayers(): EffectLayer[];
  setLayers(layers: EffectLayer[]): void;
  /** Ask for the gallery thumbnails to be re-rendered from the current artwork. */
  requestThumbs(): void;
  thumbSize: { w: number; h: number };
}

const el = <K extends keyof HTMLElementTagNameMap>(
  tag: K,
  cls?: string,
  text?: string,
): HTMLElementTagNameMap[K] => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
};

/** Left-hand panel: a gallery of effects to add, and the stack of layers applied to the artwork. */
export class EffectsPanel {
  readonly root = el('div');
  private list = el('div', 'fx-list');
  private gallery = el('div', 'fx-gallery');
  private open = new WeakSet<EffectLayer>();
  private thumbs = new Map<string, HTMLCanvasElement>();

  constructor(private host: PanelHost) {
    this.root.id = 'effects';

    const head = el('button', 'fx-title', 'Effects');
    head.addEventListener('click', () => {
      this.root.classList.toggle('collapsed');
      if (!this.root.classList.contains('collapsed')) this.host.requestThumbs();
    });

    const body = el('div', 'fx-body-wrap');
    body.append(el('div', 'fx-section', 'Layers'), this.list);

    const galleryHead = el('div', 'fx-section');
    galleryHead.append(el('span', undefined, 'Add effect'));
    const refresh = el('button', 'fx-mini', 'Refresh');
    refresh.title = 'Re-render the previews from the current artwork';
    refresh.addEventListener('click', () => this.host.requestThumbs());
    galleryHead.append(refresh);
    body.append(galleryHead, this.gallery);

    for (const def of effectDefs) {
      const card = el('button', 'fx-card');
      card.title = def.blurb;
      const c = el('canvas');
      c.width = this.host.thumbSize.w;
      c.height = this.host.thumbSize.h;
      this.thumbs.set(def.id, c);
      card.append(c, el('span', undefined, def.name));
      card.addEventListener('click', () => {
        const layer = newLayer(def);
        this.open.add(layer);
        this.host.setLayers([...this.host.getLayers(), layer]);
        this.rebuild();
        this.list.scrollIntoView({ block: 'nearest' });
      });
      this.gallery.append(card);
    }

    this.root.append(head, body);
    this.rebuild();
  }

  /** Draw a rendered thumbnail (RGBA, bottom row first) into a gallery card. */
  setThumbnail(id: string, rgba: Uint8Array, w: number, h: number): void {
    const canvas = this.thumbs.get(id);
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    const img = ctx.createImageData(w, h);
    for (let y = 0; y < h; y++) {
      img.data.set(rgba.subarray((h - 1 - y) * w * 4, (h - y) * w * 4), y * w * 4);
    }
    ctx.putImageData(img, 0, 0);
  }

  get collapsed(): boolean {
    return this.root.classList.contains('collapsed');
  }

  /** Re-render the layer list (after any structural change or a preset switch). */
  rebuild(): void {
    this.list.replaceChildren();
    const layers = this.host.getLayers();
    if (!layers.length) {
      this.list.append(el('div', 'fx-empty', 'No effects yet. Pick one from the gallery below and stack as many as you like.'));
      return;
    }
    // the last layer is applied last, so it is shown on top
    for (let i = layers.length - 1; i >= 0; i--) this.list.append(this.layerCard(layers, i));
  }

  private layerCard(layers: EffectLayer[], i: number): HTMLElement {
    const layer = layers[i];
    const def = effectById(layer.id);
    const card = el('div', 'fx-layer');
    if (!def) return card;

    const head = el('div', 'fx-head');
    const on = el('input');
    on.type = 'checkbox';
    on.checked = layer.on;
    on.title = 'show / hide';
    on.addEventListener('change', () => (layer.on = on.checked));
    const name = el('button', 'fx-name', def.name);
    name.addEventListener('click', () => {
      if (this.open.has(layer)) this.open.delete(layer);
      else this.open.add(layer);
      this.rebuild();
    });
    const move = (by: number) => {
      const j = i + by;
      if (j < 0 || j >= layers.length) return;
      const next = [...layers];
      [next[i], next[j]] = [next[j], next[i]];
      this.host.setLayers(next);
      this.rebuild();
    };
    const mk = (label: string, title: string, fn: () => void) => {
      const b = el('button', 'fx-mini', label);
      b.title = title;
      b.addEventListener('click', fn);
      return b;
    };
    const btns = el('span', 'fx-btns');
    btns.append(
      mk('↑', 'move up (apply later)', () => move(1)),
      mk('↓', 'move down (apply earlier)', () => move(-1)),
      mk('✕', 'remove', () => {
        this.host.setLayers(layers.filter((_, k) => k !== i));
        this.rebuild();
      }),
    );
    head.append(on, name, btns);
    card.append(head);
    if (!this.open.has(layer)) return card;

    const body = el('div', 'fx-body');
    body.append(this.slider('opacity', 0, 1, 0.01, layer.opacity, (v) => (layer.opacity = v)));

    const blend = el('select');
    for (const m of blendModes) blend.append(new Option(m, m, false, m === layer.blend));
    blend.addEventListener('change', () => (layer.blend = blend.value as BlendMode));
    const blendRow = el('label', 'fx-row');
    blendRow.append(el('span', undefined, 'blend'), blend);
    body.append(blendRow);

    def.params.forEach((p, k) => {
      body.append(this.slider(p.label, p.min, p.max, p.step, layer.p[k] ?? p.value, (v) => (layer.p[k] = v)));
    });
    if (def.c1) body.append(this.colour(def.c1.label, layer.c1, (v) => (layer.c1 = v)));
    if (def.c2) body.append(this.colour(def.c2.label, layer.c2, (v) => (layer.c2 = v)));
    card.append(body);
    return card;
  }

  private slider(label: string, min: number, max: number, step: number, value: number, set: (v: number) => void) {
    const row = el('label', 'fx-row');
    const input = el('input');
    input.type = 'range';
    input.min = String(min);
    input.max = String(max);
    input.step = String(step);
    input.value = String(value);
    const out = el('output', undefined, this.fmt(value, step));
    input.addEventListener('input', () => {
      const v = Number(input.value);
      set(v);
      out.textContent = this.fmt(v, step);
    });
    row.append(el('span', undefined, label), input, out);
    return row;
  }

  private colour(label: string, value: string, set: (v: string) => void) {
    const row = el('label', 'fx-row');
    const input = el('input');
    input.type = 'color';
    input.value = value;
    input.addEventListener('input', () => set(input.value));
    row.append(el('span', undefined, label), input, el('output'));
    return row;
  }

  private fmt(v: number, step: number): string {
    const decimals = Math.max(0, Math.min(4, Math.ceil(-Math.log10(step))));
    return v.toFixed(decimals);
  }
}
