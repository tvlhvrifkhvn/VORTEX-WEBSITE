"use client";

import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { useMotion } from "./motion-provider";
import { useScramble } from "./use-scramble";

interface ScrambleNumberProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
  format?: Intl.NumberFormatOptions;
  className?: string;
  /** "scramble" (default) or "blur": focus-pull from blur on enter (stats tiles); no digit flicker. */
  reveal?: "scramble" | "blur";
}

/* §6.2.3 — digits scramble on enter (2s, slowed on request) and on value change (900ms). Symbols never scramble.
   Screen readers get the final value only. Motion OFF → final value. */
export function ScrambleNumber({ value, prefix = "", suffix = "", format, className, reveal = "scramble" }: ScrambleNumberProps) {
  const text = typeof value === "number" ? new Intl.NumberFormat("en-US", format).format(value) : value;
  const final = `${prefix}${text}${suffix}`;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const { enabled } = useMotion();
  const { display, run } = useScramble(final, "digits");
  const played = useRef(false);

  useEffect(() => {
    if (!enabled || !inView || reveal === "blur") return;
    run(played.current ? 900 : 2000);
    played.current = true;
  }, [enabled, inView, final, run, reveal]);

  return (
    <span ref={ref} data-shown={inView ? "" : undefined} className={cn("tabular inline-block", reveal === "blur" && "blur-reveal", className)}>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{final}</span>
    </span>
  );
}
