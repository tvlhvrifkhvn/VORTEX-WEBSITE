import type { WorkSample } from "@/content/work";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ImageFrame } from "@/components/ui/image-frame";
import { FileTag, Tag } from "@/components/ui/labels";
import { Button } from "@/components/ui/button";

interface WorkStripProps {
  label: string;
  title: string;
  lead?: string;
  samples: WorkSample[];
  sampleLabel: string;
  cta: { label: string; href: string };
}

/* Horizontal scroll-snap strip (native CSS, no carousel lib). Keyboard: the strip is a focusable region. */
export function WorkStrip({ label, title, lead, samples, sampleLabel, cta }: WorkStripProps) {
  return (
    <Section theme="ink" aria-labelledby="work-title" className="overflow-hidden">
      <SectionHeader id="work-title" label={label} meta={`${samples.length} items`} title={title} lead={lead} layout="split" />
      <div role="region" tabIndex={0} aria-label={label} className="-mx-(--spacing-margin) snap-x snap-mandatory scroll-px-(--spacing-margin) overflow-x-auto px-(--spacing-margin) pt-4 pb-6">
      <ul className="flex gap-(--spacing-gutter)">
        {samples.map((s) => (
          <li key={s.id} className="w-[80vw] max-w-[28rem] shrink-0 snap-start">
            <ImageFrame slot={s.image} screenshot marks={false} />
            <div className="mt-4 flex items-center gap-2">
              <FileTag file={s.file} />
              <Tag tone="signal">{sampleLabel}</Tag>
            </div>
            <h3 className="mt-3 text-h3 font-semibold">{s.title}</h3>
          </li>
        ))}
      </ul>
      </div>
      <Button href={cta.href} variant="ghost" size="lg" className="mt-10">{cta.label}</Button>
    </Section>
  );
}
