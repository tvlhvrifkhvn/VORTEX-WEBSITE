"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { deskSearch as t } from "@/content/nav";
import type { SearchEntry, SearchGroup } from "@/lib/search-index";
import { MenuOverlay } from "@/components/motion/menu-overlay";

const GROUPS: SearchGroup[] = ["Pages", "Services", "FAQ", "Tools"];
const PER_GROUP = 5;

function search(index: SearchEntry[], q: string) {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return index.filter((e) => e.group === "Pages");
  return index
    .map((e) => {
      const title = e.title.toLowerCase();
      const hay = `${title} ${e.text.toLowerCase()}`;
      if (!terms.every((w) => hay.includes(w))) return null;
      const score = terms.reduce((n, w) => n + (title.startsWith(w) ? 3 : title.includes(w) ? 2 : 1), 0);
      return { e, score };
    })
    .filter((x): x is { e: SearchEntry; score: number } => x !== null)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.e);
}

/* Desk search (features.deskSearch): "/" or Ctrl/⌘+K, or a "vx:search" event from the header/menu buttons.
   Ink full-screen overlay (MenuOverlay: focus trap, Esc, scroll lock, focus return), one giant input,
   grouped results. ↑/↓ move, Enter opens. Combobox + listbox semantics; no motion required. */
export function DeskSearch({ index }: { index: SearchEntry[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const returnTo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const show = () => {
      returnTo.current = document.activeElement as HTMLElement | null;
      setQ("");
      setActive(0);
      setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      const typing = el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        show();
      } else if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        show();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("vx:search", show);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("vx:search", show);
    };
  }, []);

  const results = useMemo(() => search(index, q), [index, q]);
  const grouped = GROUPS.map((g) => ({ g, items: results.filter((r) => r.group === g).slice(0, PER_GROUP) })).filter((x) => x.items.length);
  const flat = grouped.flatMap((x) => x.items);
  const go = (e: SearchEntry | undefined) => {
    if (!e) return;
    setOpen(false);
    router.push(e.href);
  };

  return (
    <MenuOverlay open={open} onClose={() => setOpen(false)} returnFocus={returnTo} label={t.label}>
      <div className="container-vx flex min-h-full flex-col pt-6 pb-16">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
          <p id="ds-label" className="label-mono">{t.label}</p>
          <p className="label-mono text-muted-foreground">{t.hint}</p>
        </div>
        <input
          role="combobox"
          aria-expanded="true"
          aria-controls="ds-list"
          aria-labelledby="ds-label"
          aria-activedescendant={flat[active] ? `ds-opt-${active}` : undefined}
          aria-autocomplete="list"
          autoComplete="off"
          spellCheck={false}
          value={q}
          placeholder={t.placeholder}
          onChange={(e) => {
            setQ(e.target.value);
            setActive(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((a) => Math.min(a + 1, flat.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((a) => Math.max(a - 1, 0));
            } else if (e.key === "Enter") {
              e.preventDefault();
              go(flat[active]);
            }
          }}
          className="mt-8 w-full border-0 border-b-2 border-foreground bg-transparent pb-3 text-h2 font-semibold placeholder:text-muted-foreground focus-visible:outline-none md:text-display"
        />
        <div id="ds-list" role="listbox" aria-labelledby="ds-label" className="mt-10 grid gap-10 md:grid-cols-2">
          {grouped.length === 0 && <p className="label-mono text-muted-foreground">{t.empty}</p>}
          {grouped.map(({ g, items }) => (
            <div key={g} role="group" aria-labelledby={`ds-g-${g}`}>
              <p id={`ds-g-${g}`} className="label-mono border-b border-border pb-2 text-muted-foreground">{t.groups[g]}</p>
              <ul>
                {items.map((e) => {
                  const i = flat.indexOf(e);
                  return (
                    <li
                      key={`${e.group}-${e.title}`}
                      id={`ds-opt-${i}`}
                      role="option"
                      aria-selected={i === active}
                      onPointerMove={() => setActive(i)}
                      onClick={() => go(e)}
                      className={cn("flex cursor-pointer flex-col border-b border-border px-2 py-3", i === active && "bg-card")}
                    >
                      <span className="flex items-baseline justify-between gap-4 font-semibold">
                        {e.title}
                        {i === active && <span aria-hidden="true" className="font-sans text-signal">→</span>}
                      </span>
                      <span className="line-clamp-1 text-small text-muted-foreground">{e.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => setOpen(false)} className="label-mono mt-12 flex min-h-11 items-center gap-2 self-start border border-foreground px-3">
          {t.close.toUpperCase()} <span aria-hidden="true">Esc</span>
        </button>
      </div>
    </MenuOverlay>
  );
}
