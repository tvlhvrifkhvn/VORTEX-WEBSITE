import type { PageMeta } from "./types";
import { plans, priceLabel } from "./pricing";


export const meta: PageMeta = {
  title: "Savings Calculator",
  description:
    "What does an in-house assistant really cost? Estimate wages plus payroll taxes and benefits per month and per year, then compare on a call.",
  path: "/savings-calculator/",
};

/* Defaults (SPEC §11.5). Wage and overhead are claims until checked against BLS data. */
export const defaults = {
  hours: { min: 10, max: 40, step: 5, value: 40 },
  wage: { value: 20, min: 1, max: 200, claim: true as const },
  overhead: { min: 0, max: 40, step: 5, value: 25, claim: true as const },
};

/** Prices from content/pricing.ts: Studio when hours ≤ 20, Townhouse above (null = "Contact for pricing"). */
export const prices = {
  partTime: plans.find((p) => p.id === "studio")?.price ?? null,
  fullTime: plans.find((p) => p.id === "townhouse")?.price ?? null,
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
  overhead: "Payroll taxes & benefits (%)",
  perYear: "In-house cost per year",
  wages: "Wages",
  extras: "Payroll taxes & benefits",
  savings: "Saved per month",
  savingsPct: "Savings",
  savingsYear: "Saved per year",
  savingsSummary: (hours: number, cost: string, vortex: string, saved: string) =>
    `${hours} hours a week costs about ${cost} a month in-house and ${vortex} with VortexOne, a saving of ${saved} a month.`,
  summary: (hours: number, wage: number, cost: string) =>
    `${hours} hours a week at $${wage} an hour costs about ${cost} a month in-house, including payroll taxes and benefits.`,
  footnote: "Estimate. Includes 25% for payroll taxes and benefits. Your real costs vary.",
};

/* /savings-calculator page (SPEC §11.5). */
export const page = {
  label: "Savings calculator",
  lines: ["What does an", "in-house assistant", "really cost?"],
  lead: "Move the sliders to match the hire you’re weighing up. Then bring the numbers to a call and **we’ll quote VortexOne against them**.",
  calcTitle: "Your estimate",
  inputsLabel: "Inputs",
  outputsLabel: "Estimate",
  how: {
    title: "How we calculate",
    body: "Wages = hourly wage × hours per week × 52 weeks ÷ 12 months. Payroll taxes and benefits are added as a percentage of wages. The yearly figure is the monthly figure × 12.",
    note: "Estimates only. Your real costs vary.",
  },
  cta: { label: "Book a call with these numbers", href: "/book-a-call" },
};
