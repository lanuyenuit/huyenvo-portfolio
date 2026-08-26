import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The site is served from https://<user>.github.io/huyenvo-portfolio/, not the
  // domain root. Change this if the repo is renamed or moves to a custom domain.
  base: '/huyenvo-portfolio/',
})
