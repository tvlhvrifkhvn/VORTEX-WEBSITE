"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { header, mobileMenu } from "@/content/nav";
import { site } from "@/content/site";
import { MenuItem, MenuOverlay } from "@/components/motion/menu-overlay";
import { LiveClock } from "@/components/motion/live-clock";
import { Wordmark } from "@/components/ui/wordmark";
import { Button } from "@/components/ui/button";
import { MotionToggle } from "./motion-toggle";

interface MobileMenuProps { open: boolean; onClose: () => void; returnFocus: React.RefObject<HTMLButtonElement | null> }

/* <1024px full-screen ink menu: giant numbered links, contact line, clock, motion toggle (§11.0). */
export function MobileMenu({ open, onClose, returnFocus }: MobileMenuProps) {
  const path = usePathname();
  return (
    <MenuOverlay open={open} onClose={onClose} returnFocus={returnFocus} label={mobileMenu.label}>
      <div className="container-vx flex min-h-full flex-col pb-10">
        <div className="flex h-(--spacing-header) items-center justify-between border-b border-border">
          <Wordmark className="text-h3" />
          <button type="button" onClick={onClose} className="label-mono flex min-h-11 items-center gap-2 border border-foreground px-3">
            {header.close.toUpperCase()}
            <span aria-hidden="true" className="font-sans text-lead leading-none rotate-45">+</span>
          </button>
        </div>
        <nav aria-label={mobileMenu.label} className="py-8">
          <ul className="flex flex-col">
            {mobileMenu.links.map((l, i) => (
              <MenuItem key={l.href} index={i}>
                <Link
                  href={l.href}
                  onClick={onClose}
                  aria-current={path.startsWith(l.href) ? "page" : undefined}
                  className="flex min-h-11 items-baseline gap-4 border-b border-border py-3 text-h3 font-semibold aria-[current=page]:text-signal"
                >
                  <span className="label-mono tabular text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  {l.label}
                </Link>
              </MenuItem>
            ))}
          </ul>
        </nav>
        <Button href={header.cta.href} size="lg" onClick={onClose} className="w-full">
          {header.cta.label}
        </Button>
        <div className="mt-10 flex flex-col gap-6">
          <p className="label-mono text-muted-foreground">{mobileMenu.contactLabel}</p>
          <ul className="flex flex-col gap-2">
            <li><a href={`mailto:${site.contact.email}`} className="inline-flex min-h-11 items-center">{site.contact.email}</a></li>
            <li><a href={site.contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center">{site.contact.whatsapp.display} ↗</a></li>
          </ul>
          <LiveClock />
          <MotionToggle />
        </div>
      </div>
    </MenuOverlay>
  );
}
