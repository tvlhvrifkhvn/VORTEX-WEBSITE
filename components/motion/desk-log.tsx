"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { useMotion } from "./motion-provider";

export interface DeskLogEntry { time: string; text: string }

/* §6.2.8 — terminal-style feed. Every 2.8s the next entry is prepended; pauses off-screen
   or when the tab is hidden. Motion OFF → 6 static rows. */
export function DeskLog({ title, entries, className }: { title: string; entries: DeskLogEntry[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const { enabled } = useMotion();
  const [head, setHead] = useState(Math.min(6, entries.length) - 1);

  useEffect(() => {
    if (!enabled || !inView || entries.length <= 6) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setHead((h) => (h + 1) % entries.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [enabled, inView, entries.length]);

  const rows = Array.from({ length: Math.min(6, entries.length) }, (_, i) => {
    const n = (head - i + entries.length) % entries.length;
    return { ...entries[n], key: `${n}-${head - i}` };
  });

  return (
    <div ref={ref} className={cn("border border-border bg-card font-mono text-small", className)}>
      <p className="label-mono border-b border-border px-4 py-3">{title}</p>
      <div role="log" aria-live="off" aria-label={title}>
      <ul className="px-4 py-2">
        <AnimatePresence initial={false}>
          {rows.map((row) => (
            <motion.li
              key={row.key}
              layout="position"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4 border-b border-border py-2 last:border-b-0"
            >
              <span className="tabular shrink-0 text-muted-foreground">{row.time}</span>
              <span>{row.text}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      </div>
    </div>
  );
}
