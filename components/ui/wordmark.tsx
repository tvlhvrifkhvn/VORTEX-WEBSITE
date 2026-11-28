import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/** Typographic wordmark VORTEXONE (Inter Tight 700, −0.04em) — used until a logo is supplied (§7.4). */
export function Wordmark({ className, monogram }: { className?: string; monogram?: boolean }) {
  return (
    <span className={cn("font-sans font-bold uppercase leading-none tracking-[-0.04em]", className)}>
      {monogram ? (
        <>
          <span aria-hidden="true">V1</span>
          <span className="sr-only">{site.name}</span>
        </>
      ) : (
        site.name
      )}
    </span>
  );
}
