"use client";

import { useEffect, useState } from "react";
import { calculate } from "@/lib/calculator";
import { defaults, labels, page, prices } from "@/content/calculator";
import { Slider } from "@/components/ui/slider";
import { Field, Input } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { ScrambleNumber } from "@/components/motion/scramble-number";

const usd = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

function Range({ id, label, unit, value, onChange, cfg }: { id: string; label: string; unit: string; value: number; onChange: (v: number) => void; cfg: { min: number; max: number; step: number } }) {
  return (
    <div>
      <p id={id} className="label-mono flex justify-between gap-4">
        {label}
        <span className="tabular">{value}{unit}</span>
      </p>
      <Slider aria-labelledby={id} value={[value]} onValueChange={([v]) => onChange(v)} min={cfg.min} max={cfg.max} step={cfg.step} className="mt-2" />
    </div>
  );
}

/* Full savings calculator (§11.5): inputs sticky on desktop; outputs debounced 250ms with an aria-live summary.
   VortexOne price is not public → "Contact for pricing"; savings rows appear only if prices are added later. */
export function Calculator() {
  const [hours, setHours] = useState(defaults.hours.value);
  const [overhead, setOverhead] = useState(defaults.overhead.value);
  const [wageText, setWageText] = useState(String(defaults.wage.value));
  const wage = Number(wageText);
  const valid = wageText !== "" && Number.isFinite(wage) && wage >= defaults.wage.min && wage <= defaults.wage.max;
  const [input, setInput] = useState({ hours, wage: defaults.wage.value, overhead });

  useEffect(() => {
    if (!valid) return;
    const t = window.setTimeout(() => setInput({ hours, wage, overhead }), 250);
    return () => window.clearTimeout(t);
  }, [hours, wage, overhead, valid]);

  const r = calculate(input, prices);
  const wages = r.inHouse / (1 + input.overhead / 100);
  const href = `${page.cta.href}?file=01&hours=${input.hours}&wage=${input.wage}`;

  return (
    <div className="grid-vx gap-y-16">
      <div className="col-span-4 md:col-span-8 lg:col-span-5">
        <div className="flex flex-col gap-10 border-t border-border pt-4 lg:sticky lg:top-[calc(var(--spacing-header)+2rem)]">
          <p className="label-mono text-muted-foreground">{page.inputsLabel}</p>
          <Range id="c-hours" label={labels.hours} unit={` ${labels.hoursUnit.toUpperCase()}`} value={hours} onChange={setHours} cfg={defaults.hours} />
          <Field id="c-wage" label={labels.wage} error={valid ? undefined : labels.wageError}>
            {(d, inv) => (
              <Input id="c-wage" type="number" inputMode="decimal" min={defaults.wage.min} max={defaults.wage.max} value={wageText} onChange={(e) => setWageText(e.target.value)} aria-describedby={d} aria-invalid={inv || undefined} data-claim="" />
            )}
          </Field>
          <div data-claim="">
            <Range id="c-overhead" label={labels.overhead} unit="%" value={overhead} onChange={setOverhead} cfg={defaults.overhead} />
          </div>
        </div>
      </div>

      <div className="col-span-4 flex flex-col gap-8 border-t border-border pt-4 md:col-span-8 lg:col-span-6 lg:col-start-7">
        <p className="label-mono text-muted-foreground">{page.outputsLabel}</p>
        <div>
          <p className="label-mono">{labels.inHouse}</p>
          <ScrambleNumber value={Math.round(r.inHouse)} prefix="$" className="text-display font-semibold" />
        </div>
        <dl className="border-t border-border">
          {[
            [labels.wages, usd(wages)],
            [labels.extras, usd(r.inHouse - wages)],
            [labels.perYear, usd(r.inHouse * 12)],
            [labels.vortex, r.vortex === null ? labels.vortexNull : usd(r.vortex)],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b border-border py-3">
              <dt className="label-mono text-muted-foreground">{k}</dt>
              <dd className="tabular font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <p aria-live="polite" className="sr-only">{labels.summary(input.hours, input.wage, usd(r.inHouse))}</p>
        <Button href={href} size="lg" className="self-start">{page.cta.label}</Button>
      </div>
    </div>
  );
}
