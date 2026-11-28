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
            Numerals (Anton, slightly tracked) and text are centred in their column. One hairline runs from the first numeral's
            centre to the last one's, hidden behind each numeral's padded background, so every gap is equal and nothing trails after the last. */}
        <ol className="relative grid gap-y-(--space-header) pl-12 lg:grid-cols-12 lg:gap-y-0 lg:grid-rows-[auto_auto_auto] lg:gap-x-(--spacing-gutter) lg:pl-0 lg:text-center">
          {steps.map((s, i) => (
            <li key={s.n} className={cn("lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:gap-y-0", steps.length === 4 ? "lg:col-span-3" : "lg:col-span-4")}>
              <div className="relative flex lg:justify-center">
                {i > 0 && <span aria-hidden="true" className="absolute top-1/2 right-1/2 -left-(--spacing-gutter) hidden h-px bg-foreground lg:block" />}
                {i < steps.length - 1 && <span aria-hidden="true" className="absolute top-1/2 left-1/2 right-0 hidden h-px bg-foreground lg:block" />}
                <span aria-hidden="true" className={cn("relative bg-background font-num text-giant font-normal leading-[0.85] tracking-[0.04em] lg:px-(--space-block)", steps.length === 4 ? "lg:text-display" : "lg:text-hero")}>{s.n}</span>
              </div>
              <h3 className="mt-(--space-block) text-h3 font-semibold">
                <span className="sr-only">{s.n}. </span>
                {s.title}
              </h3>
              <p className="mt-(--space-tight) max-w-[36ch] text-muted-foreground lg:mx-auto lg:max-w-[28ch]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <Button href={cta.href} size="lg" className="mt-(--space-header)">{cta.label}</Button>
    </Section>
  );
}
