import type { PageMeta, PricingPlan } from "./types";

export const meta: PageMeta = {
  title: "Pricing",
  description: "[[PLACEHOLDER: meta description for /pricing/]]",
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
