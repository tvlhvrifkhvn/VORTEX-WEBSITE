import { Tag } from "@/components/ui/labels";
import { CornerMarks } from "@/components/ui/corner-marks";

interface ReportDoc {
  sample: string;
  header: string;
  meta: { key: string; value: string }[];
  sections: { title: string; items: string[] }[];
}

/* Sample end-of-day report as a Swiss document card (mono, hairlines, SAMPLE label). */
export function ReportCard({ doc }: { doc: ReportDoc }) {
  return (
    <article className="relative border border-border bg-card font-mono text-small" aria-label={`${doc.header} (${doc.sample})`}>
      <CornerMarks />
      <header className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
        <p className="label-mono">{doc.header}</p>
        <Tag tone="signal">{doc.sample}</Tag>
      </header>
      <dl className="grid grid-cols-3 border-b border-border">
        {doc.meta.map((m) => (
          <div key={m.key} className="border-r border-border px-5 py-3 last:border-r-0">
            <dt className="label-mono text-muted-foreground">{m.key}</dt>
            <dd className="mt-1">{m.value}</dd>
          </div>
        ))}
      </dl>
      {doc.sections.map((s) => (
        <section key={s.title} className="border-b border-border px-5 py-4 last:border-b-0">
          <h3 className="label-mono">{s.title}</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {s.items.map((it) => (
              <li key={it} className="flex gap-3">
                <span aria-hidden="true" className="text-muted-foreground">—</span>
                {it}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
}
