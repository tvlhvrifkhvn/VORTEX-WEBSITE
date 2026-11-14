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
2026-11-14 · book-a-call · Lead line reads "You'll hear back during desk hours" (claim) instead of a response-time placeholder · reply time = desk hours per user
2026-11-14 · book-a-call · No Calendly URL → hatched "Online booking opens soon" panel with an email button; with a URL, the iframe loads only on click · spec fallback; privacy/performance
2026-11-14 · book-a-call · Form pre-fills from ?file, ?hours/?wage (calculator) and ?plan (pricing cards); Suspense fallback = same form without pre-fill · static export rule; no empty SSR
2026-11-14 · book-a-call · Invalid submit focuses the first invalid field; SMS consent is unchecked, optional, tagged DRAFT and flagged as a claim · accessibility + TCPA-style consent pending legal review
2026-11-14 · book-a-call · No CTA band at the end of /book-a-call, /privacy, /terms · the page itself is the CTA / legal pages stay plain
2026-11-14 · faq · FAQ rewritten to the spec's 22 starter questions in 5 tags (home keeps 6); merged duplicates ("one person or a team" → "Who actually does the work?", carrier questions → one); FAQPage JSON-LD skips answers that are still placeholders · one source, no duplicate Q&A, no placeholder text in structured data
2026-11-14 · tabs · Segmented control with >3 options uses a 2-column grid below 640px · 5 FAQ categories didn't fit one row at 390
2026-11-14 · legal · Privacy + Terms drafts written from confirmed facts (Islamabad, Wise/Payoneer, File 02 rule, no claim-outcome guarantee, SMS non-sharing line); retention, payment terms, liability, governing law and review date are placeholders; whole article flagged in review mode · spec §11.12; legal review required
2026-11-14 · 404 · not-found.tsx renders out/404.html; Cloudflare serves it via not_found_handling "404-page" · static export
2026-11-14 · seo · Title template "%s — VortexOne"; home uses an absolute title (root segment gets no template); OG/Twitter on every page with /og.png · SPEC §14
2026-11-14 · seo · OG image is a static PNG (public/og.png, 1200×630) rendered once with Playwright from an HTML layout using the site's own fonts · spec allows static PNG; avoids satori/variable-font issues in static export
2026-11-14 · seo · site.url falls back to the Cloudflare preview URL until NEXT_PUBLIC_SITE_URL is set · example.com canonicals would point search engines at the wrong host
2026-11-14 · seo · JSON-LD: Organization + ProfessionalService in the root layout, Service (with offer catalog from content/services.ts) on file pages; all JSON-LD escapes "<" · spec; no review/rating schema
2026-11-14 · seo · sitemap.ts/robots.ts use dynamic = "force-static"; /styleguide excluded and disallowed · static export
2026-11-14 · a11y · AccessLint fixes: work strip scroll region wraps the list (role=region, own label); desk log role=log on a wrapper div; sr-only H2s on pricing, FAQ and calculator; slider thumbs get aria-labelledby · 0 violations after fixes
2026-11-14 · a11y · Segmented tabs: active segment now fills ink on the button itself (motion layoutId indicator removed) · checker read the animated layer as 1:1 contrast; accessibility over the slide effect
2026-11-14 · a11y · Decorative giant numerals (file headers, 404) render via CSS content from data-numeral · decorative, excluded from reading order and contrast checks
2026-11-14 · perf · Plex Mono imports latin-only files; Inter Tight variable keeps unicode-range subsets (browser downloads latin only) · smaller CSS, same rendering
2026-11-14 · perf · Lighthouse measured on a compressing server (Cloudflare compresses in production): Perf 92/95/90 (home/file 01/pricing), A11y 100, BP 100, SEO 100 · uncompressed local server under-reports performance
2026-11-14 · rev · Hero H1 lines → ["Back office", "for the people who sell", "and rebuild property."]; line 1 uses new token --text-hero (clamp 3.5rem–12rem, 11vw), lines 2–3 h3 (phone) / h2 (desktop); KineticHeadline gained `lineClasses` · user: make "Back office" the hero, reduce the rest
2026-11-14 · rev · Phone hero: meta blocks stacked one per line, ink bar full width, hero bottom padding 2.5rem (was section padding) · user: symmetry and even gaps on phone
2026-11-14 · rev · SpecStrip: wraps as a flex row with no separators on phone, " · " separators from 768px · 3-item 2-column grid left an orphan; separators wrapped to line starts
2026-11-14 · rev · Marquee OFF state (Reduce Motion / Motion toggle off) now really wraps — the list was shrink-0 at max-content width, so it clipped and looked frozen · user report "bar not moving"
2026-11-14 · rev · Night shift: static timeline (phone + desktop fallback) → ink rail with square nodes (last one signal), ink time chips (Islamabad in signal, ET in white), faint big step numbers; pinned desktop clock sits on an ink panel with a signal ET line · user: section felt dull
2026-11-14 · rev/typography · 53 straight apostrophes in content/ → ’ (typographic); ranges already use en dashes · typography skill: straight quotes read as unfinished
2026-11-14 · rev/interface · viewport themeColor (paper) + colorScheme light; numeric fields autoComplete="off"; email fields spellCheck={false} · web interface guidelines (autocomplete/spellcheck/theme-color); slider already touch-none
2026-11-14 · rev/perf · Home PinnedStory, DeskLog and CalculatorCompact load via next/dynamic (still server-rendered) · TBT 210 → 130–160 ms, Lighthouse 91 → 91–93 (compressed); smaller gain than the earlier uncompressed estimate
2026-11-14 · rev/motion · Hover-triggered ScrambleText also runs on scroll-in and on tap where the device can't hover · user: file numerals didn't scramble on phone
2026-11-14 · rev/motion · CursorLabel takes the panel theme and uses primary colors: signal/ink on the ink panel, ink/white on the signal panel · user: label stayed orange on the orange panel
2026-11-14 · images · Object photos are pre-processed once into B/W halftones (scripts/halftone.py, Pillow, dev-only): crop to slot ratio, autocontrast + 25% equalize, unsharp, shadows lifted to 28%, 45° dot screen (9–10px cells), 8-gray lossless WebP (200–450 KB) · user asked for halftone B/W; baked files are faster and identical in every browser vs. a CSS/SVG filter
2026-11-14 · images · Hero slot is 1600×1600 (was 2000) · source was 1080px; larger output only added bytes
2026-11-14 · images · Alt text rewritten to describe the supplied photos (door key, shingle close-up, calculator with coffee, laptop + notebook, keys + model house) · alt must match what's shown
2026-11-14 · rev · Home file-panel images cropped square (ImageFrame `square`) with corner marks in the panel accent (`text-primary`: signal on ink, ink on signal) · user: square images, colored + marks to support the design
2026-11-14 · rev · File panels redesign (e66a264) reverted at user request; panels back to square photos with accent corner marks
2026-11-14 · rev/home 04 · Redesign restored with user changes: corner numerals back to the original (cropped top-right, same scramble), square photos at the same spot in both panels, both titles on two lines ("Real Estate / Virtual Assistant", "Insurance / Supplementing"), one-liners reserve two lines so every row aligns across panels; "N services in this file" in both; bottom strip = audience ("For · Solo agents · Teams · Investors · Flippers" / "For · Roofing · Restoration · Contractors only"); panel top padding scales with the numeral so it never covers the label · user: A1 + B2, symmetry, no repeated strip
2026-11-14 · rev/pricing · SAMPLE prices (claim) in content/pricing.ts only; plans renamed Studio/Townhouse/Estate (File 01) and Per supplement/Volume/Custom (File 02) per user; lib/pricing.ts derives every price text (cards, spec tables, panels, comps, hero strip, FAQ) and falls back to "Contact for pricing" on null — verified by a null-price build · user: one-line price edits, automatic updates
2026-11-14 · rev/pricing · Plan comparison table stays File 01 only (rows are File 01-specific); price row derived · avoids inventing File 02 comparison rows
2026-11-14 · rev/copy · FAQ "How much does it cost?" now derived from pricing; "Why isn't there a price on the site?" → "Why do you confirm prices on a call?"; "Part-time plan" → "Studio plan"; pricing lead + meta description and llms.txt updated · these contradicted the new public prices
2026-11-14 · rev/services · `tier: core | addon` on every service; home 05 split into Core (10) and Add-ons (4, smaller tiles, ADD-ON tag); headline count from data via numberWord(); File 01 page lists core in 01.1 and add-ons in 01.1b; home panel count line = "6 core + 4 add-ons" / "4 core services" · user: services contradiction
2026-11-14 · rev/stats · Tile A = text-giant 40 + 5×8 hours grid (HoursGrid, motion stagger, static when off); B = "<24 hrs" (claim); C = savings % computed from calculator defaults (72% at sample prices) with footnote link, "Run the numbers" if null; new token --text-stat for the smaller tiles; E/F use a wide layout (number left, label right); desktop rows fixed at 15rem · user: balanced, fuller bento
2026-11-14 · rev/motion · Time values scramble only through valid digits (hour 1–12, minute tens 0–5) instead of a vertical roll · simpler: one rule in use-scramble.ts, keeps the left→right lock
2026-11-14 · rev/clock · LiveClock hides the visitor clock when the visitor's current UTC offset equals Asia/Karachi's (applies to header, menu and how-we-work) · user: no duplicate clocks for Pakistan visitors
2026-11-14 · rev/hero · Under the CTAs: DeskStatus with hero wording ("Desk open — replies today", claim) + price strip from stripText() (hidden if null) · user: fill whitespace
2026-11-14 · rev/comps · Summary row under the table + secondary See pricing button, spaced with half the section token · user: fill whitespace
2026-11-14 · rev/git · Snapshot before this revision = commit f525748 (local tag before-sample-pricing; tags can't be pushed from this session) · user: keep the old version for undo
