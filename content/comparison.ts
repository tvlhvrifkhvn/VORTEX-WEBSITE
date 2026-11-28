/* 09 — COMPS (SPEC §11.1). `mark`: yes / no / partly glyph. Unconfirmed values are claims. */
export type Mark = "yes" | "no" | "partly";
export interface CompCell { text?: string; mark?: Mark; claim?: true; computed?: "inHouse" | "vortex" }
export interface CompRow { label: string; cells: [CompCell, CompCell, CompCell] }

export const comparison = {
  label: "09 — Comps",
  meta: "3 options",
  title: "Run the comps before you hire.",
  caption: "VortexOne compared with an in-house hire and a freelance marketplace",
  rowHeader: "Compare",
  columns: ["VortexOne", "In-house hire", "Freelance marketplace"] as const,
  marks: { yes: "Yes", no: "No", partly: "Partly" } satisfies Record<Mark, string>,
  rows: [
    { label: "Monthly cost (40 hrs/wk)", cells: [{ computed: "vortex", claim: true }, { computed: "inHouse", claim: true }, { text: "Varies by freelancer" }] },
    { label: "Time to start", cells: [{ text: "About a week", claim: true }, { text: "Weeks to months" }, { text: "Days" }] },
    { label: "Payroll taxes & benefits", cells: [{ mark: "no", text: "None" }, { mark: "yes", text: "You pay" }, { mark: "no", text: "None" }] },
    { label: "Specialist in real estate / supplementing", cells: [{ mark: "yes" }, { mark: "partly" }, { mark: "partly" }] },
    { label: "Works US hours", cells: [{ mark: "yes" }, { mark: "yes" }, { mark: "partly" }] },
    { label: "Who manages quality", cells: [{ text: "The founder", claim: true }, { text: "You" }, { text: "You" }] },
    { label: "Contract", cells: [{ text: "Monthly, no lock-in", claim: true }, { text: "Employment contract" }, { text: "Per project" }] },
  ] satisfies CompRow[],
  /* One-line takeaway under the table (claim: monthly billing not yet confirmed). */
  summary: { text: "VortexOne: no payroll taxes, no hiring time, monthly.", claim: true as const, cta: { label: "See pricing", href: "/pricing" } },
};
