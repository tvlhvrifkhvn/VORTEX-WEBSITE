# Design polish pass — checklist

Measured with Playwright at 1440 and 390 (b26ba5d). All items fixed and re-measured 2026-11-23: every section label→H2 = 50px at 1440 / 32px at 390; no action gaps under 24px; no 2px rules except form controls; no overflow at 390; AccessLint 0 on home, file pages, /faq. Format: page · section · issue · fix.

## Rhythm system
- [x] all · tokens · no shared rhythm tokens · add --space-section/header/block/inline/tight in globals.css
- [x] all · SectionHeader · label→H2 32px, H2→content clamp(2.5–5rem) · both = --space-header
- [x] all · custom headers (savings, founder, cta band, desk log, coordinates) · label→H2 32–40px, own markup · shared SectionRule + --space-header
- [x] all · action rows · gaps 12–16px, text link touching buttons (hero, file header, cta band, 404, pricing) · ActionGroup (--space-inline; stacked full width on phone)
- [x] all · headings/paragraphs · orphans, odd breaks · text-wrap balance (h1–h3) / pretty (p)
- [x] all · leads · no emphasis · one **bold** key phrase per lead, rendered as <strong>
- [x] file pages · audience · 2px rules · 1px border-border
- [x] how-we-work · tools grid · 2px rule · 1px border-border
- [x] home · night shift (static) · 2px rail · 1px rail

## Home
- [x] 04 files · actions · "All File 01 jobs" crammed under button · ActionGroup [Open file →] + link
- [x] 04 files · audience strip · "FOR ·" prefix · removed
- [x] 04 files · status · ad-hoc dot · StatusChip (6px) right of label row, both panels
- [x] 04 files · symmetry · image floats, list/image not aligned · identical grid, image = list rule → action row
- [x] 04 files · interaction · no row detail · row reveals one-line service, index box; panel image 8px, block 12px, numeral scramble on hover/focus; off with motion off
- [x] index · position · box overlaps File 02 panel and night shift · moved to outer left margin, no box, takes the theme under it, ≥1280 only
- [x] 05 night shift · gap · content-center leaves a big gap above the clock · top-aligned, panel stretches to the list
- [x] 05 night shift · panel · no current step, bar starts empty · step title in mono, bar min fill 1/6
- [x] 06 savings · H2 · "in- / house" break · manual lines + non-breaking hyphen
- [x] 06 savings · number · label touches figure · --space-tight
- [x] 06 savings · image · centered, floats low · top = H2 top, height = content column
- [x] 07 how it starts · numerals · nearly touch · 4/4/4 columns, connector in the space between numerals
- [x] 07 how it starts · rows · titles may drift · subgrid rows; CTA gap = --space-header
- [x] 08 founder · gap · label→H2 269px (justify-end) · top-aligned, equal-height columns, caption --space-tight
- [x] 09 questions · layout · static list · split: sticky left (H2, lead, Book a call, Search), accordion right, 01–NN index, +→×, related link, single open on desktop

## Sweep
- [x] all FAQ blocks (file pages, pricing, /faq) · same accordion · shared FaqList
- [x] 390 · all pages · overflow / tap targets · re-measure after fixes
