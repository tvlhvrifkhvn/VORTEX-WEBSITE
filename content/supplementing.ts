import type { PageMeta } from "./types";

export const meta: PageMeta = {
  title: "Insurance Supplementing for Contractors",
  description:
    "Xactimate estimates and supplement documentation for US roofing and water-damage restoration contractors. We work for the contractor, not the homeowner.",
  path: "/insurance-supplementing/",
};

/* Positioning rule (SPEC §1), confirmed in intake 2026-11-14. */
export const scopeNote =
  "We prepare estimates and documentation for the contractor. We don't negotiate with insurance carriers, represent homeowners or act as a public adjuster.";

export const header = {
  crumbs: [{ label: "File 02" }, { label: "Insurance Supplementing" }],
  numeral: "02",
  tag: "File 02 · Claim no. 002 · Status: Open",
  lines: ["Supplements,", "line by line."],
  lead: "Xactimate estimates and supplement documentation for US roofing and water-damage restoration contractors.",
  specCaption: "Claim sheet",
  spec: [
    { key: "Trades", value: "Roofing, water-damage restoration" },
    { key: "Software", value: "Xactimate" },
    { key: "Turnaround", value: "[[PLACEHOLDER: supplement turnaround time]]", claim: true as const },
    { key: "Pricing", value: "Contact for pricing" },
    { key: "You send", value: "Photos, measurements, carrier scope" },
  ],
  primary: { label: "Send a claim", href: "/book-a-call?file=02" },
  secondary: { label: "See rate sheet", href: "/pricing?file=02" },
};

export const sections = {
  services: { label: "02.1 — Line items", title: "What we build for each claim" },
  scope: {
    label: "02.2 — Scope",
    title: "What you send. What you get back.",
    send: { title: "You send", items: [{ text: "Carrier estimate or scope of loss" }, { text: "Job photos" }, { text: "Measurement report" }, { text: "Notes on missed items" }] },
    get: {
      title: "You get back",
      items: [
        { text: "Xactimate estimate (ESX and PDF)", claim: true as const },
        { text: "Supplement package" },
        { text: "Line-item justification with photo references" },
        { text: "Status updates on every open claim" },
      ],
    },
  },
  flow: {
    label: "02.3 — Claim flow",
    meta: "4 steps",
    title: "How a claim moves across the desk",
    steps: [
      { n: "01", title: "Inspect", text: "We review the carrier scope and your photos." },
      { n: "02", title: "Itemize", text: "Missing items are built in Xactimate." },
      { n: "03", title: "Package", text: "Everything is ready for you to submit." },
      { n: "04", title: "Track", text: "Each claim's status is logged until it closes." },
    ],
    cta: { label: "Send a claim", href: "/book-a-call?file=02" },
  },
  audience: {
    label: "02.4 — Who it's for",
    title: "Contractors, not homeowners",
    handoff: "Typical hand-off",
    groups: [
      { title: "Roofing contractors", text: "Storm and retail roofing jobs where the carrier scope came back short.", items: ["Roof measurements and photos", "Carrier scope of loss", "Notes from the inspection"] },
      { title: "Restoration companies", text: "Water-damage jobs that need every line item documented.", items: ["Moisture readings and photos", "Drying logs", "Carrier estimate"] },
    ],
    notFor: { title: "Not for", text: "Homeowners. We work only for contractors and never act as a public adjuster." },
  },
  pricing: { label: "02.5 — Rate sheet", title: "Pricing, quoted to your volume" },
  faq: { label: "02.6 — Claim notes", title: "Questions contractors ask", cta: { label: "All questions", href: "/faq" } },
};

export const cta = {
  label: "Next step",
  title: "Got a claim that came back short?",
  text: "Bring the carrier scope and your photos to a 15-minute call. We'll look at what's missing together.",
  primary: { label: "Send a claim", href: "/book-a-call?file=02" },
  secondary: { label: "See rate sheet", href: "/pricing?file=02" },
};
