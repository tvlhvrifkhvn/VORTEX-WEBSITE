"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

/* From 21st.dev shadcn/accordion (Radix). Restyled: hairlines, square, mono index slot,
   "+"/"−" glyph instead of chevron, content fades/slides in (transform/opacity only). */
export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item className={cn("border-b border-border", className)} {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn("group/acc flex min-h-11 flex-1 items-baseline justify-between gap-6 py-5 text-left text-lead font-semibold", className)}
        {...props}
      >
        {children}
        <span aria-hidden="true" className="font-mono text-lead leading-none">
          <span className="group-data-[state=open]/acc:hidden">+</span>
          <span className="hidden group-data-[state=open]/acc:inline">−</span>
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden data-[state=closed]:animate-content-out data-[state=open]:animate-content-in"
      {...props}
    >
      <div className={cn("max-w-[64ch] pb-6 text-muted-foreground", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
