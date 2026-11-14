import type { PageMeta } from "./types";
import { plans, priceLabel } from "./pricing";

export const meta: PageMeta = {
  title: "Savings Calculator",
  description: "[[PLACEHOLDER: meta description for /savings-calculator/]]",
  path: "/savings-calculator/",
};

/* Defaults (SPEC §11.5). Wage and overhead are claims until checked against BLS data. */
export const defaults = {
  hours: { min: 10, max: 40, step: 5, value: 40 },
  wage: { value: 20, min: 1, max: 200, claim: true as const },
  overhead: { min: 0, max: 40, step: 5, value: 25, claim: true as const },
};

/** Prices from content/pricing.ts (null = "Contact for pricing"). */
export const prices = {
  partTime: plans.find((p) => p.id === "part-time")?.price ?? null,
  fullTime: plans.find((p) => p.id === "full-time")?.price ?? null,
};

export const labels = {
  hours: "Hours per week",
  wage: "In-house hourly wage ($)",
  wageError: "Enter a wage between $1 and $200",
  inHouse: "In-house cost per month",
  vortex: "VortexOne per month",
  vortexNull: priceLabel,
  perMonth: "per month",
  hoursUnit: "hrs/wk",
  summary: (hours: number, wage: number, cost: string) =>
    `${hours} hours a week at $${wage} an hour costs about ${cost} a month in-house, including payroll taxes and benefits.`,
  footnote: "Estimate. Includes 25% for payroll taxes and benefits. Your real costs vary.",
};
