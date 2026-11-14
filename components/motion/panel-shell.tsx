"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useMedia } from "./use-media";

/* Article wrapper for a home file panel. Sets data-inview once ~35% is visible (drives the row reveal) and,
   on devices that can't hover, data-live — so touch users get the hover look once when the panel arrives. */
export function PanelShell({ theme, className, children }: { theme: string; className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [inview, setInview] = useState(false);
  const canHover = useMedia("(hover: hover)");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setInview(true);
        io.disconnect();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      data-theme={theme}
      data-scramble-host=""
      data-inview={inview ? "" : undefined}
      data-live={inview && !canHover ? "" : undefined}
      className={cn("group/panel", className)}
    >
      {children}
    </article>
  );
}
