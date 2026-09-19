import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://martesi.github.io',
  base: '/faro',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
})
