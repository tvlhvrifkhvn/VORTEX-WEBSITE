"use client";

import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { buttonClass } from "@/components/ui/button";

/** Text-link style trigger for desk search ("vx:search" event; the "/" key does the same). */
export function SearchLink({ label, className }: { label: string; className?: string }) {
  if (!site.features.deskSearch) return null;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("vx:search"))}
      className={cn(buttonClass({ variant: "text" }), "label-mono gap-2", className)}
    >
      {label}
      <kbd aria-hidden="true" className="border border-current px-1 font-mono">/</kbd>
    </button>
  );
}
