import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['Agenda', 'Atendimento', 'Gestão', 'WhatsApp']),
    // Imagem de compartilhamento (opcional). Sem ela, usa /og.png
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
})

export const collections = { blog }
