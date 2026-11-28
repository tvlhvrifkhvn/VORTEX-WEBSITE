import type { FileId } from "@/content/types";
import { plans, cardLabels } from "@/content/pricing";
import { Section, type Theme } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowLink } from "@/components/ui/button";
import { PricingCards } from "@/components/sections/shared/pricing-cards";

/* 01.5 / 02.5 — plan cards for one file + link to the full pricing page. */
export function FilePricing({ file, label, title, theme }: { file: FileId; label: string; title: string; theme?: Theme }) {
  const items = plans.filter((p) => p.file === file);
  return (
    <Section theme={theme} aria-labelledby={`pricing-${file}`}>
      <SectionHeader id={`pricing-${file}`} label={label} meta={`${items.length} ${items.length === 1 ? "plan" : "plans"}`} title={title} />
      <PricingCards plans={items} />
      <ArrowLink href={`/pricing?file=${file}`} className="mt-8">{cardLabels.more}</ArrowLink>
    </Section>
  );
}
