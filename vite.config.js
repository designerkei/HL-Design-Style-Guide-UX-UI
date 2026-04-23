import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { PRODUCTION_BASE } from './src/siteConstants.js';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : PRODUCTION_BASE,
  build: {
    outDir: 'build',
    emptyOutDir: false,
  },
}));
