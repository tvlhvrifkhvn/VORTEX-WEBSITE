"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

/* Segmented tabs (slot 7): Radix Tabs for keyboard/ARIA; the active segment fills ink (300ms color transition).
   Built in-house (21st.dev retrieval quota). Use Tabs.Content for panels, or onValueChange for filters. */
export const Tabs = TabsPrimitive.Root;
export const TabsContent = TabsPrimitive.Content;

interface SegmentedListProps {
  items: { value: string; label: string }[];
  /** Current value (kept for callers; the active state comes from Radix). */
  value?: string;
  label: string;
  className?: string;
}

export function SegmentedTabs({ items, label, className }: SegmentedListProps) {
  return (
    <TabsPrimitive.List aria-label={label} className={cn("grid w-full border border-foreground sm:inline-flex sm:w-auto sm:flex-wrap", items.length > 3 ? "grid-cols-2" : "auto-cols-fr grid-flow-col", className)}>
      {items.map((item) => (
        <TabsPrimitive.Trigger
          key={item.value}
          value={item.value}
          className="label-mono min-h-11 px-3 py-2 transition-colors duration-300 ease-in-out-quart hover:bg-card data-[state=active]:bg-foreground data-[state=active]:text-background sm:shrink-0 sm:px-4"
        >
          {item.label}
        </TabsPrimitive.Trigger>
      ))}
    </TabsPrimitive.List>
  );
}
