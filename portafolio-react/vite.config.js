import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Para Netlify usar '/', para GitHub Pages usar '/PortafolioReack/'
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
