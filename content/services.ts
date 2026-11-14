import type { Service } from "./types";

/* Starter list from SPEC §1 — to be confirmed in intake. Summaries/includes filled in S4. */
export const services: Service[] = [
  { id: "mls-listings", file: "01", index: "01.1", title: "MLS listing management", summary: "", includes: [] },
  { id: "transaction-coordination", file: "01", index: "01.2", title: "Transaction coordination", summary: "", includes: [] },
  { id: "crm-management", file: "01", index: "01.3", title: "CRM management", summary: "", includes: [] },
  { id: "lead-follow-up", file: "01", index: "01.4", title: "Lead follow-up & cold calling", summary: "", includes: [] },
  { id: "social-media", file: "01", index: "01.5", title: "Social media management", summary: "", includes: [] },
  { id: "fix-and-flip", file: "01", index: "01.6", title: "Fix-and-flip support", summary: "", includes: [] },
  { id: "xactimate-estimates", file: "02", index: "02.1", title: "Xactimate estimates", summary: "", includes: [] },
  { id: "supplement-packages", file: "02", index: "02.2", title: "Supplement packages", summary: "", includes: [] },
  { id: "photo-documentation", file: "02", index: "02.3", title: "Photo & documentation review", summary: "", includes: [] },
  { id: "claim-tracking", file: "02", index: "02.4", title: "Claim status tracking", summary: "", includes: [] },
];

export const servicesFor = (file: Service["file"]) => services.filter((s) => s.file === file);
