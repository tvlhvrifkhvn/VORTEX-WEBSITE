import type { PageMeta } from "./types";

export const meta: PageMeta = {
  title: "How We Work",
  description:
    "How the VortexOne desk runs: onboarding in about a week, a written end-of-day report, US-hours communication, and logins you control.",
  path: "/how-we-work/",
};

export const page = {
  label: "How we work",
  lines: ["How the", "desk runs."],
  lead: "The same routine for every client: written checklists, a report **at the end of every day**, and access you can revoke at any time.",
};

export const onboarding = {
  label: "01 — Onboarding",
  title: "From first call to a steady rhythm",
  steps: [
    { time: "Day 1", title: "Call", text: "15 minutes on your workload, tools and what good looks like." },
    { time: "Days 2–3", title: "Access & tools", text: "You add us as a user in your CRM, MLS and inbox, or share through your password manager." },
    { time: "Days 3–5", title: "Checklists written", text: "Every recurring task gets a written checklist you can read and change." },
    { time: "Week 1", title: "Daily reports", text: "The first week runs on end-of-day reports, so you see every task." },
    { time: "Month 1+", title: "Monthly rhythm", text: "Daily reports continue, plus a short monthly review of what to add or drop." },
  ],
  claim: true as const,
};

export const report = {
  label: "02 — Daily rhythm",
  title: "A written report at the end of every day",
  lead: "Plain text, sent to your inbox **before your next morning**. Three sections, nothing else.",
  doc: {
    sample: "Sample",
    header: "End-of-day report",
    meta: [
      { key: "Client", value: "Agent — redacted" },
      { key: "Date", value: "Tue · desk shift" },
      { key: "File", value: "01" },
    ],
    sections: [
      { title: "Done", items: ["6 new leads tagged and texted", "Listing entered in MLS, photos ordered", "Inspection reminder sent to buyer’s agent"] },
      { title: "Waiting on you", items: ["Approve the listing description", "Sign the price change in DocuSign"] },
      { title: "Next", items: ["Appraisal date follow-up", "Just-listed post goes out Thursday"] },
    ],
  },
};

/* Desk log moved here from home (revision 2026-11-18). */
export const deskLogLabel = "03 — Desk log";

export const communication = {
  label: "04 — Communication",
  title: "Where to reach the desk",
  channels: [
    { name: "Email", detail: "For anything that needs a record." },
    { name: "WhatsApp", detail: "For quick questions during desk hours.", claim: true as const },
    { name: "Your Slack", detail: "If your team runs on Slack, we join your workspace.", claim: true as const },
  ],
  responseLabel: "Replies",
};

export const security = {
  label: "05 — Security",
  meta: "6 rules",
  title: "Your logins. Your data. Your rules.",
  tiles: [
    { title: "NDA before access", text: "We sign your NDA before you share a single login." },
    { title: "You control every login", text: "Shared through your password manager. Revoke access anytime." },
    { title: "Your accounts, not ours", text: "Work happens inside your CRM, MLS and inbox, so nothing is locked in our systems." },
    { title: "Daily written report", text: "Every task is logged, so you always know what was touched." },
    { title: "No files on personal devices", text: "Client files stay in your systems, not on our laptops." },
    { title: "Clean exit", text: "When you leave, you remove our access and we confirm nothing is kept." },
  ],
};

export const toolsSection = { label: "06 — Tools", title: "Tools we already work in", groups: { "01": "File 01 · Real estate", "02": "File 02 · Supplementing", both: "Both files" } };

export const needs = {
  label: "07 — What we need from you",
  title: "What we need to start",
  items: [
    "A 15-minute call to agree on scope",
    "User access to your CRM, MLS and the tools we’ll work in",
    "Your current checklists or templates, if you have them",
    "One contact for questions during the first week",
    "Feedback on the first few daily reports",
  ],
};
