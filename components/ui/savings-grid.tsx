import { cn } from "@/lib/utils";

/** Tile C graphic: 10×10 squares, 1 square = 1% of the in-house cost. Filled squares = saved, filling
    row by row from the bottom like a gauge; outlined squares = what VortexOne costs. Decorative (the % is the text). */
export function SavingsGrid({ pct, caption }: { pct: number; caption: string }) {
  return (
    <div aria-hidden="true" className="flex flex-col gap-(--space-tight)">
      <span className="font-mono text-micro uppercase">{caption}</span>
      <div className="grid grid-cols-10 gap-1">
        {Array.from({ length: 100 }, (_, i) => {
          const filled = (9 - Math.floor(i / 10)) * 10 + (i % 10) < pct;
          return <span key={i} className={cn("block aspect-square", filled ? "bg-foreground" : "border border-foreground/40")} />;
        })}
      </div>
    </div>
  );
}
