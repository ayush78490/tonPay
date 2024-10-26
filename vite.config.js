import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills() // Add the Node polyfills plugin
  ],
  resolve: {
    alias: {
      buffer: 'buffer/', // Alias for the buffer module
    },
  },
});

