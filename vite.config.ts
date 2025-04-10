import react from '@vitejs/plugin-react-swc'

import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  server: {
    allowedHosts: process.env.NODE_ENV === 'development' ? true : [],
  },
  plugins: [react(), tailwindcss()],
  base: './',
})
