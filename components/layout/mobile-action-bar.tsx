"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { header, mobileBar } from "@/content/nav";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { VisitorCtaButton } from "./visitor-mode";

/* Mobile action bar (features.mobileActionBar, <768px): slides up once the visitor is past the first screen;
   hides while the footer is in view or the menu is open. Body gets matching bottom padding (layout). */
export function MobileActionBar({ menuOpen }: { menuOpen: boolean }) {
  const [past, setPast] = useState(false);
  const [footer, setFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const foot = document.querySelector("footer");
    const io = foot ? new IntersectionObserver(([e]) => setFooter(e.isIntersecting)) : null;
    if (foot && io) io.observe(foot);
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  if (!site.features.mobileActionBar) return null;
  const show = past && !footer && !menuOpen;
  const wa = site.contact.whatsapp;
  const hasWa = !wa.display.includes("[[PLACEHOLDER");
  return (
    <div
      data-theme="paper"
      aria-label={mobileBar.label}
      role="region"
      inert={!show}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] transition-transform duration-300 ease-out-expo md:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <VisitorCtaButton href={header.cta.href} label={header.cta.label} className="flex-1" />
      {hasWa && (
        <Button href={wa.href} variant="ghost" className="flex-1">
          {mobileBar.whatsapp}
        </Button>
      )}
    </div>
  );
}
