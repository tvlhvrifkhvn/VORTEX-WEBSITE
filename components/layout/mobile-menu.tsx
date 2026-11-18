"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { files, header, mobileMenu, navGroups, type NavItem } from "@/content/nav";
import { site } from "@/content/site";
import { MenuItem, MenuOverlay } from "@/components/motion/menu-overlay";
import { LiveClock } from "@/components/motion/live-clock";
import { Wordmark } from "@/components/ui/wordmark";
import { Button } from "@/components/ui/button";
import { MotionToggle } from "./motion-toggle";

interface MobileMenuProps { open: boolean; onClose: () => void; returnFocus: React.RefObject<HTMLButtonElement | null> }

/* <1024px full-screen ink menu: giant numbered groups (Files, How we work, Pricing collapse open) + links,
   desk search, contact line, clock, motion toggle (§11.0). */
const groups: { key: string; label: string; items: NavItem[] }[] = [
  { key: "files", label: navGroups.files.label, items: [...files.map(({ label, href }) => ({ label, href })), navGroups.files.allServices] },
  { key: "how", label: navGroups.how.label, items: navGroups.how.items },
  { key: "pricing", label: navGroups.pricing.label, items: navGroups.pricing.items },
];

export function MobileMenu({ open, onClose, returnFocus }: MobileMenuProps) {
  const path = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const isCurrent = (href: string) => !href.includes("#") && path.replace(/\/$/, "") === href;
  const openSearch = () => {
    onClose();
    window.dispatchEvent(new Event("vx:search"));
  };
  return (
    <MenuOverlay open={open} onClose={onClose} returnFocus={returnFocus} label={mobileMenu.label}>
      <div className="container-vx flex min-h-full flex-col pb-10">
        <div className="flex h-(--spacing-header) items-center justify-between border-b border-border">
          <Wordmark className="text-h3" />
          {site.features.deskSearch && (
            <button type="button" onClick={openSearch} className="label-mono ml-auto mr-3 flex min-h-11 items-center gap-2 border border-border px-3">
              {header.search.toUpperCase()} <span aria-hidden="true">{header.searchKey}</span>
            </button>
          )}
          <button type="button" onClick={onClose} className="label-mono flex min-h-11 items-center gap-2 border border-foreground px-3">
            {header.close.toUpperCase()}
            <span aria-hidden="true" className="font-sans text-lead leading-none rotate-45">+</span>
          </button>
        </div>
        <nav aria-label={mobileMenu.label} className="py-8">
          <ul className="flex flex-col">
            {groups.map((g, i) => {
              const expanded = openGroup === g.key;
              return (
                <MenuItem key={g.key} index={i}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`m-${g.key}`}
                    onClick={() => setOpenGroup(expanded ? null : g.key)}
                    className="flex min-h-11 w-full items-baseline gap-4 border-b border-border py-3 text-left text-h3 font-semibold"
                  >
                    <span className="label-mono tabular text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1">{g.label}</span>
                    <span aria-hidden="true" className="font-mono">{expanded ? "−" : "+"}</span>
                  </button>
                  <div id={`m-${g.key}`} className={cn("grid transition-[grid-template-rows] duration-300 ease-out-expo", expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <ul className="overflow-hidden" inert={!expanded}>
                      {g.items.map((it) => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            onClick={onClose}
                            aria-current={isCurrent(it.href) ? "page" : undefined}
                            className="flex min-h-11 items-center border-b border-border py-2 pl-10 text-lead aria-[current=page]:text-signal"
                          >
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MenuItem>
              );
            })}
            {navGroups.links.map((l, i) => (
              <MenuItem key={l.href} index={groups.length + i}>
                <Link
                  href={l.href}
                  onClick={onClose}
                  aria-current={isCurrent(l.href) ? "page" : undefined}
                  className="flex min-h-11 items-baseline gap-4 border-b border-border py-3 text-h3 font-semibold aria-[current=page]:text-signal"
                >
                  <span className="label-mono tabular text-muted-foreground">{String(groups.length + i + 1).padStart(2, "0")}</span>
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
