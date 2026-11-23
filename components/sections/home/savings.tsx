import { savingsSection as s } from "@/content/home";
import { Section } from "@/components/ui/section";
import { SectionRule } from "@/components/ui/section-header";
import { ActionGroup } from "@/components/ui/action-group";
import { ArrowLink, Button } from "@/components/ui/button";
import { ImageFrame } from "@/components/ui/image-frame";
import dynamic from "next/dynamic";

const CalculatorCompact = dynamic(() => import("@/components/sections/shared/calculator-compact").then((m) => m.CalculatorCompact));

/* 06 — SAVINGS (paper-2): compact calculator + calculator object.
   Desktop: the image starts at the H2 top and stretches to the bottom of the content column. */
export function Savings() {
  return (
    <Section theme="paper-2" aria-labelledby="savings-title">
      <SectionRule label={s.label} />
      <div className="grid-vx mt-(--space-header) gap-y-(--space-header)">
        <div className="col-span-4 md:col-span-8 lg:col-span-7">
          <h2 id="savings-title" className="text-h2 font-semibold">
            {s.titleLines.map((l) => <span key={l} className="block">{l}</span>)}
          </h2>
          <div className="mt-(--space-header)">
            <CalculatorCompact />
          </div>
          <ActionGroup className="mt-(--space-header)">
            <Button href={s.cta.href} size="lg">{s.cta.label}</Button>
            <ArrowLink href={s.compare.href}>{s.compare.label}</ArrowLink>
          </ActionGroup>
        </div>
        <ImageFrame slot="calculator-object" block="right" fill className="col-span-4 md:col-span-4 lg:col-span-4 lg:col-start-9" />
      </div>
    </Section>
  );
}
