import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
 // vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://fakestoreapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
};


