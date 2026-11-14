import type { Claim, FileId, PageMeta } from "./types";
import type { ImageId } from "./images";

export const meta: PageMeta = {
  title: "Work Samples",
  description:
    "Anonymized samples of real estate VA and supplementing work: listing sheets, transaction trackers, CRM cleanup and Xactimate supplements.",
  path: "/work/",
};

/* Illustrative deliverables — always labelled SAMPLE. Images are anonymized screenshots (placeholders for now).
   "Task · Time" lines and durations are claims until confirmed. */
export interface WorkSample extends Claim { id: string; file: FileId; title: string; image: ImageId; task: string; time: string; done: string; tools: string[] }

export const samples: WorkSample[] = [
  { id: "listing-sheet", file: "01", title: "MLS listing input sheet", image: "work-01", task: "Listing entry", time: "45 min", done: "New listing entered from the agent's intake form, photos ordered and the description checked against the listing checklist.", tools: ["MLS", "Google Workspace"], claim: true },
  { id: "tc-timeline", file: "01", title: "Transaction timeline tracker", image: "work-02", task: "Contract to close", time: "Ongoing", done: "Every deadline from the purchase agreement in one tracker, with reminders to the agent, lender and title.", tools: ["DocuSign", "Dotloop", "Google Workspace"], claim: true },
  { id: "crm-pipeline", file: "01", title: "CRM pipeline cleanup", image: "work-03", task: "CRM cleanup", time: "1 day", done: "Duplicate contacts merged, leads tagged by source and stage, and follow-up tasks scheduled.", tools: ["Follow Up Boss", "HubSpot"], claim: true },
  { id: "social-set", file: "01", title: "Social post set", image: "work-04", task: "Social posts", time: "2 hrs", done: "Just-listed and market-update posts drafted, captioned and scheduled for the week.", tools: ["Meta Ads Manager"], claim: true },
  { id: "supplement", file: "02", title: "Xactimate supplement (redacted)", image: "work-05", task: "Supplement", time: "Per claim", done: "Missing roof line items built in Xactimate, each with a photo reference and a note for the adjuster.", tools: ["Xactimate", "EagleView"], claim: true },
  { id: "photo-report", file: "02", title: "Supplement photo report", image: "work-06", task: "Photo report", time: "Per claim", done: "Job photos sorted by elevation, labelled and matched to the line items they support.", tools: ["CompanyCam", "Xactimate"], claim: true },
];

export const sampleLabel = "Sample";

export const page = {
  label: "Work samples",
  lines: ["What the work", "looks like."],
  lead: "Real deliverables with every name, address, phone number, MLS number and claim number removed or replaced. Each one is labelled SAMPLE.",
  filterLabel: "Filter samples",
  filters: [
    { value: "all", label: "All" },
    { value: "01", label: "File 01" },
    { value: "02", label: "File 02" },
  ],
  open: "Open sample",
  doneLabel: "What was done",
  toolsLabel: "Tools used",
  close: "Close",
  count: (n: number) => `${n} ${n === 1 ? "sample" : "samples"} shown`,
};
