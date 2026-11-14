import { meta, page as p } from "@/content/calculator";
import { ctaBand } from "@/content/nav";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHeader } from "@/components/sections/shared/page-header";
import { Calculator } from "@/components/sections/shared/calculator";
import { CtaBand } from "@/components/layout/cta-band";

export const metadata = pageMetadata(meta);

/* /savings-calculator (§11.5). File 02 calculator stays off (features.calculatorFile02). */
export default function CalculatorPage() {
  return (
    <>
      <PageHeader crumb={meta.title} label={p.label} lines={p.lines} lead={p.lead} image="calculator-object" />
      <Section theme="paper-2" aria-label={p.label}>
        <Calculator />
        <Accordion type="single" collapsible className="mt-20 border-t border-border lg:w-1/2">
          <AccordionItem value="how">
            <AccordionTrigger>{p.how.title}</AccordionTrigger>
            <AccordionContent>
              <p>{p.how.body}</p>
              <p className="mt-3 font-medium text-foreground">{p.how.note}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>
      <CtaBand {...ctaBand} theme="ink" />
    </>
  );
}
