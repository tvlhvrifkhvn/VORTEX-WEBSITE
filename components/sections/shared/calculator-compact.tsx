"use client";

import { useEffect, useState } from "react";
import { calculate } from "@/lib/calculator";
import { usd } from "@/lib/pricing";
import { defaults, labels, prices } from "@/content/calculator";
import { Slider } from "@/components/ui/slider";
import { Field, Input } from "@/components/ui/field";
import { ScrambleNumber } from "@/components/motion/scramble-number";

const MONEY = { style: "currency", currency: "USD", maximumFractionDigits: 0 } as const;

/* Home 08 compact calculator: hours + wage → savings per month (giant) when VortexOne prices are public;
   otherwise the in-house cost only. Prices: Studio ≤ 20 hrs, Townhouse above (content/pricing.ts). */
export function CalculatorCompact() {
  const [hours, setHours] = useState(defaults.hours.value);
  const [wageText, setWageText] = useState(String(defaults.wage.value));
  const wage = Number(wageText);
  const valid = Number.isFinite(wage) && wage >= defaults.wage.min && wage <= defaults.wage.max;
  const [result, setResult] = useState(() => calculate({ hours, wage: defaults.wage.value, overhead: defaults.overhead.value }, prices));

  useEffect(() => {
    if (!valid) return;
    const t = window.setTimeout(() => setResult(calculate({ hours, wage, overhead: defaults.overhead.value }, prices)), 250);
    return () => window.clearTimeout(t);
  }, [hours, wage, valid]);

  const priced = result.savings !== null && result.vortex !== null;
  return (
    <div className="flex flex-col gap-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p id="calc-hours" className="label-mono flex justify-between">
            {labels.hours}
            <span className="tabular">{hours} {labels.hoursUnit.toUpperCase()}</span>
          </p>
          <Slider
            aria-labelledby="calc-hours"
            value={[hours]}
            onValueChange={([v]) => setHours(v)}
            min={defaults.hours.min}
            max={defaults.hours.max}
            step={defaults.hours.step}
            className="mt-2"
          />
        </div>
        <Field id="calc-wage" label={labels.wage} error={valid ? undefined : labels.wageError}>
          {(d, inv) => (
            <Input
              id="calc-wage"
              type="number"
              inputMode="decimal"
              autoComplete="off"
              min={defaults.wage.min}
              max={defaults.wage.max}
              value={wageText}
              onChange={(e) => setWageText(e.target.value)}
              aria-describedby={d}
              aria-invalid={inv || undefined}
              data-claim=""
            />
          )}
        </Field>
      </div>

      <div className="border-t border-border pt-6">
        <p className="label-mono text-muted-foreground">{priced ? labels.savings : labels.inHouse}</p>
        <ScrambleNumber value={Math.round(priced ? result.savings! : result.inHouse)} format={MONEY} className="mt-(--space-tight) block text-display font-semibold" />
        {!priced && <p className="label-mono mt-2">{labels.perMonth}</p>}
      </div>

      <dl className="border-y border-border">
        {priced && (
          <div className="flex justify-between gap-4 border-b border-border py-3">
            <dt className="label-mono text-muted-foreground">{labels.inHouse}</dt>
            <dd className="tabular font-medium">{usd(result.inHouse)}</dd>
          </div>
        )}
        <div className="flex justify-between gap-4 py-3" data-claim={priced ? "" : undefined}>
          <dt className="label-mono text-muted-foreground">{labels.vortex}</dt>
          <dd className="tabular font-medium">{result.vortex === null ? labels.vortexNull : usd(result.vortex)}</dd>
        </div>
      </dl>

      <p aria-live="polite" className="sr-only">
        {priced ? labels.savingsSummary(hours, usd(result.inHouse), usd(result.vortex!), usd(result.savings!)) : labels.summary(hours, wage, usd(result.inHouse))}
      </p>
      <p className="text-small text-muted-foreground">{labels.footnote}</p>
    </div>
  );
}
