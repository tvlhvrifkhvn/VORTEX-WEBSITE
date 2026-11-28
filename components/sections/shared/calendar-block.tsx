"use client";

import { useState } from "react";
import { calendar as c } from "@/content/book";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";

/* Calendly loads only after a click (privacy + performance). No URL yet → placeholder + email fallback. */
export function CalendarBlock() {
  const [loaded, setLoaded] = useState(false);
  const url = site.calendlyUrl;

  return (
    <div className="flex min-h-96 flex-col border border-border bg-card">
      <p className="label-mono border-b border-border px-5 py-3">{c.title}</p>
      {!url ? (
        <div data-placeholder="" className="hatch flex flex-1 flex-col justify-end gap-4 p-6">
          <p className="text-h3 font-semibold">{c.emptyTitle}</p>
          <p className="max-w-[44ch] text-muted-foreground">{c.emptyText}</p>
          <Button href={`mailto:${site.contact.email}`} variant="ghost" className="self-start">{c.email}</Button>
        </div>
      ) : loaded ? (
        <iframe src={url} title={c.frameTitle} className="h-[44rem] w-full flex-1 border-0" />
      ) : (
        <div className="flex flex-1 flex-col items-start justify-end gap-4 p-6">
          <p className="text-small text-muted-foreground">{c.privacy}</p>
          <Button onClick={() => setLoaded(true)} arrow="↓">{c.load}</Button>
        </div>
      )}
    </div>
  );
}
