import { cn } from "@/lib/utils";
import { comparison as c, type CompCell } from "@/content/comparison";
import { calculate } from "@/lib/calculator";
import { defaults, prices } from "@/content/calculator";
import { Section, type Theme } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Text } from "@/components/ui/text";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { fullTimeMonthlyText } from "@/lib/pricing";

const GLYPH = { yes: "✓", no: "✗", partly: "~" } as const;
const inHouse = Math.round(calculate({ hours: 40, wage: defaults.wage.value, overhead: defaults.overhead.value }, prices).inHouse);
const usd = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

function Cell({ cell }: { cell: CompCell }) {
  const text = cell.computed === "inHouse" ? `~${usd(inHouse)}` : cell.computed === "vortex" ? fullTimeMonthlyText() : cell.text;
  return (
    <span data-claim={cell.claim ? "" : undefined} className="inline-flex items-baseline gap-2">
      {cell.mark && (
        <>
          <span aria-hidden="true" className="font-mono">{GLYPH[cell.mark]}</span>
          {!cell.text && <span className="sr-only">{c.marks[cell.mark]}</span>}
        </>
      )}
      {text && <Text>{text}</Text>}
    </span>
  );
}

/* 09 — COMPS: VortexOne column carries an 8px signal bar. Mobile: horizontal scroll, sticky first column. */
export function Comparison({ label = c.label, title = c.title, theme }: { label?: string; title?: string; theme?: Theme }) {
  return (
    <Section theme={theme} aria-labelledby="comps-title">
      <SectionHeader id="comps-title" label={label} meta={c.meta} title={title} />
      <div className="relative -mx-(--spacing-margin) overflow-x-auto px-(--spacing-margin)" tabIndex={0} role="region" aria-label={c.caption}>
        <table className="w-full min-w-[44rem] border-collapse text-left">
          <caption className="sr-only">{c.caption}</caption>
          <thead>
            <tr className="align-bottom">
              <th scope="col" className="label-mono sticky left-0 z-10 w-1/4 bg-background py-3 pr-4 text-muted-foreground">{c.rowHeader}</th>
              {c.columns.map((col, i) => (
                <th key={col} scope="col" className={cn("label-mono px-4 py-3", i === 0 && "bg-card")}>
                  {i === 0 && <span aria-hidden="true" className="-mx-4 -mt-3 mb-3 block h-2 bg-signal" />}
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <Reveal as="tbody" stagger>
            {c.rows.map((row) => (
              <tr key={row.label} className="border-t border-border align-baseline">
                <th scope="row" className="sticky left-0 z-10 bg-background py-4 pr-4 font-medium">{row.label}</th>
                {row.cells.map((cell, i) => (
                  <td key={i} className={cn("px-4 py-4", i === 0 && "bg-card font-medium")}>
                    <Cell cell={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </Reveal>
        </table>
      </div>
      <div className="grid-vx mt-[calc(var(--spacing-section)/2)] items-center gap-y-6 border-t border-border pt-6">
        <Text as="p" claim={c.summary.claim} className="col-span-4 text-lead font-medium md:col-span-5 lg:col-span-8">{c.summary.text}</Text>
        <Button href={c.summary.cta.href} variant="secondary" className="col-span-4 justify-self-start md:col-span-3 md:justify-self-end lg:col-span-4">{c.summary.cta.label}</Button>
      </div>
    </Section>
  );
}
