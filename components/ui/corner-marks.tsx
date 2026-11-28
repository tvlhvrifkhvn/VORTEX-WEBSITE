import { cn } from "@/lib/utils";

const POS = ["-top-3.5 -left-3.5", "-top-3.5 -right-3.5", "-bottom-3.5 -left-3.5", "-bottom-3.5 -right-3.5"];

/** Four 12px "+" marks, offset 8px outside the parent's corners (§5.6). Parent must be `relative`. */
export function CornerMarks({ className }: { className?: string }) {
  return (
    <>
      {POS.map((p) => (
        <svg key={p} aria-hidden="true" viewBox="0 0 12 12" className={cn("pointer-events-none absolute size-3 text-foreground", p, className)}>
          <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth={1} />
        </svg>
      ))}
    </>
  );
}
