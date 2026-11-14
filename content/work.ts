import type { FileId, PageMeta } from "./types";
import type { ImageId } from "./images";

export const meta: PageMeta = {
  title: "Work Samples",
  description: "[[PLACEHOLDER: meta description for /work/]]",
  path: "/work/",
};

/* Illustrative deliverables — always labelled SAMPLE. Images are anonymized screenshots (placeholders for now). */
export interface WorkSample { id: string; file: FileId; title: string; image: ImageId }

export const samples: WorkSample[] = [
  { id: "listing-sheet", file: "01", title: "MLS listing input sheet", image: "work-01" },
  { id: "tc-timeline", file: "01", title: "Transaction timeline tracker", image: "work-02" },
  { id: "supplement", file: "02", title: "Xactimate supplement package", image: "work-03" },
  { id: "crm-pipeline", file: "01", title: "CRM pipeline cleanup", image: "work-04" },
  { id: "photo-index", file: "02", title: "Photo documentation index", image: "work-05" },
  { id: "claim-report", file: "02", title: "Claim status report", image: "work-06" },
];

export const sampleLabel = "Sample";
