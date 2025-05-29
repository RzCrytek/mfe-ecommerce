import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  base: 'http://localhost:5001/',
  plugins: [
    react(),
    federation({
      name: 'home',
      exposes: {
        './HomePage': './src/App.tsx',
      },
      shared: ['react', 'react-dom', 'styled-components'],
    }),
  ],
  server: {
    port: 5001,
    host: 'localhost',
    strictPort: true,
  },
  preview: {
    port: 5001,
    host: 'localhost',
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
