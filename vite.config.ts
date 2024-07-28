import react from '@vitejs/plugin-react-swc';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@trainingsapp/domain': path.resolve(__dirname, './src/domain'),
      '@trainingsapp/infrastructure': path.resolve(
        __dirname,
        './src/infrastructure',
      ),
      '@trainingsapp/components': path.resolve(
        __dirname,
        './src/userinterface/components',
      ),
      '@trainingsapp/pages': path.resolve(
        __dirname,
        './src/userinterface/pages',
      ),
      '@trainingsapp/di': path.resolve(__dirname, './src/di'),
      '@trainingsapp/store': path.resolve(__dirname, './src/store/store'),
      '@trainingsapp/utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
