import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsPage': './src/App.tsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'styled-components', 'common-utils'],
    }),
  ],
  server: {
    port: 5002,
    host: '0.0.0.0',
    strictPort: true,
  },
  preview: {
    port: 5002,
    host: '0.0.0.0',
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
