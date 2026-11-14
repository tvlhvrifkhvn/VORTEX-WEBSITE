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
}

/* §6.2.3 — digits scramble on enter (≤900ms) and on value change (400ms). Symbols never scramble.
   Screen readers get the final value only. Motion OFF → final value. */
export function ScrambleNumber({ value, prefix = "", suffix = "", format, className }: ScrambleNumberProps) {
  const text = typeof value === "number" ? new Intl.NumberFormat("en-US", format).format(value) : value;
  const final = `${prefix}${text}${suffix}`;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const { enabled } = useMotion();
  const { display, run } = useScramble(final, "digits");
  const played = useRef(false);

  useEffect(() => {
    if (!enabled || !inView) return;
    run(played.current ? 400 : 900);
    played.current = true;
  }, [enabled, inView, final, run]);

  return (
    <span ref={ref} className={cn("tabular inline-block", className)}>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{final}</span>
    </span>
  );
}
