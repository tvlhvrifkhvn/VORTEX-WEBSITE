import type { FaqItem } from "@/content/types";
import { faqBlock } from "@/content/faq";
import { Section, type Theme } from "@/components/ui/section";
import { SectionRule } from "@/components/ui/section-header";
import { ActionGroup } from "@/components/ui/action-group";
import { ArrowLink, Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { SearchLink } from "@/components/layout/search-link";
import { FaqList } from "./faq-list";

interface FaqSectionProps {
  label: string;
  title: string;
  items: FaqItem[];
  cta?: { label: string; href: string };
  theme?: Theme;
  lead?: string;
}

/* FAQ block (home, file pages, pricing). Desktop: left cols 1–5 sticky (H2, lead, Book a call + Search the desk),
   right cols 7–12 accordion + link to /faq. Phone: stacked, nothing sticky. */
export function FaqSection({ label, title, items, cta, theme, lead = faqBlock.lead }: FaqSectionProps) {
  return (
    <Section theme={theme} aria-labelledby="faq-title">
      <SectionRule label={label} meta={`${items.length} items`} />
      <div className="grid-vx mt-(--space-header) gap-y-(--space-header)">
        <div className="col-span-4 md:col-span-8 lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--spacing-header)+var(--space-block))]">
            <Text as="h2" id="faq-title" className="text-h2 font-semibold">{title}</Text>
            <Text as="p" className="mt-(--space-block) max-w-[44ch] text-muted-foreground">{lead}</Text>
            <ActionGroup className="mt-(--space-block)">
              <Button href={faqBlock.book.href} size="lg">{faqBlock.book.label}</Button>
              <SearchLink label={faqBlock.search} />
            </ActionGroup>
          </div>
        </div>
        <div className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-7">
          <FaqList items={items} />
          {cta && <ArrowLink href={cta.href} className="mt-(--space-block) flex w-fit">{cta.label}</ArrowLink>}
        </div>
      </div>
    </Section>
  );
}
