"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const noop = () => () => {};
const inReview = () => "review" in document.documentElement.dataset;

/* Review mode (§9.6): active when <html data-review> (set by the boot script from ?review=1).
   Press G to toggle the 12-column GridOverlay. Renders nothing outside review mode. */
export function ReviewMode() {
  const active = useSyncExternalStore(noop, inReview, () => false);
  const [grid, setGrid] = useState(false);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (e.key.toLowerCase() !== "g" || e.metaKey || e.ctrlKey || e.altKey) return;
      if (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      setGrid((g) => !g);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  if (!active || !grid) return null;
  return <GridOverlay />;
}

/** Fixed 12-column overlay, signal columns at 8% opacity (§6.2.17). */
export function GridOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-80">
      <div className="grid-vx container-vx h-full">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className={i >= 4 ? (i >= 8 ? "hidden h-full bg-signal/8 lg:block" : "hidden h-full bg-signal/8 md:block") : "h-full bg-signal/8"} />
        ))}
      </div>
    </div>
  );
}
