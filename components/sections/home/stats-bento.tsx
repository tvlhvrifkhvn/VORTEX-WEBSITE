import Link from "next/link";
import { statsSection as s } from "@/content/home";
import { defaults, prices } from "@/content/calculator";
import { calculate } from "@/lib/calculator";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Bento, StatTile, Tile } from "@/components/ui/tile";
import { Button } from "@/components/ui/button";
import { ScrambleNumber } from "@/components/motion/scramble-number";
import { HoursGrid } from "@/components/motion/hours-grid";

/* Savings % at calculator defaults (null when VortexOne prices aren't public). */
const pct = (() => {
  const r = calculate({ hours: defaults.hours.value, wage: defaults.wage.value, overhead: defaults.overhead.value }, prices);
  return r.savingsPct === null ? null : Math.round(r.savingsPct);
})();

/* 03 — BY THE NUMBERS: 6 tiles, fixed row height on desktop, 2 large (A, C). Mobile: one column, large tiles first. */
export function StatsBento() {
  const st = s.stats;
  return (
    <Section theme="paper-2" aria-labelledby="stats-title">
      <SectionHeader id="stats-title" label={s.label} meta={s.meta} title={s.title} />
      <Bento className="lg:auto-rows-[15rem]">
        {/* A — capacity: giant number + hours grid */}
        <Tile claim={st.capacity.claim} className="col-span-4 justify-between gap-8 md:col-span-8 lg:col-span-6 lg:row-span-2">
          <span className="label-mono tabular text-muted-foreground">A</span>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-baseline gap-x-3">
                <ScrambleNumber value={st.capacity.value} className="text-giant font-semibold" />
                <span className="label-mono">{st.capacity.suffix.trim()}</span>
              </p>
              <p className="label-mono mt-(--space-tight)">{st.capacity.label}</p>
            </div>
            <HoursGrid {...s.week} />
          </div>
        </Tile>

        <StatTile stat={st.reply} index="B" theme="ink" className="col-span-4 lg:col-span-3 max-lg:order-1" />

        {/* C — savings % from calculator defaults, or "Run the numbers" when prices aren't public */}
        {pct !== null ? (
          <Tile theme="signal" claim className="col-span-4 justify-between gap-10 lg:col-span-3 lg:row-span-2 max-lg:-order-1">
            <span className="label-mono">C · {s.savings.label}</span>
            <div>
              <ScrambleNumber value={pct} suffix="%" className="text-stat font-semibold" />
              <p className="label-mono mt-(--space-tight)">{s.savings.text}</p>
              <p className="mt-4 text-small">
                {s.savings.footnote}{" "}
                <Link href={s.savings.href} className="inline-flex min-h-11 items-center font-medium underline underline-offset-4">{s.savings.link}</Link>
              </p>
            </div>
          </Tile>
        ) : (
          <Tile theme="signal" className="col-span-4 justify-between gap-10 lg:col-span-3 lg:row-span-2 max-lg:-order-1">
            <span className="label-mono">C · {s.run.label}</span>
            <div className="flex flex-col items-start gap-6">
              <p className="text-h3 font-semibold">{s.run.title}</p>
              <Button href={s.run.href}>{s.run.cta}</Button>
            </div>
          </Tile>
        )}

        <StatTile stat={st.files} index="D" className="col-span-4 lg:col-span-3 max-lg:order-1" />
        <StatTile stat={st.founder} index="E" wide className="col-span-4 lg:col-span-6 max-lg:order-1" />
        <StatTile stat={st.hours} index="F" theme="ink" wide className="col-span-4 md:col-span-8 lg:col-span-6 max-lg:order-1" />
      </Bento>
    </Section>
  );
}
