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
- **Multiple glyphs:** *add glyph* in the Glyphs section (up to 8). Click a glyph to select it, drag to move, drag a corner handle or use the wheel to scale, arrow keys to nudge, Delete to remove. Typing changes the text of the glyph being edited. Glyphs share one landscape, so their contours merge.
- **Letter shape:** the *Letter shape* section blends letters into each other (smooth union), softens corners, changes weight, and warps letterforms with noise. Per glyph: rotation (also a handle above the selection box), skew, stretch, and *morph to* a second text that you scrub with *morph amount*.
- **Effects:** the left panel is a gallery of ~17 effects (halftone, glitch, neon glow, bevel, hatch, duotone, ...) with live previews of your artwork. Click to add one to the stack; each layer has opacity, blend mode, its own sliders and colours, and can be reordered, hidden or removed. Effects run on the map and detail layer; blur and glass go on top. The stack is saved with presets.
- **Looks:** *Look* → *draw the landscape as* switches between the topographic map and four other treatments of the same landscape and letters: ridgeline (stacked, hidden-line terrain), op-art bands, mosaic (Voronoi tiles) warped grid and particle sea (a simulated sea of dots carried by a flowing current; the letters are obstacles the particles flow around and slide along, with nothing radiating from them). Each look relabels the three sliders under it. Starter presets are in the preset menu (`Look: …`). The detail layer (labels) only applies to the topographic look.
- **Outline mode:** select a glyph and a small floating readout appears next to it with a SOLID/OUTLINE switch and a STROKE (thickness) slider. Outline is drawn just inside each letter's edge in the letter fill colour, per glyph, in every look. The same settings are in the Glyphs section of the panel.
- **Controls:** the right-hand panel is grouped (Glyph, Look, Landscape, Letter shape, Colour & finish, Map labels, Export & tools). Controls that do not apply to the current look are hidden, and the less-used groups start collapsed. Letter and label colours follow the palette until you pick your own.
- `window.__params` exposes all parameters in the devtools console for quick experiments.

## How it works

1. `src/glyph.ts` rasterises the text to a canvas and turns it into a signed distance field (SDF).
2. `src/shader.ts` blends that SDF with animated domain-warped simplex noise into a height field `H`, then draws
   anti-aliased iso-lines of `H` (every 5th is an index contour), with hypsometric tint, hillshade and grain.
3. `src/details.ts` (detail layer) reads the height field back from the GPU, traces contours with marching squares, places labels along them without collisions, and builds a mask so the shader can cut the lines away behind the text.
4. `src/effects.ts` holds the effect gallery (one GLSL snippet per effect); `src/effectsUI.ts` is the gallery/stack panel. To add an effect, add an entry to `effectDefs`.
5. `src/main.ts` wires up Three.js, the lil-gui panel, typing, and SDF-to-SDF morphing.
