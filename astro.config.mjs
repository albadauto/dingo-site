// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// Endereço público do site (usado no sitemap, canonical e Open Graph)
const site = process.env.SITE_URL || 'http://localhost:4321'

export default defineConfig({
  site,
  // Mantém os espaços entre elementos inline (padrão antigo do Astro)
  compressHTML: true,
  // URLs sempre terminam com / (igual ao sitemap e ao canonical)
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  vite: { plugins: [tailwindcss()] },
})
