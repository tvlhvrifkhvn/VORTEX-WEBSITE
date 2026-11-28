import { meta, page as p, onboarding, security, needs, deskLogLabel } from "@/content/how-we-work";
import { ctaBand } from "@/content/nav";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/sections/shared/page-header";
import { StepsList } from "@/components/sections/shared/steps-list";
import { Checklist } from "@/components/sections/shared/checklist";
import { ReportSection, Communication, ToolsGrid } from "@/components/sections/how/desk-sections";
import { Security } from "@/components/sections/home/security";
import { DeskLogSection } from "@/components/sections/home/desk-log-section";
import { CtaBand } from "@/components/layout/cta-band";

export const metadata = pageMetadata(meta);

/* /how-we-work (§11.7). Desk log (from home) follows the daily report; security is the full 6-rule bento
   (a superset of the 4 tiles that used to sit on home, so nothing is lost or duplicated). */
export default function HowWeWorkPage() {
  return (
    <>
      <PageHeader crumb={meta.title} label={p.label} lines={p.lines} lead={p.lead} image="process-object" />
      <StepsList id="onboarding-title" {...onboarding} />
      <ReportSection />
      <DeskLogSection label={deskLogLabel} theme="paper" />
      <Communication />
      <Security {...security} theme="paper" />
      <ToolsGrid />
      <Checklist id="needs-title" {...needs} />
      <CtaBand {...ctaBand} />
    </>
  );
}
