import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      '@styles': path.resolve('./src/styles/'),
      '@icons': path.resolve('./src/icons/'),
      '@components': path.resolve('./src/lib/'),
      '@animations': path.resolve('./src/lib/animations/')
    }
  }
});
