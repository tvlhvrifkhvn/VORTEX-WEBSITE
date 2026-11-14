import type { PageMeta } from "./types";
import { fromText } from "@/lib/pricing";

export const meta: PageMeta = {
  title: "Real Estate Virtual Assistant",
  description:
    "A real estate virtual assistant for US agents, teams and investors: MLS listings, transaction coordination, CRM and lead follow-up, on US hours.",
  path: "/real-estate-va/",
};

export const header = {
  crumbs: [{ label: "File 01" }, { label: "Real Estate VA" }],
  numeral: "01",
  tag: "File 01 · Listing no. 001 · Status: Active",
  lines: ["Real estate", "back office,", "handled."],
  lead: "MLS listings, transaction coordination, CRM and follow-up for US agents, teams and investors.",
  specCaption: "Listing sheet",
  spec: [
    { key: "Hours", value: "20 or 40 per week" },
    { key: "Coverage", value: "US business hours (ET)" },
    { key: "Start", value: "About 1 week", claim: true as const },
    { key: "Contract", value: "Monthly", claim: true as const },
    { key: "Works in", value: "MLS, Zillow, Follow Up Boss, HubSpot" },
    { key: "Price", value: fromText("01"), claim: true as const },
  ],
  primary: { label: "Schedule a showing", href: "/book-a-call?file=01" },
  secondary: { label: "See pricing", href: "/pricing?file=01" },
};

export const sections = {
  services: { label: "01.1 — Property details", title: "What your VA takes off your plate" },
  addons: { label: "01.1b — Add-ons (on request)", title: "Extras for File 01 clients", lead: "Available to existing File 01 clients. Not sold on their own.", tag: "Add-on" },
  audience: {
    label: "01.2 — Who it’s for",
    title: "Built for three kinds of operators",
    handoff: "Typical hand-off",
    groups: [
      { title: "Solo agents", text: "You sell. We keep the listings, paperwork and follow-up moving.", items: ["MLS entry and updates", "Showing confirmations", "CRM follow-up", "Social posts"] },
      { title: "Teams & brokerages", text: "One desk that keeps every agent’s files on the same checklist.", items: ["Transaction coordination", "Lead routing in the CRM", "Listing quality checks", "Weekly pipeline cleanup"] },
      { title: "Investors & flippers", text: "Numbers, schedules and vendors tracked while you find the next deal.", items: ["Comps and deal numbers", "Contractor scheduling", "Budget and draw tracking", "Lead lists on request"] },
    ],
  },
  timeline: {
    label: "01.3 — Closing timeline",
    meta: "3 steps",
    title: "From first call to live in about a week",
    titleClaim: true as const,
    steps: [
      { n: "01", title: "Offer", text: "A 15-minute call. We look at your workload and pick a plan." },
      { n: "02", title: "Inspection", text: "Setup week. You share access; we write a checklist for every task." },
      { n: "03", title: "Closed", text: "Live on a monthly plan, with a written report every day." },
    ],
    cta: { label: "Schedule a showing", href: "/book-a-call?file=01" },
  },
  week: {
    label: "01.4 — A week at the desk",
    title: "What a normal week looks like",
    sample: "Sample",
    days: [
      { day: "Mon", tasks: ["Weekend leads tagged and followed up", "New listing entered in MLS", "Weekly pipeline review"] },
      { day: "Tue", tasks: ["Showing requests confirmed", "Inspection deadline reminders", "Just-listed post scheduled"] },
      { day: "Wed", tasks: ["Price change posted", "Documents chased for two files", "Cold-call block, logged in CRM"] },
      { day: "Thu", tasks: ["Appraisal date confirmed", "CRM cleanup: duplicates merged", "Market update post drafted"] },
      { day: "Fri", tasks: ["Closing checklist updated", "Follow-up texts scheduled for the weekend", "Weekly summary sent"] },
    ],
  },
  pricing: { label: "01.5 — Floor plans", title: "Pick your hours" },
  comps: { label: "01.6 — Comps", title: "Run the comps before you hire" },
  faq: { label: "01.7 — Disclosures", title: "Questions agents ask", cta: { label: "All questions", href: "/faq" } },
};

export const cta = {
  label: "Next step",
  title: "Ready to list your workload?",
  text: "15 minutes. We look at your listings, files and follow-up and tell you honestly what we can take on.",
  primary: { label: "Schedule a showing", href: "/book-a-call?file=01" },
  secondary: { label: "See pricing", href: "/pricing?file=01" },
};
