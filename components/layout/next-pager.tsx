"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pager } from "@/content/nav";
import { site } from "@/content/site";

/* Next-page pager (features.nextPager): full-width Swiss link above the footer on inner pages.
   The order lives in content/nav.ts → pager. */
export function NextPager() {
  const path = usePathname().replace(/\/$/, "") || "/";
  const next = pager[path];
  if (!site.features.nextPager || !next) return null;
  return (
    <nav aria-label={next.label} data-theme="paper" className="border-t border-border">
      <Link href={next.href} className="group container-vx flex flex-col gap-4 py-[calc(var(--spacing-section)/2)] hover:bg-card">
        <span className="label-mono flex items-center gap-2">
          {next.label} <span aria-hidden="true" className="font-sans">→</span>
        </span>
        <span className="flex items-baseline justify-between gap-6 text-h2 font-semibold md:text-display">
          {next.title}
          <span aria-hidden="true" className="font-sans transition-transform duration-300 ease-out-expo group-hover:translate-x-3">→</span>
        </span>
      </Link>
    </nav>
  );
}
