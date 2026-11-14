import type { PageMeta, PricingPlan } from "./types";

export const meta: PageMeta = {
  title: "Pricing",
  description: "[[PLACEHOLDER: meta description for /pricing/]]",
  path: "/pricing/",
};

/* Prices are never invented — they stay null until confirmed (intake A9, A10). */
export const plans: PricingPlan[] = [
  { id: "studio", file: "01", name: "Studio", tagline: "", price: null, unit: "[[PLACEHOLDER: File 01 price unit]]", features: [] },
  { id: "townhouse", file: "01", name: "Townhouse", tagline: "", price: null, unit: "[[PLACEHOLDER: File 01 price unit]]", features: [], recommended: true },
  { id: "estate", file: "01", name: "Estate", tagline: "", price: null, unit: "[[PLACEHOLDER: File 01 price unit]]", features: [] },
  { id: "file02", file: "02", name: "[[PLACEHOLDER: File 02 plan name]]", tagline: "", price: null, unit: "[[PLACEHOLDER: File 02 pricing model]]", features: [] },
];

export const paymentMethods = "[[PLACEHOLDER: payment methods]]";
export const contractTerms = "[[PLACEHOLDER: contract and notice terms]]";
