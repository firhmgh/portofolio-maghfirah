import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment at /portofolio-maghfirah/
  // import.meta.env.BASE_URL will be '/portofolio-maghfirah/' in production
  // and '/' in development — router strips base path so all routes work cleanly
  base: '/portofolio-maghfirah/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'build',
  },
});
