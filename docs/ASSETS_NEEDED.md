# Assets & facts needed

## Launch checklist (do these before pointing a real domain at the site)
0. Replace sample prices in content/pricing.ts
1. Set Cloudflare build variables: `NEXT_PUBLIC_SITE_URL` (your domain — canonicals, sitemap, OG URLs), `NEXT_PUBLIC_CALENDLY_URL` (when ready).
2. Legal review of /privacy, /terms and the SMS consent text (§C), then remove the DRAFT tags.
3. Confirm or rewrite every item marked `claim: true` — open any page with `?review=1` to see them outlined.
4. Upload images (§B) and checklist PDFs (§B2); flip `placeholder: false` in content/images.ts.
5. Set the Cloudflare production branch so the main workers.dev / custom domain serves the site.

Every `[[PLACEHOLDER: …]]` in `content/` is listed here. Tick a line when it's supplied.

## A. Facts (from you)
| # | Item | Placeholder text | Where | Status |
|---|---|---|---|---|
| A1 | Founder name to show | Talha Arif | content/site.ts | ✓ supplied |
| A2 | Contact email | talharifone@gmail.com | content/site.ts | ✓ supplied |
| A3 | WhatsApp number | +92 344 9111101 | content/site.ts | ✓ supplied |
| A4 | LinkedIn URL | linkedin.com/in/talha-arif-3a9783364 | content/site.ts | ✓ supplied |
| A5 | Calendly link | — (env `NEXT_PUBLIC_CALENDLY_URL`); /book-a-call shows "Online booking opens soon" + email until set | Cloudflare build variables | later |
| A6 | Desk hours (US time zone) | 09:00–18:00 ET Mon–Fri | content/site.ts | ✓ confirmed |
| A7 | File 01 services | + web dev, SEO, Meta ads, lead gen (on request) | content/services.ts | ✓ confirmed |
| A8 | File 02 services + scope line | starter list + `scopeNote` | content/services.ts, supplementing.ts | ✓ confirmed |
| A9 | File 01 prices | SAMPLE: Studio $650/mo, Townhouse $1,200/mo, Estate custom (claim) | content/pricing.ts | replace sample prices |
| A10 | File 02 pricing | SAMPLE: from $150 per supplement, Volume from $1,200/mo, Custom (claim) | content/pricing.ts | replace sample prices |
| A11 | Payment methods | Wise, Payoneer | content/pricing.ts | ✓ supplied |
| A12 | Reply time | "Replies during desk hours" + home stat "Same day" (claim) | content/site.ts, home.ts | confirm "same day" |
| A13 | Contract / notice terms | `contract and notice terms`, `notice period` | content/pricing.ts | later |
| A14 | Tools you work in | full list confirmed | content/tools.ts | ✓ confirmed |
| A15 | Real proof (reviews, results) | — | — | none yet |
| A16 | Short founder bio (facts only: background, what you've done) | `short founder bio — facts only` | content/home.ts | needed |
| A17 | Confirm security rules: NDA, password-manager access, daily report, no files on personal devices | 4 claims | content/home.ts | confirm |
| A18 | Confirm "Live in about a week" and "Monthly, no lock-in" | claims | content/home.ts, comparison.ts, real-estate.ts | confirm (reserved) |
| A19 | Supplement turnaround time | `supplement turnaround time` | content/supplementing.ts | needed |
| A20 | Estimate file formats you deliver (ESX, PDF?) | claim | content/supplementing.ts | confirm |
| A22 | Confirm "Invoiced monthly" and "Monthly billing" | claims | content/pricing.ts | confirm |
| A23 | Calculator defaults ($20/hr wage, 25% payroll & benefits) — check against BLS data before launch | claims | content/calculator.ts | confirm |
| A24 | Founder bio for /about (longer version) + year you started VA work for US clients | `founder bio — facts only (background, experience, why VortexOne)`, `year started` | content/about.ts | needed |
| A25 | Confirm channels: WhatsApp for quick questions, joining a client's Slack | claims | content/how-we-work.ts | confirm |
| A26 | Confirm onboarding timeline (Day 1 → Month 1) and the 6 security rules on /how-we-work | claims | content/how-we-work.ts | confirm |
| A27 | Work sample details ("Task · Time", what was done, tools) once real screenshots exist | claims | content/work.ts | confirm |
| A28 | FAQ answers flagged as claims (MLS access, state coordination, NDA, logins, data location, contract, "what if it isn't working") | claims / placeholders | content/faq.ts | confirm |
| A21 | Confirm service "Includes" lists and the new FAQ answers | written by Claude | content/services.ts, faq.ts | review |

## B. Images (upload with these exact paths — see SPEC §7.1 for art direction)
| Slot | Path | Size (px) | Subject | Status |
|---|---|---|---|---|
| hero-object | public/images/objects/hero-key.webp | 2000×2000 | House key on a plain ring | ✓ live (halftone, 1600×1600) — keys + model house flat lay |
| file01-object | public/images/objects/lockbox.webp | 1600×2000 | Realtor key lockbox | ✓ live (halftone) — key in an open door |
| file02-object | public/images/objects/shingles.webp | 1600×2000 | Small stack of asphalt roof shingles | ✓ live (halftone) — shingle close-up |
| calculator-object | public/images/objects/calculator.webp | 1600×1600 | Vintage desk calculator | ✓ live (halftone) — source was only 236px; send a larger version if you can |
| process-object | public/images/objects/notebook.webp | 1600×1200 | Closed laptop with a notebook | ✓ live (halftone) — laptop + notebook |
| resources-object | public/images/objects/clipboard.webp | 1600×2000 | Clipboard with a blank checklist | placeholder |
| notfound-object | public/images/objects/yard-sign.webp | 1600×2000 | Blank real-estate yard sign | placeholder |
| founder-portrait | public/images/founder/portrait.webp | 1600×2000 | Founder portrait | placeholder |
| work-01 … work-06 | public/images/work/work-0N.webp | 1600×1000 | Anonymized deliverable screenshots (`describe work sample 0N`) | placeholder |
| logo | — | — | Typographic wordmark in use until a logo is supplied | placeholder |

## B2. Files (PDF checklists for /resources)
| Path | Title | Status |
|---|---|---|
| public/files/transaction-coordination-checklist.pdf | Transaction coordination checklist | needed |
| public/files/listing-launch-checklist.pdf | Listing launch checklist | needed |
| public/files/roof-supplement-checklist.pdf | Roof supplement documentation checklist | needed |

## C. Legal review (before launch)
| Item | Placeholder text | Where | Status |
|---|---|---|---|
| Privacy policy draft (incl. SMS section) | `date of legal review`, `data retention period` | content/legal/privacy.ts | draft written — needs legal review |
| Terms of service draft | `date of legal review`, `payment terms — invoicing schedule, due dates, notice period`, `limitation of liability wording`, `governing law and venue` | content/legal/terms.ts | draft written — needs legal review |
| SMS consent wording on the booking form | DRAFT tag, claim | content/book.ts | needs legal review |

## D. Copy Claude writes later (no input needed)
| Item | Placeholder text | Segment |
|---|---|---|
| Site + page meta descriptions | `site meta description`, `meta description for /…/` (written: home, file pages, pricing, calculator) | rest written per segment, finalized in S8 |
