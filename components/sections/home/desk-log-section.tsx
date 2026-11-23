import { deskLogSection as s } from "@/content/home";
import { Section, type Theme } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { SectionRule } from "@/components/ui/section-header";
import dynamic from "next/dynamic";

const DeskLog = dynamic(() => import("@/components/motion/desk-log").then((m) => m.DeskLog));

/* 07 — DESK LOG (ink, compact): headline left, live sample feed right. */
export function DeskLogSection({ label = s.label, theme = "ink" }: { label?: string; theme?: Theme } = {}) {
  return (
    <Section theme={theme} aria-labelledby="desklog-title">
      <div className="grid-vx gap-y-(--space-header)">
        <div className="col-span-4 md:col-span-8 lg:col-span-4">
          <SectionRule label={label} />
          <h2 id="desklog-title" className="mt-(--space-header) text-h3 font-semibold">{s.title}</h2>
          <Text as="p" claim={s.textClaim} className="mt-(--space-block) max-w-[40ch] text-muted-foreground">{s.text}</Text>
        </div>
        <DeskLog title={s.logTitle.toUpperCase()} entries={s.entries} className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-6" />
      </div>
    </Section>
  );
}
