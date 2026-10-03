export const vertexShader = /* glsl */ `
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

export const fragmentShader = /* glsl */ `
precision highp float;

uniform vec2 uRes;
uniform float uTime;
uniform sampler2D uFrom;
uniform sampler2D uTo;
uniform float uMorph;

uniform int uMode;          // 0 offset lines, 1 mountain, 2 basin
uniform float uSize;        // glyph texture extent, in short-side units
uniform float uInfluence;   // how far the glyph reshapes the land
uniform float uSlope;       // glyph height gradient
uniform float uWobble;      // terrain amplitude kept at the glyph edge (0..1)
uniform float uRough;
uniform float uFreq;
uniform float uWarp;
uniform float uDrift;
uniform float uSeed;
uniform float uSpacing;
uniform float uLineW;
uniform float uTint;
uniform float uShade;
uniform float uGrain;
uniform float uFill;

uniform vec3 uPaper;
uniform vec3 uInk;
uniform vec3 uIndex;
uniform vec3 uLow;
uniform vec3 uMid;
uniform vec3 uHigh;

// --- simplex noise 3D (Ashima / Ian McEwan, MIT) ---
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float fbm(vec3 p) {
  float a = 0.5;
  float s = 0.0;
  for (int i = 0; i < 5; i++) {
    s += a * snoise(p);
    p = p * 2.03 + vec3(17.1, 3.7, 0.0);
    a *= 0.5;
  }
  return s;
}

float terrain(vec2 q) {
  vec3 p = vec3(q * uFreq + uSeed * 13.7, uTime * uDrift);
  vec2 w = vec2(snoise(p + vec3(5.2, 1.3, 0.0)), snoise(p + vec3(1.7, 9.2, 0.0)));
  p.xy += w * uWarp;
  return fbm(p) * 0.5 + 0.5;
}

// Signed distance to the glyph in short-side units (positive outside).
float glyphDist(vec2 q) {
  vec2 uv = q / uSize + 0.5;
  vec2 c = clamp(uv, 0.0, 1.0);
  float d = mix(texture(uFrom, c).r, texture(uTo, c).r, uMorph);
  d += length(uv - c); // continue the field past the texture border
  return d * uSize;
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

vec3 ramp(float t) {
  return t < 0.5 ? mix(uLow, uMid, t * 2.0) : mix(uMid, uHigh, t * 2.0 - 1.0);
}

float lineMask(float dist, float fw, float widthPx) {
  return clamp(widthPx * 0.5 - dist / max(fw, 1e-6) + 0.5, 0.0, 1.0);
}

void main() {
  vec2 q = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);

  float d = glyphDist(q);
  float w = 1.0 - smoothstep(0.0, uInfluence, max(d, 0.0));
  float g = uMode == 0 ? abs(d) : (uMode == 1 ? -d : d);
  float amp = mix(1.0, uWobble, w);
  float H = terrain(q) * uRough * amp + g * uSlope * w;

  float v = H / uSpacing;
  float fw = fwidth(v);
  float dist = abs(fract(v - 0.5) - 0.5);
  float band = floor(v + 0.5);
  float isIndex = step(mod(band, 5.0), 0.5);

  // hypsometric tint, banded per index interval
  float Hq = floor(v / 5.0) * 5.0 * uSpacing;
  float tn = smoothstep(-0.15, uRough + 0.2, Hq);
  vec3 col = mix(uPaper, ramp(tn), uTint);

  // hillshade from screen-space slope
  vec2 grad = vec2(dFdx(H), dFdy(H)) * uRes.y * 0.8;
  vec3 n = normalize(vec3(-grad, 1.0));
  vec3 L = normalize(vec3(-0.5, 0.6, 0.7));
  col += (dot(n, L) - L.z) * uShade;

  // glyph fill
  float fd = max(fwidth(d), 1e-6);
  float inside = 1.0 - smoothstep(-fd, fd, d);
  col = mix(col, uIndex, inside * uFill);

  // contours
  float minor = lineMask(dist, fw, uLineW);
  float major = lineMask(dist, fw, uLineW * 2.2);
  col = mix(col, uInk, minor * (1.0 - isIndex) * 0.9);
  col = mix(col, uIndex, major * isIndex);

  col += (hash(gl_FragCoord.xy) - 0.5) * uGrain;
  gl_FragColor = vec4(col, 1.0);
}
`;
