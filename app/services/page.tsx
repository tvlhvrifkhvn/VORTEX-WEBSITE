import { servicesPage as p } from "@/content/services";
import { ctaBand } from "@/content/nav";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/sections/shared/page-header";
import { ServicesBento } from "@/components/sections/home/services-bento";
import { CtaBand } from "@/components/layout/cta-band";

export const metadata = pageMetadata(p.meta);

/* /services — the "Everything on the desk" bento (core + add-ons), moved from home. Anchors: #file-01, #file-02, #<service id>. */
export default function ServicesPage() {
  return (
    <>
      <PageHeader crumb={p.crumb} label={p.label} lines={p.lines} lead={p.lead} />
      <ServicesBento />
      <CtaBand {...ctaBand} />
    </>
  );
}
