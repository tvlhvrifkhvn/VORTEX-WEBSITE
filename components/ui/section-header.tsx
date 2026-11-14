import { cn } from "@/lib/utils";
import { Text } from "./text";

interface SectionHeaderProps {
  /** e.g. "06 — THE SHIFT" */
  label: string;
  /** Right-aligned meta, e.g. "FILE 01 + 02" */
  meta?: string;
  title: string;
  lead?: string;
  layout?: "stacked" | "split";
  /** id for aria-labelledby on the parent section */
  id?: string;
  className?: string;
}

/** Hairline + label/meta row + H2 (+ lead). Stacked or split (§5.1). */
export function SectionHeader({ label, meta, title, lead, layout = "stacked", id, className }: SectionHeaderProps) {
  const split = layout === "split";
  return (
    <header className={cn("mb-[clamp(2.5rem,5vw,5rem)] border-t border-border", className)}>
      <div className="flex items-baseline justify-between gap-4 pt-3">
        <p className="label-mono">{label}</p>
        {meta && <p className="label-mono text-muted-foreground">{meta}</p>}
      </div>
      <div className="grid-vx mt-8 items-end gap-y-6">
        <Text as="h2" id={id} className={cn("col-span-4 text-h2 font-semibold md:col-span-8", split ? "lg:col-span-7" : "lg:col-span-9")}>
          {title}
        </Text>
        {lead && (
          <Text
            as="p"
            className={cn(
              "col-span-4 max-w-[60ch] text-muted-foreground",
              split ? "md:col-span-6 lg:col-span-4 lg:col-start-9" : "text-lead md:col-span-6 lg:col-span-6",
            )}
          >
            {lead}
          </Text>
        )}
      </div>
    </header>
  );
}
