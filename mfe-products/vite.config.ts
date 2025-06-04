import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()); // sin tercer argumento para incluir VITE_

  return {
    define: {
      'process.env': env,
    },
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
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
  };
});
