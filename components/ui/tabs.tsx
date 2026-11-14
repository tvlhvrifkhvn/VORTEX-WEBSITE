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
    <TabsPrimitive.List aria-label={label} className={cn("inline-flex max-w-full overflow-x-auto border border-foreground", className)}>
      {items.map((item) => (
        <TabsPrimitive.Trigger
          key={item.value}
          value={item.value}
          className="label-mono relative isolate min-h-11 shrink-0 px-4 transition-colors duration-300 data-[state=active]:text-background"
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
