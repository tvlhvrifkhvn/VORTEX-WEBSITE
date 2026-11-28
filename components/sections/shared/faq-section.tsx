import type { FaqItem } from "@/content/types";
import { faqBlock } from "@/content/faq";
import { Section, type Theme } from "@/components/ui/section";
import { SectionRule } from "@/components/ui/section-header";
import { ArrowLink } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { FaqList } from "./faq-list";
import { MeshGlyph } from "@/components/motion/mesh-glyph";

interface FaqSectionProps {
  label: string;
  title: string;
  items: FaqItem[];
  cta?: { label: string; href: string };
  theme?: Theme;
  lead?: string;
}

/* FAQ block (home, file pages, pricing): label row → [H2 + lead + accordion + "All questions" (cols 1–7) |
   moving wire-mesh "?" (MeshGlyph) filling cols 8–12 (decorative)]. No buttons here: "Book a call" and search live elsewhere. */
export function FaqSection({ label, title, items, cta, theme, lead = faqBlock.lead }: FaqSectionProps) {
  return (
    <Section theme={theme} aria-labelledby="faq-title">
      <SectionRule label={label} meta={`${items.length} items`} />
      <div className="grid-vx mt-(--space-header) gap-y-(--space-header)">
        <div className="col-span-4 md:col-span-8 lg:col-span-7">
          <Text as="h2" id="faq-title" className="text-h2 font-semibold">{title}</Text>
          <Text as="p" className="mt-(--space-tight) max-w-[60ch] text-muted-foreground">{lead}</Text>
          <div className="mt-(--space-header)">
            <FaqList items={items} />
            {cta && <ArrowLink href={cta.href} className="mt-(--space-block) flex w-fit">{cta.label}</ArrowLink>}
          </div>
        </div>
        {/* Moving wire-mesh "?" filling the right column from the H2 top to the list bottom, equal space all round. */}
        <MeshGlyph className="hidden size-full min-h-80 text-foreground lg:col-span-5 lg:block" />
      </div>
    </Section>
  );
}
