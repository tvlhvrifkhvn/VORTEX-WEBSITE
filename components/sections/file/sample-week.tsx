import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/labels";

interface SampleWeekProps {
  label: string;
  title: string;
  sample: string;
  days: { day: string; tasks: string[] }[];
}

/* 01.4 — Swiss timetable (ink, SAMPLE): Mon–Fri columns with hairlines; stacked days on mobile. */
export function SampleWeek({ label, title, sample, days }: SampleWeekProps) {
  return (
    <Section theme="ink" aria-labelledby="week-title">
      <SectionHeader id="week-title" label={label} meta={`${days.length} days`} title={title} />
      <Tag tone="signal" className="mb-6">{sample}</Tag>
      <ol className="grid border-t border-border md:grid-cols-5">
        {days.map((d, i) => (
          <li key={d.day} className="border-b border-border py-6 md:border-b-0 md:border-l md:px-4 md:first:border-l-0 md:first:pl-0">
            <p className="flex items-baseline justify-between">
              <span className="text-h3 font-semibold">{d.day}</span>
              <span className="label-mono tabular text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {d.tasks.map((t) => (
                <li key={t} className="border-t border-border pt-3 text-small">{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
