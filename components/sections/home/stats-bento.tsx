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
import { SavingsRing } from "@/components/motion/savings-ring";
import { MeshTrail } from "@/components/motion/mesh-trail";

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
        {/* A — 2×2 grid: ["40" | hours grid] bottom-aligned, then [HRS/WK | label]. "40" fills its column
            (equal gaps: tile padding left, 24px gutter right) and ends where the squares end. */}
        <Tile claim={st.capacity.claim} className="col-span-4 grid grid-cols-[minmax(0,1fr)_minmax(0,10rem)] content-end gap-x-6 gap-y-(--space-tight) sm:grid-cols-[minmax(0,1fr)_minmax(0,17rem)] md:col-span-8 lg:col-span-6 lg:row-span-2">
          <div className="@container self-end">
            <ScrambleNumber value={st.capacity.value} reveal="blur" className="fill-num [--fit:1]" />
          </div>
          <HoursGrid days={s.week.days} hoursPerDay={s.week.hoursPerDay} className="max-w-none self-end" />
          <span className="label-mono">{st.capacity.suffix.trim()}</span>
          <p className="label-mono">{st.capacity.label}</p>
        </Tile>

        <StatTile stat={st.reply} theme="ink" justify className="col-span-4 lg:col-span-3 max-lg:order-1" />

        {/* C — savings % from calculator defaults, or "Run the numbers" when prices aren't public */}
        {pct !== null ? (
          // C — savings: progress ring (fills to the % on scroll-in, replays on hover) + "72%" spanning the tile width (equal gaps).
          <Tile theme="signal" claim className="@container col-span-4 justify-between gap-(--space-block) lg:col-span-3 lg:row-span-2 max-lg:-order-1">
            <SavingsRing pct={pct} />
            <div>
              <ScrambleNumber value={pct} suffix="%" reveal="blur" className="fill-num" />
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
        <StatTile stat={st.founder} theme="signal" size="hero" fx={<MeshTrail />} wide className="col-span-4 lg:col-span-6 max-lg:order-1" />
        <StatTile stat={st.hours} theme="ink" size="giant" wide className="col-span-4 md:col-span-8 lg:col-span-6 max-lg:order-1" />
      </Bento>
    </Section>
  );
}
