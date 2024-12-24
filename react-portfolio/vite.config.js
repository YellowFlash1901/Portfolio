// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  // Resolve configuration for .cjs files
  resolve: {
    alias: {
      '.cjs': '.cjs',
    },
    extensions: ['.js', '.mjs', '.cjs', '.json'],
  },

  // If you need CommonJS output, configure build options
  build: {
    rollupOptions: {
      output: {
        format: 'cjs',
      },
    },
  },

  // Vite plugins
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      values: {
        'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
      },
    }),
  ],
});
