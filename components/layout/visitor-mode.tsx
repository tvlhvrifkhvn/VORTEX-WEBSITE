"use client";

import { createContext, use, useCallback, useEffect, useSyncExternalStore } from "react";
import { viewing } from "@/content/nav";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";

/* Visitor mode ("Viewing as", features.visitorMode). The boot script copies localStorage "vx-viewing" onto
   <html data-viewing> before paint, so CSS-driven parts (panel highlight, CTA labels) never shift.
   Any element with [data-set-viewing="01|02"] sets the mode when clicked (the hero buttons). */
type Mode = "01" | "02" | null;
const Ctx = createContext<{ mode: Mode; clear: () => void }>({ mode: null, clear: () => {} });
export const useViewing = () => use(Ctx);

const KEY = "vx-viewing";
function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-viewing"] });
  return () => mo.disconnect();
}
const snapshot = (): Mode => {
  const v = document.documentElement.dataset.viewing;
  return v === "01" || v === "02" ? v : null;
};

function write(mode: Mode) {
  const d = document.documentElement;
  if (mode) d.dataset.viewing = mode;
  else delete d.dataset.viewing;
  try {
    if (mode) localStorage.setItem(KEY, mode);
    else localStorage.removeItem(KEY);
  } catch {
    /* storage blocked */
  }
}

export function VisitorProvider({ children }: { children: React.ReactNode }) {
  const mode = useSyncExternalStore(subscribe, snapshot, () => null);
  const clear = useCallback(() => write(null), []);

  useEffect(() => {
    if (!site.features.visitorMode) return;
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element).closest<HTMLElement>("[data-set-viewing]");
      const v = el?.dataset.setViewing;
      if (v === "01" || v === "02") write(v);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return <Ctx value={{ mode: site.features.visitorMode ? mode : null, clear }}>{children}</Ctx>;
}

/** Hanging mono tab under the header: "VIEWING AS: AGENT ×". Absolutely positioned → no layout shift. */
export function ViewingChip() {
  const { mode, clear } = useViewing();
  if (!mode) return null;
  return (
    <div data-theme="ink" className="label-mono absolute top-full left-(--spacing-margin) flex items-center">
      <span className="px-3 py-1.5">
        {viewing.prefix}: {viewing[mode]}
      </span>
      <button type="button" onClick={clear} className="flex min-h-11 min-w-11 items-center justify-center border-l border-border hover:bg-card">
        <span aria-hidden="true" className="font-sans text-lead leading-none">×</span>
        <span className="sr-only">{viewing.clear}</span>
      </button>
    </div>
  );
}

interface CtaProps { label: string; href: string; size?: "md" | "lg"; variant?: "primary" | "secondary" | "ghost" | "text"; className?: string; arrow?: "→" | "↗" | "↓" | false; onClick?: () => void }

/** Primary "Book a call" CTA that follows the visitor mode: "Schedule a showing" (01) / "Send a claim" (02).
    All three labels share one grid cell, so the width never changes; CSS on <html data-viewing> picks one. */
export function VisitorCtaButton({ label, href, ...rest }: CtaProps) {
  const { mode } = useViewing();
  if (!site.features.visitorMode || href !== "/book-a-call") return <Button href={href} {...rest}>{label}</Button>;
  return (
    <Button href={mode ? viewing.cta[mode].href : href} {...rest}>
      <span className="grid">
        <span className="vx-cta-default [grid-area:1/1]">{label}</span>
        <span className="vx-cta-01 [grid-area:1/1]">{viewing.cta["01"].label}</span>
        <span className="vx-cta-02 [grid-area:1/1]">{viewing.cta["02"].label}</span>
      </span>
    </Button>
  );
}
