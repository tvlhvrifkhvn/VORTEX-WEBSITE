import type { FaqItem, PageMeta } from "./types";

export const meta: PageMeta = {
  title: "FAQ",
  description: "[[PLACEHOLDER: meta description for /faq/]]",
  path: "/faq/",
};

/* Filled in S3/S7; filter by tag, never duplicate. */
export const faq: FaqItem[] = [];
