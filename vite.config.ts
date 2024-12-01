import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    checker({
      typescript: true
    }),
    enhancedImages(),
    sveltekit()
  ]
});
