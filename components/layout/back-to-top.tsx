"use client";

import { backToTop } from "@/content/nav";
import { site } from "@/content/site";
import { useMotion } from "@/components/motion/motion-provider";

/* Footer "BACK TO THE DESK ↑" (features.backToTop): smooth scroll, instant when motion is off; focus goes to the page top. */
export function BackToTop({ className }: { className?: string }) {
  const { enabled } = useMotion();
  if (!site.features.backToTop) return null;
  return (
    <a
      href="#content"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: enabled ? "smooth" : "auto" });
        document.getElementById("content")?.focus({ preventScroll: true });
      }}
      className={className}
    >
      {backToTop} <span aria-hidden="true" className="font-sans">↑</span>
    </a>
  );
}
