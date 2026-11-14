"use client";

import { form as f, resources } from "@/content/resources";
import { ImageFrame } from "@/components/ui/image-frame";
import { FileTag } from "@/components/ui/labels";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ResourceForm } from "./resource-form";

/* Three checklist cards; each CTA opens an email-gate dialog. */
export function ResourceCards() {
  return (
    <ul className="grid gap-(--spacing-gutter) md:grid-cols-3">
      {resources.map((r, i) => (
        <li key={r.id} className="flex flex-col border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <span className="label-mono tabular text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            <FileTag file={r.file} />
          </div>
          <ImageFrame slot="resources-object" marks={false} block={i % 2 ? "left" : "right"} className="mx-auto mt-6 w-1/2" />
          <h2 className="mt-6 text-h3 font-semibold">{r.title}</h2>
          <p className="mt-3 text-muted-foreground">{r.text}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-auto self-start" arrow="↓">
                {f.cta}
                <span className="sr-only">: {r.title}</span>
              </Button>
            </DialogTrigger>
            <DialogContent closeLabel={f.close}>
              <FileTag file={r.file} />
              <DialogTitle className="mt-4 text-h3 font-semibold">{r.title}</DialogTitle>
              <DialogDescription className="mt-3 text-muted-foreground">{f.text}</DialogDescription>
              <ResourceForm resourceId={r.id} />
            </DialogContent>
          </Dialog>
        </li>
      ))}
    </ul>
  );
}
