import { meta, header, sections as s, cta } from "@/content/real-estate";
import { faqFor } from "@/content/faq";
import { pageMetadata } from "@/lib/seo";
import { FileHeader } from "@/components/sections/file/file-header";
import { ServiceList } from "@/components/sections/file/service-list";
import { Audience } from "@/components/sections/file/audience";
import { SampleWeek } from "@/components/sections/file/sample-week";
import { FilePricing } from "@/components/sections/file/file-pricing";
import { HowItStarts } from "@/components/sections/shared/how-it-starts";
import { Comparison } from "@/components/sections/shared/comparison";
import { FaqSection } from "@/components/sections/shared/faq-section";
import { CtaBand } from "@/components/layout/cta-band";
import { servicesSection } from "@/content/home";

export const metadata = pageMetadata(meta);

/* FILE 01 — Real Estate VA (§11.2). */
export default function RealEstatePage() {
  return (
    <>
      <FileHeader {...header} image="file01-object" />
      <ServiceList file="01" {...s.services} onRequest={servicesSection.onRequest} theme="paper-2" />
      <Audience {...s.audience} />
      <HowItStarts {...s.timeline} theme="paper-2" />
      <SampleWeek {...s.week} />
      <FilePricing file="01" {...s.pricing} />
      <Comparison {...s.comps} theme="paper-2" />
      <FaqSection {...s.faq} items={faqFor("file01")} />
      <CtaBand {...cta} />
    </>
  );
}
