import { meta, page as p } from "@/content/work";
import { ctaBand } from "@/content/nav";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/sections/shared/page-header";
import { WorkGrid } from "@/components/sections/shared/work-grid";
import { CtaBand } from "@/components/layout/cta-band";

export const metadata = pageMetadata(meta);

/* /work (§11.6): filterable, asymmetric grid of SAMPLE deliverables with a lightbox. */
export default function WorkPage() {
  return (
    <>
      <PageHeader crumb={meta.title} label={p.label} lines={p.lines} lead={p.lead} />
      <Section theme="paper-2" aria-label={p.label}>
        <WorkGrid />
      </Section>
      <CtaBand {...ctaBand} />
    </>
  );
}
