import { cn } from "@/lib/utils";
import { Section, type Theme } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

interface Group { title: string; text: string; items: string[] }
interface AudienceProps {
  label: string;
  title: string;
  handoff: string;
  groups: Group[];
  notFor?: { title: string; text: string };
  theme?: Theme;
}

/* 01.2 / 02.4 — who it's for: columns with a "typical hand-off" mono list, plus an optional NOT FOR block. */
export function Audience({ label, title, handoff, groups, notFor, theme }: AudienceProps) {
  const cols = groups.length + (notFor ? 1 : 0);
  return (
    <Section theme={theme} aria-labelledby="audience-title">
      <SectionHeader id="audience-title" label={label} meta={`${groups.length} groups`} title={title} />
      <ul className={cn("grid gap-(--spacing-gutter) md:grid-cols-2", cols >= 3 && "lg:grid-cols-3")}>
        {groups.map((g, i) => (
          <li key={g.title} className="flex flex-col border-t-2 border-foreground pt-4">
            <span className="label-mono tabular text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-6 text-h3 font-semibold">{g.title}</h3>
            <p className="mt-3 max-w-[40ch] text-muted-foreground">{g.text}</p>
            <p className="label-mono mt-8">{handoff}</p>
            <ul className="mt-3 border-t border-border font-mono text-small">
              {g.items.map((it) => (
                <li key={it} className="border-b border-border py-2">{it}</li>
              ))}
            </ul>
          </li>
        ))}
        {notFor && (
          <li data-theme="ink" className="flex flex-col justify-between gap-8 p-6">
            <p className="label-mono text-signal">{notFor.title}</p>
            <p className="text-h3 font-semibold">{notFor.text}</p>
          </li>
        )}
      </ul>
    </Section>
  );
}
