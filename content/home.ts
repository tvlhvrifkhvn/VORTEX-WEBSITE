import type { PageMeta, Stat } from "./types";

export const meta: PageMeta = {
  title: "Real estate VA and insurance supplementing from one desk",
  description:
    "Real estate admin and Xactimate insurance supplementing for US agents and contractors, done by a founder-run specialist desk on US hours.",
  path: "/",
};

/* 01 — THE DESK */
export const hero = {
  meta: [
    { title: "VortexOne", line: "Back office desk" },
    { title: "Islamabad → United States", line: "33.6844°N 73.0479°E" },
    { title: "File 01 + File 02", line: "Real estate · Supplementing" },
  ],
  lines: ["Back office for", "the people who sell", "and rebuild property."],
  lead: "Real estate admin and insurance supplementing for US agents and contractors, done by a specialist on your hours.",
  strip: [
    { text: "On US hours" },
    { text: "Founder-run" },
    { text: "Monthly, no lock-in", claim: true as const },
  ],
  ctas: {
    agent: { label: "I'm an agent", href: "/real-estate-va" },
    contractor: { label: "I'm a contractor", href: "/insurance-supplementing" },
    call: { label: "or book a 15-min call", href: "/book-a-call" },
  },
  rotated: "VortexOne — Back office desk — No. 001",
};

/* 02 — WORKS INSIDE */
export const toolsSection = { label: "02 — Works inside", srTitle: "Tools we work in" };

/* 03 — BY THE NUMBERS */
export const statsSection = {
  label: "03 — By the numbers",
  meta: "06 items",
  title: "Small desk. Clear numbers.",
  stats: {
    capacity: { value: 40, suffix: " hrs/wk", label: "Full-time capacity, one specialist.", claim: true },
    reply: { value: "Same", suffix: " day", label: "Replies on business days, during desk hours.", claim: true },
    files: { value: 2, suffix: " files", label: "Two specialist lines. Nothing else." },
    founder: { value: 1, suffix: " founder", label: "The person you talk to does the work.", claim: true },
    hours: { value: "9–6", suffix: " ET", label: "Desk hours, Monday to Friday, US Eastern." },
  } satisfies Record<string, Stat>,
  /* Tile C: no public prices → "Run the numbers" tile instead of a computed savings % (SPEC §11.1). */
  run: { label: "Savings", title: "What would an in-house assistant cost you?", cta: "Run the numbers", href: "/savings-calculator" },
};

/* 04 — THE FILES */
export const filesSection = {
  srTitle: "The two files",
  cursor: "Open file →",
  cta: "Open file",
  panels: [
    {
      file: "01" as const,
      tag: "File 01 · Listing no. 001 · Active",
      title: "Real Estate VA",
      line: "Listings, transactions and follow-up, off your plate.",
      tasks: ["MLS listings", "Transaction deadlines", "CRM & follow-up", "Social posts"],
      href: "/real-estate-va",
      image: "file01-object" as const,
      theme: "ink" as const,
    },
    {
      file: "02" as const,
      tag: "File 02 · Claim no. 002 · Open",
      title: "Insurance Supplementing",
      line: "Xactimate supplements, documented line by line.",
      tasks: ["Xactimate estimates", "Supplement packages", "Photo documentation", "Status tracking"],
      href: "/insurance-supplementing",
      image: "file02-object" as const,
      theme: "signal" as const,
    },
  ],
};

/* 05 — EVERYTHING ON THE DESK */
export const servicesSection = {
  label: "05 — Everything on the desk",
  title: "Fourteen jobs. Two files. One desk.",
  lead: "Each job links to the full scope on its file page.",
  onRequest: "On request",
};

/* 06 — YOUR DAY, OUR NIGHT SHIFT */
export const shiftSection = {
  label: "06 — Your day, our night shift",
  meta: "Sample shift",
  title: "Your day. Our night shift.",
  lead: "Your morning in the US is our evening in Islamabad. Here's a sample shift.",
  from: "Islamabad",
  to: "ET",
  steps: [
    { time: "19:00", title: "Overnight inbox triaged", text: "New leads tagged in your CRM; urgent emails flagged for you." },
    { time: "20:30", title: "Listings go live", text: "MLS entry, photos and descriptions checked against the listing checklist." },
    { time: "22:00", title: "Deadlines checked", text: "Inspection, appraisal and closing dates confirmed on every open file." },
    { time: "23:30", title: "Supplement drafted", text: "Missing line items built in Xactimate from the contractor's photos and measurements." },
    { time: "01:00", title: "Follow-up sent", text: "Calls, texts and emails to your lead list, all logged in the CRM." },
    { time: "03:00", title: "End-of-day report", text: "What's done, what's waiting on you, what's next." },
  ],
};

/* 07 — DESK LOG */
export const deskLogSection = {
  label: "07 — Desk log",
  title: "Every task leaves a trace.",
  text: "You get a written log of the work, every day.",
  textClaim: true as const,
  logTitle: "Desk log — Sample",
  entries: [
    { time: "19:04", text: "6 new leads tagged in CRM" },
    { time: "19:40", text: "Listing entered in MLS, photos ordered" },
    { time: "20:15", text: "Closing checklist updated: inspection due Thu" },
    { time: "20:50", text: "3 showing requests confirmed by text" },
    { time: "21:30", text: "Supplement drafted: 14 line items" },
    { time: "22:10", text: "38 follow-up texts scheduled" },
    { time: "23:05", text: "Photo set renamed and filed to claim folder" },
    { time: "00:20", text: "Social post drafted for new listing" },
    { time: "01:45", text: "Appraisal date confirmed with lender" },
    { time: "02:55", text: "End-of-day report sent" },
  ],
};

/* 08 — SAVINGS */
export const savingsSection = {
  label: "08 — Savings",
  title: "What does an in-house assistant really cost?",
  cta: { label: "Run the numbers", href: "/savings-calculator" },
};

/* 10 — HOW IT STARTS */
export const startSection = {
  label: "10 — How it starts",
  meta: "3 steps",
  title: "Live in about a week.",
  titleClaim: true as const,
  steps: [
    { n: "01", title: "Book a call", text: "15 minutes. We look at your workload and pick a plan." },
    { n: "02", title: "Set up", text: "You share access. We write a checklist for every task." },
    { n: "03", title: "Go live", text: "The first week runs on daily reports, so you see everything." },
  ],
  cta: { label: "Book a call", href: "/book-a-call" },
};

/* 11 — WORK SAMPLES */
export const workSection = {
  label: "11 — Work samples",
  title: "What the work looks like.",
  lead: "Anonymized examples. Every name, address and number is removed.",
  cta: { label: "See all samples", href: "/work" },
  count: 5,
};

/* 12 — THE FOUNDER */
export const founderSection = {
  label: "12 — The founder",
  title: "You work with me directly.",
  sub: "No account managers. No hand-offs. One specialist who knows your files.",
  subClaim: true as const,
  role: "Founder",
  bio: "[[PLACEHOLDER: short founder bio — facts only]]",
  cta: { label: "Read the story", href: "/about" },
};

/* 13 — SECURITY (all claims until confirmed) */
export const securitySection = {
  label: "13 — Security",
  meta: "4 rules",
  title: "Your logins. Your data. Your rules.",
  tiles: [
    { title: "NDA before access", text: "We sign your NDA before you share a single login." },
    { title: "You control every login", text: "Shared through your password manager. Revoke access anytime." },
    { title: "Daily written report", text: "Every task is logged, so you always know what was touched." },
    { title: "No files on personal devices", text: "Client files stay in your systems, not on our laptops." },
  ],
};

/* 14 — QUESTIONS */
export const faqSection = {
  label: "14 — Questions",
  title: "Questions agents and contractors ask.",
  cta: { label: "All questions", href: "/faq" },
};

/* 15 — NEXT STEP: uses ctaBand from content/nav.ts */
