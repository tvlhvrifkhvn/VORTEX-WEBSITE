import type { PageMeta, Stat } from "./types";

export const meta: PageMeta = {
  title: "Real estate VA and insurance supplementing from one desk",
  description:
    "Real estate admin and Xactimate insurance supplementing for US agents and contractors, done by a founder-run specialist desk on US hours.",
  path: "/",
};

/* 01 — THE DESK */
export const hero = {
  /* Index row on the same 3 × 4-column grid as the band below (third block sits over the photo). */
  meta: [
    { title: "Islamabad → United States", line: "33.6844°N 73.0479°E" },
    { title: "File 01 · File 02", line: "Real estate VA · Supplementing" },
    { title: "Founder-run desk", line: "Monthly, no lock-in", claim: true as const },
  ],
  /* Line 1 fills the content width (hero-fit); line 2 is the one-line deck that names the audience. */
  lines: ["Back office", "for US agents, roofers and restoration contractors."],
  lead: "Transaction coordination, MLS and CRM upkeep for agents. Xactimate estimates and supplement packages for contractors. One specialist, working **your US hours**.",
  ctas: {
    agent: { label: "Real estate VA", href: "/real-estate-va" },
    contractor: { label: "Insurance supplementing", href: "/insurance-supplementing" },
    call: { label: "Book a 15-minute call", href: "/book-a-call" },
  },
  rotated: "VortexOne — Back office desk — No. 001",
  /* Base line of the band: live desk status (claim: reply promise) + prices derived from content/pricing.ts. */
  desk: { open: "Desk open — replies today", closedPrefix: "Desk closed — " },
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
    reply: { value: "<24", suffix: " hrs", label: "Reply time on business days, during desk hours.", claim: true },
    files: { value: 2, suffix: " files", label: "Two specialist lines. Nothing else." },
    founder: { value: 1, suffix: " founder", label: "The person you talk to does the work.", claim: true },
    hours: { value: "9–6", suffix: " ET", label: "Desk hours, Monday to Friday, US Eastern." },
  } satisfies Record<string, Stat>,
  /* Tile A hours grid: 5 days × 8 hours. */
  week: { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], hoursPerDay: 8 },
  /* Tile C: savings % computed from calculator defaults + content/pricing.ts; falls back to `run` if prices are null. */
  savings: { label: "Savings", grid: "1 square = 1% of in-house cost · filled = saved", text: "Lower monthly cost than an in-house assistant*", footnote: "*Calculator defaults.", link: "Run your own numbers →", href: "/savings-calculator" },
  run: { label: "Savings", title: "What would an in-house assistant cost you?", cta: "Run the numbers", href: "/savings-calculator" },
};

/* 04 — THE FILES */
export const filesSection = {
  srTitle: "The two files",
  cursor: "Open file →",
  cta: "Open file",
  allJobs: (file: string) => ({ label: `All File ${file} jobs`, href: `/services#file-${file}` }),
  /* Counts come from content/services.ts. */
  count: (core: number, addons: number) => (addons ? `${core} core + ${addons} add-ons` : `${core} core services`),
  panels: [
    {
      file: "01" as const,
      tag: "File 01 · Listing no. 001",
      status: "Active",
      spec: ["Solo agents", "Teams", "Investors", "Flippers"],
      title: "Real Estate VA",
      /* Both titles run on two lines so the panels mirror each other. */
      titleLines: ["Real Estate", "Virtual Assistant"],
      line: "Listings, transactions and follow-up, **off your plate**.",
      /* Each row reveals the service's one-line `short` (content/services.ts) on hover. */
      tasks: [
        { label: "MLS listings", service: "mls-listings" },
        { label: "Transaction deadlines", service: "transaction-coordination" },
        { label: "CRM & follow-up", service: "crm-management" },
        { label: "Social posts", service: "social-media" },
      ],
      href: "/real-estate-va",
      image: "file01-object" as const,
      theme: "ink" as const,
    },
    {
      file: "02" as const,
      tag: "File 02 · Claim no. 002",
      status: "Open",
      spec: ["Roofing", "Restoration", "Contractors only"],
      title: "Insurance Supplementing",
      titleLines: ["Insurance", "Supplementing"],
      line: "Xactimate supplements, documented **line by line**.",
      tasks: [
        { label: "Xactimate estimates", service: "xactimate-estimates" },
        { label: "Supplement packages", service: "supplement-packages" },
        { label: "Photo documentation", service: "photo-documentation" },
        { label: "Status tracking", service: "claim-tracking" },
      ],
      href: "/insurance-supplementing",
      image: "file02-object" as const,
      theme: "signal" as const,
    },
  ],
};

/* 05 — EVERYTHING ON THE DESK */
const WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen"];
export const numberWord = (n: number) => WORDS[n] ?? String(n);

export const servicesSection = {
  label: "01 — Everything on the desk",
  /* Count comes from content/services.ts (core tier). */
  title: (core: number) => `${numberWord(core)} core jobs. Two files. One desk.`,
  lead: "Each job links to the full scope on its file page.",
  onRequest: "On request",
  coreLabel: "Core — File 01 + File 02",
  addonLabel: "Add-ons — On request, for File 01 clients",
  addonNote: "Available to existing File 01 clients. Not sold on their own.",
  addonTag: "Add-on",
};

/* 06 — YOUR DAY, OUR NIGHT SHIFT */
export const shiftSection = {
  label: "05 — Your day, our night shift",
  meta: "Sample shift",
  title: "Your day. Our night shift.",
  lead: "Your morning in the US is **our evening in Islamabad**. Here’s a sample shift.",
  from: "Islamabad",
  to: "ET",
  steps: [
    { time: "19:00", title: "Overnight inbox triaged", text: "New leads tagged in your CRM; urgent emails flagged for you." },
    { time: "20:30", title: "Listings go live", text: "MLS entry, photos and descriptions checked against the listing checklist." },
    { time: "22:00", title: "Deadlines checked", text: "Inspection, appraisal and closing dates confirmed on every open file." },
    { time: "23:30", title: "Supplement drafted", text: "Missing line items built in Xactimate from the contractor’s photos and measurements." },
    { time: "01:00", title: "Follow-up sent", text: "Calls, texts and emails to your lead list, all logged in the CRM." },
    { time: "03:00", title: "End-of-day report", text: "What’s done, what’s waiting on you, what’s next." },
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
  label: "06 — Savings",
  title: "What does an in-house assistant really cost?",
  /* Manual lines; U+2011 non-breaking hyphen keeps "in‑house" together. */
  titleLines: ["What does an", "in\u2011house assistant", "really cost?"],
  cta: { label: "Run the numbers", href: "/savings-calculator" },
  compare: { label: "Compare all options", href: "/pricing#comps" },
};

/* 10 — HOW IT STARTS */
export const startSection = {
  label: "07 — How it starts",
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
  label: "08 — The founder",
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
  label: "09 — Questions",
  title: "Questions agents and contractors ask.",
  cta: { label: "All questions", href: "/faq" },
};

/* 10 — NEXT STEP: uses ctaBand from content/nav.ts */
export const ctaLabel = "10 — Next step";

/* Home section index (desktop ≥1280): number, name, id of the element inside that section. */
export const sectionIndex = [
  { n: "01", label: "The desk", id: "hero-title" },
  { n: "02", label: "Works inside", id: "tools-title" },
  { n: "03", label: "By the numbers", id: "stats-title" },
  { n: "04", label: "The files", id: "files-title" },
  { n: "05", label: "Night shift", id: "shift-title" },
  { n: "06", label: "Savings", id: "savings-title" },
  { n: "07", label: "How it starts", id: "start-title" },
  { n: "08", label: "The founder", id: "founder-title" },
  { n: "09", label: "Questions", id: "faq-title" },
  { n: "10", label: "Next step", id: "cta-band-title" },
];
export const sectionIndexLabel = "Sections on this page";
