import Link from "next/link";
import { cn } from "@/lib/utils";
import { filesSection } from "@/content/home";
import { images } from "@/content/images";
import { addonsFor, coreFor } from "@/content/services";
import { fromText } from "@/lib/pricing";
import { viewing } from "@/content/nav";
import { Tag } from "@/components/ui/labels";
import { buttonClass } from "@/components/ui/button";
import { CornerMarks } from "@/components/ui/corner-marks";
import { SpecStrip } from "@/components/ui/spec";
import { CursorLabel } from "@/components/motion/cursor-label";
import { PanelShell } from "@/components/motion/panel-shell";
import { ScrambleText } from "@/components/motion/scramble-text";

/* Hover effects use group-hover (desktop) and group-data-[live] (touch: set once on scroll-in by PanelShell). */
/* 04 — THE FILES: two full-panel links (stretched link, one tab stop each).
   Both panels mirror each other: corner numeral, two-line title, tasks + square photo, audience strip at the bottom.
   Phone: title → square photo → tasks → button → strip. */
export function FilePanels() {
  return (
    <section aria-labelledby="files-title" className="grid lg:grid-cols-2">
      <h2 id="files-title" className="sr-only">{filesSection.srTitle}</h2>
      {filesSection.panels.map((p) => {
        const img = images[p.image];
        const core = coreFor(p.file).length;
        const addons = addonsFor(p.file).length;
        return (
          <CursorLabel key={p.file} label={filesSection.cursor} theme={p.theme} className="h-full">
            <PanelShell theme={p.theme} className="relative flex h-full min-h-[80vh] flex-col overflow-hidden px-(--spacing-margin) pt-[calc(var(--text-giant)*0.78)] pb-10">
              <span aria-hidden="true" className="pointer-events-none absolute -top-[0.12em] -right-[0.06em] text-giant font-semibold">
                <ScrambleText className="tabular">{p.file}</ScrambleText>
              </span>
              {/* Visitor mode: shown via CSS when <html data-viewing> matches (no layout shift). Bar uses the panel accent. */}
              <span aria-hidden="true" data-your-file={p.file} className="absolute inset-x-0 top-0 z-10 h-2 bg-primary" />
              <span data-your-file={p.file} className="absolute top-6 left-(--spacing-margin)">
                <Tag tone="solid">{viewing.yourFile}</Tag>
              </span>
              <p className="label-mono relative flex items-center gap-3">
                {p.tag} ·
                <span className="flex items-center gap-2">
                  <span aria-hidden="true" className="size-2 animate-blink rounded-full bg-primary" />
                  {p.status}
                </span>
              </p>

              <div className="mt-10 grid gap-x-(--spacing-gutter) gap-y-10 lg:grid-cols-[minmax(0,1fr)_38%]">
                <div className="lg:col-span-2 lg:row-start-1">
                  <h3 className="text-h2 font-semibold">
                    <Link href={p.href} className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-8 focus-visible:after:outline-current">
                      {p.titleLines.map((l) => <span key={l} className="block">{l}</span>)}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-[40ch] text-lead lg:min-h-[2lh]">{p.line}</p>
                </div>

                {/* Tall photo with the giant numeral over its top edge */}
                <div className="relative mr-3.5 ml-3.5 max-w-sm lg:col-start-2 lg:row-start-2 lg:max-w-none lg:self-start">
                  <CornerMarks className="z-20 text-primary" />
                  <div className="relative aspect-square overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element -- static export, pre-processed halftone */}
                    <img
                      src={img.src}
                      alt=""
                      width={img.width}
                      height={img.height}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover grayscale transition-[filter,transform] duration-500 ease-out-expo group-hover/panel:scale-[1.03] group-hover/panel:brightness-90 group-hover/panel:contrast-200 group-data-[live]/panel:scale-[1.03] group-data-[live]/panel:brightness-90 group-data-[live]/panel:contrast-200"
                    />
                    <span aria-hidden="true" className="absolute top-[48%] left-0 h-[22%] w-[45%] bg-signal mix-blend-multiply transition-transform duration-700 ease-in-out-quart group-hover/panel:translate-x-[122%] group-data-[live]/panel:translate-x-[122%]" />
                  </div>
                </div>

                <div className="lg:col-start-1 lg:row-start-2">
                  <ol className="flex flex-col">
                    {p.tasks.map((t, i) => (
                      <li key={t} data-row="" className="relative flex gap-4 py-3" style={{ "--row-delay": `${i * 90}ms` } as React.CSSProperties}>
                        <span aria-hidden="true" className="row-line absolute inset-x-0 top-0 h-px bg-border" />
                        <span className="row-text flex items-baseline gap-4">
                          <span
                            className="label-mono tabular px-1 text-muted-foreground transition-colors duration-300 group-hover/panel:bg-primary group-hover/panel:text-primary-foreground group-data-[live]/panel:bg-primary group-data-[live]/panel:text-primary-foreground"
                            style={{ transitionDelay: `${i * 80}ms` }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {t}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className="label-mono flex flex-wrap justify-between gap-x-4 gap-y-1 border-t border-border pt-3">
                    <span className="text-muted-foreground">{filesSection.count(core, addons)}</span>
                    <span data-claim="">{fromText(p.file)}</span>
                  </p>
                  {/* Sits above the panel's stretched link so it stays clickable (its own tab stop). */}
                  <Link href={filesSection.allJobs(p.file).href} className="label-mono relative z-10 mt-1 inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:underline">
                    {filesSection.allJobs(p.file).label} <span aria-hidden="true" className="font-sans">→</span>
                  </Link>
                  <span aria-hidden="true" className={cn(buttonClass({ variant: "primary" }), "relative mt-6 group-hover/panel:text-background group-hover/panel:before:scale-x-100")}>
                    {filesSection.cta}
                    <span className="font-sans text-body">→</span>
                  </span>
                </div>
              </div>

              <div className="relative mt-auto pt-16">
                <SpecStrip items={p.spec} />
              </div>
            </PanelShell>
          </CursorLabel>
        );
      })}
    </section>
  );
}
