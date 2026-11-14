import type { PageMeta, PricingPlan } from "./types";

export const meta: PageMeta = {
  title: "Pricing",
  description: "[[PLACEHOLDER: meta description for /pricing/]]",
  path: "/pricing/",
};

/* Intake 2026-11-14: no public prices — every plan shows `priceLabel`. Plans describe scope only. */
export const priceLabel = "Contact for pricing";

export const plans: PricingPlan[] = [
  { id: "part-time", file: "01", name: "Part-time", tagline: "", price: null, hours: "20 hrs/week", features: [], claim: true },
  { id: "full-time", file: "01", name: "Full-time", tagline: "", price: null, hours: "40 hrs/week", features: [], recommended: true, claim: true },
  { id: "custom", file: "01", name: "Custom scope", tagline: "", price: null, hours: "Task or project based", features: [] },
  { id: "file02", file: "02", name: "Supplementing", tagline: "", price: null, features: [] },
];

export const paymentMethods = ["Wise", "Payoneer"];
export const contractTerms = "[[PLACEHOLDER: contract and notice terms]]";
