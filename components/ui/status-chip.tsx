import { cn } from "@/lib/utils";

/** "● ACTIVE" — 6px round dot in the theme accent (signal on ink/paper, ink on signal) + mono label. */
export function StatusChip({ label, className }: { label: string; className?: string }) {
  return (
    <span className={cn("label-mono inline-flex items-center gap-2", className)}>
      <span aria-hidden="true" className="size-1.5 shrink-0 animate-blink rounded-full bg-primary" />
      {label}
    </span>
  );
}
