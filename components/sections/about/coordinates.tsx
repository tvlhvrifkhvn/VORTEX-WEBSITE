"use client";

import { coordinates as c } from "@/content/about";
import { site } from "@/content/site";
import { Section } from "@/components/ui/section";
import { MetaBlock } from "@/components/ui/labels";
import { Bar } from "@/components/ui/rule";
import { useMinute } from "@/components/motion/use-minute";

const time = (d: Date | null, timeZone?: string) =>
  d ? new Intl.DateTimeFormat("en-US", { timeZone, hour: "numeric", minute: "2-digit" }).format(d) : "--:-- --";

function visitorZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/_/g, " ");
  } catch {
    return null;
  }
}

/* 03 — COORDINATES: Swiss poster — Islamabad ↔ your office, joined by a thick ink bar. */
export function Coordinates() {
  const now = useMinute();
  const zone = now ? visitorZone() : null;
  return (
    <Section aria-labelledby="coords-title" className="overflow-hidden">
      <p className="label-mono border-t border-border pt-3">{c.label}</p>
      <h2 id="coords-title" className="mt-8 text-h2 font-semibold">{c.title}</h2>
      <div className="mt-16 grid items-end gap-8 md:grid-cols-[auto_1fr_auto] md:gap-(--spacing-gutter)">
        <div>
          <p className="tabular text-display font-semibold">{time(now, "Asia/Karachi")}</p>
          <MetaBlock title={`${c.desk} · ${site.location.city}`} line={site.location.coords} className="mt-4" />
        </div>
        <Bar size="lg" className="w-24 md:mb-[2.6rem] md:w-auto" />
        <div className="md:text-right">
          <p className="tabular text-display font-semibold">{time(now)}</p>
          <MetaBlock title={c.you} line={zone ?? c.youFallback} className="mt-4" />
        </div>
      </div>
    </Section>
  );
}
