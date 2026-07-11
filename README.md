# Innkeeper Forge

A dark, cinematic GitHub portfolio built with Next.js. Projects sync from GitHub at build/refresh time; visibility and copy are curated in config.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and set `GITHUB_TOKEN` to sync **public and private** repos. Without a token, only public repos are fetched (with a dev warning).

## Show / hide projects

Edit [`src/data/repos.config.ts`](src/data/repos.config.ts):

```ts
"tech-refresh": { visible: false },  // hidden
"dev-panel": { visible: true, featured: true },
// repos not listed → shown automatically when GitHub returns them
```

Push to deploy visibility changes on Vercel.

## Refresh after creating a new repo

Three options (fastest first):

1. **On-demand** — `pnpm refresh` (calls `POST /api/revalidate?secret=...`)
2. **Automatic** — ISR refreshes hourly on Vercel
3. **Webhook** — GitHub `repository` events → your `/api/revalidate` URL

Set `REVALIDATION_SECRET` in `.env.local` and Vercel project settings.

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `GITHUB_TOKEN` | Production + private repos | Inn-Keeper PAT with `repo` scope; fetches public + private repos |
| `REVALIDATION_SECRET` | Production | Protects on-demand refresh endpoint |
| `PORTFOLIO_URL` | Local refresh | Base URL for `pnpm refresh` |

Private repo names/descriptions appear on the deployed site. Use `visible: false` in config to hide sensitive repos.

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel
3. **Required:** add environment variables in Vercel → Project → Settings → Environment Variables:
   - `GITHUB_TOKEN` — Inn-Keeper classic PAT with **`repo`** scope (Production + Preview)
   - `REVALIDATION_SECRET` — random secret for `/api/revalidate` (Production)
4. **Redeploy** after adding env vars (Deployments → … → Redeploy)
5. Optional: GitHub webhook → `https://your-domain/api/revalidate?secret=YOUR_SECRET`

Without `GITHUB_TOKEN` on Vercel, the build fails or only public repos appear.

## Next.js concepts used

| File | Pattern |
|------|---------|
| `src/app/page.tsx` | Server Component, async data fetch, ISR (`revalidate = 3600`) |
| `src/app/layout.tsx` | Root layout, `next/font`, Metadata API |
| `src/app/api/revalidate/route.ts` | Route Handler, on-demand revalidation |
| `src/components/hero/Hero.tsx` | Client Component (`"use client"`), Motion animations |
| `src/components/hero/EmberField.tsx` | Client island, React Three Fiber canvas |
| `src/lib/github.ts` | Server-side fetch with `next.revalidate` cache |
| `src/data/repos.config.ts` | Static config merged with API data |
