# VortexOne website (Phase 1 — frontend)

Static Next.js site. Spec: `docs/SPEC.md` · progress: `docs/PROGRESS.md` · rules for Claude Code: `CLAUDE.md`.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
```
Add `?review=1` to any URL to highlight claims and placeholders; press **G** for the grid.

## Edit content
All copy lives in `content/*.ts`. Unknown facts are `[[PLACEHOLDER: …]]` (listed in `docs/ASSETS_NEEDED.md`); unconfirmed claims carry `claim: true`.

## Add images
Upload to `public/images/objects/`, `public/images/founder/` or `public/images/work/` using the exact names in `docs/ASSETS_NEEDED.md`, then set `placeholder: false` for that slot in `content/images.ts`.

## Build (static)
```bash
npm run build      # writes the static site to out/
```
Copy `.env.example` to `.env.local` and fill in values. Forms return a mock success until `NEXT_PUBLIC_API_BASE_URL` is set (Phase 2).

## Deploy
Connect the GitHub repo to Cloudflare Pages or Netlify: build command `npm run build`, output folder `out`, and set the `NEXT_PUBLIC_*` variables in the host's settings.
