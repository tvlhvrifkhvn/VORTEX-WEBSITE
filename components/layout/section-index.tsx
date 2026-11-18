"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { sectionIndex, sectionIndexLabel } from "@/content/home";
import { site } from "@/content/site";
import { useMotion } from "@/components/motion/motion-provider";

/* Home section index (features.sectionIndex, ≥1280px only): thin fixed list 01–10 on the right edge,
   anchored low so it never meets the hero's rotated label. Active section = small signal square.
   Click scrolls (smooth, or instant when motion is off). */
export function SectionIndex() {
  const { enabled } = useMotion();
  const [active, setActive] = useState(sectionIndex[0].id);

  useEffect(() => {
    const targets = sectionIndex
      .map((s) => ({ id: s.id, el: document.getElementById(s.id)?.closest("section") ?? document.getElementById(s.id) }))
      .filter((t): t is { id: string; el: HTMLElement } => !!t.el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const hit = targets.find((t) => t.el === e.target);
          if (hit) setActive(hit.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    targets.forEach((t) => io.observe(t.el));
    return () => io.disconnect();
  }, []);

  if (!site.features.sectionIndex) return null;
  return (
    <nav aria-label={sectionIndexLabel} className="fixed right-4 bottom-6 z-40 hidden border border-border bg-background xl:block">
      <ol>
        {sectionIndex.map((s) => {
          const on = s.id === active;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={on ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(s.id)?.scrollIntoView({ behavior: enabled ? "smooth" : "auto", block: "start" });
                }}
                className="label-mono tabular group flex min-h-7 items-center gap-2 px-2 hover:bg-card"
              >
                <span aria-hidden="true" className={cn("size-1.5", on ? "bg-signal" : "bg-transparent")} />
                <span className={on ? "text-foreground" : "text-muted-foreground"}>{s.n}</span>
                <span className="sr-only">{s.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
