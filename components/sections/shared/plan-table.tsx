import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/content/types";
import { Text } from "@/components/ui/text";

interface PlanTableProps {
  plans: PricingPlan[];
  caption: string;
  rowHeader: string;
  rows: { label: string; cells: string[]; claim?: true }[];
}

/* Plan comparison (per file). Recommended column on bg-card with an 8px signal bar. Scrolls sideways on mobile. */
export function PlanTable({ plans, caption, rowHeader, rows }: PlanTableProps) {
  const rec = plans.findIndex((p) => p.recommended);
  return (
    <div role="region" tabIndex={0} aria-label={caption} className="relative -mx-(--spacing-margin) overflow-x-auto px-(--spacing-margin)">
      <table className="w-full min-w-[40rem] border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="align-bottom">
            <th scope="col" className="label-mono sticky left-0 z-10 w-1/4 bg-background py-3 pr-4 text-muted-foreground">{rowHeader}</th>
            {plans.map((p, i) => (
              <th key={p.id} scope="col" className={cn("label-mono px-4 py-3", i === rec && "bg-card")}>
                {i === rec && <span aria-hidden="true" className="-mx-4 -mt-3 mb-3 block h-2 bg-signal" />}
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} data-claim={r.claim ? "" : undefined} className="border-t border-border align-baseline">
              <th scope="row" className="sticky left-0 z-10 bg-background py-4 pr-4 font-medium">{r.label}</th>
              {r.cells.map((c, i) => (
                <td key={i} className={cn("px-4 py-4", i === rec && "bg-card font-medium")}>
                  <Text>{c}</Text>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
