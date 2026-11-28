/* Savings calculator — pure functions (SPEC §11.5). Prices are null while pricing is "contact us". */

export const WEEKS_PER_MONTH = 52 / 12;

export interface CalcInput { hours: number; wage: number; overhead: number }
export interface CalcPrices { partTime: number | null; fullTime: number | null; hourly?: number | null }

export const inHouseMonthly = ({ hours, wage, overhead }: CalcInput) => wage * hours * WEEKS_PER_MONTH * (1 + overhead / 100);

export function vortexMonthly(hours: number, p: CalcPrices): number | null {
  if (p.hourly != null) return p.hourly * hours * WEEKS_PER_MONTH;
  const price = hours <= 20 ? p.partTime : p.fullTime;
  return price ?? null;
}

/** Full result. Savings fields are null when VortexOne pricing isn't public. */
export function calculate(input: CalcInput, prices: CalcPrices) {
  const inHouse = inHouseMonthly(input);
  const vortex = vortexMonthly(input.hours, prices);
  if (vortex === null) return { inHouse, vortex, savings: null, savingsPct: null, annual: null };
  const savings = inHouse - vortex;
  return { inHouse, vortex, savings, savingsPct: inHouse > 0 ? (savings / inHouse) * 100 : 0, annual: savings * 12 };
}
