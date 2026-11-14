"use client";

import { cn } from "@/lib/utils";
import { deskState } from "@/lib/time";
import { site } from "@/content/site";
import { useMinute } from "./use-minute";

/* §6.2.7 — dot + text, re-evaluated each minute. Text is always present (color is never the only signal). */
/** `compact`: dot + OPEN/CLOSED (full status stays available to screen readers). */
export function DeskStatus({ className, compact }: { className?: string; compact?: boolean }) {
  const now = useMinute();
  const state = now ? deskState(site.desk, now) : null;
  return (
    <p className={cn("label-mono flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "size-2 rounded-full border",
          state?.open ? "border-status bg-status" : "border-current bg-transparent",
        )}
      />
      {compact ? (
        <>
          <span aria-hidden="true">{state ? (state.open ? "OPEN" : "CLOSED") : "DESK"}</span>
          <span className="sr-only">{state ? (state.open ? "Desk open" : `Desk closed, ${state.opensLabel.toLowerCase()}`) : "Desk hours"}</span>
        </>
      ) : state ? (state.open ? "DESK OPEN" : `DESK CLOSED · ${state.opensLabel}`) : "DESK HOURS"}
    </p>
  );
}
