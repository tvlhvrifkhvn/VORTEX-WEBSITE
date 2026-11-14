"use client";

import { useEffect } from "react";
import { inView, stagger as staggerDelay, useAnimate } from "motion/react";
import { useMotion } from "./motion-provider";

interface RevealProps {
  children: React.ReactNode;
  /** Animate direct children one after another (70ms apart). */
  stagger?: boolean;
  className?: string;
  as?: "div" | "ul" | "ol" | "section" | "tbody";
}

/* §6.2.1 — server-rendered visible; only content still below the fold is hidden after
   hydration and revealed on enter (once). Motion OFF → static. */
export function Reveal({ children, stagger, className, as = "div" }: RevealProps) {
  const Tag = as as "div";
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const { enabled } = useMotion();

  useEffect(() => {
    const el = scope.current;
    if (!enabled || !el) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    const targets = stagger ? Array.from(el.children) : el;
    animate(targets, { opacity: 0, y: 16 }, { duration: 0 });
    const stop = inView(
      el,
      () => {
        animate(targets, { opacity: 1, y: 0 }, { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: stagger ? staggerDelay(0.07) : 0 });
      },
      { amount: 0.2 },
    );
    return () => {
      stop();
      animate(targets, { opacity: 1, y: 0 }, { duration: 0 });
    };
  }, [enabled, stagger, animate, scope]);

  return (
    <Tag ref={scope} className={className}>
      {children}
    </Tag>
  );
}
