// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Use CommonJS for .cjs files
  resolve: {
    alias: {
      '.cjs': '.cjs'
    },
    extensions: ['.js', '.mjs', '.cjs', '.json']
  },
  // Type set explicitly
  type: 'commonjs'
});
