"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMotion } from "./motion-provider";

/* §6.2.13 — translateY 40px → -40px across the section's scroll. Motion OFF → none. */
export function ParallaxText({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { enabled } = useMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <motion.div ref={ref} className={className} style={{ y: enabled ? y : 0 }}>
      {children}
    </motion.div>
  );
}
