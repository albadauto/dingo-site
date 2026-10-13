# Dingo — Site

Site institucional e blog do Dingo, feito para aparecer bem no Google.

- **Astro 7**: cada página vira HTML pronto, sem JavaScript no navegador, e carrega muito rápido.
- **Tailwind CSS 4**: mesma paleta e fontes do painel (`src/styles/global.css`).
- **Blog em Markdown**: um arquivo `.md` por artigo, em `src/content/blog/`.

## Rodando

```bash
npm install
cp .env.example .env      # SITE_URL e PUBLIC_APP_URL
npm run dev               # http://localhost:4321
```

## Publicando

```bash
SITE_URL=https://www.seudominio.com.br PUBLIC_APP_URL=https://app.seudominio.com.br npm run build
```

A pasta `dist/` é o site pronto. Dá para hospedar em qualquer lugar de site estático (Vercel, Netlify, Cloudflare Pages, um nginx seu) ou com Docker:

```bash
docker build --build-arg SITE_URL=https://www.seudominio.com.br --build-arg PUBLIC_APP_URL=https://app.seudominio.com.br -t dingo-site .
docker run -p 8080:80 dingo-site
```

O `SITE_URL` precisa ser o endereço real: ele vai no sitemap, nos links canônicos e nas imagens de compartilhamento.

## Páginas

| Endereço | Conteúdo |
| --- | --- |
| `/` | Página principal: o dia na barbearia, como funciona, recursos, preços, perguntas e blog |
| `/precos/` | Planos, implantação e perguntas sobre cobrança |
| `/barbearias/` e `/saloes-de-beleza/` | Páginas para cada público (ajudam a aparecer em buscas específicas) |
| `/blog/` e `/blog/<artigo>/` | Blog |
| `/privacidade/` e `/termos/` | Textos legais |
| `/sitemap-index.xml`, `/robots.txt`, `/rss.xml` | Gerados sozinhos no build |

## Escrevendo um artigo novo

Crie `src/content/blog/nome-do-artigo.md`. O nome do arquivo vira o endereço (`/blog/nome-do-artigo/`).

```md
---
title: "Título com a palavra que as pessoas buscam"
description: "Resumo de até 170 caracteres. Aparece no Google e no WhatsApp quando alguém compartilha."
pubDate: 2026-11-03
category: Agenda          # Agenda | Atendimento | Gestão | WhatsApp
image: /og/nome-do-artigo.png   # opcional; sem ela usa /og.png
draft: false              # true = não publica
---

Texto em Markdown. Use ## para os subtítulos: eles viram o índice "Neste artigo".
```

Dicas de SEO para cada artigo:

- **Título:** comece pelo que a pessoa digita no Google ("como reduzir faltas na barbearia").
- **Subtítulos:** use `##` com perguntas e respostas claras.
- **Links:** coloque links para outros artigos do blog e para `/precos/`.
- **Imagem:** a de compartilhamento (`image`) tem 1200×630 px.

## O que já está pronto de SEO

- **Meta tags:** título e descrição em cada página, link canônico, Open Graph e Twitter Card (com imagem própria em cada artigo).
- **Dados estruturados (JSON-LD):** organização, software com os preços, perguntas frequentes, artigo do blog e trilha de navegação.
- **Arquivos para buscadores:** sitemap, robots.txt e RSS.
- **Qualidade técnica:** HTML semântico com um único `h1` por página, idioma `pt-BR`, páginas sem JavaScript, fontes servidas pelo próprio site e um link para pular direto ao conteúdo.

**Depois de publicar:** cadastre o site no [Google Search Console](https://search.google.com/search-console) e envie o `sitemap-index.xml`.

## Antes de publicar

- Preencha os dados da empresa em `COMPANY`, no arquivo `src/site.ts` (razão social, CNPJ, e-mail e cidade). Eles aparecem em Privacidade e Termos.
- Peça para um advogado revisar Privacidade e Termos. Os textos são um ponto de partida.
- Preços, perguntas frequentes e textos gerais também ficam em `src/site.ts`.
