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
    rollupOptions: {
      input: {
        index: resolve(__dirname, './src/client/index.html'),
        login: resolve(__dirname, './src/client/pages/login/login.html'),
        signup: resolve(__dirname, './src/client/pages/signup/signup.html'),
        chat: resolve(__dirname, './src/client/pages/chat/chat.html'),
        errorPage: resolve(__dirname, './src/client/pages/errorPage/errorPage.html'),
        profile: resolve(__dirname, './src/client/pages/profile/profile.html'),
      },
    },
  },
  server: {
    port: 4000,
  },
  plugins: [vitePluginHandlebarsPrecompile()],
});
