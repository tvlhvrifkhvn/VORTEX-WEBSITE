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
        <LineDraw viewBox="0 0 1000 2" d="M0 1 H1000" className={cn("absolute right-0 left-0 hidden h-px lg:block", steps.length === 4 ? "top-[calc(var(--text-display)*0.45)]" : "top-[calc(var(--text-giant)*0.45)]")} />
        <LineDraw viewBox="0 0 2 1000" d="M1 0 V1000" className="absolute top-0 bottom-0 left-4 w-px lg:hidden" />
        <ol className={cn("relative grid gap-12 pl-12 lg:gap-(--spacing-gutter) lg:pl-0", steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
          {steps.map((s) => (
            <li key={s.n}>
              <span aria-hidden="true" className={cn("block bg-background pr-4 text-giant font-semibold tabular lg:w-fit", steps.length === 4 && "lg:text-display")}>{s.n}</span>
              <h3 className="mt-6 text-h3 font-semibold">
                <span className="sr-only">{s.n}. </span>
                {s.title}
              </h3>
              <p className="mt-3 max-w-[36ch] text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <Button href={cta.href} size="lg" className="mt-16">{cta.label}</Button>
    </Section>
  );
}
