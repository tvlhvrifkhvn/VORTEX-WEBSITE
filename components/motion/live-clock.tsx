"use client";

import { cn } from "@/lib/utils";
import { tzOffset } from "@/lib/time";
import { useMinute } from "./use-minute";

function visitorZone() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return tz.split("/").pop()!.replace(/_/g, " ").toUpperCase();
  } catch {
    return "YOUR TIME";
  }
}

function timeParts(date: Date, timeZone?: string) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone, hour: "numeric", minute: "2-digit", hour12: true }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return { h: get("hour"), m: get("minute"), ap: get("dayPeriod") };
}

function Clock({ label, now, timeZone, large }: { label: string; now: Date | null; timeZone?: string; large?: boolean }) {
  const t = now ? timeParts(now, timeZone) : null;
  return (
    <div className="flex flex-col gap-1">
      <span className="label-mono text-muted-foreground">{label}</span>
      <span className={cn("tabular font-semibold", large ? "text-display" : "label-mono text-foreground")}>
        {t ? (
          <>
            {t.h.padStart(2, " ")}
            <span className="animate-blink">:</span>
            {t.m} <span className={large ? "label-mono align-top" : undefined}>{t.ap}</span>
          </>
        ) : (
          <span aria-hidden="true">--:-- --</span>
        )}
      </span>
    </div>
  );
}

/* §6.2.6 — visitor's clock + Islamabad. Fixed-width placeholder on first paint (no CLS). */
/** True when the visitor's current UTC offset equals Islamabad's — the two clocks would show the same time. */
function sameAsIslamabad(now: Date) {
  try {
    return tzOffset(now, Intl.DateTimeFormat().resolvedOptions().timeZone) === tzOffset(now, "Asia/Karachi");
  } catch {
    return false;
  }
}

export function LiveClock({ variant = "compact", className }: { variant?: "compact" | "large"; className?: string }) {
  const now = useMinute();
  const large = variant === "large";
  const showVisitor = !now || !sameAsIslamabad(now);
  return (
    <div className={cn("flex gap-8", className)}>
      {showVisitor && <Clock label={now ? visitorZone() : "YOUR TIME"} now={now} large={large} />}
      <Clock label="ISLAMABAD" now={now} timeZone="Asia/Karachi" large={large} />
    </div>
  );
}
