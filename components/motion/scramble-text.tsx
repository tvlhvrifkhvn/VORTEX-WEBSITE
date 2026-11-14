"use client";

import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { useMotion } from "./motion-provider";
import { useScramble } from "./use-scramble";

interface ScrambleTextProps {
  children: string;
  /** "hover": runs when the closest link/button is hovered or focused. "enter": once on scroll-in. */
  trigger?: "hover" | "enter";
  className?: string;
}

/* §6.2.4 — short uppercase labels (A–Z, 0–9), ≤500ms. Motion OFF → no effect. */
export function ScrambleText({ children, trigger = "hover", className }: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const { enabled } = useMotion();
  const { display, run } = useScramble(children, "alnum");

  useEffect(() => {
    if (enabled && trigger === "enter" && inView) run(500);
  }, [enabled, trigger, inView, run]);

  useEffect(() => {
    const host = ref.current?.closest("a,button") ?? ref.current;
    if (!enabled || trigger !== "hover" || !host) return;
    const go = () => run(500);
    host.addEventListener("mouseenter", go);
    host.addEventListener("focus", go);
    return () => {
      host.removeEventListener("mouseenter", go);
      host.removeEventListener("focus", go);
    };
  }, [enabled, trigger, run]);

  return (
    <span ref={ref} className={cn("tabular", className)}>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{children}</span>
    </span>
  );
}
