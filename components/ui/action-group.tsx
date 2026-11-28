import { cn } from "@/lib/utils";

/** One action pattern site-wide: [buttons] --space-inline [text link →], baseline-aligned.
    Phone: stacked, full width, --space-tight apart. */
export function ActionGroup({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-(--space-tight) *:w-full sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-(--space-inline) sm:*:w-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
