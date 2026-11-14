"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { files, header } from "@/content/nav";
import { ScrambleText } from "@/components/motion/scramble-text";

const isActive = (path: string, href: string) => path === href || path.startsWith(`${href}/`);

/** Active page: an 8px signal square before the label (§11.0). */
function Marker({ on }: { on: boolean }) {
  return <span aria-hidden="true" className={cn("size-2 shrink-0", on ? "bg-signal" : "bg-transparent")} />;
}

/* ≥1024px nav: FILES ▾ disclosure (both files, number, name, one-liner) + page links. */
export function DesktopNav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const filesActive = files.some((f) => isActive(path, f.href));

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      ref.current?.querySelector("button")?.focus();
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav aria-label={header.primary} className="hidden lg:block">
      <ul className="flex items-center gap-6">
        <li
          ref={ref}
          className="relative"
          onBlur={(e) => !ref.current?.contains(e.relatedTarget as Node) && setOpen(false)}
        >
          <button
            type="button"
            aria-expanded={open}
            aria-controls="files-menu"
            onClick={() => setOpen(!open)}
            className="label-mono flex min-h-11 items-center gap-2"
          >
            <Marker on={filesActive} />
            <ScrambleText>{header.filesLabel.toUpperCase()}</ScrambleText>
            <span aria-hidden="true" className={cn("font-sans transition-transform duration-150", open && "rotate-180")}>↓</span>
          </button>
          <ul
            id="files-menu"
            hidden={!open}
            data-theme="ink"
            className="absolute top-full left-0 mt-2 w-96 border border-border"
          >
            {files.map((f) => (
              <li key={f.href} className="border-b border-border last:border-b-0">
                <Link
                  href={f.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(path, f.href) ? "page" : undefined}
                  className="grid grid-cols-[3rem_1fr] gap-x-4 p-4 hover:bg-card focus-visible:bg-card"
                >
                  <span className="label-mono text-signal">{f.file}</span>
                  <span className="font-semibold">{f.label}</span>
                  <span className="col-start-2 text-small text-muted-foreground">{f.line}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        {header.nav.map((l) => {
          const on = isActive(path, l.href);
          return (
            <li key={l.href}>
              <Link href={l.href} aria-current={on ? "page" : undefined} className="label-mono flex min-h-11 items-center gap-2">
                <Marker on={on} />
                <ScrambleText>{l.label.toUpperCase()}</ScrambleText>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
