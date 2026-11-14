import { meta, page as p } from "@/content/about";
import { ctaBand } from "@/content/nav";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/sections/shared/page-header";
import { FounderStory, Manifesto } from "@/components/sections/about/about-sections";
import { Coordinates } from "@/components/sections/about/coordinates";
import { CtaBand } from "@/components/layout/cta-band";

export const metadata = pageMetadata(meta);

/* /about (§11.8). */
export default function AboutPage() {
  return (
    <>
      <PageHeader crumb={meta.title} label={p.label} lines={p.lines} lead={p.lead} />
      <FounderStory />
      <Manifesto />
      <Coordinates />
      <CtaBand {...ctaBand} />
    </>
  );
}
