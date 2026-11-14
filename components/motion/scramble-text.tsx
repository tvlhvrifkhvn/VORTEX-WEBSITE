"use client";

import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { useMotion } from "./motion-provider";
import { useMedia } from "./use-media";
import { useScramble } from "./use-scramble";

interface ScrambleTextProps {
  children: string;
  /** "hover": runs when the closest [data-scramble-host], link or button is hovered/focused. "enter": once on scroll-in. */
  trigger?: "hover" | "enter";
  className?: string;
}

/* §6.2.4 — short uppercase labels (A–Z, 0–9), ≤500ms. Motion OFF → no effect. */
export function ScrambleText({ children, trigger = "hover", className }: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const { enabled } = useMotion();
  const { display, run } = useScramble(children, "alnum");

  const canHover = useMedia("(hover: hover)");
  // Touch screens can't hover: hover-triggered labels run once on scroll-in instead (and on tap, below).
  useEffect(() => {
    if (enabled && inView && (trigger === "enter" || !canHover)) run(500);
  }, [enabled, trigger, inView, canHover, run]);

  useEffect(() => {
    const host = ref.current?.closest("[data-scramble-host],a,button") ?? ref.current;
    if (!enabled || trigger !== "hover" || !host) return;
    const go = () => run(500);
    host.addEventListener("mouseenter", go);
    host.addEventListener("focus", go);
    host.addEventListener("touchstart", go, { passive: true });
    return () => {
      host.removeEventListener("touchstart", go);
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
