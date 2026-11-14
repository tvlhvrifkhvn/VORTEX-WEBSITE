import { Section, type Theme } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

interface StepsListProps {
  label: string;
  title: string;
  steps: { time: string; title: string; text: string }[];
  claim?: boolean;
  theme?: Theme;
  id: string;
}

/* Static timeline: time | title | text rows on hairlines (same pattern as the PinnedStory fallback). */
export function StepsList({ label, title, steps, claim, theme, id }: StepsListProps) {
  return (
    <Section theme={theme} aria-labelledby={id}>
      <SectionHeader id={id} label={label} meta={`${steps.length} steps`} title={title} />
      <ol data-claim={claim ? "" : undefined} className="border-t border-border">
        {steps.map((s, i) => (
          <li key={s.title} className="grid-vx gap-y-2 border-b border-border py-6">
            <p className="label-mono tabular col-span-4 flex gap-4 md:col-span-2">
              <span className="text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              {s.time}
            </p>
            <h3 className="col-span-4 text-h3 font-semibold md:col-span-3 lg:col-span-4">{s.title}</h3>
            <p className="col-span-4 max-w-[60ch] text-muted-foreground md:col-span-3 lg:col-span-6">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
