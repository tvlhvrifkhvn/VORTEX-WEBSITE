import Link from "next/link";
import { cn } from "@/lib/utils";
import { filesSection } from "@/content/home";
import { buttonClass } from "@/components/ui/button";
import { ImageFrame } from "@/components/ui/image-frame";
import { CursorLabel } from "@/components/motion/cursor-label";
import { ScrambleText } from "@/components/motion/scramble-text";

/* 04 — THE FILES: two full-panel links (stretched-link, one tab stop each). Hover re-scrambles the numeral. */
export function FilePanels() {
  return (
    <section aria-labelledby="files-title" className="grid lg:grid-cols-2">
      <h2 id="files-title" className="sr-only">{filesSection.srTitle}</h2>
      {filesSection.panels.map((p) => (
        <CursorLabel key={p.file} label={filesSection.cursor} theme={p.theme} className="h-full">
          <article
            data-theme={p.theme}
            data-scramble-host=""
            className="group/panel relative flex h-full min-h-[80vh] flex-col overflow-hidden px-(--spacing-margin) py-(--spacing-section)"
          >
            <span aria-hidden="true" className="pointer-events-none absolute -top-[0.12em] -right-[0.06em] text-giant font-semibold">
              <ScrambleText className="tabular">{p.file}</ScrambleText>
            </span>
            <p className="label-mono relative">{p.tag}</p>
            <h3 className="relative mt-auto pt-24 text-h2 font-semibold">
              <Link
                href={p.href}
                className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-8 focus-visible:after:outline-current"
              >
                {p.title}
              </Link>
            </h3>
            <p className="relative mt-4 max-w-[40ch] text-lead">{p.line}</p>
            <div className="relative mt-10 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
              <ol className="flex flex-col border-t border-border sm:w-1/2">
                {p.tasks.map((t, i) => (
                  <li key={t} className="flex gap-4 border-b border-border py-3">
                    <span className="label-mono tabular text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    {t}
                  </li>
                ))}
              </ol>
              <ImageFrame slot={p.image} marks={false} className="w-32 shrink-0 sm:w-36" />
            </div>
            <span
              aria-hidden="true"
              className={cn(
                buttonClass({ variant: "primary" }),
                "relative mt-10 self-start group-hover/panel:before:scale-x-100 group-hover/panel:text-background",
              )}
            >
              {filesSection.cta}
              <span className="font-sans text-body">→</span>
            </span>
          </article>
        </CursorLabel>
      ))}
    </section>
  );
}
