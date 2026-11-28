"use client";

import { cn } from "@/lib/utils";
import { useMotion } from "@/components/motion/motion-provider";

/* WCAG 2.2.2 pause control (§6.1): MOTION: ON / OFF. */
export function MotionToggle({ label = "MOTION", className }: { label?: string; className?: string }) {
  const { enabled, setEnabled } = useMotion();
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => setEnabled(!enabled)}
      className={cn("label-mono inline-flex min-h-11 items-center gap-2", className)}
    >
      {label}:
      <span className={cn("px-1.5 py-0.5", enabled ? "bg-foreground text-background" : "border border-current")}>{enabled ? "ON" : "OFF"}</span>
    </button>
  );
}
