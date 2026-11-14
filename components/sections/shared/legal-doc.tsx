import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/labels";
import { Text } from "@/components/ui/text";
import { Breadcrumb } from "@/components/layout/breadcrumb";

interface LegalDocProps {
  crumb: string;
  doc: { label: string; title: string; draft: string; updated: string; sections: { title: string; body: string[] }[] };
}

/* Long-form legal layout (§11.12): max 68ch, mono section numbers, DRAFT flag (claim in review mode). */
export function LegalDoc({ crumb, doc }: LegalDocProps) {
  return (
    <Section aria-labelledby="legal-title" className="pt-6 lg:pt-8">
      <Breadcrumb items={[{ label: crumb }]} />
      <article data-claim="" className="mt-10 max-w-[68ch]">
        <p className="label-mono">{doc.label}</p>
        <h1 id="legal-title" className="mt-6 text-h2 font-semibold">{doc.title}</h1>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Tag tone="signal">{doc.draft}</Tag>
          <Text as="p" className="label-mono text-muted-foreground">{doc.updated}</Text>
        </div>
        <ol className="mt-12 border-t border-border">
          {doc.sections.map((s, i) => (
            <li key={s.title} className="border-b border-border py-8">
              <h2 className="flex items-baseline gap-4 text-h3 font-semibold">
                <span className="label-mono tabular text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              {s.body.map((b) => (
                <Text key={b} as="p" className="mt-4">{b}</Text>
              ))}
            </li>
          ))}
        </ol>
      </article>
    </Section>
  );
}
