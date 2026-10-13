import { getCollection } from 'astro:content'

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft)
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.data.title.localeCompare(b.data.title, 'pt-BR'),
  )
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export function readingMinutes(text: string) {
  return Math.max(1, Math.round(text.split(/\s+/).length / 200))
}
