import type { FileId, PageMeta } from "./types";

export const meta: PageMeta = {
  title: "Resources",
  description:
    "Free checklists for real estate agents and roofing contractors: transaction coordination, listing launch and roof supplement documentation.",
  path: "/resources/",
};

export const page = {
  label: "Resources",
  lines: ["Free", "checklists."],
  lead: "The same checklists the desk works from. Enter your email and we’ll send the PDF.",
};

/* PDFs are placeholders until uploaded (see docs/ASSETS_NEEDED.md). Delivery by email is Phase 2. */
export interface Resource { id: string; file: FileId; title: string; text: string; pdf: string }

export const resources: Resource[] = [
  { id: "tc-checklist", file: "01", title: "Transaction coordination checklist", text: "Every deadline and document from accepted offer to closing, in order.", pdf: "/files/transaction-coordination-checklist.pdf" },
  { id: "listing-launch", file: "01", title: "Listing launch checklist", text: "What to check before a listing goes live: data, photos, description and syndication.", pdf: "/files/listing-launch-checklist.pdf" },
  { id: "roof-supplement", file: "02", title: "Roof supplement documentation checklist", text: "The photos, measurements and notes a supplement needs before you send it.", pdf: "/files/roof-supplement-checklist.pdf" },
];

export const form = {
  cta: "Get the checklist",
  title: "Get the checklist",
  text: "Enter your email and we’ll send the PDF.",
  email: "Work email",
  submit: "Send it",
  submitting: "Sending",
  errorEmail: "Enter an email like name@company.com",
  errorSend: "That didn’t go through. Try again, or email us.",
  successLabel: "Received",
  success: "Thanks. The checklist is on its way to your inbox.",
  close: "Close",
};
