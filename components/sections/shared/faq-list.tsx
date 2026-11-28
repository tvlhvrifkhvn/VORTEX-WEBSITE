"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/content/types";
import { faqBlock, faqRelated } from "@/content/faq";
import { rich } from "@/components/ui/text";
import { useMedia } from "@/components/motion/use-media";

const COLS = "grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 px-2";

/* FAQ accordion (all FAQ blocks): 01–NN mono index, question, "+" turning to "×" (300ms).
   Hover/focus: row takes the card colour, index becomes an accent box. Answer opens with the
   grid-rows technique (closed = inert) and ends with a "Related: page →" link. One open at a time ≥1024px. */
export function FaqList({ items }: { items: FaqItem[] }) {
  const uid = useId();
  const path = usePathname().replace(/\/$/, "");
  const single = useMedia("(min-width: 64rem)");
  const [open, setOpen] = useState<number[]>([]);
  const toggle = (i: number) => setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : single ? [i] : [...o, i]));

  return (
    <ul className="border-t border-border">
      {items.map((item, i) => {
        const on = open.includes(i);
        const tag = item.tags.find((t) => t !== "home");
        const rel = tag ? faqRelated[tag] : undefined;
        const showRel = rel && rel.href.split("#")[0] !== path;
        return (
          <li key={item.q} data-claim={item.claim ? "" : undefined} className="border-b border-border">
            <h3>
              <button
                type="button"
                id={`${uid}-q${i}`}
                aria-expanded={on}
                aria-controls={`${uid}-a${i}`}
                onClick={() => toggle(i)}
                className={cn(COLS, "group/q min-h-11 w-full grid-cols-[2.25rem_minmax(0,1fr)_auto] items-baseline py-5 text-left transition-colors duration-300 hover:bg-card focus-visible:bg-card")}
              >
                <span className="label-mono tabular w-fit px-1 text-muted-foreground transition-colors duration-300 group-hover/q:bg-primary group-hover/q:text-primary-foreground group-focus-visible/q:bg-primary group-focus-visible/q:text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lead font-semibold">{item.q}</span>
                <span aria-hidden="true" className={cn("font-mono text-lead leading-none transition-transform duration-300 ease-out-expo", on && "rotate-45")}>+</span>
              </button>
            </h3>
            <div
              id={`${uid}-a${i}`}
              role="region"
              aria-labelledby={`${uid}-q${i}`}
              inert={!on}
              className={cn("grid transition-[grid-template-rows] duration-300 ease-out-expo", on ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <div className={cn(COLS, "pb-6")}>
                  <div className="col-start-2">
                    <p className="max-w-[60ch] text-muted-foreground">{rich(item.a)}</p>
                    {showRel && (
                      <Link href={rel.href} className="label-mono mt-(--space-tight) flex min-h-11 w-fit items-center gap-2 underline-offset-4 hover:underline">
                        {faqBlock.related}: {rel.label} <span aria-hidden="true" className="font-sans">→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
