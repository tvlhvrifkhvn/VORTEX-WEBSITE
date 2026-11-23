"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import type { FileId } from "@/content/types";
import { SegmentedTabs, Tabs, TabsContent } from "@/components/ui/tabs";

interface PricingSwitcherProps {
  tabs: { value: string; label: string }[];
  label: string;
  /** Server-rendered panel per file. */
  panels: Record<FileId, React.ReactNode>;
}

/* File toggle on /pricing: initial tab from ?file= (default 01); changes update the URL via replaceState.
   Must render inside <Suspense> (static export + useSearchParams). */
export function PricingSwitcher({ tabs, label, panels }: PricingSwitcherProps) {
  const params = useSearchParams();
  const initial = params.get("file") === "02" ? "02" : "01";
  const [file, setFile] = useState<string>(initial);

  const change = (v: string) => {
    setFile(v);
    const url = new URL(window.location.href);
    url.searchParams.set("file", v);
    window.history.replaceState(null, "", url);
  };

  return (
    <Tabs value={file} onValueChange={change}>
      <SegmentedTabs items={tabs} value={file} label={label} />
      {(Object.keys(panels) as FileId[]).map((f) => (
        <TabsContent key={f} value={f} className="mt-(--space-header) focus-visible:outline-offset-8">
          {panels[f]}
        </TabsContent>
      ))}
    </Tabs>
  );
}
