import type { PageMeta, PricingPlan } from "./types";

export const meta: PageMeta = {
  title: "Pricing",
  description:
    "VortexOne plans for real estate VA work and insurance supplementing: part-time, full-time or custom scope, quoted on a 15-minute call.",
  path: "/pricing/",
};

/* Intake 2026-11-14: no public prices — every plan shows `priceLabel`. Tiers confirmed by the user.
   "Daily written report" is the site-wide reporting claim (see home 07/13). */
export const priceLabel = "Contact for pricing";

export const plans: PricingPlan[] = [
  { id: "part-time", file: "01", name: "Part-time", tagline: "For a solo agent with a steady listing load.", price: null, hours: "20 hrs/week", features: ["20 hours per week", "One specialist on your files", "Monday to Friday, US hours", "Daily written report"], claim: true },
  { id: "full-time", file: "01", name: "Full-time", tagline: "For teams and busy agents who want the whole back office covered.", price: null, hours: "40 hrs/week", features: ["40 hours per week", "One specialist on your files", "Monday to Friday, US hours", "Daily written report"], recommended: true, claim: true },
  { id: "custom", file: "01", name: "Custom scope", tagline: "For investors and one-off projects.", price: null, hours: "Task or project based", features: ["Scoped on a call", "Fix-and-flip, web, SEO or ads projects", "Lead generation on request"] },
  { id: "file02", file: "02", name: "Supplementing", tagline: "For roofing and restoration contractors.", price: null, hours: "Quoted per workload", features: ["Xactimate estimates", "Supplement packages", "Photo & documentation review", "Claim status tracking"] },
];

export const paymentMethods = ["Wise", "Payoneer"];
export const contractTerms = "[[PLACEHOLDER: contract and notice terms]]";

export const cardLabels = {
  plan: "Plan",
  recommended: "Recommended",
  cta: "Book a call",
  more: "See full pricing",
  check: "Included",
};

/* /pricing page (SPEC §11.4). H1 changed from "Pricing in plain numbers" — there are no public prices. */
export const page = {
  label: "Floor plans + rate sheet",
  lines: ["Pricing, scoped", "to your workload."],
  lead: "No price list to decode. Pick the shape of plan you need, book a 15-minute call, and we quote a monthly price for your workload.",
  toggleLabel: "Choose a file",
  plansTitle: "Plans by file",
  tabs: [
    { value: "01", label: "File 01 · Real estate" },
    { value: "02", label: "File 02 · Supplementing" },
  ],
  everyPlan: {
    label: "In every plan",
    items: [
      { text: "NDA", claim: true as const },
      { text: "Daily report", claim: true as const },
      { text: "US hours" },
      { text: "Monthly billing", claim: true as const },
      { text: "[[PLACEHOLDER: notice period]] notice", claim: true as const },
    ],
  },
  table: {
    label: "Plan comparison",
    caption: "File 01 plans compared",
    rowHeader: "Plan",
    rows: [
      { label: "Hours", cells: ["20 hrs/week", "40 hrs/week", "Task or project based"] },
      { label: "Best for", cells: ["Solo agents", "Teams and busy agents", "Investors and one-off projects"] },
      { label: "Services", cells: ["Any File 01 service", "Any File 01 service", "Scoped on a call"] },
      { label: "Daily written report", cells: ["Included", "Included", "On request"], claim: true as const },
      { label: "Price", cells: [priceLabel, priceLabel, priceLabel] },
    ],
  },
  payment: { text: "Invoiced monthly. Pay by Wise or Payoneer.", claim: true as const },
  faq: { label: "Billing", title: "Questions about billing", cta: { label: "All questions", href: "/faq" } },
  cta: {
    label: "Next step",
    title: "Get a price for your workload.",
    text: "15 minutes. Tell us what’s on your desk and we quote a monthly price. No pitch deck.",
    primary: { label: "Book a call", href: "/book-a-call" },
    secondary: { label: "Run the numbers", href: "/savings-calculator" },
  },
};
