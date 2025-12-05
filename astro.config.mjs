import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/Must-Be-Cow-Redesign/',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  build: {
    outDir: 'dist',
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});

