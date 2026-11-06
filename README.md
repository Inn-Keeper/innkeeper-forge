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
// repos not listed → hidden by default
```

Push to deploy visibility changes on Vercel.

## Refresh after creating a new repo

Four ways to refresh:

1. **Sync script (recommended)** — adds any GitHub repositories missing from `repos.config.ts` as visible entries. Commit and push those generated changes; later runs revalidate the live site:

   ```bash
   pnpm sync          # add missing entries, or revalidate when none are missing
   pnpm sync:dry      # preview missing entries only
   ```

2. **Revalidate only** — `pnpm refresh` (calls `POST /api/revalidate?secret=...`)
3. **Automatic** — ISR refreshes hourly on Vercel
4. **Webhook** — GitHub `repository` events → your `/api/revalidate` URL

Set `REVALIDATION_SECRET` and `PORTFOLIO_URL` in `.env.local` (and Vercel) for on-demand refresh.

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `GITHUB_TOKEN` | Production + private repos | Inn-Keeper PAT with `repo` scope; fetches public + private repos |
| `REVALIDATION_SECRET` | Production | Protects on-demand refresh endpoint |
| `PORTFOLIO_URL` | `pnpm sync` / `pnpm refresh` | Base URL to revalidate (e.g. `https://innkeeper-forge.vercel.app`) |

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

## Browser requirements and visual checks

The styling uses Tailwind CSS v4. Its documented browser baseline is Chrome/Edge
111+, Safari 16.4+, and Firefox 128+. These are framework requirements, not a
claim that this site has been tested on every minimum version. See
[Tailwind's compatibility documentation](https://tailwindcss.com/docs/compatibility).

Check all three routes (`/`, `/experience`, `/in-the-making`) after layout changes.
Include phone and desktop widths, the 768px and 1024px grid transitions, larger
text, keyboard navigation, and reduced motion. Exercise catalogue expansion,
filters, project disclosures, role disclosures, and timeline scrolling.

The November 2026 review included native Chrome screenshots of desktop layouts
and a 375 × 667 iPhone SE emulation of the In the Making page. The user also visually checked Safari and Firefox and reported good results;
versions and test sizes were not specified. Actual iPhone, minimum browser
versions, and enlarged-text behavior remain unverified. The review evidence and remaining checks are recorded in
[`docs/styling-review.md`](docs/styling-review.md).

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
