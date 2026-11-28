import { meta, startSection, ctaLabel } from "@/content/home";
import { ctaBand } from "@/content/nav";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/home/hero";
import { ToolsMarquee } from "@/components/sections/home/tools-marquee";
import { StatsBento } from "@/components/sections/home/stats-bento";
import { FilePanels } from "@/components/sections/home/file-panels";
import { NightShift } from "@/components/sections/home/night-shift";
import { Savings } from "@/components/sections/home/savings";
import { Founder } from "@/components/sections/home/founder";
import { Questions } from "@/components/sections/home/questions";
import { HowItStarts } from "@/components/sections/shared/how-it-starts";
import { CtaBand } from "@/components/layout/cta-band";
import { SectionIndex } from "@/components/layout/section-index";

export const metadata = pageMetadata(meta);

/* Home (§11.1, revision 2026-11-18): 10 sections. Moved out (same components): services bento → /services,
   desk log + security → /how-we-work, comps → /pricing#comps, work strip → /work only. */
export default function Home() {
  return (
    <>
      <Hero />
      <ToolsMarquee />
      <StatsBento />
      <FilePanels />
      <NightShift />
      <Savings />
      <HowItStarts {...startSection} cta={undefined} hideTitle />
      <Founder />
      <Questions />
      <CtaBand {...ctaBand} label={ctaLabel} />
      <SectionIndex />
    </>
  );
}
