import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite often expects index.html to be in the root, but if we assume 
  // you keep it in 'public', we need to adjust the root setting.
  // We'll keep default settings for now and rely on package.json scripts.
});