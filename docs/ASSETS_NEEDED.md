# Assets & facts needed

Every `[[PLACEHOLDER: …]]` in `content/` is listed here. Tick a line when it's supplied.

## A. Facts (from you)
| # | Item | Placeholder text | Where | Status |
|---|---|---|---|---|
| A1 | Founder name to show | `founder name` | content/site.ts | needed |
| A2 | Contact email | `contact email` | content/site.ts | needed |
| A3 | WhatsApp number | `WhatsApp number` | content/site.ts | needed |
| A4 | LinkedIn URL | `LinkedIn URL` | content/site.ts | needed |
| A5 | Calendly link | — (env `NEXT_PUBLIC_CALENDLY_URL`) | .env / host settings | needed |
| A6 | Desk hours (US time zone) | default 09:00–18:00 ET Mon–Fri, `claim: true` | content/site.ts | confirm |
| A7 | File 01 services | starter list | content/services.ts | confirm |
| A8 | File 02 services + "we don't negotiate for homeowners" line | starter list | content/services.ts | confirm |
| A9 | File 01 prices (Studio / Townhouse / Estate) | `File 01 price unit`, price `null` | content/pricing.ts | needed |
| A10 | File 02 pricing model + prices | `File 02 plan name`, `File 02 pricing model` | content/pricing.ts | needed |
| A11 | Payment methods | `payment methods` | content/pricing.ts | needed |
| A12 | Reply time you can promise | `reply time you can promise` | content/site.ts | needed |
| A13 | Contract / notice terms | `contract and notice terms` | content/pricing.ts | needed |
| A14 | Tools you work in | `tools you work in` | content/tools.ts | needed |
| A15 | Real proof (reviews, results) | — | — | optional |

## B. Images (upload with these exact paths — see SPEC §7.1 for art direction)
| Slot | Path | Size (px) | Subject | Status |
|---|---|---|---|---|
| hero-object | public/images/objects/hero-key.webp | 2000×2000 | House key on a plain ring | placeholder |
| file01-object | public/images/objects/lockbox.webp | 1600×2000 | Realtor key lockbox | placeholder |
| file02-object | public/images/objects/shingles.webp | 1600×2000 | Small stack of asphalt roof shingles | placeholder |
| calculator-object | public/images/objects/calculator.webp | 1600×1600 | Vintage desk calculator | placeholder |
| process-object | public/images/objects/notebook.webp | 1600×1200 | Closed laptop with a notebook | placeholder |
| resources-object | public/images/objects/clipboard.webp | 1600×2000 | Clipboard with a blank checklist | placeholder |
| notfound-object | public/images/objects/yard-sign.webp | 1600×2000 | Blank real-estate yard sign | placeholder |
| founder-portrait | public/images/founder/portrait.webp | 1600×2000 | Founder portrait | placeholder |
| work-01 … work-06 | public/images/work/work-0N.webp | 1600×1000 | Anonymized deliverable screenshots (`describe work sample 0N`) | placeholder |
| logo | — | — | Logo, or "make a wordmark" (default: typographic wordmark) | needed |

## C. Legal review
| Item | Placeholder text | Where | Status |
|---|---|---|---|
| Privacy policy | `privacy policy text — needs legal review` | content/legal/privacy.ts | needed |
| Terms of service | `terms of service text — needs legal review` | content/legal/terms.ts | needed |

## D. Copy Claude writes later (no input needed)
| Item | Placeholder text | Segment |
|---|---|---|
| Site + page meta descriptions | `site meta description`, `meta description for /…/` (12 pages) | written per page segment, finalized in S8 |
