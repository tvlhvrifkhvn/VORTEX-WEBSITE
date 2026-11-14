import type { FileId } from "@/content/types";
import { addonsFor, coreFor, includesLabel } from "@/content/services";
import { Text } from "@/components/ui/text";
import { Section, type Theme } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FileTag, Tag } from "@/components/ui/labels";
import { HoverRevealList } from "@/components/motion/hover-reveal-list";

interface ServiceListProps { file: FileId; label: string; title: string; onRequest?: string; theme?: Theme }

/* 01.1 / 02.1 — the file's CORE services as hover-reveal rows. Row ids = service ids (anchors from home 05). */
export function ServiceList({ file, label, title, onRequest, theme }: ServiceListProps) {
  const items = coreFor(file);
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

/* 01.1b — add-ons (on request, File 01 clients only): a small 4-up block. Item ids = service ids (anchors). */
export function AddonList({ file, label, title, lead, tag, theme }: { file: FileId; label: string; title: string; lead: string; tag: string; theme?: Theme }) {
  const items = addonsFor(file);
  if (!items.length) return null;
  return (
    <Section theme={theme} aria-labelledby={`addons-${file}`} className="pt-0">
      <SectionHeader id={`addons-${file}`} label={label} meta={`${items.length} items`} title={title} lead={lead} layout="split" />
      <ul className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {items.map((s) => (
          <li key={s.id} id={s.id} data-claim={s.claim ? "" : undefined} className="flex flex-col gap-4 bg-background p-5">
            <span className="flex items-center justify-between gap-2">
              <span className="label-mono tabular text-muted-foreground">{s.index}</span>
              <span className="flex gap-2">
                <Tag>{tag}</Tag>
                <FileTag file={s.file} />
              </span>
            </span>
            <h3 className="mt-auto text-h3 font-semibold">{s.title}</h3>
            <Text as="p" className="text-small text-muted-foreground">{s.summary}</Text>
          </li>
        ))}
      </ul>
    </Section>
  );
}
