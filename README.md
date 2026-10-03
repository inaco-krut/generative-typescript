# Typographic Topography

A browser-based generative design tool (TypeScript + Three.js/WebGL). Type a character in a chosen font and a
topographic contour map reshapes itself around it.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173 (hot reload)
```

Other scripts: `npm run typecheck`, `npm run build`, `npm run build:single` (one self-contained `dist/single.html`).

## How to test

- **Type any key** to swap the glyph (the terrain morphs between letters). **Space** rolls a new seed.
- The panel on the right controls everything. `character(s)` also accepts whole words.
- **Letter acts as**: `Offset lines` (contours parallel the outline), `Mountain` (letter is high ground), `Basin`.
- **upload font…** loads your own TTF/OTF/WOFF. **save PNG** exports the current frame.
- **Static detail layer:** untick **animate** and the map gains elevation labels (`1444m`) that follow the contour lines, spot heights at peaks, and a small cluster of words, icons and a caption. It is hidden while animating and is included in **save PNG**. Tune it under *Detail layer*.
- `window.__params` exposes all parameters in the devtools console for quick experiments.

## How it works

1. `src/glyph.ts` rasterises the text to a canvas and turns it into a signed distance field (SDF).
2. `src/shader.ts` blends that SDF with animated domain-warped simplex noise into a height field `H`, then draws
   anti-aliased iso-lines of `H` (every 5th is an index contour), with hypsometric tint, hillshade and grain.
3. `src/details.ts` (detail layer) reads the height field back from the GPU, traces contours with marching squares, places labels along them without collisions, and builds a mask so the shader can cut the lines away behind the text.
4. `src/main.ts` wires up Three.js, the lil-gui panel, typing, and SDF-to-SDF morphing.
