export interface FontDef {
  family: string;
  weight: number;
}

// Loaded via the Google Fonts <link> in index.html. System fonts act as offline fallbacks.
export const builtinFonts: FontDef[] = [
  { family: 'Inter', weight: 800 },
  { family: 'Playfair Display', weight: 900 },
  { family: 'Bebas Neue', weight: 400 },
  { family: 'Space Grotesk', weight: 700 },
  { family: 'DM Serif Display', weight: 400 },
  { family: 'Archivo Black', weight: 400 },
  { family: 'Abril Fatface', weight: 400 },
  { family: 'Pacifico', weight: 400 },
  { family: 'Roboto Mono', weight: 700 },
  { family: 'serif', weight: 700 },
  { family: 'sans-serif', weight: 700 },
];

export async function ensureFont(font: FontDef, text: string): Promise<void> {
  try {
    await document.fonts.load(`${font.weight} 100px "${font.family}"`, text);
  } catch {
    /* offline or unknown font: canvas falls back to a system face */
  }
}

export async function loadFontFile(file: File, index: number): Promise<FontDef> {
  const family = `Custom ${index} (${file.name.replace(/\.[^.]+$/, '')})`;
  const face = new FontFace(family, await file.arrayBuffer());
  await face.load();
  document.fonts.add(face);
  return { family, weight: 400 };
}
