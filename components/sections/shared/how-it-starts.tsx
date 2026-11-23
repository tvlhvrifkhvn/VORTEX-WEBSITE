import { cn } from "@/lib/utils";
import { Section, type Theme } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { LineDraw } from "@/components/motion/line-draw";

interface HowItStartsProps {
  label: string;
  meta?: string;
  title: string;
  titleClaim?: boolean;
  steps: { n: string; title: string; text: string }[];
  cta: { label: string; href: string };
  theme?: Theme;
  id?: string;
}

/* Three or four steps with giant numerals, connected by a LineDraw (horizontal ≥1024px, vertical below). */
export function HowItStarts({ label, meta, title, titleClaim, steps, cta, theme, id = "start-title" }: HowItStartsProps) {
  return (
    <Section theme={theme} aria-labelledby={id} className="overflow-hidden">
      <div data-claim={titleClaim ? "" : undefined}>
        <SectionHeader id={id} label={label} meta={meta} title={title} />
      </div>
      <div className="relative">
        <LineDraw viewBox="0 0 2 1000" d="M1 0 V1000" className="absolute top-0 bottom-0 left-4 w-px lg:hidden" />
        {/* Desktop: one equal 12-col span per step (4/4/4 or 3/3/3/3); subgrid rows keep numerals, titles and text on shared lines.
            The connector runs from each numeral to the next column, centred on the numerals. */}
        <ol className="relative grid gap-y-(--space-header) pl-12 lg:grid-cols-12 lg:gap-y-0 lg:grid-rows-[auto_auto_auto] lg:gap-x-(--spacing-gutter) lg:pl-0">
          {steps.map((s, i) => (
            <li key={s.n} className={cn("lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:gap-y-0", steps.length === 4 ? "lg:col-span-3" : "lg:col-span-4")}>
              <div className="flex items-center gap-(--space-block)">
                <span aria-hidden="true" className={cn("text-giant font-semibold tabular", steps.length === 4 ? "lg:text-display" : "lg:text-hero")}>{s.n}</span>
                {i < steps.length - 1 && (
                  <LineDraw viewBox="0 0 1000 2" d="M0 1 H1000" className="hidden h-px flex-1 lg:-mr-(--spacing-gutter) lg:block" />
                )}
              </div>
              <h3 className="mt-(--space-block) text-h3 font-semibold">
                <span className="sr-only">{s.n}. </span>
                {s.title}
              </h3>
              <p className="mt-(--space-tight) max-w-[36ch] text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <Button href={cta.href} size="lg" className="mt-(--space-header)">{cta.label}</Button>
    </Section>
  );
}
