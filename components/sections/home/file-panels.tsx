import Link from "next/link";
import { cn } from "@/lib/utils";
import { filesSection } from "@/content/home";
import { images } from "@/content/images";
import { addonsFor, coreFor, services } from "@/content/services";
import { fromText } from "@/lib/pricing";
import { viewing } from "@/content/nav";
import { Tag } from "@/components/ui/labels";
import { buttonClass } from "@/components/ui/button";
import { ActionGroup } from "@/components/ui/action-group";
import { CornerMarks } from "@/components/ui/corner-marks";
import { SpecStrip } from "@/components/ui/spec";
import { rich } from "@/components/ui/text";
import { CursorLabel } from "@/components/motion/cursor-label";
import { PanelShell } from "@/components/motion/panel-shell";
import { ScrambleText } from "@/components/motion/scramble-text";

const short = (id: string) => services.find((s) => s.id === id)?.short ?? "";

/* 04 — THE FILES: two mirrored panels, one tab stop each (stretched title link; PanelShell forwards other clicks).
   Identical internal grid: label row → title → [rows · meta · actions | image] → audience strip.
   Desktop image: from the first row rule to the bottom of the button (fills the column). Phone: title → square photo → rows → actions → strip.
   Panel hover/focus: image frame 8px, signal block 12px, numeral scramble (transform only; .fx-move = off without motion).
   Row hover: index becomes a box, the row reveals the service's one line. */
export function FilePanels() {
  return (
    <section aria-labelledby="files-title" className="grid lg:grid-cols-2">
      <h2 id="files-title" className="sr-only">{filesSection.srTitle}</h2>
      {filesSection.panels.map((p) => {
        const img = images[p.image];
        return (
          <CursorLabel key={p.file} label={filesSection.cursor} theme={p.theme} className="h-full">
            <PanelShell theme={p.theme} className="relative flex h-full flex-col overflow-hidden px-(--spacing-margin) pt-[calc(var(--num)*0.8)] pb-(--space-header) [--num:calc(var(--text-giant)*1.15)]">
              <span aria-hidden="true" className="pointer-events-none absolute -top-[0.12em] -right-[0.02em] font-num text-(length:--num) leading-[0.82] font-normal">
                <ScrambleText className="tabular">{p.file}</ScrambleText>
              </span>
              {/* Visitor mode: shown via CSS when <html data-viewing> matches (no layout shift). Bar uses the panel accent. */}
              <span aria-hidden="true" data-your-file={p.file} className="absolute inset-x-0 top-0 z-10 h-2 bg-primary" />
              <span data-your-file={p.file} className="absolute top-6 left-(--spacing-margin)">
                <Tag tone="solid">{viewing.yourFile}</Tag>
              </span>

              <div className="relative flex items-baseline justify-between gap-4">
                <p className="label-mono">{p.tag}</p>
              </div>

              <div className="mt-(--space-header)">
                <h3 className="text-h2 font-semibold">
                  <Link href={p.href} data-panel-link="" className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-8 focus-visible:after:outline-current">
                    {p.titleLines.map((l) => <span key={l} className="block">{l}</span>)}
                  </Link>
                </h3>
                <p className="mt-(--space-tight) max-w-[40ch] text-lead lg:min-h-[2lh]">{rich(p.line)}</p>
              </div>

              <div className="mt-(--space-header) grid gap-x-(--spacing-gutter) gap-y-(--space-block) lg:grid-cols-[minmax(0,1fr)_45%]">
                <div className="relative mx-3.5 max-w-sm lg:col-start-2 lg:row-start-1 lg:max-w-none">
                  <CornerMarks className="z-20 text-primary" />
                  <div className="fx-move relative aspect-square overflow-hidden transition-transform duration-200 ease-out-expo group-hover/panel:translate-x-2 group-hover/panel:duration-500 group-has-[:focus-visible]/panel:translate-x-2 group-data-[live]/panel:translate-x-2 lg:aspect-auto lg:h-full">
                    {/* eslint-disable-next-line @next/next/no-img-element -- static export, pre-processed halftone */}
                    <img src={img.src} alt="" width={img.width} height={img.height} loading="lazy" decoding="async" className="size-full object-cover grayscale" />
                    <span aria-hidden="true" className="fx-move absolute top-[48%] left-0 h-[22%] w-[45%] bg-signal mix-blend-multiply transition-transform duration-200 ease-out-expo group-hover/panel:translate-x-3 group-hover/panel:duration-700 group-hover/panel:ease-in-out-quart group-has-[:focus-visible]/panel:translate-x-3 group-data-[live]/panel:translate-x-3" />
                  </div>
                </div>

                <div className="flex flex-col lg:col-start-1 lg:row-start-1">
                  <ol className="flex flex-col">
                    {p.tasks.map((t, i) => (
                      <li key={t.label} data-row="" className="group/row relative py-3" style={{ "--row-delay": `${i * 90}ms` } as React.CSSProperties}>
                        <span aria-hidden="true" className="row-line absolute inset-x-0 top-0 h-px bg-border" />
                        <span className="row-text flex items-baseline gap-4">
                          <span className="label-mono tabular px-1 text-muted-foreground transition-colors duration-300 group-hover/row:bg-primary group-hover/row:text-primary-foreground">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block">{t.label}</span>
                            <span className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out-expo group-hover/row:grid-rows-[1fr]">
                              <span className="overflow-hidden">
                                <span className="block truncate pt-1 text-small leading-5 text-muted-foreground">{short(t.service)}</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </li>
                    ))}
                  </ol>
                  {/* Always two lines, so both panels keep identical heights at every width. */}
                  <p className="label-mono flex flex-col gap-1 border-t border-border pt-3">
                    <span className="text-muted-foreground">{filesSection.count(coreFor(p.file).length, addonsFor(p.file).length)}</span>
                    <span data-claim="">{fromText(p.file)}</span>
                  </p>
                  {/* One action: the panel link (Open file → the file page lists every job). */}
                  <ActionGroup className="relative z-10 mt-auto pt-(--space-block)">
                    <span aria-hidden="true" className={cn(buttonClass({ variant: "primary" }), "group-hover/panel:text-background group-hover/panel:before:scale-x-100 group-has-[:focus-visible]/panel:text-background group-has-[:focus-visible]/panel:before:scale-x-100")}>
                      {filesSection.cta}
                      <span className="font-sans text-body">→</span>
                    </span>
                  </ActionGroup>
                </div>
              </div>

              <div className="relative mt-auto pt-(--space-header)">
                <SpecStrip items={p.spec} />
              </div>
            </PanelShell>
          </CursorLabel>
        );
      })}
    </section>
  );
}
