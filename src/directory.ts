// Estabelecimentos que aparecem na busca do Dingo, lidos da API na hora do build.
// Sem PUBLIC_API_URL, ou com a busca ainda fechada (SEARCH_ENABLED=false), nenhuma página é gerada.
import { APP_URL } from './site'

const API = (import.meta.env.PUBLIC_API_URL || '').replace(/\/$/, '')

export interface City {
  city_slug: string
  city: string
  state: string
  total: number
  types: Record<string, number>
}

export interface Place {
  slug: string
  name: string
  business_type: string
  type_label: string
  district: string | null
  city: string | null
  state: string | null
  address: string | null
  price_from: number | null
  url: string
}

// Tipo de negócio -> trecho da URL e textos
export const KINDS: Record<string, { path: string; plural: string; one: string }> = {
  barbearia: { path: 'barbearias', plural: 'Barbearias', one: 'barbearia' },
  salao: { path: 'saloes-de-beleza', plural: 'Salões de beleza', one: 'salão de beleza' },
  nail: { path: 'nail-designers', plural: 'Nail designers', one: 'nail designer' },
  micropigmentacao: { path: 'micropigmentacao', plural: 'Estúdios de micropigmentação', one: 'estúdio de micropigmentação' },
}

async function get<T>(path: string, fallback: T): Promise<T> {
  if (!API) return fallback
  try {
    const res = await fetch(API + path)
    if (!res.ok) return fallback
    return (await res.json()) as T
  } catch {
    return fallback
  }
}

export async function cities(): Promise<City[]> {
  return (await get<{ cities: City[] }>('/api/public/cities', { cities: [] })).cities
}

export async function placesIn(citySlug: string, type?: string): Promise<Place[]> {
  const q = new URLSearchParams({ city: citySlug, limit: '50', ...(type ? { type } : {}) })
  return (await get<{ results: Place[] }>(`/api/public/search?${q}`, { results: [] })).results
}

export const bookingUrl = (p: Place) => `${APP_URL}${p.url}`
export const searchUrl = `${APP_URL}/buscar`
