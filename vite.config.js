import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
        input: {
            main: resolve(__dirname, 'src/index.html'),
            about: resolve(__dirname, 'src/pages/about.html'),
            about: resolve(__dirname, 'src/pages/displayarticle.html'),
            contact: resolve(__dirname, 'src/pages/contact.html'),
        },
    },
},
})