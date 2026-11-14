"use client";

import { useEffect } from "react";
import { inView, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import { useMotion } from "./motion-provider";

interface HoursGridProps { days: string[]; hoursPerDay: number; caption: string; className?: string }

/* Swiss "hours grid": one column per weekday, one ink square per hour. Server-rendered filled; if it is still
   below the fold after hydration, squares pop in day by day on enter. Motion OFF → static. */
export function HoursGrid({ days, hoursPerDay, caption, className }: HoursGridProps) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const { enabled } = useMotion();

  useEffect(() => {
    const el = scope.current;
    if (!enabled || !el) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    const squares = el.querySelectorAll("[data-sq]");
    animate(squares, { scale: 0, opacity: 0 }, { duration: 0 });
    const stop = inView(el, () => {
      animate(squares, { scale: 1, opacity: 1 }, { duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: stagger(0.018) });
    }, { amount: 0.3 });
    return () => {
      stop();
      animate(squares, { scale: 1, opacity: 1 }, { duration: 0 });
    };
  }, [enabled, animate, scope]);

  return (
    <div ref={scope} className={cn("w-full max-w-[15rem]", className)}>
      <div aria-hidden="true" className="grid grid-cols-5 gap-1.5">
        {days.map((d) => (
          <div key={d} className="flex flex-col gap-1.5">
            <span className="font-mono text-micro uppercase text-muted-foreground">{d}</span>
            {Array.from({ length: hoursPerDay }, (_, i) => (
              <span key={i} data-sq="" className="block aspect-square bg-foreground" />
            ))}
          </div>
        ))}
      </div>
      <p className="label-mono mt-3">{caption}</p>
    </div>
  );
}
