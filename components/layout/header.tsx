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

/* §11.0 — 64px paper bar with bottom hairline; auto-hides on scroll down. */
export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);

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
            <LiveClock className="hidden gap-4 xl:flex" />
            <DeskStatus compact />
            <Button href={header.cta.href} arrow={false} className="min-h-11 px-3 sm:px-4 lg:min-h-12 lg:px-5">
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
      </HeaderAutoHide>
      <MobileMenu open={open} onClose={close} returnFocus={menuButton} />
    </>
  );
}
