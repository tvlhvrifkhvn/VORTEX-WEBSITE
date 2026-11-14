"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { useMotion } from "./motion-provider";

/* §6.2.15 — hides when scrolling down past 120px; shows on scroll up, focus within,
   or while `pinned` (menu open). Motion OFF → always visible. */
export function HeaderAutoHide({ children, pinned, className }: { children: React.ReactNode; pinned?: boolean; className?: string }) {
  const { enabled } = useMotion();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [focused, setFocused] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > 120 && y > prev);
  });

  const hide = enabled && hidden && !focused && !pinned;
  return (
    <motion.header
      className={cn("sticky top-0 z-50", className)}
      animate={{ y: hide ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={() => setFocused(false)}
    >
      {children}
    </motion.header>
  );
}
