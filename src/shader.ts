const MAX_GLYPHS_GLSL = 8;

// simplex noise, used by the terrain and by the letter warp
const noiseGLSL = /* glsl */ `
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

`;

// All glyphs combined: distance to the nearest one, in short-side units (positive outside).
// Letters can be moved, rotated, skewed, stretched, softened, grown, warped and smoothly fused.
export const glyphGLSL = /* glsl */ `
#define MAXG ${MAX_GLYPHS_GLSL}
uniform float uTime;
uniform highp sampler2DArray uFromArr;
uniform highp sampler2DArray uToArr;
uniform int uCount;
uniform vec2 uGPos[MAXG];
uniform float uGSize[MAXG];
uniform float uGMorph[MAXG];
uniform vec4 uGXform[MAXG];   // inverse linear map (rotate/skew/stretch), row-major
uniform float uBlend;         // smooth-union radius between letters (shared)
uniform float uShapeWarpScale;
uniform float uShapeWarpSpeed;
uniform float uGSoft[MAXG];   // per glyph: corner softening
uniform float uGGrow[MAXG];   // per glyph: weight, >0 fatter, <0 thinner (short-side units)
uniform float uGWarp[MAXG];   // per glyph: noise warp of the letterform
uniform float uGOut[MAXG];    // per glyph: outline thickness in short-side units (0 = solid fill)
uniform vec3 uGFill[MAXG];    // per glyph: fill colour
uniform vec3 uGStroke[MAXG];  // per glyph: outline colour
uniform float uGOp[MAXG];     // per glyph: opacity
uniform highp sampler2DArray uImgArr; // colour pixels of imported images, one layer per glyph (premultiplied)
uniform float uGImg[MAXG];    // per glyph: 1 = draw the image's own colours
uniform int uGOrder[MAXG];    // glyph indices from back to front
${noiseGLSL}

float sampleGlyph(int i, vec2 c) {
  vec3 p = vec3(c, float(i));
  return mix(texture(uFromArr, p).r, texture(uToArr, p).r, uGMorph[i]);
}

// Where world point q lands in glyph i's own texture space (after warp, move, rotate, skew and stretch).
vec2 glyphUV(int i, vec2 q) {
  if (uGWarp[i] > 0.001) {
    vec3 wp = vec3(q * uShapeWarpScale + 3.7 + float(i) * 1.7, uTime * uShapeWarpSpeed);
    q += uGWarp[i] * 0.05 * vec2(snoise(wp), snoise(wp + vec3(7.1, 3.3, 0.0)));
  }
  vec4 m = uGXform[i];
  vec2 pp = (q - uGPos[i]) / uGSize[i];
  return vec2(m.x * pp.x + m.y * pp.y, m.z * pp.x + m.w * pp.y) + 0.5;
}

float glyphOne(int i, vec2 q) {
  float sz = uGSize[i];
  vec2 uv = glyphUV(i, q);
  vec2 c = clamp(uv, 0.0, 1.0);
  float d;
  if (uGSoft[i] > 0.001) {
    // averaging the distance field rounds corners and fills thin gaps
    float r = uGSoft[i] * 0.04;
    d = 0.4 * sampleGlyph(i, c)
      + 0.15 * (sampleGlyph(i, clamp(c + vec2(r, 0.0), 0.0, 1.0)) + sampleGlyph(i, clamp(c - vec2(r, 0.0), 0.0, 1.0))
              + sampleGlyph(i, clamp(c + vec2(0.0, r), 0.0, 1.0)) + sampleGlyph(i, clamp(c - vec2(0.0, r), 0.0, 1.0)));
  } else {
    d = sampleGlyph(i, c);
  }
  d += length(uv - c); // continue the field past the texture border
  return d * sz - uGGrow[i];
}

float smin(float a, float b, float k) {
  float h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}

float glyphDist(vec2 q) {
  float k = uBlend * 0.25;
  float best = 1e3;
  for (int i = 0; i < MAXG; i++) {
    if (i >= uCount) break;
    float d = glyphOne(i, q);
    best = k > 0.0001 ? smin(best, d, k) : min(best, d);
  }
  return best;
}

// What is drawn for the letters at this pixel: rgb = colour, a = coverage * opacity. Solid glyphs are filled with
// their own colour (where glyphs fuse, colours cross-fade by closeness), outlined glyphs keep a band of thickness
// uGOut just inside their edge in their outline colour. cover = coverage regardless of opacity.
// imgFrac = how much of the fill is an imported picture.
// (Distance queries elsewhere still use the whole letter shape.)
vec4 glyphPaint(vec2 q, out float cover, out float imgFrac) {
  float k = uBlend * 0.25;
  float best = 1e3;
  float ringCover = 0.0;
  vec3 rgbP = vec3(0.0); // premultiplied, composited back to front
  float aT = 0.0;
  float imgA = 0.0;
  for (int r = 0; r < MAXG; r++) {
    if (r >= uCount) break;
    int i = uGOrder[r];
    float d = glyphOne(i, q);
    float fd = max(fwidth(d), 1e-6);
    vec3 c;
    float a;
    float isImg = 0.0;
    if (uGOut[i] > 0.0) {
      float ring = smoothstep(-fd, fd, d + uGOut[i]) * (1.0 - smoothstep(-fd, fd, d));
      a = ring * uGOp[i];
      c = uGStroke[i];
      ringCover = max(ringCover, ring);
    } else {
      best = k > 0.0001 ? smin(best, d, k) : min(best, d);
      a = (1.0 - smoothstep(-fd, fd, d)) * uGOp[i];
      c = uGFill[i];
      if (uGImg[i] > 0.5) {
        // imported picture: its own colours (stored premultiplied, so edges do not pick up a dark fringe)
        vec4 t = texture(uImgArr, vec3(clamp(glyphUV(i, q), 0.0, 1.0), float(i)));
        c = t.rgb / max(t.a, 1e-3);
        isImg = 1.0;
      }
    }
    rgbP = rgbP * (1.0 - a) + c * a;
    imgA = imgA * (1.0 - a) + isImg * a;
    aT = aT + a * (1.0 - aT);
  }
  float fdF = max(fwidth(best), 1e-6);
  cover = max(1.0 - smoothstep(-fdF, fdF, best), ringCover);
  imgFrac = imgA / max(aT, 1e-5); // share of the paint that comes from pictures (drawn above the contour lines)
  return vec4(rgbP / max(aT, 1e-5), aT);
}
`;

export const vertexShader = /* glsl */ `
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

export const fragmentShader = /* glsl */ `
precision highp float;

uniform vec2 uRes;
${glyphGLSL}
uniform int uMode;          // 0 offset lines, 1 mountain, 2 basin
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
uniform sampler2D uMask;   // detail layer: white where contour lines are knocked out
uniform float uMaskOn;
uniform float uOutputH;    // 1 = write the raw height field (for CPU contour tracing)
uniform int uLook;         // 0 topographic, 1 ridgeline, 2 op-art bands, 3 mosaic, 4 warped grid (5 = particle sea, drawn by its own passes)
uniform float uLookA;      // look-specific sliders (see lookDefs in main.ts)
uniform float uLookB;
uniform float uLookC;
uniform float uLookD;
uniform sampler2D uHeightTex; // height field, half resolution (ridgeline only)

uniform vec3 uPaper;
uniform vec3 uInk;
uniform vec3 uIndex;
uniform vec3 uLow;
uniform vec3 uMid;
uniform vec3 uHigh;

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

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

vec2 hash22(vec2 p) {
  return vec2(hash(p), hash(p + 19.19));
}

vec3 ramp(float t) {
  return t < 0.5 ? mix(uLow, uMid, t * 2.0) : mix(uMid, uHigh, t * 2.0 - 1.0);
}

float lineMask(float dist, float fw, float widthPx) {
  return clamp(widthPx * 0.5 - dist / max(fw, 1e-6) + 0.5, 0.0, 1.0);
}

// The landscape: terrain, reshaped around the letters. Also returns the distance to the letters.
float fieldAt(vec2 q, out float d) {
  d = glyphDist(q);
  float w = 1.0 - smoothstep(0.0, uInfluence, max(d, 0.0));
  float g = uMode == 0 ? abs(d) : (uMode == 1 ? -d : d);
  float amp = mix(1.0, uWobble, w);
  return terrain(q) * uRough * amp + g * uSlope * w;
}

float toneOf(float H) {
  return smoothstep(-0.15, uRough + 0.2, H);
}

// ---- look 0: topographic contour map
vec3 lookTopo(float d, float H) {
  float v = H / uSpacing;
  float fw = fwidth(v);
  float dist = abs(fract(v - 0.5) - 0.5);
  float band = floor(v + 0.5);
  float isIndex = step(mod(band, 5.0), 0.5);

  // hypsometric tint, banded per index interval
  float Hq = floor(v / 5.0) * 5.0 * uSpacing;
  vec3 col = mix(uPaper, ramp(toneOf(Hq)), uTint);

  // hillshade from screen-space slope
  vec2 grad = vec2(dFdx(H), dFdy(H)) * uRes.y * 0.8;
  vec3 n = normalize(vec3(-grad, 1.0));
  vec3 L = normalize(vec3(-0.5, 0.6, 0.7));
  col += (dot(n, L) - L.z) * uShade;

  // glyph fill (or outline)
  float cv;
  float imf;
  vec4 gp = glyphPaint((gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y), cv, imf);
  col = mix(col, gp.rgb, gp.a * (1.0 - imf));

  // contours
  float minor = lineMask(dist, fw, uLineW);
  float major = lineMask(dist, fw, uLineW * 2.2);
  float knock = uMaskOn > 0.5 ? 1.0 - texture(uMask, gl_FragCoord.xy / uRes).r : 1.0;
  minor *= knock;
  major *= knock;
  col = mix(col, uInk, minor * (1.0 - isIndex) * 0.9);
  col = mix(col, uIndex, major * isIndex);
  col = mix(col, gp.rgb, gp.a * imf); // pictures sit on top of the contour lines
  return col;
}

// ---- look 1: ridgeline. Horizontal lines pushed up by the terrain, front lines hide the ones behind.
vec3 lookRidge(vec2 fc) {
  const int K = 12;
  float rows = max(uLookA, 4.0);
  float S = uRes.y / rows;                       // row spacing in px
  float scale = uLookB * uRes.y * 0.35;           // px of lift per unit of height
  float k0 = floor(fc.y / S);
  vec3 ink = uIndex;
  vec3 col = uPaper;
  for (int j = K; j >= -K; j--) {                // back (top) to front (bottom)
    float rk = (k0 + float(j) + 0.5) * S;
    vec2 hd = texture(uHeightTex, vec2(fc.x / uRes.x, rk / uRes.y)).rg; // height, distance to the letters
    float h = hd.x + uLookC * 0.25 * (1.0 - smoothstep(-0.015, 0.015, hd.y)); // letters rise as plateaus
    float yk = rk + clamp(h * scale, -float(K) * S, float(K) * S);
    if (fc.y < yk) col = uPaper;                  // hide whatever is behind this line
    float sl = abs(dFdx(yk));
    float m = lineMask(abs(fc.y - yk) / sqrt(1.0 + sl * sl), 1.0, max(uLineW * 1.4, 1.0));
    col = mix(col, ink, m);
  }
  return col;
}

// ---- look 2: op-art bands. The height field as bold alternating two-tone bands.
vec3 lookBands(float H) {
  float v = H / uSpacing;
  float tri = abs(fract(v * 0.5) - 0.5) * 2.0;    // triangle wave, one period per two bands
  float aa = max(fwidth(tri), 1e-4);
  float m = smoothstep(uLookA - aa, uLookA + aa, tri);
  vec3 light = mix(uPaper, ramp(toneOf(floor(v) * uSpacing)), uTint);
  return mix(light, uInk, m);
}

// ---- look 3: mosaic. Voronoi tiles coloured by the height at their centre; denser near the letters.
vec3 lookMosaic(vec2 q, float d) {
  float w = 1.0 - smoothstep(0.0, uInfluence, max(d, 0.0));
  float dens = uLookA * (1.0 + uLookB * w);
  vec2 p = q * dens;
  vec2 ip = floor(p);
  vec2 fp = fract(p);
  float F1 = 8.0;
  float F2 = 8.0;
  vec2 cell = vec2(0.0);
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 o = hash22(ip + g + uSeed);
      o = 0.5 + 0.5 * sin(6.2831853 * o + uTime * 0.3);
      vec2 r = g + o - fp;
      float dd = dot(r, r);
      if (dd < F1) { F2 = F1; F1 = dd; cell = ip + g + o; }
      else if (dd < F2) { F2 = dd; }
    }
  }
  float dc;
  float Hc = fieldAt(cell / dens, dc);
  float tone = clamp(toneOf(Hc) + (hash(cell) - 0.5) * 0.4, 0.0, 1.0);
  vec3 col = mix(uPaper, ramp(tone), 0.35 + 0.65 * uTint);
  col = mix(col, uIndex, smoothstep(0.45, 1.0, tone) * 0.75); // tall tiles lean towards the accent colour
  float edge = sqrt(F2) - sqrt(F1);
  float wc = 0.04 * uLookC * max(uLineW, 0.3);
  float aa = max(fwidth(edge), 1e-4);
  float grout = 1.0 - smoothstep(wc * 0.5 - aa, wc * 0.5 + aa, edge);
  return mix(col, uInk, grout * 0.9);
}

// ---- look 4: warped grid. A layout grid bent like a lens around the letters (with a hint of terrain).
float lensField(vec2 q) {
  float d = glyphDist(q);
  float w = 1.0 - smoothstep(0.0, uInfluence, max(d, 0.0));
  float g = uMode == 0 ? abs(d) : (uMode == 1 ? -d : d);
  return g * w + 0.08 * terrain(q) * uRough;
}

vec3 lookGrid(vec2 q, float H) {
  float e = 0.02;
  float L0 = lensField(q);
  vec2 grad = vec2(lensField(q + vec2(e, 0.0)) - L0, lensField(q + vec2(0.0, e)) - L0) / e;
  vec2 disp = grad * uLookB * 0.012;
  disp *= min(1.0, 0.12 / max(length(disp), 1e-4));
  vec2 p = (q - disp) * uLookA;
  vec2 gp = abs(fract(p - 0.5) - 0.5);
  vec2 fw = fwidth(p);
  vec2 idx = floor(p + 0.5);
  vec2 isMajor = step(mod(idx, 5.0), vec2(0.5));
  float lx = lineMask(gp.x, fw.x, uLineW * (1.0 + isMajor.x));
  float ly = lineMask(gp.y, fw.y, uLineW * (1.0 + isMajor.y));
  vec3 col = mix(uPaper, ramp(toneOf(H)), uTint * 0.8);
  float m = max(lx, ly);
  float major = max(lx * isMajor.x, ly * isMajor.y);
  col = mix(col, uInk, m * 0.85);
  return mix(col, uIndex, major);
}

void main() {
  vec2 q = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);

  float d;
  float H = fieldAt(q, d);
  if (uOutputH > 0.5) {
    gl_FragColor = vec4(H, d, 0.0, 1.0); // height + distance to the glyphs
    return;
  }

  vec3 col;
  if (uLook == 1) col = lookRidge(gl_FragCoord.xy);
  else if (uLook == 2) col = lookBands(H);
  else if (uLook == 3) col = lookMosaic(q, d);
  else if (uLook == 4) col = lookGrid(q, H);
  else col = lookTopo(d, H);

  if (uLook != 0) {
    // the letters' fill sits on top of the other looks
    float cv;
    float imf;
    vec4 gp = glyphPaint(q, cv, imf);
    col = mix(col, gp.rgb, gp.a);
  }

  col += (hash(gl_FragCoord.xy) - 0.5) * uGrain;
  gl_FragColor = vec4(col, 1.0);
}
`;

// Final pass: composites the detail layer over the map, then applies a glass overlay
// (barrel distortion, chromatic aberration towards the corners, sheen and edge light).
// The main letters are excluded so they stay crisp and undistorted.
export const postFragmentShader = /* glsl */ `
precision highp float;

uniform vec2 uRes;
uniform sampler2D uScene;
uniform sampler2D uOverlay;
uniform float uOverlayOn;
uniform sampler2D uBlurTex; // background blurred without the glyph areas (premultiplied)
uniform float uBlur;
uniform float uGlass;
uniform float uGlassLight; // scales the additive light: sheen, rim and edge line
${glyphGLSL}

vec3 sceneAt(vec2 uv) {
  vec3 c = texture(uScene, uv).rgb;
  if (uOverlayOn > 0.5) {
    vec4 o = texture(uOverlay, uv);
    c = mix(c, o.rgb, o.a);
  }
  return c;
}

float blurMix() {
  return smoothstep(0.0, 0.08, uBlur);
}

vec3 bgAt(vec2 uv) {
  vec3 s = sceneAt(uv);
  if (uBlur > 0.001) {
    vec4 b = texture(uBlurTex, uv);
    s = mix(s, b.rgb / max(b.a, 0.02), blurMix());
  }
  return s;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec3 sharp = sceneAt(uv);
  if (uGlass < 0.001 && uBlur < 0.001) {
    gl_FragColor = vec4(sharp, 1.0);
    return;
  }

  // glyph areas stay sharp: always with blur, fading in with the letter fill for the glass alone
  vec2 q = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);
  float cv;
  float imf;
  vec4 gp = glyphPaint(q, cv, imf);
  float excl = mix(clamp(gp.a * 4.0, 0.0, 1.0), cv, blurMix());

  vec3 col;
  if (uGlass < 0.001) {
    col = bgAt(uv);
  } else {
    float aspect = uRes.x / uRes.y;
    vec2 c = uv - 0.5;
    vec2 cp = c * vec2(aspect, 1.0);                       // isotropic coordinates
    float r = length(cp) / length(vec2(aspect, 1.0) * 0.5); // 0 centre .. 1 corners
    float r2 = r * r;

    // barrel distortion: corners sample slightly inwards, so no empty borders appear
    vec2 uvd = 0.5 + c * (1.0 - uGlass * 0.06 * r2);

    // chromatic aberration: spectral smear along the radial direction, strongest in the corners
    vec2 dir = normalize(cp + 1e-5) / vec2(aspect, 1.0);
    float off = uGlass * 0.016 * pow(r, 2.4);
    vec3 acc = vec3(0.0);
    vec3 wsum = vec3(0.0);
    for (int i = 0; i < 7; i++) {
      float t = float(i) / 6.0;
      vec3 w = vec3(smoothstep(0.3, 1.0, t), max(0.0, 1.0 - abs(t - 0.5) * 2.5), smoothstep(0.7, 0.0, t));
      acc += bgAt(uvd + dir * off * (t - 0.5) * 2.0) * w;
      wsum += w;
    }
    col = acc / wsum;

    // glass: soft diagonal sheen, brighter rim towards the corners, thin edge light, faint cool tint
    float diag = dot(c, normalize(vec2(0.7, 1.0)));
    float sheen = exp(-pow((diag - 0.12) * 5.5, 2.0)) * 0.09 + exp(-pow((diag + 0.24) * 14.0, 2.0)) * 0.045;
    float rim = smoothstep(0.55, 1.0, r);
    float edgePx = min(min(uv.x, 1.0 - uv.x) * uRes.x, min(uv.y, 1.0 - uv.y) * uRes.y);
    float edge = 1.0 - smoothstep(0.0, 2.5 * uRes.y / 800.0, edgePx);
    col *= mix(vec3(1.0), vec3(0.96, 0.99, 1.03), 0.5 * uGlass);
    col *= 1.0 - rim * 0.12 * uGlass;
    col += uGlass * uGlassLight * (sheen + rim * 0.06 + edge * 0.16);
  }

  gl_FragColor = vec4(mix(col, sharp, excl), 1.0);
}
`;

// ---- background blur: composite + glyph mask -> half res, box down to quarter res, separable gaussian.
// Colours are premultiplied by "not inside a glyph", so the glyphs never bleed into the blurred background.

export const blurDownFragmentShader = /* glsl */ `
precision highp float;

uniform vec2 uRes;     // full-size buffer
uniform vec2 uOutRes;  // size of the target being rendered
uniform sampler2D uScene;
uniform sampler2D uOverlay;
uniform float uOverlayOn;
${glyphGLSL}

vec3 sceneAt(vec2 uv) {
  vec3 c = texture(uScene, uv).rgb;
  if (uOverlayOn > 0.5) {
    vec4 o = texture(uOverlay, uv);
    c = mix(c, o.rgb, o.a);
  }
  return c;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uOutRes;
  vec2 px = 0.5 / uRes;
  vec3 c = 0.25 * (sceneAt(uv + px * vec2(-1.0, -1.0)) + sceneAt(uv + px * vec2(1.0, -1.0))
                 + sceneAt(uv + px * vec2(-1.0, 1.0)) + sceneAt(uv + px * vec2(1.0, 1.0)));
  float m = min(uRes.x, uRes.y);
  float d = glyphDist((uv - 0.5) * uRes / m);
  // 1 outside, 0 inside; the mask is grown a little so glyph edge pixels never leak into the blur
  float a = smoothstep(-2.0 / m, 2.0 / m, d - 3.0 / m);
  gl_FragColor = vec4(c * a, a);
}
`;

export const blurBoxFragmentShader = /* glsl */ `
precision highp float;

uniform sampler2D uSrc;
uniform vec2 uSrcRes;
uniform vec2 uOutRes;

void main() {
  vec2 uv = gl_FragCoord.xy / uOutRes;
  vec2 px = 0.5 / uSrcRes;
  gl_FragColor = 0.25 * (texture(uSrc, uv + px * vec2(-1.0, -1.0)) + texture(uSrc, uv + px * vec2(1.0, -1.0))
                       + texture(uSrc, uv + px * vec2(-1.0, 1.0)) + texture(uSrc, uv + px * vec2(1.0, 1.0)));
}
`;

export const blurFragmentShader = /* glsl */ `
precision highp float;

uniform sampler2D uSrc;
uniform vec2 uOutRes;
uniform vec2 uDir;     // (1,0) or (0,1)
uniform float uSigma;  // in texels of this target

void main() {
  vec2 uv = gl_FragCoord.xy / uOutRes;
  float stride = max(1.0, uSigma / 4.0);
  vec4 acc = vec4(0.0);
  float wsum = 0.0;
  for (int i = -12; i <= 12; i++) {
    float x = float(i) * stride;
    float w = exp(-0.5 * x * x / max(uSigma * uSigma, 1e-4));
    acc += texture(uSrc, uv + uDir * x / uOutRes) * w;
    wsum += w;
  }
  gl_FragColor = acc / wsum;
}
`;

// Copies the map with the detail layer on top; the start of the effect stack.
export const compositeFragmentShader = /* glsl */ `
precision highp float;

uniform vec2 uRes;
uniform sampler2D uScene;
uniform sampler2D uOverlay;
uniform float uOverlayOn;

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec3 c = texture(uScene, uv).rgb;
  if (uOverlayOn > 0.5) {
    vec4 o = texture(uOverlay, uv);
    c = mix(c, o.rgb, o.a);
  }
  gl_FragColor = vec4(c, 1.0);
}
`;


// ---- Particle sea. State texture: position (xy, world units, short side = 1) and velocity (zw), one texel per particle.
export const particleInitFragmentShader = /* glsl */ `
precision highp float;
uniform float uSeed;
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
void main() {
  vec2 ij = floor(gl_FragCoord.xy);
  gl_FragColor = vec4((hash(ij + uSeed) - 0.5) * 2.6, hash(ij + 17.3 + uSeed) - 0.5, 0.0, 0.0);
}
`;

export const particleSimFragmentShader = /* glsl */ `
precision highp float;

uniform sampler2D uState;
uniform vec2 uOutRes;
uniform float uDt;
uniform float uAspect;
uniform float uLookB;      // current speed
uniform float uLookC;      // letters: attract (<0) .. repel (>0)
uniform float uLookD;      // slide along the letter edges
uniform float uDrift;      // how fast the current itself evolves
uniform float uSeed;
uniform float uFreq;       // size of the swells
uniform float uWarp;       // turbulence
uniform float uInfluence;  // how far from the letters they are felt
${glyphGLSL}

const float LIFE = 9.0;
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float psi(vec2 p, float t) {
  vec3 q = vec3(p * uFreq * 1.1 + uSeed * 3.1, t);
  return snoise(q) + 0.5 * snoise(vec3(q.xy * 2.1 + 7.3, q.z * 1.4));
}

// the sea's own current: steady drift + rolling swells + curl-noise eddies (divergence free)
vec2 current(vec2 p, float t) {
  float S = uLookB;
  vec2 v = vec2(0.22 * S, 0.0);
  v.y += 0.07 * S * sin(p.x * uFreq * 2.4 - t * 1.3 + uSeed);   // rolling swell (depends on x only, so it never squeezes particles)
  float e = 0.012 / max(uFreq, 0.2);
  float tt = t * uDrift * 3.0;
  vec2 g = vec2(psi(p + vec2(0.0, e), tt) - psi(p - vec2(0.0, e), tt),
               -(psi(p + vec2(e, 0.0), tt) - psi(p - vec2(e, 0.0), tt))) / (2.0 * e);
  v += g * S * 0.035 * (0.4 + uWarp);
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uOutRes;
  vec4 st = texture(uState, uv);
  vec2 p = st.xy;
  vec2 vel = st.zw;
  float t = uTime;

  float R = max(uInfluence, 0.06);
  float d = glyphDist(p);
  float e = 0.004;
  vec2 n = vec2(glyphDist(p + vec2(e, 0.0)) - d, glyphDist(p + vec2(0.0, e)) - d);
  n /= max(length(n), 1e-5);
  vec2 tang = vec2(-n.y, n.x);

  vec2 target = current(p, t);
  float k = 1.0 - smoothstep(0.0, R, max(d, 0.0));          // closeness to a letter
  float push = abs(uLookC);

  // letters are obstacles: remove the part of the current that runs into them, slide along the edge instead
  float into = min(dot(target, n), 0.0);
  target -= n * into * k * (0.35 + 0.65 * push);
  float sgn = dot(target, tang) >= 0.0 ? 1.0 : -1.0;
  target += tang * sgn * uLookD * k * length(target) * 1.2;

  // repel (or attract) in a soft shell around the edge; inside a letter, eject (or hold) firmly
  // (a thin hard edge keeps each letter a crisp shape; the wider range above only bends the current)
  float edge = 1.0 - smoothstep(0.0, 0.008 + 0.014 * push, max(d, 0.0));
  target += n * uLookC * (edge * edge * 0.5 + step(d, 0.0) * 0.6);
  target += n * min(uLookC, 0.0) * k * 0.3;                          // attract: a long-range pull towards the letters
  if (d < 0.0 && uLookC < 0.0) target = target * mix(1.0, 0.1, push);   // ...and dots settle once inside

  float follow = min(1.0, uDt * (2.5 + 5.0 * k));
  vel += (target - vel) * follow;
  p += vel * uDt;

  // the sea has no edges: wrap around
  float A = uAspect * 0.5 + 0.04;
  p.x = mod(p.x + A, 2.0 * A) - A;
  p.y = mod(p.y + 0.54, 1.08) - 0.54;

  // every particle lives LIFE seconds (at its own phase), then is reborn somewhere random: keeps the sea evenly filled
  vec2 ij = floor(gl_FragCoord.xy);
  float ph = t / LIFE + hash(ij + 91.0);
  if (uDt > 0.0 && floor(ph) != floor(ph - uDt / LIFE)) {
    float gen = floor(ph);
    p = vec2((hash(ij + gen * 13.1) - 0.5) * (uAspect + 0.08), hash(ij + gen * 7.7 + 3.0) - 0.5);
    vel = vec2(0.0);
  }
  gl_FragColor = vec4(p, vel);
}
`;

export const particlePointVertexShader = /* glsl */ `
precision highp float;
uniform sampler2D uState;
uniform vec2 uRes;
uniform float uPx;
uniform float uTime;
uniform float uSide;
attribute vec2 ref;
varying float vB;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec4 st = texture(uState, ref);
  float aspect = uRes.x / uRes.y;
  gl_Position = vec4(st.x / (aspect * 0.5), st.y / 0.5, 0.0, 1.0);
  float h = hash(ref * 977.0);
  float speed = length(st.zw);
  float age = fract(uTime / 9.0 + hash(floor(ref * uSide) + 91.0)) * 9.0;     // same phase as the simulation
  float fade = smoothstep(0.0, 0.9, age) * (1.0 - smoothstep(8.1, 9.0, age));
  vB = (0.35 + 0.65 * h) * (0.7 + 0.3 * smoothstep(0.0, 0.2, speed)) * fade;
  gl_PointSize = max(1.0, uPx * (0.65 + 0.7 * hash(ref * 31.7 + 5.0)));
}
`;

export const particlePointFragmentShader = /* glsl */ `
precision highp float;
uniform vec3 uDotColor;
varying float vB;
void main() {
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float a = 1.0 - smoothstep(0.55, 1.0, r);
  gl_FragColor = vec4(uDotColor, a * vB);
}
`;

// Particle sea backdrop: paper colour with the letters filled in underneath the particles.
// Paper (or the chosen background) plus the letters. Used as the canvas base, and inside particle-sea layers.
export const seaBackdropFragmentShader = /* glsl */ `
precision highp float;
uniform vec2 uRes;
uniform vec3 uPaper;
uniform float uPattern;     // 1 = draw the canvas background (colour + pattern), 0 = plain palette paper
uniform vec3 uBgColor;
uniform vec3 uBgLine;
uniform int uBgType;        // 0 solid, 1 grid, 2 horizontal, 3 vertical, 4 dots, 5 diagonal
uniform float uBgSpacing;   // share of the short side
uniform float uBgWeight;    // px
uniform float uBgStrength;
uniform float uGrain;
${glyphGLSL}
float bgLine(float v, float period) {
  float d = abs(fract(v / period - 0.5) - 0.5) * period;
  return clamp(uBgWeight * 0.5 - d + 0.5, 0.0, 1.0);
}
void main() {
  vec2 q = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);
  vec3 base = uPattern > 0.5 ? uBgColor : uPaper;
  if (uPattern > 0.5 && uBgType > 0) {
    float period = max(uBgSpacing * min(uRes.x, uRes.y), 3.0);
    vec2 p = gl_FragCoord.xy;
    float m = 0.0;
    if (uBgType == 1) m = max(bgLine(p.x, period), bgLine(p.y, period));
    else if (uBgType == 2) m = bgLine(p.y, period);
    else if (uBgType == 3) m = bgLine(p.x, period);
    else if (uBgType == 5) m = bgLine((p.x + p.y) * 0.70710678, period);
    else {
      vec2 c = (floor(p / period) + 0.5) * period;
      m = clamp(uBgWeight * 1.2 - length(p - c) + 0.5, 0.0, 1.0);
    }
    base = mix(base, uBgLine, m * uBgStrength);
  }
  float cv;
  float imf;
  vec4 gp = glyphPaint(q, cv, imf);
  vec3 col = mix(base, gp.rgb, gp.a);
  col += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * uGrain;
  gl_FragColor = vec4(col, 1.0);
}
`;
