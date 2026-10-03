// Bundles the Vite build into one self-contained HTML file (dist/single.html) for easy sharing/previews.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const html = readFileSync('dist/index.html', 'utf8');
const assets = readdirSync('dist/assets');
const js = readFileSync(`dist/assets/${assets.find((f) => f.endsWith('.js'))}`, 'utf8');
const cssFile = assets.find((f) => f.endsWith('.css'));
const css = cssFile ? readFileSync(`dist/assets/${cssFile}`, 'utf8') : '';

const out = html
  .replace(/<script[^>]*src="[^"]*\.js"[^>]*><\/script>/, '')
  .replace(/<link[^>]*rel="stylesheet"[^>]*href="[^"]*assets\/[^"]*"[^>]*>/, `<style>${css}</style>`)
  .replace('</body>', () => `<script type="module">${js.replace(/<\/script>/g, '<\\/script>')}</script></body>`);

writeFileSync('dist/single.html', out);
console.log(`dist/single.html written (${(out.length / 1024).toFixed(0)} kB)`);
