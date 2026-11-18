import type { PageMeta, PricingPlan } from "./types";

export const meta: PageMeta = {
  title: "Pricing",
  description:
    "VortexOne plans for real estate VA work and insurance supplementing: Studio, Townhouse or Estate, per-supplement or volume pricing.",
  path: "/pricing/",
};

/* THE price source. All prices are SAMPLE values for UI testing (claim: true) — see docs/ASSETS_NEEDED.md.
   Change a price here (one line) and cards, calculator, stats, comps, panels, spec tables and the hero strip follow.
   Set a price to null → every spot falls back to `priceLabel`. "Daily written report" is the site-wide reporting claim. */
export const priceLabel = "Contact for pricing";
export const customLabel = "Custom";

export const plans: PricingPlan[] = [
  { id: "studio", file: "01", name: "Studio", tagline: "For a solo agent with a steady listing load.", price: 650, unit: "month", hours: "20 hrs/week", features: ["20 hours per week", "One specialist on your files", "Monday to Friday, US hours", "Daily written report"], claim: true },
  { id: "townhouse", file: "01", name: "Townhouse", tagline: "For teams and busy agents who want the whole back office covered.", price: 1200, unit: "month", hours: "40 hrs/week", features: ["40 hours per week", "One specialist on your files", "Monday to Friday, US hours", "Daily written report"], recommended: true, claim: true },
  { id: "estate", file: "01", name: "Estate", tagline: "For investors and one-off projects.", price: null, custom: true, hours: "Task or project based", features: ["Scoped on a call", "Fix-and-flip, web, SEO or ads projects", "Add-ons on request"] },
  { id: "per-supplement", file: "02", name: "Per supplement", tagline: "For the occasional claim that came back short.", price: 150, unit: "supplement", from: true, hours: "Per claim", features: ["Xactimate estimate", "Supplement package", "Photo & documentation review"], claim: true },
  { id: "volume", file: "02", name: "Volume", tagline: "For contractors with a steady flow of claims.", price: 1200, unit: "month", from: true, hours: "10+ claims/mo", features: ["Everything per supplement", "Claim status tracking", "Priority on the desk"], recommended: true, claim: true },
  { id: "custom-02", file: "02", name: "Custom", tagline: "For large or unusual workloads.", price: null, custom: true, hours: "Scoped on a call", features: ["Scoped on a call", "Roofing and restoration"] },
];

export const paymentMethods = ["Wise", "Payoneer"];
export const contractTerms = "[[PLACEHOLDER: contract and notice terms]]";

export const cardLabels = {
  plan: "Plan",
  recommended: "Recommended",
  cta: "Book a call",
  more: "See full pricing",
  check: "Included",
  from: "From",
  unit: { month: "/mo", supplement: "per supplement" },
};

/* /pricing page (SPEC §11.4). */
export const page = {
  label: "Floor plans + rate sheet",
  lines: ["Pricing, scoped", "to your workload."],
  lead: "Starting prices for each plan. Book a 15-minute call and we confirm a monthly price for your workload.",
  toggleLabel: "Choose a file",
  plansTitle: "Plans by file",
  compsLabel: "01 — Comps",
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
    ],
    priceRow: "Price",
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
