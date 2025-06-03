import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'products',
      exposes: {
        './ProductsPage': './src/App.tsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'styled-components'],
    }),
  ],
  server: {
    port: 5002,
    host: 'localhost',
    strictPort: true,
  },
  preview: {
    port: 5002,
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
