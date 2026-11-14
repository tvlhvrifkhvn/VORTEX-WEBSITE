"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { useMotion } from "./motion-provider";

/* §6.2.10 — SVG path drawn with section scroll progress. Motion OFF → fully drawn. */
export function LineDraw({ d, viewBox, className }: { d: string; viewBox: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { enabled } = useMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.4"] });
  return (
    <div ref={ref} className={className}>
    <svg viewBox={viewBox} fill="none" aria-hidden="true" className="size-full" preserveAspectRatio="none">
      <motion.path d={d} stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" style={{ pathLength: enabled ? scrollYProgress : 1 }} />
    </svg>
    </div>
  );
}
