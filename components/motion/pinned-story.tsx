"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { convertTime, format12 } from "@/lib/time";
import { useMotion } from "./motion-provider";
import { useMedia } from "./use-media";
import { useMinute } from "./use-minute";
import { ScrambleNumber } from "./scramble-number";

export interface StoryStep { time: string; title: string; text: string }
interface PinnedStoryProps { steps: StoryStep[]; fromLabel: string; toLabel: string; className?: string }

const PK = "Asia/Karachi";
const US = "America/New_York";

/* §6.2.9 — sticky scrollytelling at ≥1024px with motion ON; otherwise a static timeline.
   All step text stays in the DOM. US time is computed for today (DST-correct). */
export function PinnedStory({ steps, fromLabel, toLabel, className }: PinnedStoryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { enabled } = useMotion();
  const desktop = useMedia("(min-width: 64rem)");
  const now = useMinute();
  const pinned = enabled && desktop;
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(steps.length - 1, Math.floor(v * steps.length))));

  const us = (t: string) => (now ? format12(convertTime(t, PK, US, now)) : "--:-- --");

  if (!pinned) {
    return (
      <ol className={cn("border-t border-border", className)}>
        {steps.map((s) => (
          <li key={s.time + s.title} className="grid-vx border-b border-border py-6">
            <p className="tabular label-mono col-span-4 md:col-span-2">
              {format12(s.time)} {fromLabel}
              <span className="block text-muted-foreground">{us(s.time)} {toLabel}</span>
            </p>
            <h3 className="col-span-4 mt-2 text-h3 font-semibold md:col-span-3 md:mt-0">{s.title}</h3>
            <p className="col-span-4 mt-2 max-w-[60ch] text-muted-foreground md:col-span-3 md:mt-0 lg:col-span-7">{s.text}</p>
          </li>
        ))}
      </ol>
    );
  }

  const step = steps[active];
  return (
    <div ref={ref} className={className} style={{ height: `${steps.length * 70}vh` }}>
      <div className="grid-vx sticky top-(--spacing-header) h-[calc(100vh-var(--spacing-header))] content-center">
        <div className="col-span-6">
          <p className="label-mono text-muted-foreground">{fromLabel}</p>
          <ScrambleNumber value={format12(step.time)} className="text-display font-semibold" />
          <p className="label-mono tabular mt-4">{us(step.time)} {toLabel}</p>
          <div className="mt-8 h-1 bg-border">
            <motion.div className="h-full origin-left bg-signal" style={{ scaleX: scrollYProgress }} />
          </div>
        </div>
        <ol className="col-span-6 flex flex-col gap-6">
          {steps.map((s, i) => (
            <li key={s.time + s.title} className={cn("flex gap-4 transition-opacity duration-300", i !== active && "opacity-30")} aria-current={i === active ? "step" : undefined}>
              <span className={cn("label-mono tabular flex size-8 shrink-0 items-center justify-center", i === active && "bg-signal text-ink")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-h3 font-semibold">{s.title}</h3>
                <p className="mt-1 max-w-[48ch] text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
