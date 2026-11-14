import type { FileId } from "@/content/types";
import { includesLabel, servicesFor } from "@/content/services";
import { Section, type Theme } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/labels";
import { HoverRevealList } from "@/components/motion/hover-reveal-list";

interface ServiceListProps { file: FileId; label: string; title: string; onRequest?: string; theme?: Theme }

/* 01.1 / 02.1 — the file's services as hover-reveal rows. Row ids = service ids (anchors from home 05). */
export function ServiceList({ file, label, title, onRequest, theme }: ServiceListProps) {
  const items = servicesFor(file);
  const rows = items.map((s) => ({
    id: s.id,
    index: s.index,
    title: s.title,
    summary: s.summary,
    includesLabel: includesLabel.toUpperCase(),
    includes: s.includes,
    claim: s.claim,
    extra: s.onRequest && onRequest ? <Tag>{onRequest}</Tag> : undefined,
  }));
  return (
    <Section theme={theme} aria-labelledby={`services-${file}`}>
      <SectionHeader id={`services-${file}`} label={label} meta={`${items.length} items`} title={title} />
      <HoverRevealList rows={rows} />
    </Section>
  );
}
