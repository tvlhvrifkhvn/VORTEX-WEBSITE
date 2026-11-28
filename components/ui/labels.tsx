import { cn } from "@/lib/utils";

/** Vertical mono label on a right edge; hidden below 1024px (§5.7). Decorative. */
export function RotatedLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span aria-hidden="true" className={cn("label-mono hidden rotate-180 [writing-mode:vertical-rl] lg:block", className)}>
      {children}
    </span>
  );
}

/** Two-line metadata block: 500 uppercase line + 400 line (§5.8). */
export function MetaBlock({ title, line, className }: { title: string; line: string; className?: string }) {
  return (
    <p className={cn("font-mono text-label uppercase", className)}>
      <span className="block font-medium">{title}</span>
      <span className="block text-muted-foreground">{line}</span>
    </p>
  );
}

/** FILE 01 / FILE 02 chip (§5.10). */
export function FileTag({ file, className }: { file: "01" | "02"; className?: string }) {
  return <span className={cn("label-mono inline-flex items-center border border-current px-2 py-1", className)}>FILE {file}</span>;
}

/** Small mono tag. `signal` for SAMPLE/DRAFT honesty labels, `solid` for emphasis. */
export function Tag({ tone = "outline", className, children }: { tone?: "outline" | "solid" | "signal"; className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "font-mono text-micro inline-flex items-center px-1.5 py-0.5 font-medium uppercase",
        tone === "outline" && "border border-current",
        tone === "solid" && "bg-foreground text-background",
        tone === "signal" && "bg-signal text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
