import type { FaqItem, PageMeta } from "./types";

export const meta: PageMeta = {
  title: "FAQ",
  description: "[[PLACEHOLDER: meta description for /faq/]]",
  path: "/faq/",
};

/* Filter by tag; never duplicate. Answers use confirmed facts only; promises are claims. */
export const faq: FaqItem[] = [
  {
    q: "What do you handle for real estate agents?",
    a: "MLS listings, transaction coordination, CRM upkeep, lead follow-up and cold calling, social media, fix-and-flip support, websites, SEO and Meta ads. Lead generation is available on request.",
    tags: ["home", "file01"],
  },
  {
    q: "Do you deal with the insurance company for us?",
    a: "No. We prepare estimates and documentation for the contractor. We don't negotiate with insurance carriers, represent homeowners or act as a public adjuster.",
    tags: ["home", "file02"],
  },
  {
    q: "What hours do you work?",
    a: "The desk is open Monday to Friday, 9:00 AM to 6:00 PM US Eastern. We reply during those hours.",
    tags: ["home", "general"],
    claim: true,
  },
  {
    q: "How much does it cost?",
    a: "It depends on your hours and the work involved. Book a call and we'll quote a monthly price for your workload.",
    tags: ["home", "billing"],
  },
  {
    q: "How do I pay?",
    a: "By Wise or Payoneer.",
    tags: ["home", "billing"],
  },
  {
    q: "How do we get started?",
    a: "Book a 15-minute call. We look at your workload, agree on a plan, set up access and write a checklist for each task.",
    tags: ["home", "general"],
  },
];

export const faqFor = (tag: FaqItem["tags"][number]) => faq.filter((f) => f.tags.includes(tag));
