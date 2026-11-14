# VortexOne Website — Operating Rules for Claude Code

You are building **Phase 1: the FRONTEND ONLY** of the VortexOne marketing website.
- Full spec: `docs/SPEC.md` (read by section only — see SPEC §0 Reading Map).
- Progress log: `docs/PROGRESS.md` (read first in every session).
- Decision log: `docs/DECISIONS.md` · Missing inputs: `docs/ASSETS_NEEDED.md`.

These rules apply to every session, segment and revision. They exist to keep the result high quality **and** the credit cost low.

---

## 1. Scope
- Frontend only: pages, components, content files, motion, SEO metadata, static assets.
- NOT in scope: backend, database, auth, API routes, server actions, third-party form services, analytics scripts. Forms call `lib/api/` which returns mock success until Phase 2.
- The site must build as a **static export** (`output: "export"`).
- All content is **US English** only.

## 2. Credit rules (mandatory)
1. **Read only what the task needs.** Find SPEC sections with `grep -n "^## §\|^### " docs/SPEC.md`, then read with offset/limit. After Segment 0, never read the whole SPEC in one go.
2. **Start every session with `docs/PROGRESS.md`** (it is short). Trust it. Do not re-read, re-audit or re-test finished segments unless the current task touches them.
3. **Edit in place with minimal diffs.** Never rewrite or regenerate a whole file to change part of it. Never reformat, rename, reorder or "clean up" code you were not asked to touch.
4. **Conservative work, best result.** No speculative features, no "while I'm here" refactors, no pages/sections/docs that the SPEC doesn't ask for.
5. **Batch.** Ask all questions for a segment in ONE message at the start. Make all related edits in one pass. Run checks once at the end of a segment, not after every edit.
6. **Checks.** During work: `npx tsc --noEmit` only when needed. At segment end: `npm run lint` and `npm run build`, once. Fix only what fails.
7. **Short chat output.** Don't paste whole files, long diffs or logs. A plan at the start of a segment is ≤6 lines. Report in the §8 format.
8. **Dependencies.** Install nothing outside the Approved Dependencies list (SPEC §9.2) without asking.
9. **Don't open** `node_modules/`, lockfiles, `.next/`, `out/` or generated files.
10. **Small files.** Target <150 lines per file, hard cap 250, so future edits stay local.
11. **No subagents** and no web search/fetch unless a task truly needs them (e.g., checking a package's current API after an install error).

## 3. Where a change goes (source-of-truth order)
`token (app/globals.css)` → `content (content/*.ts)` → `shared component` → `section` → `page`
Always change the **highest applicable level once**, instead of patching many instances.
- No copy text hard-coded in components (aria/screen-reader glue excepted). Copy lives in `content/`.
- No raw hex colors, default Tailwind font sizes, or one-off spacing in components. Use the theme tokens and the semantic classes (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`…).

## 4. Design guardrails (summary — details in SPEC §3–§7)
- **Neo-Swiss / Swiss-tech:** strict 12-column grid, hairline rules, huge neo-grotesk type next to tiny mono labels, generous whitespace, giant numerals, real metadata as decoration.
- **Palette:** paper `#E4E4E2`, paper-2 `#F2F2F0`, white, ink `#0E0E0E`, ink-2 `#1A1A1A`, muted `#5A5A58` / `#8A8A88`, and ONE accent: signal `#FF4D1F`. Status green `#1F9D55` only for the "desk open" dot, always next to text.
- **Contrast:** text on signal is always ink. Never signal-colored text on paper/paper-2. Signal text only on ink/ink-2 (or ≥24px on white).
- **Shapes:** square corners (radius 0) everywhere except status dots/radios. No shadows, gradients, glow, blur, glassmorphism, 3D/WebGL.
- **Images:** grayscale isolated objects; signal block overlaps with `mix-blend-multiply`; corner "+" marks.
- **Motion:** transform/opacity only; respect `prefers-reduced-motion` AND the site Motion toggle; kinetic type on page hero H1s only.
- **Labels** use the "Two Files" vocabulary (SPEC §2); H1/H2 are always plain English.

## 5. Honesty rules
- Never invent business facts: prices, stats, client names, testimonials, logos, ratings, certifications, addresses, legal entity, phone numbers, years in business, team size. No ® or ™.
- Unknown fact → `[[PLACEHOLDER: what is needed]]` in content + an entry in `docs/ASSETS_NEEDED.md`.
- Any marketing claim not confirmed by the user → `claim: true` on that content item.
- Illustrative content (desk log, sample shift, sample reports, sample work) is visibly labelled **SAMPLE**.
- File 02 copy never says VortexOne negotiates with insurers, represents homeowners or acts as a public adjuster.

## 6. Gap-filling — decide, don't stall
When the SPEC is silent or ambiguous, decide yourself using this priority:
1) accessibility → 2) clarity for a busy US agent/contractor → 3) consistency with existing components → 4) the Swiss design language → 5) less code / fewer dependencies.
Log each decision as ONE line in `docs/DECISIONS.md`: `YYYY-MM-DD · area · decision · reason`.
Ask the user only when a wrong guess is expensive to undo or needs a business fact.

## 7. Components from 21st.dev and similar libraries
- The user supplies interactive components (21st.dev, Magic UI, Motion Primitives, React Bits, shadcn/ui). Request them with the format in SPEC §10.2, using the shopping list in SPEC §10.3.
- On receipt: put the file in `components/ui/` or `components/motion/`; strip unused variants and props; restyle to tokens (square, no glow/gradients/blur); support reduced motion and the Motion toggle; make it keyboard accessible; keep dependencies inside the approved list; show it on `/styleguide`.
- If a CLI install (`npx shadcn@latest add <url>`) fails because of network limits, try once, then ask the user to paste the code.
- If the user says "build it yourself", or nothing arrives by the segment that needs it, build a minimal version with `motion` and log it.

## 8. Report format (end of every segment or revision)
```
DONE: ≤5 bullets
FILES: changed/created paths
DECISIONS: n added (one-line highlights)
NEEDS FROM YOU: plain-language list (facts, images, components) — or "nothing"
NEXT: next segment name
```
Then **STOP and wait** for the user.

## 9. Revision mode
When a message starts with `REVISION` (or is clearly a change request):
1. Classify it: token / content / component / layout / new feature.
2. Locate with `grep`; open only the files involved.
3. Apply the smallest edit at the highest source level (§3).
4. If it contradicts the SPEC, follow the user, update that SPEC line, log it in DECISIONS.
5. Verify with `npx tsc --noEmit`; run `npm run build` only if config, routing or many files changed.
6. Report with §8 and list `file:line` ranges changed.
Several revisions in one message = one pass.

## 10. Skills
If skills are installed, check the list at the start of a segment and load **only** the ones relevant to that segment (e.g., frontend design, web design guidelines, animation). The SPEC's design language wins wherever a skill's generic advice conflicts with it.

## 11. Git
Commit at the end of each segment or revision batch: `seg-N: summary` / `rev: summary`. Push to the current branch.
