"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useMedia } from "./use-media";

export interface RevealRow { id: string; index: string; title: string; summary?: string; includesLabel: string; includes: string[]; claim?: true; extra?: React.ReactNode }

/* §6.2.11 — service rows. Header is a <button aria-expanded>; fine pointers also expand on hover.
   Expansion via grid-template-rows 0fr → 1fr (300ms). */
export function HoverRevealList({ rows, className }: { rows: RevealRow[]; className?: string }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const fine = useMedia("(hover: hover) and (pointer: fine)");

  // Deep links (e.g. /real-estate-va#mls-listings from the home bento) open their row.
  useEffect(() => {
    const open = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (rows.some((r) => r.id === id)) setOpenId(id);
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, [rows]);

  return (
    <ul className={cn("border-t border-border", className)}>
      {rows.map((row) => {
        const open = openId === row.id || (fine && hoverId === row.id);
        const panel = `${row.id}-panel`;
        return (
          <li
            key={row.id}
            id={row.id}
            data-claim={row.claim ? "" : undefined}
            className="group border-b border-border"
            onMouseEnter={() => fine && setHoverId(row.id)}
            onMouseLeave={() => fine && setHoverId(null)}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panel}
              onClick={() => setOpenId(openId === row.id ? null : row.id)}
              className="grid-vx min-h-11 w-full items-baseline py-6 text-left"
            >
              <span className={cn("label-mono tabular col-span-1 w-fit px-1 text-muted-foreground transition-colors duration-150", open && "bg-signal text-ink")}>
                {row.index}
              </span>
              <span className={cn("col-span-2 text-h3 font-semibold transition-transform duration-300 ease-out-expo md:col-span-6 lg:col-span-10", open && "translate-x-2")}>
                {row.title}
              </span>
              <span aria-hidden="true" className="col-span-1 justify-self-end text-h3">
                {open ? "↓" : "→"}
              </span>
            </button>
            <div id={panel} className={cn("grid transition-[grid-template-rows] duration-300 ease-out-expo", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden" inert={!open}>
                <div className="grid-vx pb-8">
                  <div className="col-span-4 md:col-start-2 md:col-span-6 lg:col-span-6">
                    {row.summary && <p className="max-w-[60ch] text-lead">{row.summary}</p>}
                    <p className="label-mono mt-6 text-muted-foreground">{row.includesLabel}</p>
                    <ul className="mt-3 flex flex-col gap-2">
                      {row.includes.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span aria-hidden="true">+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {row.extra && <div className="col-span-4 mt-6 md:col-span-3 lg:col-span-4 lg:col-start-9 lg:mt-0">{row.extra}</div>}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
