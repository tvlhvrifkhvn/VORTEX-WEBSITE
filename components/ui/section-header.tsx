import { cn } from "@/lib/utils";
import { Text } from "./text";

/** Hairline + label row (label left, meta right). The one top rule every section uses. */
export function SectionRule({ label, meta, className }: { label: string; meta?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-baseline justify-between gap-4 border-t border-border pt-3", className)}>
      <p className="label-mono">{label}</p>
      {meta && (typeof meta === "string" ? <p className="label-mono text-right text-muted-foreground">{meta}</p> : meta)}
    </div>
  );
}

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

/** SectionRule → --space-header → H2 (+ lead) → --space-header → content. Stacked or split (§5.1). */
export function SectionHeader({ label, meta, title, lead, layout = "stacked", id, className }: SectionHeaderProps) {
  const split = layout === "split";
  return (
    <header className={cn("mb-(--space-header)", className)}>
      <SectionRule label={label} meta={meta} />
      <div className="grid-vx mt-(--space-header) items-end gap-y-(--space-block)">
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
