import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/DebugBodyColorsPlugin.js',
      name: 'PhaserDebugBodyColorsPlugin',
      fileName: (format) => `phaser-debug-body-colors-plugin.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['phaser'],
      output: {
        globals: {
          phaser: 'Phaser'
        },
        dir: 'dist'
      }
    },
    minify: false
  }
});