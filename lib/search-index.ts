import { meta as home } from "@/content/home";
import { meta as realEstate } from "@/content/real-estate";
import { meta as supplementing } from "@/content/supplementing";
import { meta as pricing } from "@/content/pricing";
import { meta as calculator } from "@/content/calculator";
import { meta as work } from "@/content/work";
import { meta as howWeWork } from "@/content/how-we-work";
import { meta as about } from "@/content/about";
import { meta as resources } from "@/content/resources";
import { meta as book } from "@/content/book";
import { meta as faqMeta, faq } from "@/content/faq";
import { services, servicesPage } from "@/content/services";
import { tools } from "@/content/tools";

/* Desk search index, built from content/ at build time (static export) and passed to the client palette. */
export type SearchGroup = "Pages" | "Services" | "FAQ" | "Tools";
export interface SearchEntry { group: SearchGroup; title: string; text: string; href: string }

const pages = [home, realEstate, supplementing, servicesPage.meta, pricing, calculator, work, howWeWork, about, resources, book, faqMeta];

export function buildSearchIndex(): SearchEntry[] {
  return [
    ...pages.map((p) => ({ group: "Pages" as const, title: p.path === "/" ? "Home" : p.title, text: p.description, href: p.path })),
    ...services.map((s) => ({ group: "Services" as const, title: s.title, text: `File ${s.file}${s.tier === "addon" ? " · add-on" : ""} · ${s.summary}`, href: `/services#${s.id}` })),
    ...faq.filter((f) => !f.a.includes("[[PLACEHOLDER")).map((f) => ({ group: "FAQ" as const, title: f.q, text: f.a, href: "/faq/" })),
    ...tools.map((t) => ({ group: "Tools" as const, title: t.name, text: t.file === "both" ? "Both files" : `File ${t.file}`, href: "/how-we-work#tools-grid-title" })),
  ];
}
