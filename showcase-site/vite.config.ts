import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.html'], // tell vite to treat html in public/src as assets if needed
  base: './', // relative paths for github pages
})
