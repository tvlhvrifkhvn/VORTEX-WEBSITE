"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { header } from "@/content/nav";
import { HeaderAutoHide } from "@/components/motion/header-auto-hide";
import { LiveClock } from "@/components/motion/live-clock";
import { DeskStatus } from "@/components/motion/desk-status";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/ui/wordmark";
import { DesktopNav } from "./desktop-nav";
import { MobileMenu } from "./mobile-menu";
import { ViewingChip, useViewing } from "./visitor-mode";
import { MobileActionBar } from "./mobile-action-bar";
import { viewing } from "@/content/nav";
import { site } from "@/content/site";
import { motion, useScroll } from "motion/react";
import { useMotion } from "@/components/motion/motion-provider";

/* §11.0 — 64px paper bar with bottom hairline; auto-hides on scroll down. Revision 2026-11-18: dropdown nav,
   desk search button, scroll-progress hairline, "viewing as" chip, mobile action bar. */
export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);
  const { mode } = useViewing();
  const { enabled } = useMotion();
  const { scrollYProgress } = useScroll();
  // Header CTA keeps the short "Book a call" label (fits 390px); only its link follows the visitor mode.
  const ctaHref = mode ? viewing.cta[mode].href : header.cta.href;

  return (
    <>
      <HeaderAutoHide pinned={open} className="border-b border-border bg-background">
        <div className="container-vx flex h-(--spacing-header) items-center justify-between gap-4">
          <Link href="/" aria-label={header.home} className="flex min-h-11 items-center">
            <Wordmark className="text-h3 hidden sm:inline" />
            <Wordmark monogram className="text-h3 sm:hidden" />
          </Link>
          <DesktopNav />
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <LiveClock className="hidden gap-4 min-[1400px]:flex" />
            <DeskStatus compact className="lg:max-xl:hidden" />
            {site.features.deskSearch && (
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("vx:search"))}
                aria-keyshortcuts="/ Control+K Meta+K"
                className="label-mono hidden min-h-11 items-center gap-2 border border-border px-3 hover:border-foreground lg:flex"
              >
                <span className="sr-only xl:not-sr-only">{header.search.toUpperCase()}</span>
                <span aria-hidden="true">{header.searchKey}</span>
              </button>
            )}
            <Button href={ctaHref} arrow={false} className="min-h-11 px-3 sm:px-4 lg:min-h-12 lg:px-5">
              {header.cta.label}
            </Button>
            <button
              ref={menuButton}
              type="button"
              aria-expanded={open}
              aria-haspopup="dialog"
              onClick={() => setOpen(true)}
              className="label-mono flex min-h-11 items-center gap-2 border border-foreground px-3 lg:hidden"
            >
              {header.menu.toUpperCase()}
              <span aria-hidden="true" className="font-sans text-lead leading-none">+</span>
            </button>
          </div>
        </div>
        {site.features.scrollProgress && enabled && (
          <motion.span aria-hidden="true" className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-signal" style={{ scaleX: scrollYProgress }} />
        )}
        {site.features.visitorMode && <ViewingChip />}
      </HeaderAutoHide>
      <MobileMenu open={open} onClose={close} returnFocus={menuButton} />
      <MobileActionBar menuOpen={open} />
    </>
  );
}
