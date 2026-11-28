import * as React from "react";
import { cn } from "@/lib/utils";

/* Native checkbox/radio, restyled. Square checkbox; round radio (the only allowed rounding besides dots).
   Whole row is the label → ≥44px target. */
const box =
  "peer relative size-5 shrink-0 appearance-none border border-input bg-transparent checked:border-foreground checked:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground aria-invalid:border-2 aria-invalid:border-signal";

interface ChoiceProps extends Omit<React.ComponentProps<"input">, "type"> {
  label: React.ReactNode;
  description?: string;
}

export function Checkbox({ label, description, className, ...props }: ChoiceProps) {
  return (
    <label className={cn("flex min-h-11 cursor-pointer items-start gap-3 py-2", className)}>
      <span className="relative mt-0.5 flex">
        <input type="checkbox" className={box} {...props} />
        <svg aria-hidden="true" viewBox="0 0 20 20" className="pointer-events-none absolute inset-0 hidden size-5 text-background peer-checked:block">
          <path d="M5 10.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth={2} />
        </svg>
      </span>
      <span>
        <span className="block">{label}</span>
        {description && <span className="block text-small text-muted-foreground">{description}</span>}
      </span>
    </label>
  );
}

export function Radio({ label, description, className, ...props }: ChoiceProps) {
  return (
    <label className={cn("flex min-h-11 cursor-pointer items-start gap-3 py-2", className)}>
      <span className="relative mt-0.5 flex">
        <input type="radio" className={cn(box, "rounded-full checked:bg-transparent")} {...props} />
        <span aria-hidden="true" className="pointer-events-none absolute inset-1.5 hidden rounded-full bg-foreground peer-checked:block" />
      </span>
      <span>
        <span className="block">{label}</span>
        {description && <span className="block text-small text-muted-foreground">{description}</span>}
      </span>
    </label>
  );
}
