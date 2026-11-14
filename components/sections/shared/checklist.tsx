import { Section, type Theme } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

/* One-column checklist section (e.g. "What we need from you"). */
export function Checklist({ label, title, items, theme, id }: { label: string; title: string; items: string[]; theme?: Theme; id: string }) {
  return (
    <Section theme={theme} aria-labelledby={id}>
      <SectionHeader id={id} label={label} meta={`${items.length} items`} title={title} />
      <ol className="border-t border-border lg:w-2/3">
        {items.map((it, i) => (
          <li key={it} className="flex items-baseline gap-6 border-b border-border py-4">
            <span className="label-mono tabular text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-lead">{it}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
