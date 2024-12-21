import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      src: '/src', // Додаємо alias
    },
  },
  plugins: [react()],
});
