import type { Metadata } from "next";
import { notFound as n } from "@/content/not-found";
import { Section } from "@/components/ui/section";
import { ActionGroup } from "@/components/ui/action-group";
import { Button } from "@/components/ui/button";
import { ImageFrame } from "@/components/ui/image-frame";

export const metadata: Metadata = { title: n.title, robots: { index: false } };

/* 404 (§11.13): cropped giant 404, expired-listing label, two ways back. */
export default function NotFound() {
  return (
    <Section aria-labelledby="nf-title" className="relative overflow-hidden">
      <span aria-hidden="true" data-numeral={n.numeral} className="pointer-events-none absolute -bottom-[0.2em] -left-[0.04em] text-giant font-semibold text-foreground/10 tabular select-none before:content-[attr(data-numeral)]" />
      <div className="relative grid-vx gap-y-12 pb-24">
        <div className="col-span-4 flex flex-col gap-8 md:col-span-5 lg:col-span-7">
          <p className="label-mono">{n.label}</p>
          <h1 id="nf-title" className="text-h2 font-semibold md:text-display">{n.h1}</h1>
          <p className="max-w-[44ch] text-lead text-muted-foreground">{n.text}</p>
          <ActionGroup>
            <Button href={n.home.href} size="lg">{n.home.label}</Button>
            <Button href={n.call.href} size="lg" variant="ghost">{n.call.label}</Button>
          </ActionGroup>
        </div>
        <ImageFrame slot="notfound-object" block="left" className="col-span-3 md:col-span-3 lg:col-span-3 lg:col-start-10" />
      </div>
    </Section>
  );
}
