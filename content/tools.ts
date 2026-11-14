import type { Tool } from "./types";

/* Intake 2026-11-14. Items marked claim: true were added by Claude as "other TC / MLS / supplementing tools" — confirm or remove. */
export const tools: Tool[] = [
  { name: "Zillow", file: "01" },
  { name: "Follow Up Boss", file: "01" },
  { name: "Mojo Dialer", file: "01" },
  { name: "HubSpot", file: "01" },
  { name: "Meta Ads Manager", file: "01" },
  { name: "DocuSign", file: "01" },
  { name: "MLS systems", file: "01", claim: true },
  { name: "Dotloop", file: "01", claim: true },
  { name: "SkySlope", file: "01", claim: true },
  { name: "Xactimate", file: "02" },
  { name: "EagleView", file: "02", claim: true },
  { name: "Hover", file: "02", claim: true },
  { name: "CompanyCam", file: "02", claim: true },
  { name: "Google Workspace", file: "both", claim: true },
];
