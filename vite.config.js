import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
// Custom domain (argix.net) serves from "/". For a github.io/<repo>/ URL set VITE_BASE=/<repo>/
// The real logo is optional at build time: drop it in public/assets/logo-white.svg and it is used automatically.
export default defineConfig({
  base: process.env.VITE_BASE || '/argix-website/',
  plugins: [react()],
  define: { __HAS_LOGO__: JSON.stringify(fs.existsSync('public/assets/logo-white.svg')) },
});
