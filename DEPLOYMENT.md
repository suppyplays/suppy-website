# Deployment Report

## Framework

**TanStack React Start** with **Nitro** (Vercel preset) — full SSR, not a static SPA.

## Build command

```bash
npm run build
```

## Output directory

Nitro writes the Vercel Build Output API bundle to:

```
.vercel/output/
```

Vercel detects this automatically. Do **not** set a custom output directory to `dist`.

## Environment variables

| Variable        | Required | Default                | Description                   |
| --------------- | -------- | ---------------------- | ----------------------------- |
| `VITE_SITE_URL` | No       | `https://suppy.qzz.io` | Canonical URL for SEO/OG tags |

## Routing

All routes are server-rendered via Nitro:

- `/` — Home
- `/about` — About
- `/projects` — Projects list
- `/projects/:slug` — Project detail
- `/chess` — Chess coaching
- `/timeline` — Timeline
- `/gallery` — Gallery
- `/contact` — Contact

404s are handled by TanStack Router (`src/routes/$.tsx`).

## Remaining warnings

1. **Large JS chunk (~513 KB):** Main client bundle exceeds 500 KB. Consider lazy-loading heavy sections if bundle size becomes a concern.
2. **TanStack Start peer warnings:** Unused imports in `@tanstack/start-*` packages during SSR build — harmless upstream noise.
3. **`"use client"` directives ignored:** Expected when bundling React Router/Framer Motion for Nitro server functions.

## GitHub → Vercel checklist

- [x] `npm install` succeeds
- [x] `npm run build` succeeds
- [x] Nitro Vercel preset enabled in `vite.config.ts`
- [x] `.gitignore` excludes `node_modules`, `.vercel`, build artifacts
- [x] Favicon, OG image, robots.txt, sitemap.xml in `public/`
- [x] No hardcoded local file paths
- [x] TypeScript passes (`npm run typecheck`)
