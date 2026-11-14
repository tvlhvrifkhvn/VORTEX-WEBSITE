import type { PageMeta } from "./types";

export const meta: PageMeta = {
  title: "About",
  description:
    "VortexOne is a small, founder-run back-office desk in Islamabad working US hours for real estate agents and roofing and restoration contractors.",
  path: "/about/",
};

export const page = {
  label: "About",
  lines: ["Small", "on purpose."],
  lead: "One founder, two specialist files, US hours. No account managers between you and the person doing the work.",
};

export const founder = {
  label: "01 — Founder",
  title: "Who you’ll work with",
  role: "Founder",
  bio: "[[PLACEHOLDER: founder bio — facts only (background, experience, why VortexOne)]]",
  since: "Real estate VA work for US clients since [[PLACEHOLDER: year started]]",
  sinceClaim: true as const,
  linkedin: "LinkedIn",
};

export const manifesto = {
  label: "02 — Why two files",
  title: "Five rules the desk runs on",
  items: [
    { n: "01", title: "Specialists beat generalists.", text: "Two files, done properly, instead of twenty services done halfway." },
    { n: "02", title: "You should know who does the work.", text: "The person on the call is the person on your files." },
    { n: "03", title: "Your hours, not ours.", text: "The desk runs on US business hours, Monday to Friday." },
    { n: "04", title: "Everything written down.", text: "Checklists for every task, and a written report every day." },
    { n: "05", title: "Honest numbers.", text: "No inflated stats, no fake reviews, no client counts we can’t back up." },
  ],
};

export const coordinates = {
  label: "03 — Coordinates",
  title: "Two desks, one working day",
  desk: "The desk",
  you: "Your office",
  youFallback: "Your time zone",
};
