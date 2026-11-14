import { meta, header, sections as s, cta, scopeNote } from "@/content/supplementing";
import { faqFor } from "@/content/faq";
import { pageMetadata } from "@/lib/seo";
import { FileHeader } from "@/components/sections/file/file-header";
import { ServiceList } from "@/components/sections/file/service-list";
import { Scope } from "@/components/sections/file/scope";
import { Audience } from "@/components/sections/file/audience";
import { FilePricing } from "@/components/sections/file/file-pricing";
import { HowItStarts } from "@/components/sections/shared/how-it-starts";
import { FaqSection } from "@/components/sections/shared/faq-section";
import { CtaBand } from "@/components/layout/cta-band";

export const metadata = pageMetadata(meta);

/* FILE 02 — Insurance Supplementing (§11.3). Never implies carrier negotiation or homeowner representation. */
export default function SupplementingPage() {
  return (
    <>
      <FileHeader {...header} image="file02-object" note={scopeNote} />
      <ServiceList file="02" {...s.services} theme="paper-2" />
      <Scope {...s.scope} />
      <HowItStarts {...s.flow} theme="ink" />
      <Audience {...s.audience} />
      <FilePricing file="02" {...s.pricing} theme="paper-2" />
      <FaqSection {...s.faq} items={faqFor("file02")} />
      <CtaBand {...cta} />
    </>
  );
}
