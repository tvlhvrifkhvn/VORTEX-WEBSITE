import type { FaqItem } from "@/content/types";
import { Section, type Theme } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { FaqList } from "./faq-list";

interface FaqSectionProps {
  label: string;
  title: string;
  items: FaqItem[];
  cta?: { label: string; href: string };
  theme?: Theme;
}

/* FAQ block used on home and file pages: header + accordion + link to /faq. */
export function FaqSection({ label, title, items, cta, theme }: FaqSectionProps) {
  return (
    <Section theme={theme} aria-labelledby="faq-title">
      <SectionHeader id="faq-title" label={label} meta={`${items.length} items`} title={title} layout="split" />
      <div className="grid-vx">
        <div className="col-span-4 md:col-span-8 lg:col-span-9">
          <FaqList items={items} />
          {cta && <Button href={cta.href} variant="ghost" size="lg" className="mt-10">{cta.label}</Button>}
        </div>
      </div>
    </Section>
  );
}
