import { faqSection as s } from "@/content/home";
import { faqFor } from "@/content/faq";
import { FaqSection } from "@/components/sections/shared/faq-section";

/* 14 — QUESTIONS: FAQ items tagged "home" + link to /faq. */
export function Questions() {
  return <FaqSection label={s.label} title={s.title} items={faqFor("home")} cta={s.cta} />;
}
