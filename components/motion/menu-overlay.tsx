"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
  /** Element to return focus to on close (the Menu button). */
  returnFocus: React.RefObject<HTMLElement | null>;
  label: string;
  children: React.ReactNode;
  className?: string;
}

/* §6.2.16 — full-screen ink overlay: focus trap, Esc closes, body scroll lock, focus returns.
   Links use <MenuItem> to stagger in (y 24 → 0, 40ms). */
export function MenuOverlay({ open, onClose, returnFocus, label, children, className }: MenuOverlayProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const el = ref.current!;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () => Array.from(el.querySelectorAll<HTMLElement>("a[href],button:not([disabled]),[tabindex]:not([tabindex='-1'])"));
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;
      const list = focusables();
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const button = returnFocus.current;
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      button?.focus();
    };
  }, [open, onClose, returnFocus]);

  if (!open) return null;
  return (
    <motion.div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      data-theme="ink"
      className={cn("fixed inset-0 z-60 overflow-y-auto", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

/** Wrap each menu link for the stagger-in. */
export function MenuItem({ index, children }: { index: number; children: React.ReactNode }) {
  return (
    <motion.li initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + index * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.li>
  );
}
