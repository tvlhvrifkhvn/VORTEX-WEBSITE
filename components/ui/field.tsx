import * as React from "react";
import { TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

/* Form fields: square, 1px input-colored border (≥3:1), 48px min height, inline errors with icon +
   text wired through aria-describedby (§9.7). Labels/hints/errors come from content. */
const control =
  "w-full border border-input bg-transparent px-4 text-body text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-foreground aria-invalid:border-signal aria-invalid:border-2";

interface FieldProps {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  optionalLabel?: string;
  children: (describedBy: string | undefined, invalid: boolean) => React.ReactNode;
  className?: string;
}

/** Label + control + hint + error. The child render prop receives aria-describedby and invalid state. */
export function Field({ id, label, hint, error, required, optionalLabel, children, className }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="label-mono flex justify-between gap-4">
        <span>
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </span>
        {!required && optionalLabel && <span className="text-muted-foreground">{optionalLabel}</span>}
      </label>
      {children(describedBy, Boolean(error))}
      {hint && <p id={hintId} className="text-small text-muted-foreground">{hint}</p>}
      {error && (
        <p id={errorId} className="flex items-center gap-2 text-small font-medium">
          <TriangleAlert aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.75} />
          {error}
        </p>
      )}
    </div>
  );
}

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(control, "min-h-12", className)} {...props} />;
}

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea className={cn(control, "min-h-32 py-3", className)} {...props} />;
}

/** Native select (best keyboard + mobile support) with a typed ↓ glyph. */
export function Select({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select className={cn(control, "min-h-12 appearance-none pr-10", className)} {...props}>
        {children}
      </select>
      <span aria-hidden="true" className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">↓</span>
    </div>
  );
}
