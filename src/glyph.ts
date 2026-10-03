import type { FontDef } from './fonts';

export const SDF_SIZE = 512;
const INF = 1e20;

/** Rasterises `text` centred in a square canvas, then returns its signed distance field.
 *  Values are in texture-UV units (pixels / SDF_SIZE): positive outside the glyph, negative inside. */
export function renderGlyphSDF(text: string, font: FontDef, fill = 0.55): Float32Array {
  const n = SDF_SIZE;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = n;
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, n, n);
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';

  const setFont = (px: number) => (ctx.font = `${font.weight} ${px}px "${font.family}", sans-serif`);
  setFont(100);
  let m = ctx.measureText(text);
  const w0 = m.actualBoundingBoxLeft + m.actualBoundingBoxRight || 1;
  const h0 = m.actualBoundingBoxAscent + m.actualBoundingBoxDescent || 1;
  const px = (100 * fill * n) / Math.max(w0, h0);
  setFont(px);
  m = ctx.measureText(text);
  const x = n / 2 - (m.actualBoundingBoxRight - m.actualBoundingBoxLeft) / 2;
  const y = n / 2 + (m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2;
  ctx.fillText(text, x, y);

  const data = ctx.getImageData(0, 0, n, n).data;
  const outer = new Float64Array(n * n); // squared distance to nearest inside pixel
  const inner = new Float64Array(n * n); // squared distance to nearest outside pixel
  for (let i = 0; i < n * n; i++) {
    // use edge coverage for sub-pixel accurate edges (as TinySDF does)
    const a = data[i * 4] / 255;
    if (a >= 1) {
      outer[i] = 0;
      inner[i] = INF;
    } else if (a <= 0) {
      outer[i] = INF;
      inner[i] = 0;
    } else {
      outer[i] = a < 0.5 ? (0.5 - a) ** 2 : 0;
      inner[i] = a > 0.5 ? (a - 0.5) ** 2 : 0;
    }
  }
  edt2d(outer, n);
  edt2d(inner, n);

  const out = new Float32Array(n * n);
  for (let i = 0; i < n * n; i++) out[i] = (Math.sqrt(outer[i]) - Math.sqrt(inner[i])) / n;
  // a light blur removes texel-scale kinks so contours and shading stay smooth
  boxBlur(out, n, 2);
  boxBlur(out, n, 2);
  return out;
}

function boxBlur(a: Float32Array, n: number, r: number): void {
  const tmp = new Float32Array(n);
  const k = 2 * r + 1;
  const pass = (offset: number, stride: number) => {
    let sum = 0;
    for (let i = -r; i <= r; i++) sum += a[offset + Math.min(Math.max(i, 0), n - 1) * stride];
    for (let i = 0; i < n; i++) {
      tmp[i] = sum / k;
      sum += a[offset + Math.min(i + r + 1, n - 1) * stride] - a[offset + Math.max(i - r, 0) * stride];
    }
    for (let i = 0; i < n; i++) a[offset + i * stride] = tmp[i];
  };
  for (let y = 0; y < n; y++) pass(y * n, 1);
  for (let x = 0; x < n; x++) pass(x, n);
}

// Felzenszwalb & Huttenlocher squared euclidean distance transform (as used by TinySDF).
function edt2d(grid: Float64Array, n: number): void {
  const f = new Float64Array(n);
  const v = new Uint16Array(n);
  const z = new Float64Array(n + 1);
  for (let x = 0; x < n; x++) edt1d(grid, x, n, n, f, v, z);
  for (let y = 0; y < n; y++) edt1d(grid, y * n, 1, n, f, v, z);
}

function edt1d(
  grid: Float64Array, offset: number, stride: number, length: number,
  f: Float64Array, v: Uint16Array, z: Float64Array,
): void {
  v[0] = 0;
  z[0] = -INF;
  z[1] = INF;
  f[0] = grid[offset];
  for (let q = 1, k = 0, s = 0; q < length; q++) {
    f[q] = grid[offset + q * stride];
    const q2 = q * q;
    do {
      const r = v[k];
      s = (f[q] - f[r] + q2 - r * r) / (q - r) / 2;
    } while (s <= z[k] && --k > -1);
    k++;
    v[k] = q;
    z[k] = s;
    z[k + 1] = INF;
  }
  for (let q = 0, k = 0; q < length; q++) {
    while (z[k + 1] < q) k++;
    const r = v[k];
    const qr = q - r;
    grid[offset + q * stride] = f[r] + qr * qr;
  }
}
