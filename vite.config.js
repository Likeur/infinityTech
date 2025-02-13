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
            main: resolve(__dirname, '/index.html'),
            about: resolve(__dirname, 'src/pages/about.html'),
            articles: resolve(__dirname, 'src/pages/articles.html'),
            displayarticle: resolve(__dirname, 'src/pages/displayarticle.html'),
            profil: resolve(__dirname, 'src/pages/profil-info.html'),
            contact: resolve(__dirname, 'src/pages/contact.html'),
        },
    },
},
})