import { glyphGLSL } from './shader';

// A gallery of full-screen effects that can be stacked. Each effect is a GLSL snippet
// `vec3 effect(vec2 uv, vec3 src)` that sees the layer below (`uPrev`), the letters (`glyphDist`)
// and its own sliders P0..P7 and colours C1, C2. Sizes are fractions of the canvas height so an effect
// looks the same in a thumbnail, on screen and in an export.

export const blendModes = ['normal', 'add', 'multiply', 'screen', 'overlay', 'difference'] as const;
export type BlendMode = (typeof blendModes)[number];

export interface EffectParam {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
}

export interface EffectDef {
  id: string;
  name: string;
  blurb: string;
  blend?: BlendMode; // default blend mode
  params: EffectParam[]; // up to 8
  c1?: { label: string; value: string };
  c2?: { label: string; value: string };
  glsl: string;
}

export interface EffectLayer {
  id: string;
  on: boolean;
  opacity: number;
  blend: BlendMode;
  p: number[];
  c1: string;
  c2: string;
}

const P = (label: string, min: number, max: number, value: number, step = 0.01): EffectParam => ({
  label, min, max, step, value,
});

export const effectDefs: EffectDef[] = [
  {
    id: 'halftone',
    name: 'Halftone',
    blurb: 'Rotated dot screen; darker areas get bigger dots.',
    params: [P('cell size', 0.4, 6, 1.4, 0.05), P('angle', 0, 90, 45, 0.5), P('softness', 0, 1, 0.25), P('contrast', 0.3, 3, 1.3)],
    c1: { label: 'dots', value: '#1d1a16' },
    c2: { label: 'paper', value: '#f0e8d2' },
    glsl: `
float cell = max(P0 * 0.01 * uRes.y, 2.0);
float a = radians(P1);
vec2 g = rot2(gl_FragCoord.xy, -a) / cell;
vec2 id = floor(g);
vec2 f = fract(g) - 0.5;
vec2 cc = rot2((id + 0.5) * cell, a);
float lum = luma(prevAt(clamp(cc / uRes, 0.0, 1.0)));
float r = 0.75 * sqrt(clamp((1.0 - lum) * P3, 0.0, 1.0));
float s = 0.02 + P2 * 0.4;
float m = 1.0 - smoothstep(-s, s, length(f) - r);
return mix(C2, C1, m);`,
  },
  {
    id: 'pixelate',
    name: 'Pixelate',
    blurb: 'Chunky mosaic pixels.',
    params: [P('pixel size', 0.3, 10, 2.2, 0.05)],
    glsl: `
float cell = max(P0 * 0.01 * uRes.y, 1.0);
vec2 p = (floor(gl_FragCoord.xy / cell) + 0.5) * cell;
return prevAt(p / uRes);`,
  },
  {
    id: 'scanlines',
    name: 'CRT scanlines',
    blurb: 'Monitor lines, vignette and a little flicker.',
    params: [P('line size', 0.2, 3, 0.8), P('darkness', 0, 1, 0.45), P('vignette', 0, 1, 0.35), P('flicker', 0, 1, 0.15)],
    glsl: `
float lh = max(P0 * 0.01 * uRes.y, 1.5);
float l = 0.5 + 0.5 * sin(gl_FragCoord.y / lh * 6.2831853);
float fl = 1.0 + (hash12(vec2(floor(uTime * 24.0), 1.0)) - 0.5) * P3 * 0.2;
vec2 c = uv - 0.5;
float vig = 1.0 - P2 * dot(c, c) * 2.2;
return src * (1.0 - P1 * (1.0 - l)) * fl * vig;`,
  },
  {
    id: 'glitch',
    name: 'Glitch slices',
    blurb: 'Sliced rows shift sideways with an RGB split.',
    params: [P('amount', 0, 1, 0.5), P('slices', 4, 80, 24, 1), P('speed', 0, 2, 0.8), P('rgb split', 0, 3, 1)],
    glsl: `
float row = floor(uv.y * floor(P1));
float t = floor(uTime * (1.0 + P2 * 8.0));
float on = step(1.0 - 0.35 * P0 - 0.02, hash12(vec2(row, t)));
float shift = (hash12(vec2(row * 1.7, t + 3.0)) - 0.5) * 0.25 * P0 * on;
float sp = 0.01 * P3 * on * (0.3 + P0);
return vec3(prevAt(vec2(uv.x + shift + sp, uv.y)).r, prevAt(vec2(uv.x + shift, uv.y)).g, prevAt(vec2(uv.x + shift - sp, uv.y)).b);`,
  },
  {
    id: 'wave',
    name: 'Wave warp',
    blurb: 'Sine waves bend the whole image.',
    params: [P('amplitude', 0, 0.08, 0.02, 0.001), P('frequency', 1, 40, 12, 0.5), P('speed', 0, 4, 1), P('angle', 0, 180, 0, 1)],
    glsl: `
float aspect = uRes.x / uRes.y;
float a = radians(P3);
vec2 dir = vec2(cos(a), sin(a));
vec2 perp = vec2(-dir.y, dir.x);
float ph = dot((uv - 0.5) * vec2(aspect, 1.0), dir) * P1 * 6.2831853 + uTime * P2 * 3.0;
return prevAt(uv + perp * P0 * sin(ph) / vec2(aspect, 1.0));`,
  },
  {
    id: 'liquid',
    name: 'Liquid flow',
    blurb: 'Noise-driven flowing distortion.',
    params: [P('amount', 0, 0.12, 0.03, 0.001), P('scale', 0.3, 8, 2.5, 0.05), P('speed', 0, 1, 0.2)],
    glsl: `
float aspect = uRes.x / uRes.y;
vec3 p = vec3((uv - 0.5) * vec2(aspect, 1.0) * P1, uTime * P2);
vec2 d = vec2(snoise(p), snoise(p + vec3(9.1, 4.7, 0.0)));
return prevAt(uv + d * P0);`,
  },
  {
    id: 'gradientmap',
    name: 'Duotone',
    blurb: 'Map brightness onto a two-colour gradient, optionally posterized.',
    params: [P('contrast', 0.4, 3, 1.2), P('posterize steps (0 = off)', 0, 12, 0, 1), P('keep original colour', 0, 1, 0)],
    c1: { label: 'shadows', value: '#1b1340' },
    c2: { label: 'highlights', value: '#ffb347' },
    glsl: `
float t = clamp((luma(src) - 0.5) * P0 + 0.5, 0.0, 1.0);
if (P1 > 1.5) t = min(floor(t * P1), P1 - 1.0) / (P1 - 1.0);
return mix(mix(C1, C2, t), src, P2);`,
  },
  {
    id: 'neon',
    name: 'Neon glow',
    blurb: 'Glowing halo and bright edge around the letters.',
    blend: 'add',
    params: [P('radius', 0.005, 0.3, 0.08), P('intensity', 0, 3, 1.2), P('edge line', 0, 0.02, 0.004, 0.0005), P('inner glow', 0, 2, 0.3)],
    c1: { label: 'glow', value: '#ff2fb3' },
    glsl: `
float d = gdist(uv);
float r = max(P0, 1e-3);
float outer = exp(-max(d, 0.0) / r * 3.0) * P1 * step(0.0, d);
float inner = exp(min(d, 0.0) / r * 3.0) * P3 * step(d, 0.0);
float core = 1.0 - smoothstep(0.0, max(P2, fwidth(d)), abs(d));
return src + C1 * (outer * 0.7 + inner * 0.6 + core * 1.2);`,
  },
  {
    id: 'echo',
    name: 'Echo outlines',
    blurb: 'Repeating rings radiating from the letter edges.',
    params: [P('line width', 0.0005, 0.01, 0.0025, 0.0005), P('spacing', 0.01, 0.1, 0.035, 0.001), P('rings', 1, 16, 6, 1), P('fade', 0, 1, 0.7)],
    c1: { label: 'lines', value: '#ff5a36' },
    glsl: `
float d = gdist(uv);
float fd = max(fwidth(d), 1e-5);
float n = clamp(floor(d / P1 + 0.5), 1.0, floor(P2));
float m = 1.0 - smoothstep(P0 * 0.5 - fd, P0 * 0.5 + fd, abs(d - n * P1));
float alpha = (1.0 - (n - 1.0) / max(P2, 1.0) * P3) * step(0.5 * P1, d);
return mix(src, C1, m * alpha);`,
  },
  {
    id: 'shadow',
    name: 'Drop shadow',
    blurb: 'Soft shadow cast by the letters.',
    params: [P('offset x', -0.1, 0.1, 0.02, 0.001), P('offset y', -0.1, 0.1, -0.025, 0.001), P('softness', 0.001, 0.1, 0.02, 0.001), P('opacity', 0, 1, 0.55)],
    c1: { label: 'shadow', value: '#000000' },
    glsl: `
vec2 q = worldQ(uv);
float d = glyphDist(q);
float ds = glyphDist(q - vec2(P0, P1));
float outside = smoothstep(-max(fwidth(d), 1e-5), max(fwidth(d), 1e-5), d);
return mix(src, C1, (1.0 - smoothstep(-P2, P2, ds)) * outside * P3);`,
  },
  {
    id: 'gradfill',
    name: 'Gradient fill',
    blurb: 'Fills the letters with a two-colour gradient.',
    params: [P('angle', 0, 360, 90, 1), P('scale', 0.2, 6, 2.2, 0.05), P('steps (0 = smooth)', 0, 10, 0, 1), P('amount', 0, 1, 1)],
    c1: { label: 'from', value: '#ff5f6d' },
    c2: { label: 'to', value: '#ffc371' },
    glsl: `
vec2 q = worldQ(uv);
float d = glyphDist(q);
float fd = max(fwidth(d), 1e-5);
float inside = 1.0 - smoothstep(-fd, fd, d);
float a = radians(P0);
float t = clamp(dot(q, vec2(cos(a), sin(a))) * P1 + 0.5, 0.0, 1.0);
if (P2 > 1.5) t = min(floor(t * P2), P2 - 1.0) / (P2 - 1.0);
return mix(src, mix(C1, C2, t), inside * P3);`,
  },
  {
    id: 'hatch',
    name: 'Hatch fill',
    blurb: 'Pen-style hatching inside the letters.',
    params: [P('angle', 0, 180, 45, 1), P('spacing', 0.2, 4, 1.2, 0.05), P('thickness', 0.05, 0.95, 0.35), P('base fill', 0, 1, 0), P('cross-hatch', 0, 1, 0)],
    c1: { label: 'lines', value: '#111111' },
    c2: { label: 'base', value: '#f4ede0' },
    glsl: `
vec2 q = worldQ(uv);
float d = glyphDist(q);
float fd = max(fwidth(d), 1e-5);
float inside = 1.0 - smoothstep(-fd, fd, d);
float sp = max(P1 * 0.01, 0.002);
float a = radians(P0);
vec2 dir = vec2(cos(a), sin(a));
float x1 = dot(q, vec2(-dir.y, dir.x)) / sp;
float x2 = dot(q, dir) / sp;
float aa1 = max(fwidth(x1), 1e-4);
float aa2 = max(fwidth(x2), 1e-4);
float s1 = 1.0 - smoothstep(P2 * 0.5 - aa1, P2 * 0.5 + aa1, abs(fract(x1) - 0.5));
float s2 = (1.0 - smoothstep(P2 * 0.5 - aa2, P2 * 0.5 + aa2, abs(fract(x2) - 0.5))) * P4;
return mix(src, mix(mix(src, C2, P3), C1, max(s1, s2)), inside);`,
  },
  {
    id: 'bevel',
    name: 'Bevel & shine',
    blurb: 'Embossed, lit letter edges.',
    params: [P('bevel width', 0.004, 0.1, 0.03, 0.001), P('strength', 0, 4, 1.6), P('light angle', 0, 360, 135, 1), P('shine', 0, 1, 0.5)],
    glsl: `
vec2 q = worldQ(uv);
float d = glyphDist(q);
float fd = max(fwidth(d), 1e-5);
float inside = 1.0 - smoothstep(-fd, fd, d);
if (inside < 0.001) return src;
float w = max(P0, 1e-3);
float e = max(P0 * 0.15, 0.0008);
float hx = smoothstep(0.0, w, -glyphDist(q + vec2(e, 0.0))) - smoothstep(0.0, w, -glyphDist(q - vec2(e, 0.0)));
float hy = smoothstep(0.0, w, -glyphDist(q + vec2(0.0, e))) - smoothstep(0.0, w, -glyphDist(q - vec2(0.0, e)));
vec3 n = normalize(vec3(-hx * P1 * 2.0, -hy * P1 * 2.0, 1.0));
float a = radians(P2);
vec3 L = normalize(vec3(cos(a), sin(a), 0.9));
float shade = dot(n, L) - L.z;
vec3 col = src * (1.0 + shade * 0.9);
col += pow(max(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0), 24.0) * P3 * 0.6;
return mix(src, col, inside);`,
  },
  {
    id: 'vignette',
    name: 'Vignette',
    blurb: 'Darkens (or tints) the edges.',
    params: [P('strength', 0, 1, 0.6), P('radius', 0.2, 1.2, 0.75), P('softness', 0.05, 1, 0.5)],
    c1: { label: 'colour', value: '#000000' },
    glsl: `
vec2 c = (uv - 0.5) * vec2(uRes.x / uRes.y, 1.0);
return mix(src, C1, smoothstep(P1, P1 + max(P2, 0.01), length(c)) * P0);`,
  },
  {
    id: 'grain',
    name: 'Film grain',
    blurb: 'Fine noise, mono or coloured.',
    params: [P('amount', 0, 0.6, 0.18), P('size', 0.5, 6, 1.2, 0.05), P('animate', 0, 1, 1, 1), P('colour', 0, 1, 0.2)],
    glsl: `
vec2 p = floor(gl_FragCoord.xy / max(P1, 0.5));
float t = P2 > 0.5 ? floor(uTime * 24.0) * 17.0 : 0.0;
float n = hash12(p + t) - 0.5;
vec3 c = vec3(hash12(p + 3.1 + t), hash12(p + 7.7 + t), hash12(p + 11.3 + t)) - 0.5;
return src + (n * (1.0 - P3) + c * P3) * P0 * 2.0;`,
  },
  {
    id: 'kaleido',
    name: 'Kaleidoscope',
    blurb: 'Mirrors the image into repeating segments.',
    params: [P('segments', 2, 16, 6, 1), P('rotation', 0, 360, 0, 1), P('zoom', 0.3, 3, 1)],
    glsl: `
float aspect = uRes.x / uRes.y;
vec2 p = (uv - 0.5) * vec2(aspect, 1.0) / max(P2, 0.05);
float seg = 6.2831853 / max(P0, 2.0);
float ang = abs(mod(atan(p.y, p.x) + radians(P1), seg) - seg * 0.5);
vec2 p2 = length(p) * vec2(cos(ang), sin(ang));
return prevAt(clamp(p2 / vec2(aspect, 1.0) + 0.5, 0.0, 1.0));`,
  },
  {
    id: 'grid',
    name: 'Design grid',
    blurb: 'Layout grid with major lines or crosses.',
    params: [P('spacing', 1, 20, 5, 0.1), P('thickness', 0.5, 4, 1, 0.1), P('major every', 0, 10, 4, 1), P('crosses only', 0, 1, 0)],
    c1: { label: 'lines', value: '#4aa3ff' },
    glsl: `
float sp = max(P0 * 0.01 * uRes.y, 4.0);
vec2 g = gl_FragCoord.xy / sp;
vec2 f = abs(fract(g - 0.5) - 0.5) * sp;
vec2 gi = floor(g + 0.5);
vec2 major = P1 > 0.0 && P2 > 0.5 ? step(mod(gi, max(P2, 1.0)), vec2(0.5)) : vec2(0.0);
vec2 th = P1 * 0.5 * (uRes.y / 800.0) * (1.0 + major);
vec2 l = 1.0 - smoothstep(th - 0.5, th + 0.5, f);
float m = mix(max(l.x, l.y), l.x * l.y, P3);
return mix(src, C1, m);`,
  },
];

export const effectById = (id: string): EffectDef | undefined => effectDefs.find((d) => d.id === id);

export function newLayer(def: EffectDef): EffectLayer {
  return {
    id: def.id,
    on: true,
    opacity: 1,
    blend: def.blend ?? 'normal',
    p: def.params.map((p) => p.value),
    c1: def.c1?.value ?? '#ffffff',
    c2: def.c2?.value ?? '#000000',
  };
}

/** Fragment shader for one effect pass: samples the layer below, runs the effect, blends the result. */
export function effectFragmentShader(def: EffectDef): string {
  return /* glsl */ `
precision highp float;

uniform vec2 uRes;
uniform sampler2D uPrev;
uniform float uOpacity;
uniform int uLayerBlend;
uniform vec4 uA;
uniform vec4 uB;
uniform vec3 uC1;
uniform vec3 uC2;
${glyphGLSL}

#define P0 uA.x
#define P1 uA.y
#define P2 uA.z
#define P3 uA.w
#define P4 uB.x
#define P5 uB.y
#define P6 uB.z
#define P7 uB.w
#define C1 uC1
#define C2 uC2

float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 rot2(vec2 v, float a) { return vec2(cos(a) * v.x - sin(a) * v.y, sin(a) * v.x + cos(a) * v.y); }
vec3 prevAt(vec2 uv) { return texture(uPrev, uv).rgb; }
vec2 worldQ(vec2 uv) { return (uv - 0.5) * uRes / min(uRes.x, uRes.y); }
float gdist(vec2 uv) { return glyphDist(worldQ(uv)); }

vec3 blendMode(vec3 b, vec3 t, int m) {
  if (m == 1) return min(b + t, 1.0);
  if (m == 2) return b * t;
  if (m == 3) return 1.0 - (1.0 - b) * (1.0 - t);
  if (m == 4) return mix(2.0 * b * t, 1.0 - 2.0 * (1.0 - b) * (1.0 - t), step(0.5, b));
  if (m == 5) return abs(b - t);
  return t;
}

vec3 effect(vec2 uv, vec3 src) {
${def.glsl}
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec3 src = prevAt(uv);
  vec3 fx = effect(uv, src);
  gl_FragColor = vec4(mix(src, clamp(blendMode(src, fx, uLayerBlend), 0.0, 1.0), uOpacity), 1.0);
}
`;
}
