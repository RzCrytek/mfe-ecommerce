import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        remoteHome: 'http://localhost:5001/assets/remoteEntry.js',
        remoteProducts: 'http://localhost:5002/assets/remoteEntry.js',
        remoteExclusiveProducts: 'http://localhost:5003/assets/remoteEntry.js',
        remoteCart: 'http://localhost:5004/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'styled-components', 'common-utils'],
    }),
  ],
  server: {
    port: 5000,
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
