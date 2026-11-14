"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { site } from "@/content/site";
import { useMotion } from "./motion-provider";
import { useMedia } from "./use-media";

/* §6.2.14 — wrap a file panel. Fine pointers + motion ON + feature flag only; the system
   cursor stays visible. Purely decorative (aria-hidden); the panel keeps its own link. */
export function CursorLabel({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { enabled } = useMotion();
  const fine = useMedia("(pointer: fine)");
  const [over, setOver] = useState(false);
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const on = enabled && fine && site.features.cursorLabel;

  useEffect(() => {
    const el = ref.current;
    if (!on || !el) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x.set(e.clientX - r.left + 16);
      y.set(e.clientY - r.top + 16);
    };
    const enter = () => setOver(true);
    const leave = () => setOver(false);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
    };
  }, [on, x, y]);

  return (
    <div ref={ref} className={`relative ${className ?? ""}`}>
      {children}
      {on && (
        <motion.span
          aria-hidden="true"
          className="label-mono pointer-events-none absolute top-0 left-0 z-10 bg-signal px-2 py-1 text-ink"
          style={{ x, y }}
          animate={{ opacity: over ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        >
          {label}
        </motion.span>
      )}
    </div>
  );
}
