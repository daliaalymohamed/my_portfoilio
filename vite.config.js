import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves the site from /<repo>/; Netlify serves it from /
  base: process.env.BASE_PATH || '/',
  plugins: [
    react(),
  ]
})
