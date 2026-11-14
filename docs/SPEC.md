# VortexOne Website — Frontend Spec (Phase 1)

> Source of truth for design, content structure and build order.
> Operating rules (credits, honesty, revisions, gap-filling) are in `/CLAUDE.md`.
> Read this file **by section**, never all at once after Segment 0.

---

## §0 How to use this spec

Find sections with: `grep -n "^## §\|^### " docs/SPEC.md`, then read with offset/limit.

**Reading Map**

| Segment | Read only these sections |
|---|---|
| S0 Setup & intake | §0, §1, §9, §10.3, §12 |
| S1 Design system & primitives | §3, §4, §5, §6, §7, §10 |
| S2 Global layout + Home part A | §2, §8, §11.0, §11.1 (sections 01–07) |
| S3 Home part B | §11.1 (sections 08–15) |
| S4 File pages | §11.2, §11.3 |
| S5 Pricing + Savings calculator | §11.4, §11.5 |
| S6 Work, How we work, About, Resources | §11.6 – §11.9 |
| S7 Book a call, FAQ, Legal, 404 | §11.10 – §11.13 |
| S8 SEO, accessibility, performance, final audit | §14, §13 |
| End of every segment | §13 (checklist only) |

- From S2 on, the design system exists in code. Use the built primitives (`components/`, `/styleguide`) instead of re-reading §3–§7. Re-read one subsection only if you need a specific value.
- If the user later says something different from this spec, the user wins: update the line here and log it (CLAUDE.md §9).

---

## §1 Brief

**What VortexOne is.** A small, founder-run back-office agency based in Islamabad, Pakistan, working for US clients on US business hours. Small on purpose: the founder does the work and talks to every client.

**Two service lines, called "files" on the site:**

| | FILE 01 — Real Estate VA | FILE 02 — Insurance Supplementing |
|---|---|---|
| For | US real estate agents, teams/brokerages, investors and fix-and-flip operators | US roofing contractors and water-damage restoration contractors |
| Services (confirm in intake) | MLS listing management · Transaction coordination · CRM management · Lead follow-up & cold calling · Social media management · Fix-and-flip support | Xactimate estimates · Supplement packages · Photo & documentation review · Claim status tracking |
| Visitor's 5-second question | "Can you run my listings, transactions and follow-up reliably — and is it cheaper than hiring?" | "Can you write supplements in Xactimate that hold up — and what does it cost?" |

**Positioning.** Typical VA agencies list 15–25 services, inflated stats and "top 3%" claims. VortexOne wins on: specialism (two files only), direct founder access, US-hours coverage, written daily reporting, honest numbers, and cost compared with an in-house hire.

**File 02 positioning rule.** VortexOne prepares estimates and documentation **for the contractor**. Never write that VortexOne negotiates with insurance carriers, represents homeowners, or acts as a public adjuster. (Wording confirmed in intake.)

**Never imply:** a US office, a US company/LLC, a large team, years in business, client counts, awards, ratings, or registered trademarks (no ® / ™).

**Site goals:** 1) booked calls (primary) · 2) form inquiries · 3) checklist downloads (email capture) · 4) calculator use.
**Primary CTA everywhere:** "Book a call" → `/book-a-call`.

**Lessons from competitor research**
- Keep: sticky header CTA, 3-step "how it works", comparison table, transparent pricing, FAQ, final CTA band.
- Avoid: giant service menus, contradictory stats, duplicated sections, generic copy ("reliable, streamlined, dependable"), stock photos of people in headsets.

---

## §2 Concept — "Two Files, One Desk"

The site is a **desk** holding two **files**. Each file borrows the document its client already lives in:
- **File 01** looks like an **MLS listing sheet**: listing number, status, property details, spec table.
- **File 02** looks like an **insurance claim / estimate sheet**: claim number, line items, scope.

Both are Swiss spec sheets, so the site reads as one system, while each audience recognizes its own world.

**Rule:** document vocabulary appears **only in small mono labels**. H1/H2 are always plain English.

| Place | Small label (mono, uppercase) | Plain-English heading (example) |
|---|---|---|
| Global | THE DESK · DESK LOG · DESK OPEN | "Your day. Our night shift." |
| File 01 page | FILE 01 · LISTING NO. 001 · STATUS: ACTIVE | "Real estate back office, handled." |
| File 01 services | 01.1 — PROPERTY DETAILS | "What your VA takes off your plate" |
| File 01 audience | 01.2 — WHO IT'S FOR | "Built for three kinds of operators" |
| File 01 process | 01.3 — CLOSING TIMELINE | "From first call to live in about a week" |
| File 01 sample week | 01.4 — A WEEK AT THE DESK | "What a normal week looks like" |
| File 01 pricing | 01.5 — FLOOR PLANS | "Pick your hours" |
| File 01 comparison | 01.6 — COMPS | "Run the comps before you hire" |
| File 01 FAQ | 01.7 — DISCLOSURES | "Questions agents ask" |
| File 02 page | FILE 02 · CLAIM NO. 002 · STATUS: OPEN | "Supplements, line by line." |
| File 02 services | 02.1 — LINE ITEMS | "What we build for each claim" |
| File 02 inputs/outputs | 02.2 — SCOPE | "What you send. What you get back." |
| File 02 process | 02.3 — CLAIM FLOW | "How a claim moves across the desk" |
| File 02 audience | 02.4 — WHO IT'S FOR | "Contractors, not homeowners" |
| File 02 pricing | 02.5 — RATE SHEET | "Pricing per claim" |
| File 02 FAQ | 02.6 — CLAIM NOTES | "Questions contractors ask" |
| Booking | SCHEDULE A SHOWING (File 01) / SEND A CLAIM (File 02) | "Book a 15-min call" |

**Numbering system** (from the reference decks' "2.4 PROCESS" style):
- Home sections: `01 — THE DESK`, `02 — WORKS INSIDE`, …
- File pages: `01.1 — PROPERTY DETAILS`, `02.3 — CLAIM FLOW`, …
- Other pages: `01 — …`, `02 — …` within each page.

---

## §3 Design language — Neo-Swiss / Swiss-tech

### 3.1 The reference board, in words
1. **Agency presentation deck:** alternating signal-orange and black slides; decimal section numbers ("2.4 PROCESS"); stacked huge uppercase words (DISCOVER / DIRECTION / DESIGN) with tiny paragraphs on the right; a giant cropped numeral "4"; a metrics slide with big numbers and tiny labels; small square product photos.
2. **Fashion site "lab.":** light-grey canvas; huge lowercase wordmark; grayscale model with a solid orange rectangle cutting across the image; tiny uppercase nav; rotated vertical text labels; a square black arrow button; a vertical "01" index.
3. **Business proposal deck:** off-white; big tight grotesk headlines; small labelled cards numbered 01–04; monochrome object renders; one bright accent used sparingly.
4. **Swiss poster:** giant numerals in the corners; thick black bars; two-line metadata blocks (title + publication number, coordinates); a grayscale industrial product with a translucent orange rectangle over it (multiply); a date and a short quote in small type.
5. **Product poster:** a giant "01" behind a translucent orange object; a vertical rotated wordmark; a small question bottom-left; a tiny brand tag.

### 3.2 Principles
1. **Grid discipline.** Everything sits on the 12-column grid. Asymmetry is fine; misalignment is not.
2. **Scale contrast.** Type is either huge or tiny. Avoid a crowd of medium sizes.
3. **One accent.** Signal orange is the only hue: blocks, bars, buttons, highlights. Never sprinkled everywhere.
4. **Objects, not people.** Isolated grayscale objects carry the visuals. Only exception: the founder portrait.
5. **Information as decoration.** Use *real* metadata as texture: coordinates, file numbers, section numbers, times, hours. Never fake data.
6. **Lines and bars.** Hairline rules organize; thick ink bars punctuate.
7. **Whitespace is structure.** Generous section padding; giant type needs air.
8. **Numbers as graphics.** Big numerals (01, 02, prices, stats) are visual anchors.
9. **Honesty is part of the look.** "SAMPLE" and "DRAFT" labels are styled, not hidden.

### 3.3 Do / Don't
- **Do:** square corners, hairlines, mono labels, giant numerals, type cropped at section edges, rotated labels, corner "+" marks, alternating section themes, ragged-right text.
- **Don't:** rounded cards, drop shadows, gradients, glow, blur/glass, neon, 3D/WebGL, stock photos of people, emoji, icon soup, more than one accent, centered-everything layouts, auto-playing carousels.

### 3.4 2026 trends — what we use, and where
- **Bento grids** → home stats (03), services (05), security (13).
- **Kinetic typography** → page hero H1s only.
- **Scrollytelling** → one pinned section (home 06).
- **Anti-grid brutalism details** → visible rules, small mono everywhere, raw spec tables, cropped giant type.
- **Micro-interactions** → button fills, scramble on hover, row reveals, cursor label on file panels.
- **Alternating light/dark sections** instead of a dark-mode toggle.
- **AI readability** → schema, `llms.txt`, clean semantic HTML (§14).
- **Rejected:** 3D/WebGL, scroll-jacking, smooth-scroll libraries, glassmorphism, AI-generated people, autoplay video, page transitions.

---

## §4 Tokens

### 4.1 `app/globals.css` — use these values verbatim
Tailwind v4, CSS-first. After `shadcn init`, keep shadcn's `@theme inline { … }` mapping block, **replace** its `:root` values with §4.2, and **delete** its `.dark` block.

```css
@import "tailwindcss";

@theme {
  /* Remove Tailwind's default palette so off-brand colors can't be used */
  --color-*: initial;

  --color-paper: #E4E4E2;      /* default light background */
  --color-paper-2: #F2F2F0;    /* light surface / alternate light section */
  --color-white: #FFFFFF;
  --color-ink: #0E0E0E;        /* text, dark sections */
  --color-black: #0E0E0E;      /* alias: pasted components using bg-black stay on brand */
  --color-ink-2: #1A1A1A;      /* surfaces inside dark sections */
  --color-muted-light: #5A5A58; /* secondary text on light — renamed from --color-muted (clashes with shadcn semantic --color-muted) */
  --color-muted-dark: #8A8A88; /* secondary text on dark */
  --color-signal: #FF4D1F;     /* the only accent */
  --color-status: #1F9D55;     /* "desk open" dot only, always next to text */
  --color-line: rgb(14 14 14 / 0.16);
  --color-line-dark: rgb(255 255 255 / 0.14);

  --font-sans: "Inter Tight Variable", "Inter Tight", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;

  /* Type scale (fluid) */
  --text-giant: clamp(6rem, 18vw, 20rem);
  --text-giant--line-height: 0.82;
  --text-giant--letter-spacing: -0.05em;
  --text-display: clamp(3rem, 7.2vw, 8.5rem);
  --text-display--line-height: 0.9;
  --text-display--letter-spacing: -0.04em;
  --text-h2: clamp(2.25rem, 4.6vw, 5rem);
  --text-h2--line-height: 0.95;
  --text-h2--letter-spacing: -0.03em;
  --text-h3: clamp(1.5rem, 2.2vw, 2.25rem);
  --text-h3--line-height: 1.05;
  --text-h3--letter-spacing: -0.02em;
  --text-lead: clamp(1.125rem, 1.4vw, 1.375rem);
  --text-lead--line-height: 1.4;
  --text-body: 1rem;
  --text-body--line-height: 1.55;
  --text-small: 0.875rem;
  --text-small--line-height: 1.5;
  --text-button: 0.8125rem;
  --text-button--line-height: 1;
  --text-button--letter-spacing: 0.06em;
  --text-label: 0.75rem;
  --text-label--line-height: 1.3;
  --text-label--letter-spacing: 0.08em;
  --text-micro: 0.6875rem;
  --text-micro--line-height: 1.3;
  --text-micro--letter-spacing: 0.08em;

  /* Layout */
  --spacing-section: clamp(5rem, 10vw, 10rem);
  --spacing-margin: clamp(1.25rem, 4vw, 4rem);
  --spacing-gutter: clamp(1rem, 1.6vw, 1.5rem);
  --spacing-header: 4rem;

  /* Motion */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);
}

@utility container-vx {
  width: 100%;
  max-width: 90rem;
  margin-inline: auto;
  padding-inline: var(--spacing-margin);
}
@utility grid-vx {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: var(--spacing-gutter);
  @media (width >= 48rem) { grid-template-columns: repeat(8, minmax(0, 1fr)); }
  @media (width >= 64rem) { grid-template-columns: repeat(12, minmax(0, 1fr)); }
}
@utility label-mono {
  font-family: var(--font-mono);
  font-size: var(--text-label);
  line-height: var(--text-label--line-height);
  letter-spacing: var(--text-label--letter-spacing);
  text-transform: uppercase;
  font-weight: 500;
}
@utility tabular { font-variant-numeric: tabular-nums; }
```
If a utility such as `py-section` doesn't generate, use the variable form `py-(--spacing-section)` and log it.

### 4.2 Semantic layer (shadcn variables) + section themes
Every component uses semantic classes (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary text-primary-foreground`, `bg-card`). A `<Section theme="…">` sets `data-theme`, so everything inside, **including pasted shadcn/21st components**, adapts automatically.

```css
:root, [data-theme="paper"] {
  --background: var(--color-paper);
  --foreground: var(--color-ink);
  --card: var(--color-paper-2);
  --card-foreground: var(--color-ink);
  --popover: var(--color-white);
  --popover-foreground: var(--color-ink);
  --primary: var(--color-signal);
  --primary-foreground: var(--color-ink);
  --secondary: var(--color-ink);
  --secondary-foreground: var(--color-white);
  --muted: var(--color-paper-2);
  --muted-foreground: var(--color-muted-light);
  --accent: var(--color-paper-2);
  --accent-foreground: var(--color-ink);
  --destructive: var(--color-signal);
  --border: var(--color-line);
  --input: var(--color-muted-light);    /* form field borders need ≥3:1 */
  --ring: var(--color-ink);
  --radius: 0rem;
}
[data-theme="paper-2"] { --background: var(--color-paper-2); --card: var(--color-white); --muted: var(--color-paper); --accent: var(--color-paper); }
[data-theme="white"]   { --background: var(--color-white); --card: var(--color-paper-2); }
[data-theme="ink"] {
  --background: var(--color-ink);
  --foreground: var(--color-white);
  --card: var(--color-ink-2);
  --card-foreground: var(--color-white);
  --popover: var(--color-ink-2);
  --popover-foreground: var(--color-white);
  --secondary: var(--color-white);
  --secondary-foreground: var(--color-ink);
  --muted: var(--color-ink-2);
  --muted-foreground: var(--color-muted-dark);
  --accent: var(--color-ink-2);
  --accent-foreground: var(--color-white);
  --border: var(--color-line-dark);
  --input: var(--color-muted-dark);
  --ring: var(--color-white);
}
[data-theme="signal"] {
  --background: var(--color-signal);
  --foreground: var(--color-ink);
  --card: var(--color-signal);
  --card-foreground: var(--color-ink);
  --primary: var(--color-ink);
  --primary-foreground: var(--color-white);
  --secondary: var(--color-ink);
  --secondary-foreground: var(--color-white);
  --muted-foreground: var(--color-ink);  /* no muted text on signal; use size/weight for hierarchy */
  --border: rgb(14 14 14 / 0.35);
  --input: var(--color-ink);
  --ring: var(--color-ink);
}
[data-theme] { background-color: var(--background); color: var(--foreground); }

@layer base {
  html {
    background: var(--color-paper);
    color: var(--color-ink);
    scroll-padding-top: calc(var(--spacing-header) + 1rem);
    -webkit-font-smoothing: antialiased;
  }
  body { font-family: var(--font-sans); font-size: var(--text-body); line-height: var(--text-body--line-height); }
  ::selection { background: var(--color-signal); color: var(--color-ink); }
  :focus-visible { outline: 2px solid currentColor; outline-offset: 3px; }
}
```

### 4.3 Approved contrast pairs (computed, approximate)

| Foreground on background | Ratio | Allowed use |
|---|---|---|
| ink on paper | ~15:1 | all text |
| ink on paper-2 / white | ~17–19:1 | all text |
| muted `#5A5A58` on paper / paper-2 / white | ~5.4 / 6.2 / 6.9:1 | secondary text, labels |
| white on ink | ~19:1 | all text |
| muted-dark `#8A8A88` on ink / ink-2 | ~5.6 / 5.0:1 | secondary text, labels |
| ink on signal | ~5.8:1 | **the only text color on signal** |
| signal on ink / ink-2 | ~5.8 / 5.3:1 | accent text and numbers on dark |
| white on signal, signal on white | ~3.3:1 | large text ≥24px only; avoid |
| signal on paper / paper-2 | ~2.6:1 | **never for text**; blocks and bars only |

### 4.4 Typography rules
- Inter Tight (variable) for everything except labels. Giant/display/H2/H3: weight 600, tight tracking, ragged right. Lead/body: 400. Strong: 600.
- IBM Plex Mono 500, uppercase: labels, nav, buttons, metadata, file numbers, table keys.
- Numbers: `tabular` wherever they align or animate.
- Headlines that animate or need a controlled rag take **manual line breaks from content** (`lines: string[]`).
- Body measure: 60–68ch. Never center body text.
- Fonts come from npm (Fontsource): `@fontsource-variable/inter-tight`, `@fontsource/ibm-plex-mono` (400, 500). Verify exact package and family names after install. Don't use `next/font/google` (build-time network may be blocked).

### 4.5 Grid, spacing, borders, layers
- Container: `container-vx` (max 1440px, fluid side margins). Section backgrounds go full-bleed; content stays in the container.
- Columns: 4 (<768) · 8 (768–1023) · 12 (≥1024). Design checkpoints: **390, 768, 1280, 1440** (sanity check 1920).
- Section padding: `py-section`. Section header to content: `clamp(2.5rem, 5vw, 5rem)`.
- Borders: 1px `border-border` hairlines. Bars: 8px (`h-2`) or 12px (`h-3`) solid `bg-foreground` (or signal where specified).
- Radius 0 everywhere; `rounded-full` only for status dots and radio inputs.
- Z-index: header 50 · mobile menu 60 · dialog 70 · grid overlay 80 · skip link 90.
- Motion tokens: fast 150ms · base 300ms · slow 600ms · xslow 900ms. `ease-out-expo` for entrances, `ease-in-out-quart` for fills/wipes. Stagger 60–80ms. Reveal distance 16px.

---

## §5 Layout motifs & signature elements

1. **SectionHeader** — full-width hairline on top; one row: left label `NN — NAME` (label-mono), right meta (label-mono, muted), e.g. `FILE 01 + 02` or `06 ITEMS`. Below: H2. Two layouts: **stacked** (H2 cols 1–9, lead cols 1–6) and **split** (H2 cols 1–7, small lead cols 9–12 aligned to the H2's last line, like the reference "PROCESS" slide).
2. **Giant numerals** — `text-giant`, weight 600, partly cropped by the section edge (overflow hidden, offset ≈0.1em). Used in file panels, file page headers, how-it-starts, 404.
3. **SpecTable** — two-column key/value rows separated by hairlines. Key: label-mono, muted. Value: sans 500. Optional trailing mono note. Looks like an MLS sheet.
4. **SpecStrip** — one row of 3–4 mono items separated by ` · `, hairlines above and below. Wraps to 2 columns on mobile.
5. **Thick bars** — 8px ink bars as poster punctuation (hero bottom-left). Signal 8px bar on top of the recommended plan and the VortexOne comparison column.
6. **CornerMarks** — four "+" glyphs (12px, 1px strokes) at an element's corners, offset 8px. On ImageFrame and selected tiles.
7. **RotatedLabel** — vertical mono text (`writing-mode: vertical-rl; transform: rotate(180deg)`) on the hero's right edge. Hidden below 1024px.
8. **MetaBlock** — two-line mono block (500 uppercase line + 400 line), e.g. `ISLAMABAD` / `33.6844°N 73.0479°E`. Used in the hero's top row and the footer, like the Swiss poster.
9. **ImageFrame composition** — grayscale object (`filter: grayscale(1) contrast(1.05)`) + signal block (absolute, `mix-blend-multiply`, ≈45% width × 22% height, crossing the object horizontally) + CornerMarks. Variants: block left / right / none.
10. **FileTag** — `FILE 01` / `FILE 02` chip: 1px border, square, label-mono.
11. **Section rhythm** — paper is the default; ink for emphasis; signal at most twice per page and never in adjacent sections; vary long pages with paper-2; avoid 3 consecutive sections with the same theme.
12. **Arrows** — `→` internal links, `↗` external links, `↓` scroll cues, typed in the sans font. Lucide icons only where a glyph won't do.
13. **Index numbers** — two-digit mono, muted (`01`, `02`) on every list.

---

## §6 Motion system

### 6.1 Global rules
- Library: `motion` (`import { motion, useScroll, useTransform, useInView } from "motion/react"`). Plain CSS for simple loops (marquee, colon blink, button fills).
- Animate only `transform` and `opacity` (exception: `grid-template-rows` for row reveals).
- Root: `<MotionConfig reducedMotion="user">`.
- **Motion toggle** (WCAG 2.2.2): a `MOTION: ON / OFF` control in the mobile menu and the footer. It sets `data-motion="off"` on `<html>` and a React context. Default OFF when `prefers-reduced-motion: reduce`. Persist in `localStorage` key `vx-motion` (wrap in try/catch).
- Motion OFF or reduced → every primitive renders its **final state** (rules below). No content may depend on animation to become visible.
- Entrance animations run **once**. Server-render final content; animate after hydration (no empty SSR, no layout shift).
- One kinetic headline per page (the H1).

### 6.2 Primitives (`components/motion/`, all `"use client"`)
1. **Reveal** — on enter (amount 0.2, once): opacity 0→1, y 16→0, 600ms expo-out. `stagger` prop for children (70ms). OFF: static.
2. **KineticHeadline** — props `lines: string[]`, `as`. Each line in an `overflow-hidden` block; inner span y 110%→0, 900ms expo-out, 80ms stagger, 120ms delay. Real text is in the DOM for SEO and screen readers. OFF: static.
3. **ScrambleNumber** — props `value`, `prefix`, `suffix`, `format`. On enter, digit characters cycle random digits every 40ms and lock left→right 60ms apart (total ≤900ms). Symbols (`$ , % : . < ~`) never scramble. `tabular`. Renders an `aria-hidden` animated span plus an `sr-only` final value. When `value` changes (calculator), re-runs with a 400ms total. OFF: final value.
4. **ScrambleText** — same idea for short uppercase labels (A–Z, 0–9). Trigger on hover/focus (nav links, file numbers) or on enter. ≤500ms. OFF: none.
5. **Marquee** — duplicated track, CSS `translateX(0 → -50%)`, linear, infinite, 40s per loop (`speed` prop); separator `+` in muted. Pause on hover and focus-within. No gradient edge fades (use hard rules). OFF: static wrapped list, duplicate removed.
6. **LiveClock** — two clocks: the visitor's (`Intl.DateTimeFormat().resolvedOptions().timeZone` → last segment, underscores to spaces, uppercase; fallback `YOUR TIME`) and `ISLAMABAD` (`Asia/Karachi`). Format `h:mm AM/PM`. Update on the minute (timeout to the next minute, then a 60s interval). Colon blinks at 1Hz via CSS (stops when motion is OFF). First paint shows fixed-width `--:--` placeholders (no CLS). Variants: compact (header), large (How we work).
7. **DeskStatus** — reads `site.desk` (time zone, weekdays, open, close). Open: filled status dot + `DESK OPEN`. Closed: hollow dot + `DESK CLOSED · OPENS 9:00 AM ET` (computed). Text is always present. Re-evaluates each minute.
8. **DeskLog** — terminal-style feed: mono, `bg-card` panel with hairline, header bar `DESK LOG — SAMPLE`. Shows 6 rows; every 2.8s it prepends the next entry from content (cycling); new row y −8→0 + fade; oldest row fades out. Pauses when off-screen (`useInView`) or the tab is hidden. `role="log"`, `aria-live="off"`. OFF: 6 static rows.
9. **PinnedStory** — home 06. At ≥1024px with motion ON: outer height = `steps × 70vh`; inner `position: sticky; top: var(--spacing-header); height: calc(100vh - var(--spacing-header))`. Left: big clock (`text-display`, `tabular`) showing the active step's Islamabad time with a ScrambleNumber transition, plus the converted US Eastern time (`lib/time.ts`, computed for today so DST is right), plus a thin signal progress bar (scaleX = progress). Right: the step list; active step full opacity with a signal index square; others 30% opacity. Active index comes from `useScroll({ target })`. All step text stays in the DOM. Below 1024px or OFF: a static vertical timeline (time | title | text rows with hairlines).
10. **LineDraw** — an SVG path whose stroke-dashoffset goes 1→0 with section scroll progress (or 1.2s on enter). OFF: fully drawn.
11. **HoverRevealList** — service rows. Each row header is a `<button aria-expanded>`. Fine pointers expand on hover and on click/focus; touch expands on tap. Expansion via `grid-template-rows: 0fr → 1fr` (300ms). On hover: the index number gets a signal box, the title shifts x 8px, the `→` turns to `↓`. Expanded content: "Includes" list + optional sample image.
12. **Button fill** (CSS, in `components/ui/button.tsx`) — pseudo-element fills from the left (scaleX 0→1, origin left, 300ms quart); label color swaps; arrow moves x 4px. OFF: instant color swap.
13. **ParallaxText** — final CTA text, translateY 40px → −40px across the section's scroll. OFF: none.
14. **CursorLabel** — `(pointer: fine)` only, file panels only, behind `features.cursorLabel`: a small signal box `OPEN FILE →` (label-mono, ink text) follows the cursor with a spring (stiffness 300, damping 30). The system cursor stays visible. OFF/coarse: not rendered.
15. **HeaderAutoHide** — header hides (y −100%) when scrolling down past 120px; it shows on scroll up, on focus within, or while the menu is open. OFF: always visible.
16. **MenuOverlay** — mobile menu: full-screen ink; links stagger in (y 24→0, 40ms); focus trap; Esc closes; body scroll lock; focus returns to the Menu button.
17. **GridOverlay** — review mode only (§9.6): pressing `G` toggles a fixed 12-column overlay (signal columns at 8% opacity, `pointer-events: none`).

---

## §7 Imagery & assets

### 7.1 Art direction (tell the user this when asking for images)
- **Isolated object photography** on a plain light-grey seamless background, soft single shadow, object centered with ≥15% padding, straight-on or 3/4 view, no text, no logos, no people.
- Color photos are fine; the site converts them to grayscale with CSS. AI-generated object images are fine if realistic and artifact-free. **Never** AI-generated people.
- Founder portrait: plain background, shoulders up, natural light; shown in grayscale.
- Work samples: real screenshots with **every** name, address, phone, email, MLS number and claim number blurred or replaced. Labelled SAMPLE.
- Format: WebP (or high-quality JPG/PNG that Claude Code converts), sizes below.

### 7.2 Image slots (registry: `content/images.ts`)

| Slot id | Path | Size (px) | Subject | Used on |
|---|---|---|---|---|
| hero-object | `/images/objects/hero-key.webp` | 2000×2000 | House key on a plain ring | Home hero |
| file01-object | `/images/objects/lockbox.webp` | 1600×2000 | Realtor key lockbox | Home file panel 01, Real Estate header |
| file02-object | `/images/objects/shingles.webp` | 1600×2000 | Small stack of asphalt roof shingles | Home file panel 02, Supplementing header |
| calculator-object | `/images/objects/calculator.webp` | 1600×1600 | Vintage desk calculator | Home 08, Savings calculator |
| process-object | `/images/objects/notebook.webp` | 1600×1200 | Closed laptop with a notebook | How we work |
| resources-object | `/images/objects/clipboard.webp` | 1600×2000 | Clipboard with a blank checklist | Resources |
| notfound-object | `/images/objects/yard-sign.webp` | 1600×2000 | Blank real-estate yard sign | 404 |
| founder-portrait | `/images/founder/portrait.webp` | 1600×2000 | Founder portrait | Home 12, About |
| work-01 … work-06 | `/images/work/work-0N.webp` | 1600×1000 | Anonymized deliverable screenshots | Home 11, Work |

### 7.3 Placeholder system
- Each slot in `content/images.ts`: `{ id, src, alt, width, height, placeholder: boolean }`.
- While `placeholder: true`, `ImageFrame` renders a `bg-card` box with a fine diagonal hatch (repeating-linear-gradient in **border color**, the only allowed gradient), CornerMarks, and a mono caption `IMAGE SLOT · hero-object · 2000×2000`. Layout and aspect ratio match the real image, so swapping changes nothing else.
- To go live: the user uploads a file with the exact path; Claude Code flips `placeholder: false`. Zero component edits.
- Screenshots (`work-*`) are grayscale by default and turn to color on hover (fine pointers only).

### 7.4 Logo & favicon
- If no logo is supplied: a typographic wordmark `VORTEXONE` in Inter Tight 700, tracking −0.04em, as an inline SVG/text component, plus a monogram `V1` for small spaces.
- Favicon: `favicon.svg`, a signal square with an ink `V1`.
- OG image: one default 1200×630 (ink background, giant wordmark, mono metadata). Generate at build time if static export allows; otherwise produce a static PNG and log the method.

---

## §8 Voice & copy

**Reader:** a busy US agent or contractor skimming on a phone between jobs.

**Tone:** plain, confident, specific, calm. Short sentences. Verbs first. Numbers instead of adjectives. US English and formats (`$1,200`, `9:00 AM ET`, `Mon–Fri`).

**Banned words/phrases:** seamless, cutting-edge, world-class, top 3%, revolutionary, game-changer, leverage, synergy, unlock, elevate, empower, supercharge, best-in-class, hassle-free, one-stop shop, "dedicated team", 24/7 (unless confirmed), exclamation marks, emoji.

**Casing:** H1/H2/H3 in sentence case. Labels, nav and buttons in uppercase mono (set in CSS; write the content in normal case).

**Fixed CTA labels:** Book a call · Book a 15-min call · See pricing · Open file · I'm an agent · I'm a contractor · Schedule a showing (File 01 only) · Send a claim (File 02 only) · Run the numbers · Get the checklist · See all samples · Read the story.

**Honesty:** follow CLAUDE.md §5. New marketing claims you write get `claim: true`. Unknown facts become `[[PLACEHOLDER: …]]`.

**Drafting rule for gaps:** where this spec gives a headline but no body copy, write body copy that follows these rules, uses only facts in §1, and stays under ~35 words per paragraph.

---

## §9 Architecture

### 9.1 Stack
- **Next.js** (latest stable, App Router, TypeScript strict), **static export** (`output: "export"`, `images: { unoptimized: true }`, `trailingSlash: true`).
- **Tailwind CSS v4** (CSS-first config in `app/globals.css`).
- **shadcn/ui** as the base layer for pasted 21st.dev/shadcn components (`components.json`, cssVariables on).
- **motion** for animation. No other animation or smooth-scroll library.
- No CMS: content lives in typed TS files.
- Deploy target: any static host (e.g., Cloudflare Pages or Netlify, connected to GitHub), or the same server as the Phase 2 backend. Don't deploy anything yourself; document it in the README.

### 9.2 Approved dependencies
`next`, `react`, `react-dom`, `typescript`, `@types/*`, `tailwindcss`, `@tailwindcss/postcss`, `postcss`, `motion`, `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`, `@radix-ui/*` (only those that shadcn adds for components actually used), `@fontsource-variable/inter-tight`, `@fontsource/ibm-plex-mono`, `eslint` + Next's ESLint config, and (dev-only, optional, for audits) `playwright`.
Anything else → ask first (e.g., carousels: prefer native CSS scroll-snap over adding `embla-carousel`).

### 9.3 Scaffold (Segment 0)
- `create-next-app` refuses non-empty folders. Scaffold non-interactively in a temp folder (e.g., `/tmp/vx`) with TypeScript, ESLint, Tailwind, App Router, **no** `src/` dir, import alias `@/*`, npm. Then copy everything into the repo root **without overwriting** `CLAUDE.md`, `docs/` or `.git`.
- If `SPEC.md` is at the repo root: `git mv SPEC.md docs/SPEC.md`.
- `npx shadcn@latest init`, then apply §4.1 + §4.2 to `globals.css`.
- Configure `next.config.ts` (§9.1). If `npm run lint` doesn't exist, add `"lint": "eslint ."`.

### 9.4 Folder structure
```
/
├─ CLAUDE.md
├─ docs/            SPEC.md · PROGRESS.md · DECISIONS.md · ASSETS_NEEDED.md
├─ app/
│  ├─ layout.tsx · globals.css · page.tsx (home) · not-found.tsx · sitemap.ts · robots.ts
│  ├─ real-estate-va/ · insurance-supplementing/ · pricing/ · savings-calculator/
│  ├─ work/ · how-we-work/ · about/ · resources/ · book-a-call/ · faq/
│  ├─ privacy/ · terms/ · styleguide/   (each with page.tsx; styleguide is internal + noindex)
├─ components/
│  ├─ ui/           primitives + shadcn/21st components (button, section, section-header, spec-table, image-frame, file-tag, accordion, tabs, slider, dialog, form fields…)
│  ├─ motion/       client motion primitives (§6.2)
│  ├─ layout/       header, mobile-menu, footer, breadcrumb, cta-band, motion-toggle, review-mode, grid-overlay
│  └─ sections/
│     ├─ home/      one file per home section (hero.tsx, tools-marquee.tsx, stats-bento.tsx, …)
│     ├─ file/      shared by both file pages (file-header, service-list, audience, scope, sample-week…)
│     └─ shared/    comparison, pricing-cards, faq-list, how-it-starts, calculator, work-strip…
├─ content/
│  ├─ types.ts · site.ts · nav.ts · images.ts · tools.ts · services.ts
│  ├─ home.ts · real-estate.ts · supplementing.ts · pricing.ts · comparison.ts · calculator.ts
│  ├─ faq.ts · work.ts · how-we-work.ts · about.ts · resources.ts · legal/privacy.ts · legal/terms.ts
├─ lib/
│  ├─ utils.ts (cn) · time.ts · calculator.ts · seo.ts · utm.ts
│  └─ api/  types.ts · client.ts · forms.ts
├─ public/  images/objects/ · images/founder/ · images/work/ · files/ · favicon.svg · llms.txt
├─ .env.example · next.config.ts · README.md
```
**Data flow:** `page.tsx` imports content and composes sections; sections receive props only; shared content (services, FAQ, pricing) is filtered by `file` or tags, never duplicated.

### 9.5 Content model (`content/types.ts`, sketch — extend as needed)
```ts
export type FileId = "01" | "02";
export type Claim = { claim?: true };            // unconfirmed marketing claim
export interface Stat extends Claim { value: number | string; prefix?: string; suffix?: string; label: string; note?: string }
export interface Service extends Claim { id: string; file: FileId; index: string; title: string; summary: string; includes: string[]; featured?: boolean; sampleImage?: string }
export interface PricingPlan extends Claim { id: string; file: FileId; name: string; tagline: string; price: number | null; unit: string; hours?: string; features: string[]; recommended?: boolean }
export interface FaqItem extends Claim { q: string; a: string; tags: ("general" | "file01" | "file02" | "billing" | "security" | "home")[] }
export interface Step { time?: string; title: string; text: string; file?: FileId | "both" }
```
`content/site.ts` holds: brand name, founder (placeholder), contact (email, WhatsApp, LinkedIn — placeholders), Calendly URL (from env), location (`Islamabad, Pakistan`, `33.6844°N 73.0479°E`), desk config `{ timeZone: "America/New_York", days: [1,2,3,4,5], open: "09:00", close: "18:00", claim: true }`, response time (placeholder, claim), and feature flags `{ deskLog, pinnedStory, cursorLabel, newsletter, calculatorFile02: false }`.

### 9.6 Review mode (makes later claim/placeholder revisions cheap)
- `?review=1` turns it on (persists in `sessionStorage` key `vx-review`); `?review=0` turns it off. It sets `data-review` on `<html>`.
- Components rendering an item with `claim: true` add `data-claim`. Text containing `[[PLACEHOLDER` is rendered through a tiny `<Text>` helper that adds `data-placeholder`.
- CSS only: in review mode, `[data-claim]` gets a dashed signal outline + a small `CLAIM` tag; `[data-placeholder]` gets a dashed outline + a `PLACEHOLDER` tag; the `G` key toggles GridOverlay. Outside review mode nothing extra renders.

### 9.7 Form/API adapter (Phase 2-ready)
- `lib/api/types.ts`: `LeadPayload { name, email, phone?, role, file: "01" | "02" | "unsure", hoursPerWeek?, message?, smsConsent: boolean, source: string, utm?: Record<string,string> }`, `ResourceRequestPayload { email, resourceId, source, utm? }`, `NewsletterPayload { email, source }`, `ApiResult { ok: boolean; mock?: boolean; error?: string }`.
- `lib/api/client.ts`: `post(path, body)`. If `NEXT_PUBLIC_API_BASE_URL` is empty → wait 600ms, `console.info` in dev, return `{ ok: true, mock: true }`. Otherwise POST JSON with a 10s timeout. Mark `// PHASE 2:` where real endpoints plug in.
- `lib/api/forms.ts`: `submitLead`, `requestResource`, `subscribeNewsletter`.
- Forms: native `<form>`, minimal client state, client-side validation (required, email format), inline errors (text + icon, `aria-describedby`), states idle / submitting / success / error. Success replaces the form with a Swiss "RECEIVED" panel. Hidden honeypot field. `lib/utm.ts` stores `utm_*` + referrer on first load in `sessionStorage` (try/catch) and attaches them to payloads.
- `.env.example`: `NEXT_PUBLIC_SITE_URL=`, `NEXT_PUBLIC_API_BASE_URL=`, `NEXT_PUBLIC_CALENDLY_URL=`.

### 9.8 Static-export rules
No `headers()`/`cookies()`, no route handlers (metadata files like `sitemap.ts`/`robots.ts` are fine), no server actions, no image optimization. Wrap `useSearchParams` users in `<Suspense>`. Interactive leaves are client components; sections stay server components where possible.

### 9.9 `/styleguide` (internal)
Not in nav or sitemap; `robots: noindex`. Shows: color tokens + contrast pairs, type scale, grid, section themes, every primitive and motion primitive, buttons in every theme, form fields and states, ImageFrame (placeholder + real), and every pasted 21st.dev component. This is the visual audit surface for S1 and for later revisions.

---

## §10 Components

### 10.1 Inventory (build in S1)
**UI (`components/ui/`):** Container · Grid · Section (`theme` prop) · SectionHeader (stacked/split) · Rule · Bar · CornerMarks · RotatedLabel · MetaBlock · FileTag · SpecStrip · SpecTable · Button (primary / secondary / ghost / text; md/lg; renders `Link` or `button`; min height 48px) · ArrowLink · Tag · StatTile · Tile (bento cell) · ImageFrame · Text (placeholder-aware) · Wordmark · Accordion · Tabs/SegmentedToggle · Slider · Dialog · Input · Textarea · Select · Checkbox · Radio.
**Motion (`components/motion/`):** everything in §6.2.
**Layout (`components/layout/`):** Header · MobileMenu · Footer · Breadcrumb · CtaBand · MotionToggle · ReviewMode · GridOverlay.

### 10.2 Component Request format (what you send the user)
```
COMPONENT REQUEST — <slot>
Used in: <page / section>
Search on 21st.dev for: "<keyword>", "<keyword>"   (also OK: Magic UI, Motion Primitives, React Bits, shadcn/ui)
Must: <criteria>
Avoid: glow, gradients, glass, blur, 3D, new heavy dependencies
Reply with: the install command OR the pasted code — or "build it yourself" / "skip"
```

### 10.3 Shopping list — request the whole list ONCE, in Segment 0's Intake Request

| # | Slot | Priority | Used in | Search keywords | Example sources |
|---|---|---|---|---|---|
| 1 | marquee | must | Home 02, How we work tools | "marquee", "infinite slider" | Magic UI Marquee · Motion Primitives Infinite Slider |
| 2 | number-scramble | must | Stats, prices, calculator | "text scramble", "decrypted text", "number ticker" | Motion Primitives Text Scramble · React Bits Decrypted Text · Magic UI Number Ticker |
| 3 | kinetic-headline | must | Page hero H1s | "text effect", "split text", "text reveal" (line slide-up, no blur) | Motion Primitives Text Effect · React Bits Split Text |
| 4 | animated-button | must | All CTAs | "animated button", "fill button", "slide button" (hard fill, no glow) | 21st.dev buttons |
| 5 | bento-grid | must | Home 03, 05, 13 | "bento grid" | Magic UI Bento Grid |
| 6 | accordion | must | FAQ, service rows | "accordion" | shadcn Accordion · Motion Primitives Accordion |
| 7 | segmented-tabs | must | Pricing toggle, Work filter, FAQ categories | "animated tabs", "segmented control" | 21st.dev tabs |
| 8 | range-slider | must | Calculator | "slider", "range slider" | shadcn Slider |
| 9 | dialog | must | Work lightbox, resource gate | "dialog", "modal" | shadcn Dialog |
| 10 | horizontal-strip | nice | Home 11 work strip | "horizontal scroll", "scroll snap" (no new deps) | 21st.dev |
| 11 | sticky-scroll | nice | Home 06 pinned story | "sticky scroll reveal", "scroll timeline" | 21st.dev / Aceternity (strip glow) |
| 12 | fullscreen-menu | nice | Mobile nav | "fullscreen menu", "menu overlay" | 21st.dev |
| 13 | cursor-follower | nice | File panels | "follow cursor", "cursor" | Magic UI / 21st.dev |
| 14 | animated-list | nice | Desk log | "animated list", "terminal" | Magic UI Animated List |

Missing **must** items are built by you in S1. Missing **nice** items are built in the segment that needs them.

### 10.4 Integration checklist (for each received component)
1. Save it as one file in `components/ui/` or `components/motion/` (kebab-case name = slot name).
2. Remove unused variants, props, demo code and comments.
3. Replace colors, radius, shadows and fonts with semantic classes and tokens. Remove glow, gradients and blur.
4. Add reduced-motion + Motion-toggle behavior; check keyboard and screen-reader behavior.
5. Confirm dependencies are approved; otherwise ask.
6. Show it on `/styleguide`. Log one line in DECISIONS (source + what you changed).

---

## §11 Pages

> Every page: SectionHeader labels per §2 numbering, one H1, a CTA band at the end, metadata via `lib/seo.ts`. Copy lives in `content/`. Mobile behavior is listed where it isn't obvious.

### 11.0 Global layout
- **`app/layout.tsx`:** fonts, default metadata, `lang="en-US"`, skip link ("Skip to content"), Header, `<main id="content">`, Footer, `MotionConfig`, MotionToggle context, ReviewMode, UTM capture, Organization JSON-LD.
- **Header (≥1024px):** 64px tall, `bg-background` (paper), bottom hairline. Left: Wordmark. Center nav (label-mono, ScrambleText on hover): `FILES ▾` (dropdown: both files with number, name, one-liner) · PRICING · CALCULATOR · WORK · ABOUT. Right: compact LiveClock + DeskStatus, then **[Book a call]** (primary). Active page: an 8px signal square before the label. HeaderAutoHide.
- **Header (<1024px):** Wordmark, DeskStatus dot, compact **[Book a call]**, and a square `MENU` button (label + plus icon that rotates into ×). MenuOverlay: ink, giant numbered links (`01 REAL ESTATE VA`, `02 INSURANCE SUPPLEMENTING`, `03 PRICING`, `04 CALCULATOR`, `05 WORK`, `06 HOW WE WORK`, `07 ABOUT`, `08 FAQ`), contact line, LiveClock, MotionToggle.
- **Footer (theme ink):** Row 1: H2 "Hand off the back office." + **[Book a call]**. Row 2 columns: FILES (Real Estate VA, Insurance Supplementing) · COMPANY (How we work, About, Work samples) · TOOLS (Pricing, Savings calculator, Resources, FAQ) · CONTACT (email, WhatsApp ↗, LinkedIn ↗, Book a call). Newsletter mini-form if the flag is on. Row 3: MetaBlock `ISLAMABAD / 33.6844°N 73.0479°E`, desk hours, MotionToggle, Privacy, Terms, `© {year} VortexOne`. Bottom: giant full-bleed `VORTEXONE` wordmark, cropped by the page bottom.
- **CtaBand:** themes signal or ink; label, H2, one sentence, primary + secondary button.
- **Breadcrumb:** label-mono `VORTEXONE / FILE 01 / REAL ESTATE VA`; BreadcrumbList JSON-LD.

### 11.1 Home `/`  (content: `content/home.ts` + shared)

**01 — THE DESK (hero, paper)**
- Top row of 3 MetaBlocks: `VORTEXONE / BACK OFFICE DESK` · `ISLAMABAD → UNITED STATES / 33.6844°N 73.0479°E` · `FILE 01 + FILE 02 / REAL ESTATE · SUPPLEMENTING`.
- H1 (KineticHeadline, `text-display`, cols 1–9): lines `["Back office for", "the people who sell", "and rebuild property."]`.
- Lead (cols 1–6, muted): "Real estate admin and insurance supplementing for US agents and contractors, done by a specialist on your hours."
- SpecStrip: `ON US HOURS · FOUNDER-RUN · MONTHLY, NO LOCK-IN` (the last item is a claim).
- CTAs: **[I'm an agent →]** primary → `/real-estate-va` · **[I'm a contractor →]** secondary → `/insurance-supplementing` · text link "or book a 15-min call".
- Visual: ImageFrame `hero-object` at cols 9–12; signal block crossing it (multiply); CornerMarks. RotatedLabel on the right edge: `VORTEXONE — BACK OFFICE DESK — NO. 001`. An 8px ink bar at the bottom of cols 1–4.
- Mobile: MetaBlocks collapse to one line; H1; image full width with block; CTAs stacked full width.

**02 — WORKS INSIDE (tools marquee, paper, hairlines top and bottom)**
- Label left, Marquee of tool names as text (no logos), from `content/tools.ts` (claim: confirm in intake). Starting list: MLS, Zillow, your CRM, Google Workspace, Notion, ClickUp, Calendly, Xactimate.

**03 — BY THE NUMBERS (stats bento, paper)**
- Bento, 6 tiles, 2 large. ScrambleNumber on each.
  - A (large): `40` `HRS/WK` — "Full-time capacity, one specialist."
  - B: `<15` `MIN` — "Reply time during desk hours." (claim)
  - C (large, signal theme): savings `%` **computed** from `lib/calculator.ts` defaults and the Townhouse price — "Lower monthly cost than an in-house assistant\*" + footnote "\*Calculator defaults. Run your own numbers →". If the price is still null, this tile becomes a "Run the numbers →" tile instead.
  - D: `2` `FILES` — "Two specialist lines. Nothing else."
  - E: `1` `FOUNDER` — "The person you talk to does the work." (claim)
  - F: desk hours from `site.desk` — "Mon–Fri, US Eastern." (claim)
- Mobile: single column, large tiles first.

**04 — THE FILES (two panels)**
- Desktop 50/50, each ≥80vh; mobile stacked.
- Panel 01 (ink): cropped giant `01`, FileTag line `FILE 01 · LISTING NO. 001 · ACTIVE`, H3 "Real Estate VA", one-liner "Listings, transactions and follow-up, off your plate.", 4 numbered tasks (MLS listings · Transaction deadlines · CRM & follow-up · Social posts), small ImageFrame `file01-object`, **[Open file →]**.
- Panel 02 (signal): cropped giant `02`, `FILE 02 · CLAIM NO. 002 · OPEN`, H3 "Insurance Supplementing", "Xactimate supplements, documented line by line.", tasks (Xactimate estimates · Supplement packages · Photo documentation · Status tracking), ImageFrame `file02-object`, **[Open file →]** (ink button).
- The whole panel is clickable (stretched-link pattern; one tab stop). Hover: giant numeral re-scrambles, CursorLabel.

**05 — EVERYTHING ON THE DESK (services bento, ink)**
- H2: "Ten jobs. Two files. One desk." (update the count if the service list changes).
- Bento of all services from `content/services.ts`: index, FileTag, title (H3), summary, `→`. Featured services (2 per file) get larger tiles. Hover: tile becomes `bg-card` and a signal hairline grows along the top. Each tile links to its anchor on the file page.

**06 — YOUR DAY, OUR NIGHT SHIFT (PinnedStory, paper)**
- H2: "Your day. Our night shift." Lead: "Your morning in the US is our evening in Islamabad. Here's a sample shift." Label `SAMPLE SHIFT`.
- Steps (`content/home.ts → shift`, Islamabad times):
  1. 19:00 — Overnight inbox triaged — New leads tagged in your CRM; urgent emails flagged for you. (01)
  2. 20:30 — Listings go live — MLS entry, photos and descriptions checked against the listing checklist. (01)
  3. 22:00 — Deadlines checked — Inspection, appraisal and closing dates confirmed on every open file. (01)
  4. 23:30 — Supplement drafted — Missing line items built in Xactimate from the contractor's photos and measurements. (02)
  5. 01:00 — Follow-up sent — Calls, texts and emails to your lead list, all logged in the CRM. (01)
  6. 03:00 — End-of-day report — What's done, what's waiting on you, what's next. (both)

**07 — DESK LOG (ink, compact)**
- Left: H3 "Every task leaves a trace." + "You get a written log of the work, every day." (claim). Right: DeskLog with ~10 sample entries in `content/home.ts → deskLog`, e.g. `19:04 — 6 new leads tagged in CRM`, `19:40 — Listing entered in MLS, photos ordered`, `20:15 — Closing checklist updated: inspection due Thu`, `21:30 — Supplement drafted: 14 line items`, `22:10 — 38 follow-up texts scheduled`, `02:55 — End-of-day report sent`.

**08 — SAVINGS (paper-2)**
- H2 "What does an in-house assistant really cost?" Compact calculator (hours slider 10–40, wage input) using `lib/calculator.ts`; big ScrambleNumber "$X,XXX saved per month"; **[Run the numbers →]** → `/savings-calculator`. ImageFrame `calculator-object` on the right. If the price is null, show only the in-house cost.

**09 — COMPS (paper)**
- H2 "Run the comps before you hire." Table from `content/comparison.ts`. Columns: VortexOne (8px signal bar on top) · In-house hire · Freelance marketplace. Rows: Monthly cost (40 hrs/wk) · Time to start · Payroll taxes & benefits · Specialist in real estate / supplementing · Works US hours · Who manages quality · Contract. Unconfirmed values are claims. Use ✓ / ✗ / ~ glyphs with `sr-only` words. Rows Reveal with stagger. Mobile: horizontal scroll with a sticky first column.

**10 — HOW IT STARTS (paper)**
- H2 "Live in about a week." (claim) Three steps with giant numerals 01/02/03, connected by LineDraw (horizontal on desktop, vertical on mobile):
  01 Book a call — "15 minutes. We look at your workload and pick a plan."
  02 Set up — "You share access. We write a checklist for every task."
  03 Go live — "The first week runs on daily reports, so you see everything."
- **[Book a call]**.

**11 — WORK SAMPLES (ink)**
- H2 "What the work looks like." Horizontal scroll-snap strip of 5 cards (ImageFrame `work-*`, title, FileTag, `SAMPLE` label) + **[See all samples →]** → `/work`.

**12 — THE FOUNDER (paper)**
- H2 "You work with me directly." Sub: "No account managers. No hand-offs. One specialist who knows your files." (claim). ImageFrame `founder-portrait`. Caption MetaBlock: `[[FOUNDER_NAME]] — FOUNDER` / `ISLAMABAD 33.6844°N 73.0479°E`. Short bio (placeholder; facts only). **[Read the story →]** → `/about`.

**13 — SECURITY (paper)**
- H2 "Your logins. Your data. Your rules." Bento of 4 tiles (all claims until confirmed): NDA before access · You control every login (shared through your password manager, revocable anytime) · Daily written report · No client files on personal devices.

**14 — QUESTIONS (paper)**
- H2 "Questions agents and contractors ask." Accordion of the FAQ items tagged `home` (6) + **[All questions →]** → `/faq`.

**15 — NEXT STEP (signal)**
- ParallaxText headline (`text-display`): "Hand off the back office." Sub: "15 minutes. No pitch deck. We look at your workload and tell you honestly if we can help." **[Book a call]** (ink) · **[See pricing]** (secondary).

### 11.2 Real Estate VA `/real-estate-va`  (FILE 01; content: `content/real-estate.ts` + shared)
- **Header (paper):** Breadcrumb; cropped giant `01`; label `FILE 01 · LISTING NO. 001 · STATUS: ACTIVE`; H1 Kinetic `["Real estate", "back office,", "handled."]`; lead "MLS listings, transaction coordination, CRM and follow-up for US agents, teams and investors." Right: SpecTable — HOURS `20 or 40 per week` · COVERAGE `US business hours (ET)` · START `About 1 week` (claim) · CONTRACT `Monthly` (claim) · WORKS IN `MLS, Zillow, your CRM` · PRICE `From $[[PRICE]]/mo`. CTAs **[Schedule a showing]** → `/book-a-call?file=01` · **[See pricing]** → `/pricing?file=01`. ImageFrame `file01-object`.
- **01.1 PROPERTY DETAILS:** HoverRevealList of File 01 services (anchor ids = service ids), each with summary + "Includes" (3–5 items).
- **01.2 WHO IT'S FOR:** 3 columns — Solo agents · Teams & brokerages · Investors & flippers — each with a "Typical hand-off" mono list.
- **01.3 CLOSING TIMELINE:** shared HowItStarts with File 01 labels: Offer (call) → Inspection (setup week) → Closed (live, monthly).
- **01.4 A WEEK AT THE DESK (ink, SAMPLE):** Mon–Fri schedule grid (Swiss timetable) with typical tasks per day. Mobile: stacked days.
- **01.5 FLOOR PLANS:** PricingCards filtered to File 01 + link to `/pricing`.
- **01.6 COMPS:** shared Comparison.
- **01.7 DISCLOSURES:** FAQ items tagged `file01`.
- **CtaBand (signal):** "Ready to list your workload?" **[Schedule a showing]**.

### 11.3 Insurance Supplementing `/insurance-supplementing`  (FILE 02; content: `content/supplementing.ts` + shared)
- **Header (paper):** cropped giant `02`; label `FILE 02 · CLAIM NO. 002 · STATUS: OPEN`; H1 Kinetic `["Supplements,", "line by line."]`; lead "Xactimate estimates and supplement documentation for US roofing and water-damage restoration contractors." SpecTable — TRADES `Roofing, water-damage restoration` · SOFTWARE `Xactimate` · TURNAROUND `[[TURNAROUND]]` (claim) · PRICING `[[PRICING_MODEL]]` · YOU SEND `Photos, measurements, carrier scope`. CTAs **[Send a claim]** → `/book-a-call?file=02` · **[See rate sheet]** → `/pricing?file=02`. ImageFrame `file02-object`.
- Positioning line (small mono, claim, confirm in intake): "We prepare documentation for contractors. We don't act as a public adjuster or negotiate for homeowners."
- **02.1 LINE ITEMS:** HoverRevealList of File 02 services.
- **02.2 SCOPE:** two columns, checklist style. *You send:* carrier estimate/scope of loss · job photos · measurement report · notes on missed items. *You get back:* Xactimate estimate (claim: file formats) · supplement package · line-item justification with photo references · status updates.
- **02.3 CLAIM FLOW:** Inspect (review carrier scope and photos) → Itemize (build missing items in Xactimate) → Package (ready for you to submit) → Track (status log). LineDraw.
- **02.4 WHO IT'S FOR:** Roofing contractors · Restoration companies + a "NOT FOR: homeowners" block.
- **02.5 RATE SHEET:** PricingCards filtered to File 02 (placeholders until intake).
- **02.6 CLAIM NOTES:** FAQ items tagged `file02`.
- **CtaBand:** "Got a claim that came back short?" **[Send a claim]**.

### 11.4 Pricing `/pricing`  (content: `content/pricing.ts`)
- Label `FLOOR PLANS + RATE SHEET`; H1 "Pricing, scoped to your workload." (changed 2026-11-14: no public prices); lead.
- SegmentedToggle `FILE 01 · REAL ESTATE` / `FILE 02 · SUPPLEMENTING`. Reads `?file=` (default 01) and updates the URL with `replaceState`.
- File 01 plans: **Part-time** (20 hrs/week) · **Full-time** (40 hrs/week, `RECOMMENDED`, 8px signal bar) · **Custom scope** (task or project based). File 02: one plan card. No public prices (user, 2026-11-14): every card shows "Contact for pricing" instead of a number. Each card: label, name, hours, ✓ features, CTA.
- "In every plan" SpecStrip: NDA · Daily report · US hours · Monthly billing · `[[NOTICE_PERIOD]]` notice (claims).
- Plan comparison table (per file). Payment line: "Invoiced monthly. Pay by `[[PAYMENT_METHODS]]`."
- FAQ tagged `billing`. CtaBand.

### 11.5 Savings Calculator `/savings-calculator`  (content: `content/calculator.ts`; logic: `lib/calculator.ts`)
- H1 "What does an in-house assistant really cost?"; ImageFrame `calculator-object`.
- **Inputs** (left; sticky on desktop): Hours per week (Slider 10–40, step 5, default 40) · In-house hourly wage (number, default 20, claim: confirm against BLS data before launch) · Payroll taxes & benefits % (Slider 0–40, default 25, claim).
- **Pure functions** (`lib/calculator.ts`): `weeksPerMonth = 52 / 12`; `inHouseMonthly = wage × hours × weeksPerMonth × (1 + overhead / 100)`; `vortexMonthly` = Studio price if hours ≤ 20, else Townhouse price (or hourly rate × hours × weeksPerMonth if pricing is hourly); `savings = inHouse − vortex`; `savingsPct`; `annual = savings × 12`.
- **Outputs** (right): in-house monthly, VortexOne monthly, savings per month (giant ScrambleNumber), savings %, savings per year. Debounce input 250ms. An `aria-live="polite"` sentence summarizes the result.
- If VortexOne pricing is null: show the in-house cost only + "VortexOne pricing coming soon" (placeholder).
- Accordion "How we calculate": the formula in plain words + "Estimates only. Your real costs vary."
- File 02 calculator: hidden behind `features.calculatorFile02` (off).
- CTA **[Book a call with these numbers]** → `/book-a-call?file=01&hours=…&wage=…` (the booking form pre-fills the message).

### 11.6 Work Samples `/work`  (content: `content/work.ts`)
- H1 "What the work looks like."; lead about anonymization.
- SegmentedToggle filter: ALL / FILE 01 / FILE 02.
- Asymmetric grid (cards span 7/5 then 5/7). Card: ImageFrame (screenshot), `SAMPLE` label, title, FileTag, "Task · Time" line (claims).
- Click → Dialog lightbox: large image, what was done, tools used. Keyboard, Esc, focus return.
- Starter items (placeholders): MLS listing input sheet · Transaction timeline tracker · CRM pipeline cleanup · Social post set · Xactimate supplement (redacted) · Supplement photo report.

### 11.7 How We Work `/how-we-work`  (content: `content/how-we-work.ts`)
- H1 Kinetic `["How the", "desk runs."]`.
- 01 ONBOARDING: 5 steps (call · access & tools · checklists written · first week on daily reports · monthly rhythm).
- 02 DAILY RHYTHM: a sample end-of-day report rendered as a Swiss document card (header, date, sections DONE / WAITING ON YOU / NEXT, mono), labelled SAMPLE.
- 03 COMMUNICATION: channels (email, WhatsApp, your Slack: claims), response time (placeholder), large LiveClock + DeskStatus.
- 04 SECURITY: expanded version of home 13 (claims).
- 05 TOOLS: Marquee or grid.
- 06 WHAT WE NEED FROM YOU: checklist.
- CtaBand.

### 11.8 About `/about`  (content: `content/about.ts`)
- H1 Kinetic `["Small", "on purpose."]`.
- 01 FOUNDER: portrait, bio (placeholder; facts only), line "Real estate VA work for US clients since `[[YEAR]]`" (claim).
- 02 WHY TWO FILES: manifesto, 5 numbered statements in `text-h2`: "01 Specialists beat generalists." · "02 You should know who does the work." · "03 Your hours, not ours." · "04 Everything written down." · "05 Honest numbers."
- 03 COORDINATES: Swiss poster composition: MetaBlock Islamabad ↔ MetaBlock "YOUR OFFICE" (visitor's time zone + LiveClock), joined by a thick ink bar.
- CtaBand.

### 11.9 Resources `/resources`  (content: `content/resources.ts`)
- H1 "Free checklists."
- 3 cards: Transaction coordination checklist (01) · Listing launch checklist (01) · Roof supplement documentation checklist (02). Each: ImageFrame `resources-object`, description, **[Get the checklist]** → Dialog with an email field → `requestResource` (mock) → success panel. PDFs are placeholders (`public/files/…`), listed in ASSETS_NEEDED.

### 11.10 Book a Call `/book-a-call`
- Label `SCHEDULE A SHOWING / SEND A CLAIM`; H1 "Book a 15-min call."; lead "Pick a time, or send a note. You'll hear back within `[[RESPONSE_TIME]]` on US business days."
- Left: Calendly block. **[Load calendar]** button loads the iframe on click (privacy + performance). If `NEXT_PUBLIC_CALENDLY_URL` is empty, show a placeholder + email fallback.
- Right: form. Full name\* · Email\* · Phone (optional) · I am a…\* (Real estate agent · Team lead / broker · Investor / flipper · Roofing contractor · Restoration contractor · Other) · Which file (File 01 · File 02 · Not sure; pre-filled from `?file=`) · Hours per week (optional; pre-filled from `?hours=`) · Message (pre-filled with calculator values if present) · **SMS consent** checkbox, separate, unchecked by default, not required.
- SMS consent text (DRAFT, needs legal review, claim): "I agree to receive text messages from VortexOne about my inquiry. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our Privacy Policy."
- Honeypot. Submit "Send" → `submitLead` → "RECEIVED" panel.
- Below: direct contacts (email, WhatsApp ↗, LinkedIn ↗) + DeskStatus.

### 11.11 FAQ `/faq`  (content: `content/faq.ts`)
- H1 "Questions." SegmentedToggle categories: General · File 01 · File 02 · Pricing & billing · Security. Accordion. FAQPage JSON-LD.
- Starter questions (draft answers from §1 facts; unknowns → placeholder + claim):
  - General: Where are you based? · Who actually does the work? · What hours do you work? · How do we communicate? · Do you work with clients outside the US?
  - File 01: Which MLS systems can you work in? · Do you make follow-up and cold calls? · Can you coordinate transactions in my state? · Can you work inside my CRM?
  - File 02: Do you write in Xactimate? · What do you need from me for a supplement? · Do you talk to the insurance carrier? (answer per the File 02 positioning rule) · How fast is turnaround?
  - Billing: Is there a contract? · Can I start part-time? · How do I pay? · What if it isn't working?
  - Security: Do you sign an NDA? · How do you handle my logins? · Where is my data kept?

### 11.12 Legal `/privacy`, `/terms`  (content: `content/legal/*.ts`)
- Simple long-form layout: max 68ch, mono section numbers, "Last updated" line. Both are **DRAFTS** (in ASSETS_NEEDED as "legal review before launch"; flagged in review mode).
- Privacy must cover: data collected via forms; purpose; **SMS section** ("We don't share mobile numbers or SMS consent with third parties or affiliates for marketing purposes."); cookies/analytics (none yet); retention `[[PLACEHOLDER]]`; rights; contact.
- Terms must cover: services; **no guarantee of insurance claim outcomes or approvals**; payment terms `[[PLACEHOLDER]]`; confidentiality; liability; governing law `[[PLACEHOLDER]]`.

### 11.13 404 (`app/not-found.tsx`)
- Paper. Cropped giant `404`; label `LISTING NO. 404 · STATUS: EXPIRED`; H1 "This page is off the market."; **[Back to the desk]** → `/` · **[Book a call]**. ImageFrame `notfound-object`.

---

## §12 Build segments

> One segment per session is ideal. Each segment ends with: checks (§13) → PROGRESS.md update → commit → §8 report → **STOP**.

**S0 — Setup & Intake**
1. Read CLAUDE.md + the S0 sections in the Reading Map.
2. Scaffold per §9.3. Install the approved dependencies you need now (next, tailwind, shadcn base, motion, fonts, clsx, tailwind-merge, cva).
3. Write `globals.css` (§4.1 + §4.2), `next.config.ts`, the folder structure, `content/types.ts` + content files with starter data (placeholders where unknown), `lib/api/*`, `lib/utm.ts`, `.env.example`, and a short README (run, edit content, add images, build static, deploy).
4. Create `docs/PROGRESS.md` (table: segment · status · date · notes; plus Known issues; keep under 60 lines), `docs/DECISIONS.md`, `docs/ASSETS_NEEDED.md` (pre-filled from §7.2 + every placeholder + legal review).
5. `npm run build` must produce `out/`. Commit `seg-0: scaffold`.
6. Send ONE **Intake Request** and stop:
```
INTAKE REQUEST — answer what you can; anything skipped stays a placeholder.
A. Facts: 1 founder name to show · 2 email · 3 WhatsApp number · 4 LinkedIn URL · 5 Calendly link ·
   6 desk hours (US time zone) · 7 File 01 services (confirm/edit list) · 8 File 02 services + the
   "we don't negotiate for homeowners" line · 9 File 01 prices (Studio / Townhouse / Estate) ·
   10 File 02 pricing model + prices · 11 payment methods · 12 reply time you can promise ·
   13 contract/notice terms · 14 tools you work in · 15 any real proof (reviews, results)?
B. Assets: logo (or "make a wordmark") · founder photo (or "skip") · object photos (see
   docs/ASSETS_NEEDED.md) or "placeholders for now" · anonymized work screenshots.
C. Components: for each slot below, reply with code or install command, "build it yourself", or "skip":
   <the §10.3 table as a numbered list with search keywords>
```

**S1 — Design system & primitives:** apply intake answers to `content/` · build all §10.1 primitives and §6.2 motion primitives · integrate supplied components (§10.4) · build `/styleguide` · section themes · audit the styleguide at 390 and 1440.
**S2 — Global layout + Home A:** Header, MobileMenu, Footer, CtaBand, Breadcrumb · home sections 01–07.
**S3 — Home B:** home sections 08–15 · `lib/calculator.ts` · audit the whole homepage at 390 / 768 / 1280 / 1440.
**S4 — File pages:** §11.2 and §11.3, maximum reuse of shared sections.
**S5 — Pricing + Savings calculator:** §11.4 and §11.5.
**S6 — Work, How we work, About, Resources:** §11.6–§11.9.
**S7 — Book a call, FAQ, Legal, 404:** §11.10–§11.13.
**S8 — Launch prep:** §14 (SEO, AI readability, accessibility, performance) · final §13 audit across all pages (390 + 1440 only) · finalize README, ASSETS_NEEDED, PROGRESS.

After S8: revisions only (CLAUDE.md §9) until Phase 2.

---

## §13 Audit (end of every segment — cheap checks first)

### 13.1 Static greps (run on files changed this segment)
- Raw hex in components: `grep -rnE "#[0-9a-fA-F]{3,8}\b" components app --include=*.tsx` → 0 (except `/styleguide` token swatches).
- Default Tailwind sizes: `grep -rnE "\btext-(xs|sm|base|lg|[2-9]?xl)\b" components app` → 0.
- Rounded/shadow: `grep -rnE "\b(rounded(-[a-z0-9]+)?|shadow(-[a-z0-9]+)?)\b" components app` → only `rounded-full` on dots/radios.
- Gradients/blur: `grep -rnE "gradient|blur|backdrop" components app` → 0 (except the placeholder hatch).
- Banned words: `grep -rniE "seamless|cutting-edge|world-class|top 3%|game.?changer|leverage|synergy|unlock|elevate|empower|supercharge|best-in-class|hassle-free|one-stop" content` → 0.
- Every `[[PLACEHOLDER` in `content/` appears in `docs/ASSETS_NEEDED.md`.

### 13.2 Build
`npm run lint` and `npm run build` once. Fix failures only.

### 13.3 Visual (only if a browser is available)
- If Playwright + Chromium can be installed/run, screenshot **only the pages touched** at 390×844 and 1440×900 (full page), at most 2 screenshots per page per pass. Never re-screenshot unchanged pages.
- If no browser is available: say so in the report, and ask the user to check the preview with `?review=1` and send screenshots of anything wrong.

### 13.4 Checklist (binary)
- **Design:** on the 12-col grid · only signal as accent · type sizes only from the scale · no radius/shadow/gradient · section labels present and numbered · section rhythm (§5.11) respected · one H1.
- **Accessibility:** only approved contrast pairs · visible focus everywhere, not hidden by the sticky header · full keyboard path (menu, dropdown, accordion, tabs, slider, dialog) · Motion toggle + reduced motion work · alt text on every real image (decorative = `alt=""`) · labelled inputs with described errors · targets ≥44px · logical heading order.
- **Content:** no invented facts · claims flagged · placeholders listed · US English · no banned words · SAMPLE labels present.
- **Responsive:** no horizontal overflow at 390 · nothing clipped · giant type scales down cleanly · sticky elements behave.
- **Performance:** only transform/opacity animated · images sized (width/height) · hero image prioritized · no third-party script before user action · no new dependencies.
- **Code:** copy in `content/`, values in tokens · files under 250 lines · client components only where needed.

**Definition of done (segment):** all checks pass or are listed under Known issues in PROGRESS · build passes · committed · report sent.

---

## §14 SEO, AI readability, accessibility, performance

- **Metadata** via `lib/seo.ts`: title template `%s — VortexOne`; description ≤155 chars; canonical from `NEXT_PUBLIC_SITE_URL`; Open Graph + Twitter with the default OG image.
- **JSON-LD:** Organization (name, url, logo, `sameAs` LinkedIn, email contact point) · ProfessionalService (`areaServed: "US"`, service types, locality Islamabad, PK) · Service on each file page · FAQPage on `/faq` · BreadcrumbList on subpages. No review/rating schema.
- `app/sitemap.ts` + `app/robots.ts` (exclude `/styleguide`). `public/llms.txt`: one-paragraph summary, the two files, key page links.
- **Semantics:** one H1 per page, logical headings, landmarks, skip link, `lang="en-US"`.
- **WCAG 2.2 AA:** contrast (§4.3); focus not obscured (`scroll-padding-top`); targets ≥44px; Motion toggle (2.2.2); reduced motion; accessible forms; Radix-based dialogs/accordions/tabs; no keyboard traps.
- **Performance targets** (Lighthouse mobile on the built export, if it can run): Performance ≥90 · Accessibility ≥95 · Best Practices ≥95 · SEO 100. Either way: hero image prioritized and sized; fonts self-hosted (latin subset); motion components are small client leaves; heavy below-the-fold pieces (DeskLog, PinnedStory, calculator) may lazy-load if they hurt load; CLS ≈ 0 (reserved sizes, clock placeholders); Calendly only after click.

---

## §15 Phase 2 preview (do NOT build now — just keep the doors open)
- Forms will post to a real backend (likely the Vortex One Outreach API, so website leads land directly in its CRM). Only `lib/api/client.ts` (base URL + endpoints) should need to change; payload types are already defined.
- Later: privacy-friendly analytics, checklist PDF delivery by email, Calendly webhook → CRM, shared hosting with the backend.
- Keep every form going through `lib/api/` so Phase 2 is a small, local change.
