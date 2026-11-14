import { Suspense } from "react";
import { meta, page as p, plans } from "@/content/pricing";
import { faqFor } from "@/content/faq";
import type { FileId } from "@/content/types";
import { pageMetadata } from "@/lib/seo";
import { planPriceText } from "@/lib/pricing";
import { Section } from "@/components/ui/section";
import { SpecStrip } from "@/components/ui/spec";
import { Text } from "@/components/ui/text";
import { PageHeader } from "@/components/sections/shared/page-header";
import { PricingCards } from "@/components/sections/shared/pricing-cards";
import { PricingSwitcher } from "@/components/sections/shared/pricing-switcher";
import { PlanTable } from "@/components/sections/shared/plan-table";
import { FaqSection } from "@/components/sections/shared/faq-section";
import { CtaBand } from "@/components/layout/cta-band";

export const metadata = pageMetadata(meta);

function Panel({ file }: { file: FileId }) {
  const list = plans.filter((x) => x.file === file);
  return (
    <div className="flex flex-col gap-16">
      <PricingCards plans={list} />
      {/* Comparison rows are written for File 01; the price row is derived from content/pricing.ts. */}
      {file === "01" && list.length > 1 && (
        <div>
          <p className="label-mono mb-4">{p.table.label}</p>
          <PlanTable plans={list} {...p.table} rows={[...p.table.rows, { label: p.table.priceRow, cells: list.map(planPriceText), claim: true }]} />
        </div>
      )}
    </div>
  );
}

/* /pricing (§11.4): File 01 / File 02 toggle (?file=), plan cards, what every plan includes, billing FAQ. */
export default function PricingPage() {
  const panels = { "01": <Panel file="01" />, "02": <Panel file="02" /> };
  return (
    <>
      <PageHeader crumb={meta.title} label={p.label} lines={p.lines} lead={p.lead} />
      <Section theme="paper-2" aria-labelledby="plans-title">
        <h2 id="plans-title" className="sr-only">{p.plansTitle}</h2>
        <Suspense fallback={panels["01"]}>
          <PricingSwitcher tabs={p.tabs} label={p.toggleLabel} panels={panels} />
        </Suspense>
        <div className="mt-16 flex flex-col gap-4">
          <p className="label-mono">{p.everyPlan.label}</p>
          <SpecStrip items={p.everyPlan.items} />
          <Text as="p" claim={p.payment.claim} className="text-muted-foreground">{p.payment.text}</Text>
        </div>
      </Section>
      <FaqSection label={`01 — ${p.faq.label}`} title={p.faq.title} items={faqFor("billing")} cta={p.faq.cta} />
      <CtaBand {...p.cta} />
    </>
  );
}
