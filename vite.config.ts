import { defineConfig } from 'vite';
import { resolve } from 'path';
import vitePluginHandlebarsPrecompile from './vite-plugin-handlebars-precompile';

export default defineConfig({
  root: resolve(__dirname, 'src/client'),
  base: '',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/client/global.scss" as *;',
      },
    },
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  server: {
    port: 4000,
  },
  plugins: [vitePluginHandlebarsPrecompile()],
});
