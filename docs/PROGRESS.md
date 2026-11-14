# Progress

| Segment | Status | Date | Notes |
|---|---|---|---|
| S0 Setup & intake | done | 2026-11-14 | Next 16.4 static export, tokens, content stubs, API adapter, docs. Intake Request sent. |
| S1 Design system & primitives | todo | | |
| S2 Global layout + Home A | todo | | |
| S3 Home B | todo | | |
| S4 File pages | todo | | |
| S5 Pricing + Savings calculator | todo | | |
| S6 Work, How we work, About, Resources | todo | | |
| S7 Book a call, FAQ, Legal, 404 | todo | | |
| S8 Launch prep | todo | | |

## Known issues
- `ui.shadcn.com` is blocked by the network policy → `npx shadcn add` won't work; paste component code instead (21st.dev is reachable).
- Next 16 ships `AGENTS.md` ("read node_modules/next/dist/docs before coding") — APIs may differ from older Next; check docs there when unsure.

## Notes for next session
- Pages exist only for `/`. Routes are added in their segments.
- Content stubs export `meta`; sections are added to each file in its segment.
