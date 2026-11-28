"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { files, header, navGroups, type NavItem } from "@/content/nav";
import { coreFor } from "@/content/services";
import { ScrambleText } from "@/components/motion/scramble-text";
import { useMedia } from "@/components/motion/use-media";

type Group = "files" | "how" | "pricing";
const GROUPS: Group[] = ["files", "how", "pricing"];
const clean = (href: string) => href.split("#")[0].replace(/\/$/, "") || "/";
const isActive = (path: string, href: string) => {
  const p = path.replace(/\/$/, "") || "/";
  const h = clean(href);
  return p === h || (h !== "/" && p.startsWith(`${h}/`));
};

function Marker({ on }: { on: boolean }) {
  return <span aria-hidden="true" className={cn("size-2 shrink-0", on ? "bg-signal" : "bg-transparent")} />;
}

const itemCls = "group/item block border-t border-border py-4 hover:bg-card focus-visible:bg-card";

/** One-column list panel (How we work, Pricing): giant index, label, one line. */
function ListPanel({ items, close }: { items: NavItem[]; close: () => void }) {
  return (
    <ul className={cn("grid gap-x-(--spacing-gutter)", items.length > 3 ? "grid-cols-5" : "grid-cols-3")}>
      {items.map((it, i) => (
        <li key={it.href}>
          <Link href={it.href} onClick={close} className={itemCls}>
            <span className="text-h2 font-semibold tabular text-muted-foreground group-hover/item:text-signal">{String(i + 1).padStart(2, "0")}</span>
            <span className="mt-4 block text-lead font-semibold">{it.label}</span>
            {it.text && <span className="mt-1 block text-small text-muted-foreground">{it.text}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Files panel: two columns (one per file: its core jobs + "Open file"), then "All services". */
function FilesPanel({ close }: { close: () => void }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-(--spacing-gutter)">
        {files.map((f) => (
          <div key={f.href} className="border-t border-border pt-4">
            <div className="flex items-baseline gap-4">
              <span className="text-display font-semibold tabular text-signal">{f.file}</span>
              <div>
                <p className="text-h3 font-semibold">{f.label}</p>
                <p className="text-small text-muted-foreground">{f.line}</p>
              </div>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-x-6">
              {coreFor(f.file!).map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} onClick={close} className="flex min-h-11 items-center gap-3 border-b border-border hover:text-signal">
                    <span className="label-mono tabular text-muted-foreground">{s.index}</span>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={f.href} onClick={close} className="label-mono mt-4 inline-flex min-h-11 items-center gap-2 hover:text-signal">
              {navGroups.files.openFile} <span aria-hidden="true" className="font-sans">→</span>
            </Link>
          </div>
        ))}
      </div>
      <Link href={navGroups.files.allServices.href} onClick={close} className="label-mono mt-4 flex min-h-11 items-center gap-2 border-t border-border pt-2 hover:text-signal">
        {navGroups.files.allServices.label} <span aria-hidden="true" className="font-sans">→</span>
      </Link>
    </div>
  );
}

/* ≥1024px nav: FILES ▾ · HOW WE WORK ▾ · PRICING ▾ · ABOUT · FAQ. Panels are full-width ink sheets under the
   header (positioned against the sticky header). Hover opens them on mouse devices; click/Enter/Space/↓
   toggles and moves focus into the panel; Esc, outside click or tabbing away closes. */
export function DesktopNav() {
  const path = usePathname();
  const [open, setOpen] = useState<Group | null>(null);
  const [focusInto, setFocusInto] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const canHover = useMedia("(hover: hover) and (pointer: fine)");
  const close = () => setOpen(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => !ref.current?.contains(e.target as Node) && setOpen(null);
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      document.getElementById(`nav-${open}`)?.focus();
      setOpen(null);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open || !focusInto) return;
    document.getElementById(`panel-${open}`)?.querySelector<HTMLElement>("a")?.focus();
  }, [open, focusInto]);

  const toggle = (g: Group, viaKey: boolean) => {
    setFocusInto(viaKey || open !== g);
    setOpen(open === g ? null : g);
  };
  const hoverIn = (g: Group) => {
    if (!canHover) return;
    window.clearTimeout(timer.current);
    setFocusInto(false);
    setOpen(g);
  };
  const hoverOut = () => {
    if (!canHover) return;
    timer.current = window.setTimeout(() => setOpen(null), 160);
  };

  const groupActive = (g: Group) =>
    g === "files" ? [...files.map((f) => f.href), "/services"].some((h) => isActive(path, h)) : navGroups[g].items.some((it) => isActive(path, it.href));

  return (
    <nav ref={ref} aria-label={header.primary} className="hidden lg:block">
      <ul className="flex items-center gap-4 xl:gap-6">
        {GROUPS.map((g) => (
          <li
            key={g}
            onPointerEnter={() => hoverIn(g)}
            onPointerLeave={hoverOut}
            onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node) && open === g && setOpen(null)}
          >
            <button
              id={`nav-${g}`}
              type="button"
              aria-expanded={open === g}
              aria-controls={`panel-${g}`}
              onClick={(e) => toggle(g, e.detail === 0)}
              onKeyDown={(e) => {
                if (e.key !== "ArrowDown") return;
                e.preventDefault();
                setFocusInto(true);
                setOpen(g);
              }}
              className="label-mono flex min-h-11 items-center gap-2"
            >
              <Marker on={groupActive(g)} />
              <ScrambleText>{navGroups[g].label.toUpperCase()}</ScrambleText>
              <span aria-hidden="true" className={cn("font-sans transition-transform duration-150", open === g && "rotate-180")}>↓</span>
            </button>
            <div id={`panel-${g}`} hidden={open !== g} data-theme="ink" className="absolute inset-x-0 top-full border-b border-border">
              <div className="container-vx py-10">
                {g === "files" ? <FilesPanel close={close} /> : <ListPanel items={navGroups[g].items} close={close} />}
              </div>
            </div>
          </li>
        ))}
        {navGroups.links.map((l) => {
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
