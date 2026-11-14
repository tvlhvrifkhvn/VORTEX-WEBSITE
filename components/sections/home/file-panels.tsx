import Link from "next/link";
import { cn } from "@/lib/utils";
import { filesSection } from "@/content/home";
import { images } from "@/content/images";
import { servicesFor } from "@/content/services";
import { buttonClass } from "@/components/ui/button";
import { CornerMarks } from "@/components/ui/corner-marks";
import { SpecStrip } from "@/components/ui/spec";
import { CursorLabel } from "@/components/motion/cursor-label";
import { PanelShell } from "@/components/motion/panel-shell";
import { ScrambleText } from "@/components/motion/scramble-text";

/* Hover effects use group-hover (desktop) and group-data-[live] (touch: set once on scroll-in by PanelShell). */
/* 04 — THE FILES: two full-panel links (stretched link, one tab stop each).
   Desktop: content left, tall photo right with the giant numeral over its top edge; spec strip at the bottom.
   Phone: title → wide photo → tasks → button → spec strip. */
export function FilePanels() {
  return (
    <section aria-labelledby="files-title" className="grid lg:grid-cols-2">
      <h2 id="files-title" className="sr-only">{filesSection.srTitle}</h2>
      {filesSection.panels.map((p) => {
        const img = images[p.image];
        const more = servicesFor(p.file).length - p.tasks.length;
        return (
          <CursorLabel key={p.file} label={filesSection.cursor} theme={p.theme} className="h-full">
            <PanelShell theme={p.theme} className="relative flex h-full min-h-[80vh] flex-col overflow-hidden px-(--spacing-margin) pt-16 pb-10 lg:pt-(--spacing-section)">
              <p className="label-mono flex items-center gap-3">
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
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-[40ch] text-lead">{p.line}</p>
                </div>

                {/* Tall photo with the giant numeral over its top edge */}
                <div className="relative mt-10 mr-3.5 lg:col-start-2 lg:row-start-2 lg:mt-16 lg:self-start">
                  <CornerMarks className="z-20 text-primary" />
                  <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
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
                  <span aria-hidden="true" className="pointer-events-none absolute -top-[0.62em] -left-[0.05em] z-10 text-giant leading-none font-semibold lg:text-hero">
                    <ScrambleText className="tabular">{p.file}</ScrambleText>
                  </span>
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
                  {more > 0 && <p className="label-mono border-t border-border pt-3 text-muted-foreground">{filesSection.more(more)}</p>}
                  <span aria-hidden="true" className={cn(buttonClass({ variant: "primary" }), "relative mt-10 group-hover/panel:text-background group-hover/panel:before:scale-x-100")}>
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
