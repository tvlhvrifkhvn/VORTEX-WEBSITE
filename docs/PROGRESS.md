# Progress

| Segment | Status | Date | Notes |
|---|---|---|---|
| S0 Setup & intake | done | 2026-11-14 | Next 16.4 static export, tokens, content stubs, API adapter, docs. Intake Request sent. |
| S1 Design system & primitives | done | 2026-11-14 | Intake applied. All §10.1 UI + §6.2 motion primitives, /styleguide. Audited 390 + 1440, reduced motion, review mode, dialog keyboard. |
| S2 Global layout + Home A | done | 2026-11-14 | Header (dropdown, auto-hide), mobile menu, footer + newsletter, CtaBand, Breadcrumb, skip link, UTM, Org JSON-LD; home 01–07. Audited 390 + 1440, menu focus trap, dropdown, auto-hide. |
| S3 Home B | done | 2026-11-14 | Home 08–15, lib/calculator.ts, comparison, FAQ (6 home items), work samples list. Audited 390/768/1280/1440: no overflow, 1 H1, targets ≥44px. |
| S4 File pages | todo | | |
| S5 Pricing + Savings calculator | todo | | |
| S6 Work, How we work, About, Resources | todo | | |
| S7 Book a call, FAQ, Legal, 404 | todo | | |
| S8 Launch prep | todo | | |

## Known issues
- `ui.shadcn.com` is blocked by the network policy → `npx shadcn add` won't work; paste component code instead (21st.dev is reachable).
- Next 16 ships `AGENTS.md` ("read node_modules/next/dist/docs before coding") — APIs may differ from older Next; check docs there when unsure.

- 21st.dev free tier: 2 code retrievals/day (resets 00:00 UTC). Nice-to-have slots 10–14 get built in-house unless pasted.
- Chromium full-page screenshots stop at 16,384px (home is ~18,000px): capture the bottom with viewport shots.
- Full-page screenshots don't trigger scroll-based Reveal/LineDraw; check those by scrolling.

## Notes for next session
- Pages: `/` (complete, 15 sections) and `/styleguide`. Other routes 404 until their segments (nav links already point to them).
- Preview: https://claude-github-connection-7kt0gt-vortex-website.talhaarifone.workers.dev (Cloudflare Workers, auto-builds on push).
- Primitives: components/ui (button, section, section-header, spec, labels, tile, image-frame, text, wordmark, accordion, tabs, slider, dialog, field, choice), components/motion (§6.2 all), components/layout (motion-toggle, review-mode).
- Root layout has boot script + MotionProvider + ReviewMode. Header/footer/skip link come in S2.
- Content stubs export `meta`; sections are added to each file in its segment.
