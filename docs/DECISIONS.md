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
2026-11-14 · intake · Reply window, Part-time/Full-time/Custom tiers and all tools confirmed by user; tools claim flags removed · user confirmation
2026-11-14 · components · Free open-source sources (Magic UI, Motion Primitives, React Bits, shadcn/ui) are fetched from raw.githubusercontent.com (reachable) instead of 21st.dev · 21st.dev free tier is 2/day; their sites are blocked but GitHub raw is not
2026-11-14 · deploy · Added wrangler.jsonc (static assets from ./out, 404-page) · user's Cloudflare project was created as a Worker, which needs it
2026-11-14 · home 03 · Tile B shows the confirmed reply window "4–7 PM PT" (not the spec's "<15 MIN" claim); tile F desk hours confirmed (no claim) · user confirmed both; no invented reply-time stat
2026-11-14 · home 03 · Tile C is a "Run the numbers" tile (no computed savings %) · no public prices (spec's own null-price fallback)
2026-11-14 · home 03 · H2 "Small desk. Clear numbers." added; StatTile shows the unit as a mono label next to the number · every section needs an H2; units at display size overflowed 3-col tiles
2026-11-14 · home 05 · H2 count updated to "Fourteen jobs" (10 File 01 + 4 File 02); featured = MLS, TC, Xactimate, Supplement packages; leftover File 02 tiles span half rows · spec rule "update the count"; full rows on desktop
2026-11-14 · home 07 · Desk log heading is an H2 styled at h3 size · correct heading order under its own section
2026-11-14 · home 01 · Hero H1 uses text-h2 below 768px, text-display above · display size forced one-word lines at 390
2026-11-14 · header · <640px shows the V1 monogram, compact desk status (dot + OPEN/CLOSED, full text for screen readers), compact Book a call, MENU · fits 390px without wrapping (§7.4 monogram for small spaces)
2026-11-14 · header · LiveClock in the header only ≥1280px · not enough room at 1024–1279
2026-11-14 · header · FILES dropdown is a disclosure (button + list), closes on Esc/outside click/blur · simpler and more robust than ARIA menu
2026-11-14 · footer · Giant wordmark sized 15.2vw (arbitrary value) · must span the viewport; scale tokens are clamped
2026-11-14 · footer · Newsletter copy "Desk notes" written; form uses lib/api mock + honeypot · spec flag newsletter=true, no title given
2026-11-14 · layout · Styleguide wrapper changed from <main> to <div> · root layout now owns <main id="content">
2026-11-14 · content · Service summaries written for all 14 services (S4 fills includes) · needed for the home 05 bento
2026-11-14 · content · Reply time now follows desk hours ("Replies during desk hours", claim); home stat B = "Same day" (claim) · user agreed the 4–7 PM PT window read as after-hours; "same day" needs confirmation
2026-11-14 · home 08 · Compact calculator shows in-house cost only and "Contact for pricing" for VortexOne · no public prices (spec null-price rule)
2026-11-14 · home 09 · In-house monthly cost in the comps table is computed from calculator defaults (claim); VortexOne "Contact for pricing"; freelance values generic text · no invented prices
2026-11-14 · home 09 · Comparison scroll region is `relative` · sr-only text inside the wide table escaped the scroll box and widened the page to 545px at 390
2026-11-14 · rhythm · Stats (03) and Security (13) use paper-2 instead of paper · avoids 3 consecutive paper sections (§5.11)
2026-11-14 · home 11 · Work strip uses native CSS scroll-snap, 5 of 6 samples; sample titles written as generic deliverable names, labelled SAMPLE · no carousel dependency; S6 extends content/work.ts
2026-11-14 · home 14 · 6 home FAQs written from confirmed facts; hours answer flagged claim · spec gives no FAQ copy
2026-11-14 · shared · HowItStarts, Comparison, WorkStrip, FaqList, CalculatorCompact live in components/sections/shared for reuse on file pages · spec data flow
2026-11-14 · file pages · Shared building blocks in components/sections/file (header, service list, audience, sample week, scope, file pricing); HowItStarts/Comparison/FaqSection reused with label/title/theme props · maximum reuse (S4 brief)
2026-11-14 · file pages · Service rows carry id = service id and open when the URL hash matches · home 05 tiles deep-link to them
2026-11-14 · file pages · Header giant numeral is 10% ink, cropped at the section's bottom-left · at full ink it fought the image and spec table
2026-11-14 · file pages · File 01 spec table "Works in" lists confirmed tools; Price "Contact for pricing"; File 02 turnaround is a placeholder (claim) · no invented facts
2026-11-14 · file 02 · Positioning line rendered in mono at body-small size, sentence case, with a signal rule · long uppercase mono sentence was hard to read
2026-11-14 · file 02 · H2 for 02.5 is "Pricing, quoted to your volume" (not "Pricing per claim") · pricing model isn't confirmed; avoid implying per-claim pricing
2026-11-14 · file 02 · "Xactimate estimate (ESX and PDF)" flagged claim · formats not confirmed
2026-11-14 · pricing · Plans got taglines + features; Part-time/Full-time keep claim: true because they list "Daily written report" · features needed for cards; report promise not yet confirmed
2026-11-14 · pricing · Non-numeric "hours" (e.g. "Task or project based") render at h3 size, numbers at h2 · long text at h2 dominated the card
2026-11-14 · how it starts · 4-step variant uses display-size numerals on desktop · giant numerals collided in 4 columns
2026-11-14 · content · Service "Includes" lists (3–5 each) and 8 file FAQs written from confirmed facts; promises flagged · spec asks for includes; no business facts invented
2026-11-14 · home 14 · Home Questions now wraps the shared FaqSection · same markup on home and file pages
2026-11-14 · pricing · H1 "Pricing, scoped to your workload." replaces "Pricing in plain numbers."; SPEC §11.4 updated · no public prices, the old headline would mislead
2026-11-14 · pricing · File toggle reads ?file= via useSearchParams inside <Suspense> (fallback = File 01 cards server-rendered); changes use history.replaceState · static export rule §9.8; no empty SSR
2026-11-14 · pricing · Plan comparison table shown only for File 01 (File 02 has one plan) · a one-column comparison adds nothing
2026-11-14 · pricing · "In every plan" strip items NDA / Daily report / Monthly billing are claims; notice period is a placeholder · contract terms reserved by user
2026-11-14 · pricing · Added FAQ "Why isn't there a price on the site?" (billing) · explains the no-price choice honestly
2026-11-14 · tabs · SegmentedTabs become two equal columns that wrap below 640px · labels overflowed and scrolled out of view at 390
2026-11-14 · calculator · Outputs show in-house monthly (giant), wages, payroll & benefits, yearly cost and "Contact for pricing"; savings rows return automatically if prices are ever added · spec null-price rule; breakdown helps the visitor without inventing numbers
2026-11-14 · calculator · "Book a call with these numbers" links to /book-a-call?file=01&hours=…&wage=… · spec; booking form pre-fills in S7
2026-11-14 · layout · Shared PageHeader (breadcrumb, label, kinetic H1, lead, optional object) for single pages · reused in S6/S7
2026-11-14 · footer · Footer headline "Talk to the desk." (was "Hand off the back office."); SPEC §11.0 updated · the CTA band directly above uses the same line, so it repeated on every page
2026-11-14 · work · Samples now match the spec's starter list (adds Social post set, Supplement photo report); each has task · time, what was done and tools — all claims · placeholders until real screenshots
2026-11-14 · work · Filter uses SegmentedTabs with one live TabsContent + an aria-live count; asymmetric 7/5 → 5/7 spans recomputed on the filtered list · pattern stays intact after filtering
2026-11-14 · how-we-work · Onboarding is a static timeline (StepsList), report is a Swiss document card, tools shown as a grouped grid (not marquee), security reuses the home bento with 6 tiles · spec allows "marquee or grid"; grid is easier to scan on a detail page
2026-11-14 · how-we-work · Large clocks stack vertically · two display-size clocks side by side overflowed 6 columns
2026-11-14 · about · Coordinates poster is a client component (visitor time zone + both clocks, joined by a 12px ink bar) · needs the visitor's zone
2026-11-14 · resources · Email gate in a Dialog, mock requestResource, honeypot, RECEIVED panel; PDFs listed in ASSETS_NEEDED §B2 · spec §11.9; delivery is Phase 2
2026-11-14 · structure · Page-specific sections in components/sections/how/ and components/sections/about/ · keeps files small; spec folders are a guide
