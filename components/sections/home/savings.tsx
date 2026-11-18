import { savingsSection as s } from "@/content/home";
import { Section } from "@/components/ui/section";
import { ArrowLink, Button } from "@/components/ui/button";
import { ImageFrame } from "@/components/ui/image-frame";
import dynamic from "next/dynamic";

const CalculatorCompact = dynamic(() => import("@/components/sections/shared/calculator-compact").then((m) => m.CalculatorCompact));

/* 08 — SAVINGS (paper-2): compact calculator + calculator object. */
export function Savings() {
  return (
    <Section theme="paper-2" aria-labelledby="savings-title">
      <p className="label-mono border-t border-border pt-3">{s.label}</p>
      <div className="grid-vx mt-8 gap-y-12">
        <div className="col-span-4 md:col-span-8 lg:col-span-7">
          <h2 id="savings-title" className="text-h2 font-semibold">{s.title}</h2>
          <div className="mt-12">
            <CalculatorCompact />
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Button href={s.cta.href} size="lg">{s.cta.label}</Button>
            <ArrowLink href={s.compare.href}>{s.compare.label}</ArrowLink>
          </div>
        </div>
        <ImageFrame slot="calculator-object" block="right" className="col-span-4 md:col-span-4 lg:col-span-4 lg:col-start-9 lg:self-center" />
      </div>
    </Section>
  );
}
