import type { Service } from "./types";

/* Confirmed in intake (2026-11-14). Summaries written in S2; includes filled in S4. */
export const services: Service[] = [
  { id: "mls-listings", file: "01", index: "01.1", title: "MLS listing management", summary: "New listings entered, photos uploaded and status changes posted, checked against your listing checklist.", includes: [], featured: true },
  { id: "transaction-coordination", file: "01", index: "01.2", title: "Transaction coordination", summary: "Contract-to-close deadlines tracked, documents chased and every party kept on schedule.", includes: [], featured: true },
  { id: "crm-management", file: "01", index: "01.3", title: "CRM management", summary: "Contacts cleaned, leads tagged and pipelines kept current in the CRM you already use.", includes: [] },
  { id: "lead-follow-up", file: "01", index: "01.4", title: "Lead follow-up & cold calling", summary: "Calls, texts and emails to your lead list, every touch logged in your CRM.", includes: [] },
  { id: "social-media", file: "01", index: "01.5", title: "Social media management", summary: "Listing posts and market updates drafted, scheduled and published to your accounts.", includes: [] },
  { id: "fix-and-flip", file: "01", index: "01.6", title: "Fix-and-flip support", summary: "Deal analysis prep, contractor scheduling and budget tracking for investor projects.", includes: [] },
  { id: "web-development", file: "01", index: "01.7", title: "Web development", summary: "Agent websites and landing pages built and kept up to date.", includes: [] },
  { id: "seo", file: "01", index: "01.8", title: "SEO", summary: "Local search basics for your site and listings: pages, profiles and content.", includes: [] },
  { id: "meta-ads", file: "01", index: "01.9", title: "Meta ads", summary: "Facebook and Instagram ad campaigns set up and monitored for listings and leads.", includes: [] },
  { id: "lead-generation", file: "01", index: "01.10", title: "Lead generation", summary: "Targeted lead lists built and qualified for your market, on request.", includes: [], onRequest: true },
  { id: "xactimate-estimates", file: "02", index: "02.1", title: "Xactimate estimates", summary: "Line-item estimates written in Xactimate from your photos, measurements and scope.", includes: [], featured: true },
  { id: "supplement-packages", file: "02", index: "02.2", title: "Supplement packages", summary: "Missing and under-scoped items documented with photos, codes and notes for each claim.", includes: [], featured: true },
  { id: "photo-documentation", file: "02", index: "02.3", title: "Photo & documentation review", summary: "Job photos sorted, labelled and matched to the line items they support.", includes: [] },
  { id: "claim-tracking", file: "02", index: "02.4", title: "Claim status tracking", summary: "Every open claim tracked from submission to response, with next steps listed.", includes: [] },
];

export const servicesFor = (file: Service["file"]) => services.filter((s) => s.file === file);
