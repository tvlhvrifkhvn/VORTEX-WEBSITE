import { faqSection as s } from "@/content/home";
import { faqFor } from "@/content/faq";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { FaqList } from "@/components/sections/shared/faq-list";

/* 14 — QUESTIONS: FAQ items tagged "home" + link to /faq. */
export function Questions() {
  const items = faqFor("home");
  return (
    <Section aria-labelledby="faq-title">
      <SectionHeader id="faq-title" label={s.label} meta={`${items.length} items`} title={s.title} layout="split" />
      <div className="grid-vx">
        <div className="col-span-4 md:col-span-8 lg:col-span-9">
          <FaqList items={items} />
          <Button href={s.cta.href} variant="ghost" size="lg" className="mt-10">{s.cta.label}</Button>
        </div>
      </div>
    </Section>
  );
}
