import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/content/types";
import { cardLabels, priceLabel } from "@/content/pricing";
import { Tag } from "@/components/ui/labels";
import { Button } from "@/components/ui/button";

/* Plan cards. No public prices: every card shows priceLabel. Recommended plan gets an 8px signal bar. */
export function PricingCards({ plans, className }: { plans: PricingPlan[]; className?: string }) {
  const cols = plans.length >= 3 ? "lg:grid-cols-3" : plans.length === 2 ? "md:grid-cols-2" : "max-w-xl";
  return (
    <ul className={cn("grid gap-(--spacing-gutter)", cols, className)}>
      {plans.map((plan, i) => (
        <li
          key={plan.id}
          data-claim={plan.claim ? "" : undefined}
          className={cn("relative flex flex-col border border-border bg-card", plan.recommended && "border-foreground")}
        >
          {plan.recommended && <span aria-hidden="true" className="h-2 bg-signal" />}
          <div className="flex flex-1 flex-col gap-6 p-6">
            <div className="flex items-center justify-between gap-4">
              <span className="label-mono tabular text-muted-foreground">
                File {plan.file} · {cardLabels.plan} {String(i + 1).padStart(2, "0")}
              </span>
              {plan.recommended && <Tag tone="solid">{cardLabels.recommended}</Tag>}
            </div>
            <div>
              <h3 className="text-h3 font-semibold">{plan.name}</h3>
              {plan.tagline && <p className="mt-2 text-small text-muted-foreground">{plan.tagline}</p>}
            </div>
            <div className="border-y border-border py-4">
              {plan.hours && <p className={cn("font-semibold tabular", /^\d/.test(plan.hours) ? "text-h2" : "text-h3")}>{plan.hours}</p>}
              <p className="label-mono mt-2">{plan.price === null ? priceLabel : plan.price}</p>
            </div>
            <ul className="flex flex-col gap-2">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span aria-hidden="true" className="font-mono">✓</span>
                  <span className="sr-only">{cardLabels.check}: </span>
                  {f}
                </li>
              ))}
            </ul>
            <Button
              href={`/book-a-call?file=${plan.file}&plan=${plan.id}`}
              variant={plan.recommended ? "primary" : "ghost"}
              className="mt-auto w-full"
            >
              {cardLabels.cta}
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
