import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // relative paths so the build works under https://<user>.github.io/<repo>/
  server: { port: 5173 },
});
