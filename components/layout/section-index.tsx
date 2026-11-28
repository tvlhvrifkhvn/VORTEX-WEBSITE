"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { sectionIndex, sectionIndexLabel } from "@/content/home";
import { site } from "@/content/site";
import { useMotion } from "@/components/motion/motion-provider";

/* Home section index (features.sectionIndex): thin fixed list 01–10 in the LEFT outer margin, outside the
   content box. Shown only from 1280px, where the margin (4vw ≥ 51px) is wider than the list (~36px + 10px inset),
   so it never sits on content. No box: each item takes the data-theme of the section under it, so it reads on
   paper, ink and signal alike. Active section = small accent square. Click scrolls (smooth, or instant when motion is off). */
export function SectionIndex() {
  const { enabled } = useMotion();
  const [active, setActive] = useState(sectionIndex[0].id);
  const [themes, setThemes] = useState<string[]>([]);
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    let raf = 0;
    const sample = () => {
      raf = 0;
      const items = [...(list.current?.children ?? [])] as HTMLElement[];
      const next = items.map((li) => {
        const r = li.getBoundingClientRect();
        if (!r.height) return "paper";
        const under = document.elementsFromPoint(r.left + r.width / 2, r.top + r.height / 2).find((el) => !list.current?.parentElement?.contains(el));
        return under?.closest("[data-theme]")?.getAttribute("data-theme") ?? "paper";
      });
      setThemes((prev) => (prev.join() === next.join() ? prev : next));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(sample); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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
    <nav aria-label={sectionIndexLabel} className="fixed top-1/2 left-2.5 z-40 hidden -translate-y-1/2 xl:block">
      <ol ref={list}>
        {sectionIndex.map((s, i) => {
          const on = s.id === active;
          return (
            // Inline transparent background: [data-theme] paints one by default.
            <li key={s.id} data-theme={themes[i] ?? "paper"} style={{ background: "transparent" }}>
              <a
                href={`#${s.id}`}
                aria-current={on ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(s.id)?.scrollIntoView({ behavior: enabled ? "smooth" : "auto", block: "start" });
                }}
                className="label-mono tabular group flex min-h-6 items-center gap-2 hover:underline"
              >
                <span aria-hidden="true" className={cn("size-1.5", on ? "bg-primary" : "bg-transparent")} />
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
