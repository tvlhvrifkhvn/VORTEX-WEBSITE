"use client";

import { createContext, use, useCallback, useSyncExternalStore } from "react";
import { MotionConfig } from "motion/react";

/* Site-wide Motion toggle (§6.1). The boot script sets <html data-motion> before paint;
   this provider mirrors it into React and persists changes. */
const MotionCtx = createContext<{ enabled: boolean; setEnabled: (on: boolean) => void }>({ enabled: false, setEnabled: () => {} });

function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });
  return () => mo.disconnect();
}
const snapshot = () => document.documentElement.dataset.motion === "on";

export const useMotion = () => use(MotionCtx);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const enabled = useSyncExternalStore(subscribe, snapshot, () => false);

  const setEnabled = useCallback((on: boolean) => {
    document.documentElement.dataset.motion = on ? "on" : "off";
    try {
      localStorage.setItem("vx-motion", on ? "on" : "off");
    } catch {
      /* storage blocked */
    }
  }, []);

  return (
    <MotionCtx value={{ enabled, setEnabled }}>
      <MotionConfig reducedMotion={enabled ? "user" : "always"}>{children}</MotionConfig>
    </MotionCtx>
  );
}
