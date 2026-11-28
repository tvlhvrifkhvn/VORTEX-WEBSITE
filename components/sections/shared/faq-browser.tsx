"use client";

import { useState } from "react";
import { categories, faqFor, page } from "@/content/faq";
import { SegmentedTabs, Tabs, TabsContent } from "@/components/ui/tabs";
import { FaqList } from "./faq-list";

/* /faq: category tabs (General · File 01 · File 02 · Pricing & billing · Security) over one shared FAQ list. */
export function FaqBrowser() {
  const [tab, setTab] = useState<string>(categories[0].value);
  return (
    <Tabs value={tab} onValueChange={setTab}>
      <SegmentedTabs items={categories} value={tab} label={page.filterLabel} />
      {categories.map((c) => (
        <TabsContent key={c.value} value={c.value} className="mt-10 lg:w-3/4">
          <FaqList items={faqFor(c.value)} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
