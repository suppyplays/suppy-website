# SUPPY Vision Nexus

Premium personal portfolio for **Suprith Jain** — chess coach, software developer, and creator.

Built with TanStack React Start, React 19, Tailwind CSS 4, and Framer Motion. Deploys to Vercel with SSR via Nitro.

## Tech stack

- **Framework:** TanStack React Start (SSR)
- **UI:** React 19, Tailwind CSS 4, Radix UI, Framer Motion
- **Routing:** TanStack Router (file-based)
- **Build:** Vite 7 + Nitro (Vercel preset)
- **Language:** TypeScript

## Prerequisites

- Node.js 20 or later
- npm

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Vercel auto-detects the Nitro build output (`.vercel/output`).
4. Optionally set `VITE_SITE_URL` to your production domain (e.g. `https://suppy.qzz.io`).

| Setting       | Value           |
| ------------- | --------------- |
| Build command | `npm run build` |
| Output        | Auto (Nitro)    |
| Node.js       | 20.x or 22.x    |

No manual rewrites are required — Nitro configures SSR routing for all pages (`/about`, `/projects`, `/gallery`, etc.).

## Environment variables

| Variable        | Required | Description                                    |
| --------------- | -------- | ---------------------------------------------- |
| `VITE_SITE_URL` | Optional | Canonical site URL for SEO and Open Graph tags |

Copy `.env.example` to `.env` for local overrides.

## Scripts

| Command             | Description              |
| ------------------- | ------------------------ |
| `npm run dev`       | Start development server |
| `npm run build`     | Production build         |
| `npm run preview`   | Preview production build |
| `npm run lint`      | Run ESLint               |
| `npm run format`    | Format with Prettier     |
| `npm run typecheck` | TypeScript check         |

## Project structure

```
src/
  routes/          # File-based routes (/, /about, /projects, …)
  components/      # UI and site sections
  lib/             # Shared utilities and config
  assets/          # Images bundled by Vite
public/            # Static files (favicon, resume, OG image)
```

## License

Private — all rights reserved.
