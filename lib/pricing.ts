import { plans, priceLabel, customLabel } from "@/content/pricing";
import type { FileId, PricingPlan } from "@/content/types";

/* Derived price text — the only place prices are formatted. Everything reads content/pricing.ts through here,
   so a price change is one line there and a null price falls back to "Contact for pricing" everywhere. */

export const usd = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const UNIT = { month: "/mo", supplement: " per supplement" } as const;
const SHORT = { month: "/mo", supplement: "/claim" } as const;

export const planById = (id: string) => plans.find((p) => p.id === id);
export const priceOf = (id: string) => planById(id)?.price ?? null;

/** Card text: "$1,200/mo", "Custom" or "Contact for pricing". */
export function planPriceText(p: PricingPlan) {
  if (p.custom) return customLabel;
  if (p.price === null) return priceLabel;
  return `${usd(p.price)}${p.unit ? UNIT[p.unit] : ""}`;
}

/** Lowest priced plan of a file (File 01: monthly plans; File 02: per-supplement plans). */
function lowest(file: FileId) {
  const unit = file === "01" ? "month" : "supplement";
  const priced = plans.filter((p) => p.file === file && p.unit === unit && p.price !== null) as (PricingPlan & { price: number })[];
  return priced.sort((a, b) => a.price - b.price)[0] ?? null;
}

/** "From $650/mo" / "From $150 per supplement", or "Contact for pricing". */
export function fromText(file: FileId) {
  const p = lowest(file);
  return p ? `From ${usd(p.price)}${UNIT[p.unit!]}` : priceLabel;
}

/** Compact strip text: "File 01 from $650/mo" / "File 02 from $150/claim"; null when the price isn't public. */
export function stripText(file: FileId) {
  const p = lowest(file);
  return p ? `File ${file} from ${usd(p.price)}${SHORT[p.unit!]}` : null;
}

/** VortexOne monthly cost at 40 hrs/wk (Townhouse) for the comps table. */
export const fullTimeMonthlyText = () => {
  const price = priceOf("townhouse");
  return price === null ? priceLabel : `${usd(price)}/mo`;
};
