import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false, // Disables the HMR overlay
    },
  },
  css: {
    postcss: './postcss.config.js', // Specify the location of your PostCSS config if it's custom
  },
})
