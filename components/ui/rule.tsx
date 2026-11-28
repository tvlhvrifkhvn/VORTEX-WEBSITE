import { cn } from "@/lib/utils";

/** 1px hairline in the theme's line color. */
export function Rule({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-border", className)} />;
}

/** Thick poster bar: 8px (md) or 12px (lg), ink or signal (§5.5). */
export function Bar({ size = "md", tone = "foreground", className }: { size?: "md" | "lg"; tone?: "foreground" | "signal"; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(size === "md" ? "h-2" : "h-3", tone === "signal" ? "bg-signal" : "bg-foreground", className)}
    />
  );
}
