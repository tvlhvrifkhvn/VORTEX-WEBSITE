import { cn } from "@/lib/utils";
import { Container } from "./container";

export type Theme = "paper" | "paper-2" | "white" | "ink" | "signal";

interface SectionProps extends React.ComponentProps<"section"> {
  theme?: Theme;
  /** Skip the inner container for full-bleed content. */
  bleed?: boolean;
  /** Remove the default section padding. */
  flush?: boolean;
}

/** Full-bleed themed band; everything inside (incl. pasted shadcn components) adapts via data-theme (§4.2). */
export function Section({ theme = "paper", bleed, flush, className, children, ...props }: SectionProps) {
  return (
    <section data-theme={theme} className={cn(!flush && "py-(--spacing-section)", className)} {...props}>
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
