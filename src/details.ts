// Static detail layer: elevation labels that follow the contour lines, spot heights and
// a small typographic cluster with icons. Works on a height field read back from the GPU.

export interface DetailOptions {
  labels: boolean;
  spots: boolean;
  notes: boolean;
  avoidGlyph: boolean; // keep labels off the letter's interior (when it is filled in)
  spacing: number; // contour interval in height-field units
  metersPerLine: number;
  baseElevation: number;
  labelSize: number; // px on an 800px canvas
  words: string[];
  caption: string;
  seed: number;
  textColor: string;
}

export interface DetailInput {
  field: Float32Array; // gw*gh heights, row 0 = bottom
  gw: number;
  gh: number;
  W: number; // overlay size in px
  H: number;
  cx: number; // glyph centre in canvas px (annotations cluster around it)
  cy: number;
  glyphDist: (x: number, y: number) => number; // canvas px -> distance to glyph in px (negative inside)
}

const MONO = '"JetBrains Mono", "Roboto Mono", ui-monospace, Menlo, monospace';

interface Rect { x: number; y: number; w: number; h: number; a: number }
interface Poly { pts: number[]; cum: number[]; length: number; k: number }
type Ctx = CanvasRenderingContext2D;

// ------------------------------------------------------------------ geometry helpers

function mulberry32(seed: number): () => number {
  let a = Math.floor(seed * 1e6) >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function projectRect(r: Rect, ax: number, ay: number): [number, number] {
  const c = r.x * ax + r.y * ay;
  const ca = Math.cos(r.a);
  const sa = Math.sin(r.a);
  const rad = (Math.abs(ca * ax + sa * ay) * r.w) / 2 + (Math.abs(-sa * ax + ca * ay) * r.h) / 2;
  return [c - rad, c + rad];
}

function overlaps(a: Rect, b: Rect): boolean {
  const axes: [number, number][] = [
    [Math.cos(a.a), Math.sin(a.a)], [-Math.sin(a.a), Math.cos(a.a)],
    [Math.cos(b.a), Math.sin(b.a)], [-Math.sin(b.a), Math.cos(b.a)],
  ];
  for (const [ax, ay] of axes) {
    const pa = projectRect(a, ax, ay);
    const pb = projectRect(b, ax, ay);
    if (pa[1] < pb[0] || pb[1] < pa[0]) return false;
  }
  return true;
}

function rectCorners(r: Rect): [number, number][] {
  const ca = Math.cos(r.a);
  const sa = Math.sin(r.a);
  return ([[-1, -1], [1, -1], [1, 1], [-1, 1]] as const).map(([sx, sy]) => {
    const lx = (sx * r.w) / 2;
    const ly = (sy * r.h) / 2;
    return [r.x + lx * ca - ly * sa, r.y + lx * sa + ly * ca];
  });
}

// ------------------------------------------------------------------ marching squares

function buildContours(inp: DetailInput, spacing: number): Poly[] {
  const { field: f, gw, gh, W, H } = inp;
  const sx = W / gw;
  const sy = H / gh;
  const levels = new Map<number, number[]>(); // k -> [edgeA, edgeB, ax, ay, bx, by, ...]

  for (let y = 0; y < gh - 1; y++) {
    for (let x = 0; x < gw - 1; x++) {
      const i = y * gw + x;
      const a = f[i]; // bottom-left
      const b = f[i + 1]; // bottom-right
      const c = f[i + gw]; // top-left
      const d = f[i + gw + 1]; // top-right
      const k0 = Math.ceil(Math.min(a, b, c, d) / spacing);
      const k1 = Math.floor(Math.max(a, b, c, d) / spacing);
      for (let k = k0; k <= k1; k++) {
        const L = k * spacing;
        const cb = a >= L !== b >= L;
        const cr = b >= L !== d >= L;
        const ct = c >= L !== d >= L;
        const cl = a >= L !== c >= L;
        const n = +cb + +cr + +ct + +cl;
        if (n === 0) continue;
        // crossing points: [edgeId, x, y]
        const B: [number, number, number] = [i * 2, x + (L - a) / (b - a), y];
        const R: [number, number, number] = [(i + 1) * 2 + 1, x + 1, y + (L - b) / (d - b)];
        const T: [number, number, number] = [(i + gw) * 2, x + (L - c) / (d - c), y + 1];
        const Lf: [number, number, number] = [i * 2 + 1, x, y + (L - a) / (c - a)];
        let arr = levels.get(k);
        if (!arr) levels.set(k, (arr = []));
        const push = (p: [number, number, number], q: [number, number, number]) =>
          arr!.push(p[0], q[0], p[1], p[2], q[1], q[2]);
        if (n === 2) {
          const cross = [cb && B, cr && R, ct && T, cl && Lf].filter(Boolean) as [number, number, number][];
          push(cross[0], cross[1]);
        } else {
          const centerIn = (a + b + c + d) / 4 >= L;
          if (centerIn === a >= L) { push(B, R); push(T, Lf); } else { push(B, Lf); push(R, T); }
        }
      }
    }
  }

  const toX = (gx: number) => (gx + 0.5) * sx;
  const toY = (gy: number) => H - (gy + 0.5) * sy;
  const polys: Poly[] = [];

  for (const [k, arr] of levels) {
    const n = arr.length / 6;
    const adj = new Map<number, number[]>();
    const link = (e: number, s: number) => {
      const l = adj.get(e);
      if (l) l.push(s); else adj.set(e, [s]);
    };
    for (let s = 0; s < n; s++) { link(arr[s * 6], s); link(arr[s * 6 + 1], s); }
    const used = new Uint8Array(n);

    // walk from a segment end until the chain stops; returns the points visited
    const walk = (edge: number, start: number): { pts: number[]; edge: number } => {
      const pts: number[] = [];
      let cur = start;
      let e = edge;
      for (;;) {
        const next = (adj.get(e) ?? []).find((s) => !used[s] && s !== cur);
        if (next === undefined) break;
        used[next] = 1;
        const forward = arr[next * 6] === e;
        const o = next * 6;
        pts.push(toX(forward ? arr[o + 4] : arr[o + 2]), toY(forward ? arr[o + 5] : arr[o + 3]));
        e = forward ? arr[o + 1] : arr[o];
        cur = next;
      }
      return { pts, edge: e };
    };

    for (let s = 0; s < n; s++) {
      if (used[s]) continue;
      used[s] = 1;
      const o = s * 6;
      const ahead = walk(arr[o + 1], s);
      const closed = ahead.edge === arr[o];
      const behind = closed ? { pts: [] as number[] } : walk(arr[o], s);
      const back: number[] = [];
      for (let j = behind.pts.length - 2; j >= 0; j -= 2) back.push(behind.pts[j], behind.pts[j + 1]);
      const pts = [...back, toX(arr[o + 2]), toY(arr[o + 3]), toX(arr[o + 4]), toY(arr[o + 5]), ...ahead.pts];
      const cum = [0];
      for (let j = 2; j < pts.length; j += 2) {
        cum.push(cum[cum.length - 1] + Math.hypot(pts[j] - pts[j - 2], pts[j + 1] - pts[j - 1]));
      }
      polys.push({ pts, cum, length: cum[cum.length - 1], k });
    }
  }
  return polys;
}

function pointAt(p: Poly, s: number): [number, number] {
  let lo = 0;
  let hi = p.cum.length - 1;
  while (hi - lo > 1) {
    const m = (lo + hi) >> 1;
    if (p.cum[m] <= s) lo = m; else hi = m;
  }
  const span = p.cum[hi] - p.cum[lo] || 1;
  const t = (s - p.cum[lo]) / span;
  return [
    p.pts[lo * 2] + (p.pts[hi * 2] - p.pts[lo * 2]) * t,
    p.pts[lo * 2 + 1] + (p.pts[hi * 2 + 1] - p.pts[lo * 2 + 1]) * t,
  ];
}

// ------------------------------------------------------------------ icons

type IconFn = (c: Ctx, s: number) => void;

const icons: IconFn[] = [
  // compass
  (c, s) => {
    c.beginPath(); c.arc(0, 0, s * 0.46, 0, Math.PI * 2); c.stroke();
    c.save(); c.rotate(0.7);
    c.beginPath(); c.moveTo(0, -s * 0.3); c.lineTo(s * 0.1, 0); c.lineTo(0, s * 0.3); c.lineTo(-s * 0.1, 0);
    c.closePath(); c.fill(); c.restore();
  },
  // map pin
  (c, s) => {
    c.beginPath(); c.arc(0, -s * 0.1, s * 0.3, (150 * Math.PI) / 180, (390 * Math.PI) / 180);
    c.lineTo(0, s * 0.5); c.closePath(); c.stroke();
    c.beginPath(); c.arc(0, -s * 0.1, s * 0.09, 0, Math.PI * 2); c.fill();
  },
  // mountains
  (c, s) => {
    c.beginPath();
    c.moveTo(-s * 0.5, s * 0.25); c.lineTo(-s * 0.15, -s * 0.22); c.lineTo(s * 0.05, s * 0.06);
    c.lineTo(s * 0.2, -s * 0.12); c.lineTo(s * 0.5, s * 0.25); c.stroke();
  },
  // navigation arrow
  (c, s) => {
    c.beginPath(); c.moveTo(0, -s * 0.5); c.lineTo(s * 0.36, s * 0.44); c.lineTo(0, s * 0.22);
    c.lineTo(-s * 0.36, s * 0.44); c.closePath(); c.stroke();
  },
  // up / down arrow
  (c, s) => {
    c.beginPath(); c.moveTo(0, -s * 0.45); c.lineTo(0, s * 0.45);
    c.moveTo(-s * 0.16, -s * 0.28); c.lineTo(0, -s * 0.45); c.lineTo(s * 0.16, -s * 0.28);
    c.moveTo(-s * 0.16, s * 0.28); c.lineTo(0, s * 0.45); c.lineTo(s * 0.16, s * 0.28); c.stroke();
  },
  // folded map
  (c, s) => {
    c.beginPath(); c.rect(-s * 0.45, -s * 0.36, s * 0.9, s * 0.72);
    c.moveTo(-s * 0.15, -s * 0.36); c.lineTo(-s * 0.15, s * 0.36);
    c.moveTo(s * 0.15, -s * 0.36); c.lineTo(s * 0.15, s * 0.36); c.stroke();
  },
];

// ------------------------------------------------------------------ main entry

export function renderDetails(inp: DetailInput, o: DetailOptions, ctx: Ctx, mask: Ctx): void {
  const { W, H, glyphDist } = inp;
  const cx0 = inp.cx;
  const cy0 = inp.cy;
  const u = Math.min(W, H) / 800;
  const rng = mulberry32(o.seed);
  const placed: Rect[] = [];
  const edge = 36 * u;

  ctx.clearRect(0, 0, W, H);
  mask.fillStyle = '#000';
  mask.fillRect(0, 0, W, H);

  const free = (r: Rect, pad = 0): boolean => {
    const padded = { ...r, w: r.w + pad * 2, h: r.h + pad * 2 };
    return !placed.some((p) => overlaps(padded, p));
  };
  const inside = (r: Rect): boolean =>
    rectCorners(r).every(([x, y]) => x > edge && x < W - edge && y > edge && y < H - edge);
  // sample along the rect's long axis so wide text boxes cannot straddle the glyph
  const clearOfGlyph = (r: Rect, margin: number): boolean => {
    const ca = Math.cos(r.a);
    const sa = Math.sin(r.a);
    for (let ix = -1; ix <= 1; ix += 2 / Math.max(2, Math.ceil(r.w / (22 * u)))) {
      for (const iy of [-1, 0, 1]) {
        const lx = (ix * r.w) / 2;
        const ly = (iy * r.h) / 2;
        if (glyphDist(r.x + lx * ca - ly * sa, r.y + lx * sa + ly * ca) < margin) return false;
      }
    }
    return true;
  };

  ctx.fillStyle = o.textColor;
  ctx.strokeStyle = o.textColor;
  ctx.lineWidth = 1.3 * u;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.textBaseline = 'middle';

  // ---------------------------------------------------------- annotation cluster
  if (o.notes) {
    interface Item { w: number; h: number; draw: (cx: number, cy: number) => void }
    const items: Item[] = [];
    const pickIcon = () => icons[Math.floor(rng() * icons.length)];

    const words = o.words.length ? o.words : [];
    for (const word of words) {
      const px = 15 * u;
      ctx.font = `700 ${px}px ${MONO}`;
      const tw = ctx.measureText(word).width;
      const withIcon = rng() < 0.7;
      const isz = 18 * u;
      const gap = 8 * u;
      const iconLeft = rng() < 0.5;
      const icon = pickIcon();
      const w = tw + (withIcon ? gap + isz : 0);
      items.push({
        w, h: Math.max(px * 1.2, withIcon ? isz : 0),
        draw: (cx, cy) => {
          const x0 = cx - w / 2;
          const tx = withIcon && iconLeft ? x0 + isz + gap : x0;
          ctx.font = `700 ${px}px ${MONO}`;
          ctx.textAlign = 'left';
          ctx.fillText(word, tx, cy);
          if (withIcon) {
            ctx.save();
            ctx.translate(iconLeft ? x0 + isz / 2 : x0 + w - isz / 2, cy);
            icon(ctx, isz);
            ctx.restore();
          }
        },
      });
    }

    if (o.caption.trim()) {
      const px = 7.5 * u;
      ctx.font = `700 ${px}px ${MONO}`;
      const maxChars = 22;
      const lines: string[] = [];
      let line = '';
      for (const w of o.caption.toUpperCase().split(/\s+/)) {
        if ((line + ' ' + w).trim().length > maxChars) { lines.push(line); line = w; } else line = (line + ' ' + w).trim();
      }
      if (line) lines.push(line);
      const lh = px * 1.45;
      const w = Math.max(...lines.map((l) => ctx.measureText(l).width));
      items.push({
        w, h: lh * lines.length,
        draw: (cx, cy) => {
          ctx.font = `700 ${px}px ${MONO}`;
          ctx.textAlign = 'left';
          lines.forEach((l, i) => ctx.fillText(l, cx - w / 2, cy - (lh * (lines.length - 1)) / 2 + i * lh));
        },
      });
    }

    // a couple of loose icons and a small number, like stray map furniture
    for (let i = 0; i < 3; i++) {
      const icon = pickIcon();
      const s = 20 * u;
      items.push({ w: s, h: s, draw: (cx, cy) => { ctx.save(); ctx.translate(cx, cy); icon(ctx, s); ctx.restore(); } });
    }
    const num = String(10 + Math.floor(rng() * 89));
    items.push({
      w: 14 * u, h: 10 * u,
      draw: (cx, cy) => { ctx.font = `700 ${8 * u}px ${MONO}`; ctx.textAlign = 'center'; ctx.fillText(num, cx, cy); },
    });

    for (const item of items) {
      for (let attempt = 0; attempt < 600; attempt++) {
        const ang = rng() * Math.PI * 2;
        const r = 0.1 + 0.8 * Math.pow(rng(), 1.15);
        const cx = cx0 + Math.cos(ang) * r * (W / 2 - edge);
        const cy = cy0 + Math.sin(ang) * r * (H / 2 - edge);
        const rect: Rect = { x: cx, y: cy, w: item.w, h: item.h, a: 0 };
        if (!inside(rect) || !free(rect, 9 * u) || !clearOfGlyph(rect, 12 * u)) continue;
        placed.push(rect);
        item.draw(cx, cy);
        break;
      }
    }
  }

  // ---------------------------------------------------------- contours -> labels, spot heights
  const meters = (h: number) => Math.round(o.baseElevation + (h / o.spacing) * o.metersPerLine);

  if (o.spots) {
    const { field: f, gw, gh } = inp;
    const step = 4;
    const cw = Math.floor(gw / step);
    const ch = Math.floor(gh / step);
    const coarse = new Float32Array(cw * ch);
    for (let y = 0; y < ch; y++) for (let x = 0; x < cw; x++) coarse[y * cw + x] = f[y * step * gw + x * step];
    const R = 7;
    const peaks: { h: number; x: number; y: number }[] = [];
    for (let y = R; y < ch - R; y++) {
      for (let x = R; x < cw - R; x++) {
        const v = coarse[y * cw + x];
        let isMax = true;
        for (let yy = -R; yy <= R && isMax; yy++) for (let xx = -R; xx <= R; xx++) if (coarse[(y + yy) * cw + x + xx] > v) { isMax = false; break; }
        if (isMax) peaks.push({ h: v, x: ((x * step + 0.5) / gw) * W, y: H - ((y * step + 0.5) / gh) * H });
      }
    }
    peaks.sort((a, b) => b.h - a.h);
    const px = 10 * u;
    let count = 0;
    for (const p of peaks) {
      if (count >= 4) break;
      const text = `${meters(p.h)}m`;
      ctx.font = `700 ${px}px ${MONO}`;
      const tw = ctx.measureText(text).width;
      const rect: Rect = { x: p.x + (tw + 12 * u) / 2 - 6 * u, y: p.y, w: tw + 14 * u, h: 14 * u, a: 0 };
      if (!inside(rect) || !free(rect, 30 * u) || !clearOfGlyph(rect, 10 * u)) continue;
      placed.push(rect);
      count++;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.beginPath(); ctx.moveTo(0, -4.5 * u); ctx.lineTo(4.5 * u, 3.5 * u); ctx.lineTo(-4.5 * u, 3.5 * u); ctx.closePath(); ctx.fill();
      ctx.restore();
      ctx.textAlign = 'left';
      ctx.fillText(text, p.x + 9 * u, p.y);
    }
  }

  if (o.labels) {
    const polys = buildContours(inp, o.spacing);
    // index contours claim space first, then the thin ones fill in around them
    polys.sort((a, b) => Number(b.k % 5 === 0) - Number(a.k % 5 === 0) || b.length - a.length);
    const fs = o.labelSize * u;
    const spacingPx = 230 * u;

    for (const poly of polys) {
      const isIndex = poly.k % 5 === 0;
      ctx.font = `${isIndex ? 700 : 400} ${fs}px ${MONO}`;
      const text = `${Math.round(o.baseElevation + poly.k * o.metersPerLine)}m`;
      const tw = ctx.measureText(text).width;
      if (poly.length < tw * 1.7) continue;
      const jitter = ((poly.k * 7919 + Math.floor(poly.pts[0])) % 97) / 97;
      for (let s0 = tw + jitter * spacingPx; s0 < poly.length - tw; s0 += spacingPx) {
        for (const shift of [0, 0.7, -0.7, 1.4, -1.4]) {
          const s = s0 + shift * tw;
          if (s < tw || s > poly.length - tw) continue;
          const [x1, y1] = pointAt(poly, s - tw / 2);
          const [xm, ym] = pointAt(poly, s);
          const [x2, y2] = pointAt(poly, s + tw / 2);
          let ang = Math.atan2(y2 - y1, x2 - x1);
          const bend = Math.abs(Math.atan2(y2 - ym, x2 - xm) - Math.atan2(ym - y1, xm - x1));
          if (Math.min(bend, Math.PI * 2 - bend) > 0.4) continue;
          if (ang > Math.PI / 2) ang -= Math.PI;
          else if (ang < -Math.PI / 2) ang += Math.PI;
          const rect: Rect = { x: xm, y: ym, w: tw + 8 * u, h: fs * 1.3, a: ang };
          if (!inside(rect) || !free(rect, 2 * u)) continue;
          if (o.avoidGlyph && glyphDist(xm, ym) < fs) continue;
          placed.push(rect);
          ctx.save();
          ctx.translate(xm, ym);
          ctx.rotate(ang);
          ctx.textAlign = 'center';
          ctx.fillText(text, 0, 0);
          ctx.restore();
          break;
        }
      }
    }
  }

  // ---------------------------------------------------------- knock the contour lines out under everything placed
  mask.fillStyle = '#fff';
  for (const r of placed) {
    mask.save();
    mask.translate(r.x, r.y);
    mask.rotate(r.a);
    mask.fillRect(-r.w / 2 - 2 * u, -r.h / 2 - 1 * u, r.w + 4 * u, r.h + 2 * u);
    mask.restore();
  }
}
