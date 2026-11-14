import { meta } from "@/content/home";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/home/hero";
import { ToolsMarquee } from "@/components/sections/home/tools-marquee";
import { StatsBento } from "@/components/sections/home/stats-bento";
import { FilePanels } from "@/components/sections/home/file-panels";
import { ServicesBento } from "@/components/sections/home/services-bento";
import { NightShift } from "@/components/sections/home/night-shift";
import { DeskLogSection } from "@/components/sections/home/desk-log-section";

export const metadata = pageMetadata(meta);

/* Home (§11.1). Sections 08–15 arrive in S3. */
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
    </>
  );
}
