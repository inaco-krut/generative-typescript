import * as THREE from 'three';
import { IMG_SIZE, SDF_SIZE } from './glyph';

export const MAX_GLYPHS = 8;
const N = SDF_SIZE;

/** Glyph extent in texture uv (v points up). */
export interface Bounds { u0: number; u1: number; v0: number; v1: number }
export const defaultBounds: Bounds = { u0: 0.25, u1: 0.75, v0: 0.25, v1: 0.75 };

export function unionBounds(a: Bounds, b: Bounds): Bounds {
  return { u0: Math.min(a.u0, b.u0), u1: Math.max(a.u1, b.u1), v0: Math.min(a.v0, b.v0), v1: Math.max(a.v1, b.v1) };
}

export function boundsOf(sdf: Float32Array): Bounds | null {
  let c0 = N, c1 = -1, r0 = N, r1 = -1;
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (sdf[r * N + c] < 0) {
        if (c < c0) c0 = c;
        if (c > c1) c1 = c;
        if (r < r0) r0 = r;
        if (r > r1) r1 = r;
      }
    }
  }
  return c1 < 0 ? null : { u0: c0 / N, u1: (c1 + 1) / N, v0: 1 - (r1 + 1) / N, v1: 1 - r0 / N };
}

/** One distance-field layer per glyph, in two texture arrays so a glyph can morph from its previous shape. */
export class GlyphStore {
  readonly fromTex: THREE.DataArrayTexture;
  readonly toTex: THREE.DataArrayTexture;
  /** Colour pixels of imported images, one layer per glyph (premultiplied RGBA). */
  readonly imgTex: THREE.DataArrayTexture;
  private imgData: Uint8Array<ArrayBuffer> = new Uint8Array(new ArrayBuffer(IMG_SIZE * IMG_SIZE * 4 * MAX_GLYPHS));
  /** CPU copies of the current SDFs and bounds (hit tests, keeping details clear of glyphs). */
  readonly sdf: (Float32Array | null)[] = Array.from({ length: MAX_GLYPHS }, () => null);
  readonly bounds: Bounds[] = Array.from({ length: MAX_GLYPHS }, () => ({ ...defaultBounds }));
  private fromData: Uint16Array<ArrayBuffer> = new Uint16Array(new ArrayBuffer(N * N * MAX_GLYPHS * 2));
  private toData: Uint16Array<ArrayBuffer> = new Uint16Array(new ArrayBuffer(N * N * MAX_GLYPHS * 2));

  constructor() {
    const far = THREE.DataUtils.toHalfFloat(1); // "very far from any glyph"
    this.fromData.fill(far);
    this.toData.fill(far);
    const make = (data: Uint16Array<ArrayBuffer>) => {
      const t = new THREE.DataArrayTexture(data, N, N, MAX_GLYPHS);
      t.format = THREE.RedFormat;
      t.type = THREE.HalfFloatType;
      t.minFilter = t.magFilter = THREE.LinearFilter;
      t.generateMipmaps = false;
      t.needsUpdate = true;
      return t;
    };
    this.fromTex = make(this.fromData);
    this.toTex = make(this.toData);
    const img = new THREE.DataArrayTexture(this.imgData, IMG_SIZE, IMG_SIZE, MAX_GLYPHS);
    img.format = THREE.RGBAFormat;
    img.type = THREE.UnsignedByteType;
    img.minFilter = img.magFilter = THREE.LinearFilter;
    img.generateMipmaps = false;
    img.needsUpdate = true;
    this.imgTex = img;
  }

  private write(data: Uint16Array, layer: number, sdf: Float32Array | null): void {
    const base = layer * N * N;
    if (!sdf) {
      data.fill(THREE.DataUtils.toHalfFloat(1), base, base + N * N);
      return;
    }
    // canvas rows run top-down, texture rows bottom-up
    for (let y = 0; y < N; y++) {
      const src = (N - 1 - y) * N;
      for (let x = 0; x < N; x++) data[base + y * N + x] = THREE.DataUtils.toHalfFloat(sdf[src + x]);
    }
  }

  /** Put a shape in a layer. With `morph`, the previous shape becomes the morph source. */
  set(layer: number, sdf: Float32Array, bounds: Bounds, morph: boolean): void {
    const base = layer * N * N;
    if (morph) this.fromData.set(this.toData.subarray(base, base + N * N), base);
    else this.write(this.fromData, layer, sdf);
    this.write(this.toData, layer, sdf);
    this.sdf[layer] = sdf;
    this.bounds[layer] = bounds;
    this.fromTex.needsUpdate = true;
    this.toTex.needsUpdate = true;
  }

  /** Put two shapes in a layer so they can be scrubbed between by hand. */
  setPair(layer: number, a: Float32Array, b: Float32Array, bounds: Bounds): void {
    this.write(this.fromData, layer, a);
    this.write(this.toData, layer, b);
    this.sdf[layer] = a;
    this.bounds[layer] = bounds;
    this.fromTex.needsUpdate = true;
    this.toTex.needsUpdate = true;
  }

  /** Put an imported image's colours in a layer. */
  setImage(layer: number, rgba: Uint8Array): void {
    this.imgData.set(rgba, layer * IMG_SIZE * IMG_SIZE * 4);
    this.imgTex.needsUpdate = true;
  }

  clear(layer: number): void {
    this.imgData.fill(0, layer * IMG_SIZE * IMG_SIZE * 4, (layer + 1) * IMG_SIZE * IMG_SIZE * 4);
    this.imgTex.needsUpdate = true;
    this.write(this.fromData, layer, null);
    this.write(this.toData, layer, null);
    this.sdf[layer] = null;
    this.fromTex.needsUpdate = true;
    this.toTex.needsUpdate = true;
  }
}
