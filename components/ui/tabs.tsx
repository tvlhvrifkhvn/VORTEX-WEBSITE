"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/* Segmented tabs (slot 7): Radix Tabs for keyboard/ARIA + a sliding ink indicator (motion layoutId).
   Built in-house (21st.dev retrieval quota). Use Tabs.Content for panels, or onValueChange for filters. */
export const Tabs = TabsPrimitive.Root;
export const TabsContent = TabsPrimitive.Content;

interface SegmentedListProps {
  items: { value: string; label: string }[];
  value: string;
  label: string;
  className?: string;
}

export function SegmentedTabs({ items, value, label, className }: SegmentedListProps) {
  const id = React.useId();
  return (
    <TabsPrimitive.List aria-label={label} className={cn("grid w-full border border-foreground sm:inline-flex sm:w-auto sm:flex-wrap", items.length > 3 ? "grid-cols-2" : "auto-cols-fr grid-flow-col", className)}>
      {items.map((item) => (
        <TabsPrimitive.Trigger
          key={item.value}
          value={item.value}
          className="label-mono relative isolate min-h-11 px-3 py-2 transition-colors duration-300 data-[state=active]:text-background sm:shrink-0 sm:px-4"
        >
          {value === item.value && (
            <motion.span layoutId={`seg-${id}`} className="absolute inset-0 -z-10 bg-foreground" transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }} />
          )}
          {item.label}
        </TabsPrimitive.Trigger>
      ))}
    </TabsPrimitive.List>
  );
}
