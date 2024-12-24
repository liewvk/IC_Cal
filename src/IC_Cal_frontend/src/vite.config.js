import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure root matches the index.html directory
  publicDir: 'public', // Public assets directory
  build: {
    outDir: 'dist', // Build output directory
    emptyOutDir: true, // Clear previous builds
  },
  resolve: {
    alias: {
      '@': '/src', // Short alias for the src folder
    },
  },
});