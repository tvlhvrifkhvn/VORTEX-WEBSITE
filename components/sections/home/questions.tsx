import { faqSection as s } from "@/content/home";
import { faqFor } from "@/content/faq";
import { FaqSection } from "@/components/sections/shared/faq-section";

/* 09 — QUESTIONS: first 4 FAQ items tagged "home" + link to /faq. */
export function Questions() {
  return <FaqSection label={s.label} title={s.title} items={faqFor("home").slice(0, 4)} cta={s.cta} theme="paper-2" />;
}
