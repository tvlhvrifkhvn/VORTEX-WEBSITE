"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { convertTime, format12 } from "@/lib/time";
import { useMotion } from "./motion-provider";
import { useMedia } from "./use-media";
import { useMinute } from "./use-minute";
import { ScrambleNumber } from "./scramble-number";
import { Wave } from "./wave";

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
  const inner = useRef<HTMLDivElement>(null);
  // Width of each step's time in Anton, in em (measured once the font is ready) → font-size = panel / width.
  const [fits, setFits] = useState<number[]>([]);
  useEffect(() => {
    let live = true;
    document.fonts.load('100px "Anton"').then(() => {
      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx || !live) return;
      ctx.font = '400 100px "Anton"';
      setFits(steps.map((s) => (ctx.measureText(format12(s.time)).width / 100) * 1.01));
    });
    return () => { live = false; };
  }, [steps]);
  const [active, setActive] = useState(0);
  // Progress = how far through the sticky phase we are (wrapper minus the sticky block's own height).
  const progress = useMotionValue(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", () => {
    const w = ref.current, el = inner.current;
    if (!w || !el) return;
    const r = w.getBoundingClientRect();
    const span = r.height - el.offsetHeight;
    const v = span > 0 ? Math.min(1, Math.max(0, (parseFloat(getComputedStyle(el).top) - r.top) / span)) : 0;
    progress.set(v);
    setActive(Math.min(steps.length - 1, Math.floor(v * steps.length)));
  });
  // The bar visibly starts at step 1: minimum fill = 1/steps.
  const fill = useTransform(progress, (v) => Math.max(v, 1 / steps.length));
  const reveal = useTransform(fill, (v) => `inset(-20% ${((1 - v) * 100).toFixed(2)}% -20% 0)`);

  const us = (t: string) => (now ? format12(convertTime(t, PK, US, now)) : "--:-- --");

  if (!pinned) {
    return (
      <ol className={cn("relative ml-1.5 border-l border-foreground pl-6 md:pl-10", className)}>
        {steps.map((s, i) => (
          <li key={s.time + s.title} className="relative pb-12 last:pb-0">
            <span aria-hidden="true" className={cn("absolute top-2 -left-[31px] size-3 md:-left-[47px]", i === steps.length - 1 ? "bg-signal" : "bg-foreground")} />
            <div className="flex items-start justify-between gap-4">
              <p data-theme="ink" className="label-mono tabular inline-flex flex-wrap gap-x-3 gap-y-1 px-3 py-2">
                <span className="text-signal">{format12(s.time)} {fromLabel}</span>
                <span>{us(s.time)} {toLabel}</span>
              </p>
              <span aria-hidden="true" data-numeral={String(i + 1).padStart(2, "0")} className="text-h2 leading-none font-semibold text-foreground/15 tabular before:content-[attr(data-numeral)]" />
            </div>
            <h3 className="mt-5 text-h3 font-semibold">{s.title}</h3>
            <p className="mt-2 max-w-[60ch] text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    );
  }

  const step = steps[active];
  return (
    <div ref={ref} className={className}>
      {/* Sticky block = clock panel + step list, top-aligned (no centring gap); the spacer below provides the scroll distance. */}
      <div ref={inner} className="grid-vx sticky top-[calc(var(--spacing-header)+var(--space-block))] items-stretch">
        {/* Panel is a @container: each step's Anton time spans the full width (its own measured em width; 3.55 until the font loads). */}
        <div data-theme="ink" className="@container col-span-6 flex flex-col justify-between gap-(--space-block) p-10">
          <div>
            <p className="label-mono text-muted-foreground">{fromLabel}</p>
            <div style={{ "--fit": fits[active] ?? 3.55 } as React.CSSProperties}>
              <ScrambleNumber key={active} value={format12(step.time)} reveal="blur" className="fill-num mt-(--space-tight) block" />
            </div>
            <p className="label-mono tabular mt-(--space-tight) text-signal">{us(step.time)} {toLabel}</p>
          </div>
          {/* The wave is the progress: a faint full-length guide, and the signal wave drawn left → right with the scroll. */}
          <div className="relative my-auto">
            <Wave className="opacity-20" />
            <motion.div className="absolute inset-0" style={{ clipPath: reveal }}>
              <Wave />
            </motion.div>
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
      <div aria-hidden="true" style={{ height: `${steps.length * 25}vh` }} />
    </div>
  );
}
