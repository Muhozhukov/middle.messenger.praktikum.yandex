import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  root: resolve(__dirname, 'src/client'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: './src/client/index.html',
        login: './src/client/pages/login/login.html',
        // signup: './src/client/pages/signup/signup.html',
      },
    },
  },
  server: {
    port: 4000,
  },
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, 'src/client/components'),
    context: {
      hello: 'Hello world!',
    },
  })],
});
