"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { useMotion } from "./motion-provider";
import { WireGlobe } from "./wire-globe";

/* Tile C: activity-style ring. The arc fills to `pct` on scroll-in and replays on hover/focus of the tile;
   inside it a wireframe globe turns slowly (WireGlobe; user request, replaces the tick dial).
   Rounded line ends, like an activity ring (user request). Motion off → arc at its value, globe still. Decorative: the % is the text. */
export function SavingsRing({ pct }: { pct: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const { enabled } = useMotion();
  const [run, setRun] = useState(0);
  const value = pct / 100;
  const show = !enabled || inView;

  return (
    <div ref={ref} aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-72" onMouseEnter={() => setRun((r) => r + 1)}>
      <svg viewBox="0 0 100 100" className="size-full -rotate-90">
        <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="8" />
        <motion.circle
          key={run}
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: enabled ? 0 : value }}
          animate={{ pathLength: show ? value : 0 }}
          transition={{ duration: enabled ? 1.6 : 0, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Upright inside the rotated ring svg. */}
        <g transform="rotate(90 50 50)">
          <WireGlobe />
        </g>
      </svg>
    </div>
  );
}
