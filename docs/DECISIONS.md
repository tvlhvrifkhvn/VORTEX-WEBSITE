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
2026-11-14 · intake · Reply time "4pm–7pm PST" stored as a reply window "Replies 4–7 PM Pacific, Monday to Friday" (Pacific Time, DST-aware) · answer was a time window, not a duration; "PST" is only correct in winter
2026-11-14 · intake · WhatsApp 03449111101 stored as +92 344 9111101 / wa.me/923449111101 · US visitors need the international format
2026-11-14 · intake · No public prices: all plans show "Contact for pricing"; File 01 tiers renamed Part-time / Full-time / Custom scope (hours kept, claim: true); File 02 one card · user rejected house-themed names and prices; SPEC §11.4 updated
2026-11-14 · intake · Web development, SEO, Meta ads, Lead generation (on request) added to File 01 as 01.7–01.10; `onRequest` flag on Service · user request; overrides SPEC "two files, short menus" positioning
2026-11-14 · intake · Tools: user's list + Claude-added TC/MLS/supplementing tools (MLS systems, Dotloop, SkySlope, EagleView, Hover, CompanyCam, Google Workspace) flagged claim: true · user asked to "add other" tools; needs confirmation
2026-11-14 · intake · Calendly empty → /book-a-call will use the form + email fallback (SPEC §11.10) · user has no Calendly yet
2026-11-14 · tokens · Raw grey renamed `--color-muted` → `--color-muted-light`; SPEC §4.1/§4.2 updated · shadcn's `--color-muted` (surface) overrode it and made all muted text paper-colored (found in S1 visual audit)
2026-11-14 · components · 21st.dev free tier = 2 code retrievals/day: used for Accordion (shadcn) and Scramble Text (dqnamo); all other slots built in-house per SPEC §6.2 · quota; CLAUDE.md §7 fallback
2026-11-14 · components · Accordion from 21st.dev shadcn/Radix: chevron → +/−, height animation → opacity/translate keyframes · transform/opacity-only rule
2026-11-14 · components · ScrambleNumber/ScrambleText share `use-scramble.ts`, adapted from 21st.dev dqnamo/scramble-text (digits or A–Z0–9 pool, left→right lock) · one engine, smaller code
2026-11-14 · components · Tabs, Slider, Dialog built on Radix (@radix-ui/react-tabs/-slider/-dialog) with shadcn API shape · a11y for free; approved deps
2026-11-14 · components · Select, Checkbox, Radio are native inputs (no Radix) · best keyboard/mobile behavior, fewer deps
2026-11-14 · motion · Boot script in <head> sets data-motion/data-review before paint; KineticHeadline, Marquee, button fills, colon blink are CSS-only; a global `html[data-motion=off]` rule zeroes all animations/transitions · no hydration flash, no-JS = static, one switch for every primitive
2026-11-14 · motion · Reveal hides only content still below the fold after hydration · no empty SSR and no flash above the fold
2026-11-14 · motion · DeskStatus closed label includes the day when it isn't today ("OPENS MON 9:00 AM ET") · clearer on evenings/weekends
2026-11-14 · motion · Motion state, review flag and minute clock use useSyncExternalStore · React 19 lint forbids setState in effects; avoids hydration mismatch
2026-11-14 · layout · GridOverlay lives in components/layout/review-mode.tsx (not its own file) · only used there
2026-11-14 · styleguide · Section labels/demo strings inside app/styleguide/_parts are partly inline; demo copy in content/styleguide.ts · internal noindex page
2026-11-14 · infra · `npx shadcn add` unavailable (ui.shadcn.com blocked) — Radix packages installed from npm directly · network policy
