import type { FaqItem } from "@/content/types";
import { faqBlock } from "@/content/faq";
import { Section, type Theme } from "@/components/ui/section";
import { SectionRule } from "@/components/ui/section-header";
import { ArrowLink } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { FaqList } from "./faq-list";

interface FaqSectionProps {
  label: string;
  title: string;
  items: FaqItem[];
  cta?: { label: string; href: string };
  theme?: Theme;
  lead?: string;
}

/* FAQ block (home, file pages, pricing): label row → one-line H2 (+ short lead) → accordion (cols 1–7) with "All questions",
   and a giant Anton "?" filling cols 8–12 beside it (decorative). No buttons here: "Book a call" and search live elsewhere. */
export function FaqSection({ label, title, items, cta, theme, lead = faqBlock.lead }: FaqSectionProps) {
  return (
    <Section theme={theme} aria-labelledby="faq-title">
      <SectionRule label={label} meta={`${items.length} items`} />
      <Text as="h2" id="faq-title" className="mt-(--space-header) text-h2 font-semibold lg:whitespace-nowrap">{title}</Text>
      <Text as="p" className="mt-(--space-tight) max-w-[60ch] text-muted-foreground">{lead}</Text>
      <div className="grid-vx mt-(--space-header) gap-y-(--space-header)">
        <div className="col-span-4 md:col-span-8 lg:col-span-7">
          <FaqList items={items} />
          {cta && <ArrowLink href={cta.href} className="mt-(--space-block) flex w-fit">{cta.label}</ArrowLink>}
        </div>
        <p aria-hidden="true" className="hidden select-none items-center justify-center font-num text-[clamp(12rem,30vw,26rem)] leading-[0.8] lg:col-span-5 lg:flex">?</p>
      </div>
    </Section>
  );
}
