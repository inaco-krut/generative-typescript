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
- **Base layers:** the generative looks (topographic map, ridgeline, op-art bands, mosaic, warped grid, particle sea) are layers you place yourself. The site opens on a blank canvas; use the bar at the top centre: pick a base layer, then drag a rectangle on the canvas (like a free-size screenshot). The look is drawn only inside that rectangle, and letters and effects still react to it. Mix as many as you like (up to 8, one particle sea): select one from the *Layers* tabs or by clicking it on the canvas, then move it, drag a corner to resize, tune its sliders and its own landscape settings in the floating panel that sits beside the selected layer (selected layers use the same outline and handles as glyphs; the panel has size, the look's sliders, letters act as, a palette of its own, letters act as, reach, relief, roughness, scale, turbulence, evolution, seed, interval, line weight, tint, hillshade), pick a *Size* preset (freeform, full canvas, 1:1, 4:5, 9:16, 16:9, 3:2, 2:3, A4, 3:1, 21:9; fitted into the window) and stack it with the same send-to-back / forward buttons glyphs have. Each layer also has its own *Blend* mode (Normal, Marks only, Multiply, Screen, Overlay, Difference, Add) and opacity. *Marks only* hides the layer's background and keeps just its marks (contour lines, ridgelines, op-art bands, grout, grid lines, or the particles), so what is below shows through. The same panel saves and deletes *base layer presets* (a layer's look and settings, without its rectangle) in this browser. Glyphs always sit above base layers and work exactly as before. Map labels appear inside topographic layers. Older presets open as one full-canvas layer.
- **Background:** the *Background* button in the same bar sets what is behind and around the base layers: solid colour, grid, horizontal / vertical / diagonal lines or dots, with colour, line colour, spacing, weight and strength (colours follow the palette until you pick one).
- **Outline mode:** select a glyph and a small floating readout appears next to it with a SOLID/OUTLINE switch and a STROKE (thickness) slider. Outline is drawn just inside each letter's edge in the letter fill colour, per glyph, in every look. The same settings are in the Glyphs section of the panel.
- **Controls:** the right-hand panel is grouped (Glyph, Landscape, Letter shape, Colour & finish, Map labels, Export & tools). Controls that do not apply to the current look are hidden, and the less-used groups start collapsed. Letter and label colours follow the palette until you pick your own.
- **Layering:** with two or more glyphs, the floating panel has a *Layer* row (send to back, back one, forward one, bring to front). Glyphs are painted back to front, so overlapping fills, outlines and pictures really stack. The order is saved with presets.
- **Image glyphs:** *Glyph → + Add image…* (or drop a picture on the canvas) imports an image with a transparent background as a glyph. Its transparency becomes the shape and its own colours are drawn inside it, on top of the contour lines. It behaves like any letter: the landscape and every look react to it, and you can move, scale, rotate, fade, outline or blend it. In its floating panel, *Image → One colour* switches to a plain silhouette in a colour you choose. The picture is stored (compressed) inside presets.
- **Per-glyph styling:** every glyph has its own colour, opacity, outline (width and colour) and shape (weight, corner softness, warp). Select a glyph and its floating panel holds Solid/Outline, colour (the outline colour in outline mode), opacity and outline thickness; the side panel's *Glyph* group keeps text, font, size, rotation, shape (weight, softness, warp) and skew/stretch/morph, so nothing is in two places. Colours follow the palette until you pick one. *Blend glyphs* stays shared because it describes how glyphs relate to each other.
- `window.__params` exposes all parameters in the devtools console for quick experiments.

## How it works

1. `src/glyph.ts` rasterises the text to a canvas and turns it into a signed distance field (SDF).
2. `src/shader.ts` blends that SDF with animated domain-warped simplex noise into a height field `H`, then draws
   anti-aliased iso-lines of `H` (every 5th is an index contour), with hypsometric tint, hillshade and grain.
3. `src/details.ts` (detail layer) reads the height field back from the GPU, traces contours with marching squares, places labels along them without collisions, and builds a mask so the shader can cut the lines away behind the text.
4. `src/effects.ts` holds the effect gallery (one GLSL snippet per effect); `src/effectsUI.ts` is the gallery/stack panel. To add an effect, add an entry to `effectDefs`.
5. `src/main.ts` wires up Three.js, the lil-gui panel, typing, and SDF-to-SDF morphing.
