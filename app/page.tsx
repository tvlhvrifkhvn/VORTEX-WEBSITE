import { meta, startSection, workSection } from "@/content/home";
import { ctaBand } from "@/content/nav";
import { samples, sampleLabel } from "@/content/work";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/home/hero";
import { ToolsMarquee } from "@/components/sections/home/tools-marquee";
import { StatsBento } from "@/components/sections/home/stats-bento";
import { FilePanels } from "@/components/sections/home/file-panels";
import { ServicesBento } from "@/components/sections/home/services-bento";
import { NightShift } from "@/components/sections/home/night-shift";
import { DeskLogSection } from "@/components/sections/home/desk-log-section";
import { Savings } from "@/components/sections/home/savings";
import { Founder } from "@/components/sections/home/founder";
import { Security } from "@/components/sections/home/security";
import { Questions } from "@/components/sections/home/questions";
import { Comparison } from "@/components/sections/shared/comparison";
import { HowItStarts } from "@/components/sections/shared/how-it-starts";
import { WorkStrip } from "@/components/sections/shared/work-strip";
import { CtaBand } from "@/components/layout/cta-band";

export const metadata = pageMetadata(meta);

/* Home (§11.1): 15 sections. Themes alternate; signal is used twice and never in adjacent sections. */
export default function Home() {
  return (
    <>
      <Hero />
      <ToolsMarquee />
      <StatsBento />
      <FilePanels />
      <ServicesBento />
      <NightShift />
      <DeskLogSection />
      <Savings />
      <Comparison />
      <HowItStarts {...startSection} />
      <WorkStrip {...workSection} samples={samples.slice(0, workSection.count)} sampleLabel={sampleLabel} />
      <Founder />
      <Security />
      <Questions />
      <CtaBand {...ctaBand} label={`15 — ${ctaBand.label}`} />
    </>
  );
}
