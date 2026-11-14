import { statsSection as s } from "@/content/home";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Bento, StatTile, Tile } from "@/components/ui/tile";
import { Button } from "@/components/ui/button";

/* 03 — BY THE NUMBERS: 6 tiles, 2 large (A, C). Mobile: one column, large tiles first.
   Tile C is "Run the numbers" because prices are not public (no computed savings %). */
export function StatsBento() {
  const st = s.stats;
  return (
    <Section aria-labelledby="stats-title">
      <SectionHeader id="stats-title" label={s.label} meta={s.meta} title={s.title} />
      <Bento className="lg:auto-rows-[minmax(14rem,auto)]">
        <StatTile stat={st.capacity} index="A" className="col-span-4 md:col-span-8 lg:col-span-6 lg:row-span-2" />
        <StatTile stat={st.reply} index="B" theme="ink" className="col-span-4 lg:col-span-3 max-lg:order-1" />
        <Tile theme="signal" className="col-span-4 justify-between gap-10 lg:col-span-3 lg:row-span-2 max-lg:-order-1">
          <span className="label-mono">C · {s.run.label}</span>
          <div className="flex flex-col items-start gap-6">
            <p className="text-h3 font-semibold">{s.run.title}</p>
            <Button href={s.run.href}>{s.run.cta}</Button>
          </div>
        </Tile>
        <StatTile stat={st.files} index="D" className="col-span-4 lg:col-span-3 max-lg:order-1" />
        <StatTile stat={st.founder} index="E" className="col-span-4 lg:col-span-6 max-lg:order-1" />
        <StatTile stat={st.hours} index="F" theme="ink" className="col-span-4 md:col-span-8 lg:col-span-6 max-lg:order-1" />
      </Bento>
    </Section>
  );
}
