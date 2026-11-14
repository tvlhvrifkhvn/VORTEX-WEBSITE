import { meta, page as p } from "@/content/resources";
import { ctaBand } from "@/content/nav";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/sections/shared/page-header";
import { ResourceCards } from "@/components/sections/shared/resource-cards";
import { CtaBand } from "@/components/layout/cta-band";

export const metadata = pageMetadata(meta);

/* /resources (§11.9): three gated checklists (PDFs are placeholders; delivery is Phase 2). */
export default function ResourcesPage() {
  return (
    <>
      <PageHeader crumb={meta.title} label={p.label} lines={p.lines} lead={p.lead} image="resources-object" />
      <Section theme="paper-2" aria-label={p.label}>
        <ResourceCards />
      </Section>
      <CtaBand {...ctaBand} theme="ink" />
    </>
  );
}
