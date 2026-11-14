import type { Metadata } from "next";
import { sg } from "@/content/styleguide";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Tokens } from "./_parts/tokens";
import { Primitives } from "./_parts/primitives";
import { Interactive } from "./_parts/interactive";
import { MotionDemos } from "./_parts/motion-demos";

export const metadata: Metadata = { title: sg.title, robots: { index: false, follow: false } };

/* Internal audit surface (§9.9): not in nav or sitemap. */
export default function StyleguidePage() {
  return (
    <div>
      <Section theme="ink">
        <p className="label-mono text-muted-foreground">INTERNAL · NOINDEX</p>
        <h1 className="mt-6 text-display font-semibold">{sg.title}</h1>
        <p className="mt-6 max-w-[60ch] text-lead text-muted-foreground">{sg.intro}</p>
      </Section>
      <Tokens />
      <Primitives />
      <Section aria-labelledby="sg-ui">
        <SectionHeader id="sg-ui" label="08 — INTERACTIVE" meta="ACCORDION · TABS · SLIDER · DIALOG · FORMS" title="Interactive components" />
        <Interactive />
      </Section>
      <MotionDemos />
    </div>
  );
}
