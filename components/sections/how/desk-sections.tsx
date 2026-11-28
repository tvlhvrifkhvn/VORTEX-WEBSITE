import { report, communication, toolsSection } from "@/content/how-we-work";
import { site } from "@/content/site";
import { tools } from "@/content/tools";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Text } from "@/components/ui/text";
import { LiveClock } from "@/components/motion/live-clock";
import { DeskStatus } from "@/components/motion/desk-status";
import { ReportCard } from "@/components/sections/shared/report-card";

/* 02 — DAILY RHYTHM: sample end-of-day report as a document card. */
export function ReportSection() {
  return (
    <Section theme="paper-2" aria-labelledby="report-title">
      <SectionHeader id="report-title" label={report.label} meta={report.doc.sample} title={report.title} lead={report.lead} layout="split" />
      <div className="grid-vx">
        <div className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-3">
          <ReportCard doc={report.doc} />
        </div>
      </div>
    </Section>
  );
}

/* 03 — COMMUNICATION (ink): channels, reply rule, large clocks + desk status. */
export function Communication() {
  return (
    <Section theme="ink" aria-labelledby="comm-title">
      <SectionHeader id="comm-title" label={communication.label} meta={`${communication.channels.length} channels`} title={communication.title} />
      <div className="grid-vx gap-y-12">
        <ul className="col-span-4 border-t border-border md:col-span-8 lg:col-span-5">
          {communication.channels.map((c) => (
            <li key={c.name} data-claim={"claim" in c ? "" : undefined} className="flex flex-col gap-1 border-b border-border py-4">
              <span className="text-h3 font-semibold">{c.name}</span>
              <span className="text-muted-foreground">{c.detail}</span>
            </li>
          ))}
          <li className="flex flex-col gap-1 py-4">
            <span className="label-mono text-muted-foreground">{communication.responseLabel}</span>
            <Text claim={site.responseTime.claim}>{site.responseTime.text}</Text>
          </li>
        </ul>
        <div className="col-span-4 flex flex-col gap-8 md:col-span-8 lg:col-span-6 lg:col-start-7">
          <LiveClock variant="large" className="flex-col gap-6" />
          <DeskStatus />
        </div>
      </div>
    </Section>
  );
}

/* 05 — TOOLS: grouped by file (text only, no logos). */
export function ToolsGrid() {
  const groups = (["01", "02", "both"] as const).map((g) => ({ key: g, label: toolsSection.groups[g], items: tools.filter((t) => t.file === g) }));
  return (
    <Section theme="paper-2" aria-labelledby="tools-grid-title">
      <SectionHeader id="tools-grid-title" label={toolsSection.label} meta={`${tools.length} tools`} title={toolsSection.title} />
      <div className="grid gap-(--spacing-gutter) md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.key}>
            <p className="label-mono border-b border-foreground pb-3">{g.label}</p>
            <ul>
              {g.items.map((t) => (
                <li key={t.name} className="border-b border-border py-3 text-lead font-medium">{t.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
