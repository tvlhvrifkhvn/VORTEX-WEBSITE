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
import { SavingsGrid } from "@/components/ui/savings-grid";

/* Savings % at calculator defaults (null when VortexOne prices aren't public). */
const pct = (() => {
  const r = calculate({ hours: defaults.hours.value, wage: defaults.wage.value, overhead: defaults.overhead.value }, prices);
  return r.savingsPct === null ? null : Math.round(r.savingsPct);
})();

/* 03 — BY THE NUMBERS: 6 tiles on the 12-col grid (A 6×2, B 3, C 3×2, D 3, E 6, F 6). Rows have a minimum height and grow
   with content, so nothing spills; every number is sized from the bento width (stat-fit/giant-fit, Anton). Mobile: one column. */
export function StatsBento() {
  const st = s.stats;
  return (
    <Section theme="paper-2" aria-labelledby="stats-title">
      <SectionHeader id="stats-title" label={s.label} meta={s.meta} title={s.title} />
      <Bento className="lg:auto-rows-[minmax(13rem,auto)]">
        {/* A — capacity: giant number + hours grid */}
        {/* A — left: "40" + unit centred between the tile edge and the grid. Right: hours grid from the top padding down, label under it. */}
        <Tile claim={st.capacity.claim} className="col-span-4 gap-(--space-block) sm:flex-row md:col-span-8 lg:col-span-6 lg:row-span-2">
          <div className="flex flex-1 items-center justify-center">
            <div>
              <ScrambleNumber value={st.capacity.value} className="giant-fit" />
              <span className="label-mono mt-(--space-tight) block">{st.capacity.suffix.trim()}</span>
            </div>
          </div>
          <div className="flex flex-col sm:w-[15rem]">
            <HoursGrid days={s.week.days} hoursPerDay={s.week.hoursPerDay} className="max-w-none flex-1" />
            <p className="label-mono mt-(--space-tight)">{st.capacity.label}</p>
          </div>
        </Tile>

        <StatTile stat={st.reply} theme="ink" className="col-span-4 lg:col-span-3 max-lg:order-1" />

        {/* C — savings % from calculator defaults, or "Run the numbers" when prices aren't public */}
        {pct !== null ? (
          // C — savings: 10×10 grid (1 square = 1% of in-house cost; filled = saved, rising from the bottom) + "72%" spanning the tile width (equal gaps).
          <Tile theme="signal" claim className="@container col-span-4 justify-between gap-(--space-block) lg:col-span-3 lg:row-span-2 max-lg:-order-1">
            <SavingsGrid pct={pct} caption={s.savings.grid} />
            <div>
              <ScrambleNumber value={pct} suffix="%" className="fill-num" />
              <p className="label-mono mt-(--space-tight)">{s.savings.text}</p>
              <p className="mt-(--space-tight) text-small">
                {s.savings.footnote}{" "}
                <Link href={s.savings.href} className="inline-flex min-h-11 items-center font-medium underline underline-offset-4">{s.savings.link}</Link>
              </p>
            </div>
          </Tile>
        ) : (
          <Tile theme="signal" className="col-span-4 justify-between gap-10 lg:col-span-3 lg:row-span-2 max-lg:-order-1">
            <div className="flex flex-col items-start gap-6">
              <p className="text-h3 font-semibold">{s.run.title}</p>
              <Button href={s.run.href}>{s.run.cta}</Button>
            </div>
          </Tile>
        )}

        <StatTile stat={st.files} className="col-span-4 lg:col-span-3 max-lg:order-1" />
        <StatTile stat={st.founder} theme="signal" size="giant" wide className="col-span-4 lg:col-span-6 max-lg:order-1" />
        <StatTile stat={st.hours} theme="ink" size="giant" wide className="col-span-4 md:col-span-8 lg:col-span-6 max-lg:order-1" />
      </Bento>
    </Section>
  );
}
