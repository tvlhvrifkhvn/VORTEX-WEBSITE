# Decisions

`YYYY-MM-DD · area · decision · reason`

2026-11-14 · stack · Next.js 16.4 + Tailwind 4.3 from create-next-app, using its `@tailwindcss/turbopack` loader instead of `@tailwindcss/postcss` · scaffold default; same Tailwind, fewer config files
2026-11-14 · stack · Removed scaffold's `cacheComponents`/`partialPrefetching` flags · not needed for a static export; fewer moving parts
2026-11-14 · shadcn · `components.json` written by hand (style new-york, cssVariables, lucide) · `shadcn init` blocked: ui.shadcn.com unreachable from this network
2026-11-14 · tokens · `--color-muted` from §4.1 is overridden by shadcn's semantic `--color-muted` (surface); raw grey is reached via `text-muted-foreground` · both names in SPEC; semantic classes are the rule anyway
2026-11-14 · tokens · Added `--color-transparent`/`--color-current` and `* { border-color: var(--border) }` · `--color-*: initial` removes them; hairlines default to the theme line
2026-11-14 · utils · `cn()` uses `extendTailwindMerge` with the custom type scale · otherwise `text-h2` and `text-foreground` cancel each other
2026-11-14 · fonts · Inter Tight Variable + IBM Plex Mono 400/500 via @fontsource imported in globals.css · self-hosted, works in static export, no Google fetch
2026-11-14 · html · `lang="en-US"` · US English site
2026-11-14 · content · Page meta descriptions left as placeholders, written by Claude per segment · not business facts; listed in ASSETS_NEEDED §D
