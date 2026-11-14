"use client";

import type { FaqItem } from "@/content/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* Accordion of FAQ items (filtered by tag upstream). Claims are marked for review mode. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="multiple" className="border-t border-border">
      {items.map((item) => (
        <AccordionItem key={item.q} value={item.q} data-claim={item.claim ? "" : undefined}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
