import { meta, page as p, faq } from "@/content/faq";
import { ctaBand } from "@/content/nav";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/sections/shared/page-header";
import { FaqBrowser } from "@/components/sections/shared/faq-browser";
import { CtaBand } from "@/components/layout/cta-band";

export const metadata = pageMetadata(meta);

/* FAQPage JSON-LD: only answers without placeholders. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq
    .filter((f) => !f.a.includes("[[PLACEHOLDER"))
    .map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

/* /faq (§11.11). */
export default function FaqPage() {
  return (
    <>
      <PageHeader crumb={meta.title} label={p.label} lines={p.lines} lead={p.lead} />
      <Section theme="paper-2" aria-label={p.filterLabel}>
        <FaqBrowser />
      </Section>
      <CtaBand {...ctaBand} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
