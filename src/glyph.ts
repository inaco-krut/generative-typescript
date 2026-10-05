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
  return coverageToSDF((i) => data[i * 4] / 255);
}

/** Signed distance field from a per-pixel coverage function (0..1, row-major, SDF_SIZE x SDF_SIZE). */
function coverageToSDF(coverage: (i: number) => number): Float32Array {
  const n = SDF_SIZE;
  const outer = new Float64Array(n * n); // squared distance to nearest inside pixel
  const inner = new Float64Array(n * n); // squared distance to nearest outside pixel
  for (let i = 0; i < n * n; i++) {
    // use edge coverage for sub-pixel accurate edges (as TinySDF does)
    const a = coverage(i);
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

/** Side length of the stored colour image (the shape itself is still a SDF_SIZE distance field). */
export const IMG_SIZE = 768;

export interface ImportedImage {
  /** The picture fitted and centred like a text glyph, with its transparency (an IMG_SIZE square image data URL). */
  dataUrl: string;
}

async function decode(src: string): Promise<HTMLImageElement> {
  const img = new Image();
  img.src = src;
  await img.decode();
  return img;
}

/** Reads an image file and normalises it: fitted and centred like a text glyph, colours and transparency kept. */
export async function importImage(file: Blob, fill = 0.55): Promise<ImportedImage> {
  const url = URL.createObjectURL(file);
  try {
    const img = await decode(url);
    const n = IMG_SIZE;
    const w = img.naturalWidth || img.width;
    const h = img.naturalHeight || img.height;
    const scale = (fill * n) / Math.max(w, h, 1);
    const c = document.createElement('canvas');
    c.width = c.height = n;
    const ctx = c.getContext('2d')!;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, (n - w * scale) / 2, (n - h * scale) / 2, w * scale, h * scale);
    // WebP keeps the transparency at a fraction of the size of PNG (browsers without it fall back to PNG)
    let dataUrl = c.toDataURL('image/webp', 0.92);
    if (!dataUrl.startsWith('data:image/webp')) dataUrl = c.toDataURL('image/png');
    return { dataUrl };
  } finally {
    URL.revokeObjectURL(url);
  }
}

export interface DecodedImage {
  sdf: Float32Array; // shape, from the image's transparency
  rgba: Uint8Array; // IMG_SIZE x IMG_SIZE, premultiplied, rows bottom-up (ready for a texture)
}

/** Distance field and colour pixels for a stored image (see importImage). */
export async function decodeImage(dataUrl: string): Promise<DecodedImage> {
  const img = await decode(dataUrl);
  const m = IMG_SIZE;
  const c = document.createElement('canvas');
  c.width = c.height = m;
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.drawImage(img, 0, 0, m, m);
  const px = ctx.getImageData(0, 0, m, m).data;
  const rgba = new Uint8Array(m * m * 4);
  for (let y = 0; y < m; y++) {
    const src = (m - 1 - y) * m;
    for (let x = 0; x < m; x++) {
      const i = (src + x) * 4;
      const o = (y * m + x) * 4;
      const a = px[i + 3];
      rgba[o] = (px[i] * a) / 255;
      rgba[o + 1] = (px[i + 1] * a) / 255;
      rgba[o + 2] = (px[i + 2] * a) / 255;
      rgba[o + 3] = a;
    }
  }
  // the shape comes from the alpha channel at SDF_SIZE
  const n = SDF_SIZE;
  const c2 = document.createElement('canvas');
  c2.width = c2.height = n;
  const ctx2 = c2.getContext('2d', { willReadFrequently: true })!;
  ctx2.drawImage(c, 0, 0, n, n);
  const small = ctx2.getImageData(0, 0, n, n).data;
  return { sdf: coverageToSDF((i) => small[i * 4 + 3] / 255), rgba };
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
