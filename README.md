# VortexOne website (Phase 1 — frontend)

Static Next.js 16 site (App Router, Tailwind CSS 4, `output: "export"`). No backend yet: forms return a mock success until Phase 2.

- Spec: `docs/SPEC.md` · progress: `docs/PROGRESS.md` · decisions: `docs/DECISIONS.md` · missing inputs + launch checklist: `docs/ASSETS_NEEDED.md`
- Rules for Claude Code: `CLAUDE.md`

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```
- `?review=1` on any URL outlines unconfirmed claims (CLAIM) and placeholders (PLACEHOLDER); press **G** for the 12-column grid. `?review=0` turns it off.
- `/styleguide` shows every token, component and motion primitive (internal, not indexed).

## Edit content
All copy lives in `content/*.ts` (one file per page, plus `site.ts`, `nav.ts`, `services.ts`, `pricing.ts`, `faq.ts`, `tools.ts`).
- Unknown facts are `[[PLACEHOLDER: …]]` and are listed in `docs/ASSETS_NEEDED.md`.
- Unconfirmed marketing statements carry `claim: true` — confirm or rewrite them before launch.
- Colors, type sizes and spacing are tokens in `app/globals.css`; change a token once, not in components.

## Add images and files
Upload to `public/images/objects/`, `public/images/founder/`, `public/images/work/` or `public/files/` using the exact names in `docs/ASSETS_NEEDED.md`, then set `placeholder: false` for that slot in `content/images.ts`. Photos are shown in grayscale automatically.

## Build (static)
```bash
npm run lint
npm run build      # writes the static site to out/
```

## Environment variables
Copy `.env.example` to `.env.local` locally; in production set them as build variables on the host.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your domain, e.g. `https://vortexone.com` — canonicals, sitemap, social cards. Falls back to the Cloudflare preview URL. |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly link for `/book-a-call`. Empty → "Online booking opens soon" + email fallback. |
| `NEXT_PUBLIC_API_BASE_URL` | Phase 2 API. Empty → forms return a mock success. |

## Deploy (Cloudflare Workers, current setup)
The repo includes `wrangler.jsonc` (static assets from `out/`, `404.html` for missing pages).
In Cloudflare → the `vortex-website` Worker → Settings → Build:
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` · Non-production deploy command: `npx wrangler preview`
- Production branch: the branch you want live; add the `NEXT_PUBLIC_*` build variables.

Any static host works too (Netlify, Cloudflare Pages): build `npm run build`, publish folder `out`.

## SEO files
`app/sitemap.ts` → `/sitemap.xml`, `app/robots.ts` → `/robots.txt` (excludes `/styleguide`), `public/llms.txt`, `public/og.png` (default share image), JSON-LD in `lib/seo.ts`.

## Phase 2
Forms already post through `lib/api/` (`submitLead`, `requestResource`, `subscribeNewsletter`). Point `NEXT_PUBLIC_API_BASE_URL` at the backend and adjust endpoints in `lib/api/client.ts` — no component changes needed.
