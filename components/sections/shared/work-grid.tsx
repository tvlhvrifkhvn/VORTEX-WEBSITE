"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { page, sampleLabel, samples, type WorkSample } from "@/content/work";
import { SegmentedTabs, Tabs, TabsContent } from "@/components/ui/tabs";
import { ImageFrame } from "@/components/ui/image-frame";
import { FileTag, Tag } from "@/components/ui/labels";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

/** Asymmetric rhythm on desktop: 7/5, then 5/7, repeating. */
const span = (i: number) => (Math.floor(i / 2) % 2 === 0 ? (i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5") : i % 2 === 0 ? "lg:col-span-5" : "lg:col-span-7");

function Card({ s, i }: { s: WorkSample; i: number }) {
  return (
    <li className={cn("col-span-4 md:col-span-4", span(i))}>
      <Dialog>
        <DialogTrigger className="group block w-full text-left">
          <ImageFrame slot={s.image} screenshot marks={false} />
          <span className="mt-4 flex items-center gap-2">
            <FileTag file={s.file} />
            <Tag tone="signal">{sampleLabel}</Tag>
          </span>
          <span className="mt-3 block text-h3 font-semibold underline-offset-4 group-hover:underline">{s.title}</span>
          <span data-claim={s.claim ? "" : undefined} className="label-mono mt-2 block text-muted-foreground">
            {s.task} · {s.time}
          </span>
          <span className="sr-only">, {page.open}</span>
        </DialogTrigger>
        <DialogContent size="lg" closeLabel={page.close}>
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <ImageFrame slot={s.image} marks={false} />
            <div className="flex flex-col gap-6">
              <span className="flex items-center gap-2">
                <FileTag file={s.file} />
                <Tag tone="signal">{sampleLabel}</Tag>
              </span>
              <DialogTitle className="text-h3 font-semibold">{s.title}</DialogTitle>
              <div>
                <p className="label-mono text-muted-foreground">{page.doneLabel}</p>
                <DialogDescription className="mt-2">{s.done}</DialogDescription>
              </div>
              <div>
                <p className="label-mono text-muted-foreground">{page.toolsLabel}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {s.tools.map((t) => <li key={t}><Tag>{t}</Tag></li>)}
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </li>
  );
}

/* /work: filter (All / File 01 / File 02) + asymmetric grid; each card opens a lightbox dialog. */
export function WorkGrid() {
  const [filter, setFilter] = useState("all");
  const list = filter === "all" ? samples : samples.filter((s) => s.file === filter);
  return (
    <Tabs value={filter} onValueChange={setFilter}>
      <SegmentedTabs items={page.filters} value={filter} label={page.filterLabel} />
      <p aria-live="polite" className="sr-only">{page.count(list.length)}</p>
      <TabsContent value={filter}>
        <ul className="grid-vx mt-12 gap-y-16">
          {list.map((s, i) => <Card key={s.id} s={s} i={i} />)}
        </ul>
      </TabsContent>
    </Tabs>
  );
}
