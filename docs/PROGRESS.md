# Progress

| Segment | Status | Date | Notes |
|---|---|---|---|
| S0 Setup & intake | done | 2026-11-14 | Next 16.4 static export, tokens, content stubs, API adapter, docs. Intake Request sent. |
| S1 Design system & primitives | done | 2026-11-14 | Intake applied. All §10.1 UI + §6.2 motion primitives, /styleguide. Audited 390 + 1440, reduced motion, review mode, dialog keyboard. |
| S2 Global layout + Home A | done | 2026-11-14 | Header (dropdown, auto-hide), mobile menu, footer + newsletter, CtaBand, Breadcrumb, skip link, UTM, Org JSON-LD; home 01–07. Audited 390 + 1440, menu focus trap, dropdown, auto-hide. |
| S3 Home B | done | 2026-11-14 | Home 08–15, lib/calculator.ts, comparison, FAQ (6 home items), work samples list. Audited 390/768/1280/1440: no overflow, 1 H1, targets ≥44px. |
| S4 File pages | done | 2026-11-14 | /real-estate-va and /insurance-supplementing; shared file components, PricingCards, FaqSection; service includes + 8 FAQs. Audited 390 + 1440. |
| S5 Pricing + Savings calculator | done | 2026-11-14 | /pricing (file toggle via ?file=, cards, plan table, every-plan strip, billing FAQ) and /savings-calculator (sticky inputs, breakdown, how-we-calculate). Audited 390 + 1440. |
| S6 Work, How we work, About, Resources | done | 2026-11-14 | /work (filter + lightbox), /how-we-work, /about, /resources (email-gate dialog, mock). Audited 390 + 1440; filter, dialog focus return, form error/success tested. |
| S7 Book a call, FAQ, Legal, 404 | done | 2026-11-14 | /book-a-call (calendar fallback, pre-filled lead form, SMS draft), /faq (5 tabs, FAQPage JSON-LD), /privacy + /terms drafts, 404. Audited 390 + 1440; form validation/prefill/success tested. |
| S8 Launch prep | done | 2026-11-14 | Metadata (title template, OG/Twitter, og.png), JSON-LD (Organization, ProfessionalService, Service, FAQPage, BreadcrumbList), sitemap/robots, llms.txt. AccessLint: 0 violations on all public pages. Lighthouse mobile (compressed): 90–95 / 100 / 100 / 100. Final audit 14 pages × 390/1440 clean. |

## Known issues
- `ui.shadcn.com` is blocked by the network policy → `npx shadcn add` won't work; paste component code instead (21st.dev is reachable).
- Next 16 ships `AGENTS.md` ("read node_modules/next/dist/docs before coding") — APIs may differ from older Next; check docs there when unsure.

- 21st.dev free tier: 2 code retrievals/day (resets 00:00 UTC). Nice-to-have slots 10–14 get built in-house unless pasted.
- Chromium full-page screenshots stop at 16,384px (home is ~18,000px): capture the bottom with viewport shots.
- Full-page screenshots don't trigger scroll-based Reveal/LineDraw; check those by scrolling.

- If a CSS/token change doesn't show up in the build, delete `.next/` (stale Turbopack CSS cache) and rebuild.

## Revisions
| Date | Summary |
|---|---|
| 2026-11-14 | Hero H1 hierarchy (--text-hero), phone hero spacing/bar, SpecStrip wrap, marquee OFF fix, night-shift contrast |
| 2026-11-14 | Typographic apostrophes, theme-color/autocomplete details, lazy home leaves, phone numeral scramble, themed cursor label |

## Notes for next session
- Pages: `/`, both file pages, `/pricing`, `/savings-calculator`, `/work`, `/how-we-work`, `/about`, `/resources`, `/styleguide`. All 14 public routes built and audited. Phase 1 complete — revisions only (CLAUDE.md §9) until Phase 2.
- Shared PageHeader (components/sections/shared/page-header.tsx) is the hero for single pages (S6/S7 reuse it). Other routes 404 until their segments (nav links already point to them).
- Preview: https://claude-github-connection-7kt0gt-vortex-website.talhaarifone.workers.dev (Cloudflare Workers, auto-builds on push).
- Primitives: components/ui (button, section, section-header, spec, labels, tile, image-frame, text, wordmark, accordion, tabs, slider, dialog, field, choice), components/motion (§6.2 all), components/layout (motion-toggle, review-mode).
- Root layout has boot script + MotionProvider + ReviewMode. Header/footer/skip link come in S2.
- Content stubs export `meta`; sections are added to each file in its segment.
