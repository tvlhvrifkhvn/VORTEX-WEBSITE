import { post } from "./client";
import type { LeadPayload, NewsletterPayload, ResourceRequestPayload } from "./types";
import { getUtm } from "../utm";

export const submitLead = (p: LeadPayload) => post("/leads", { ...p, utm: p.utm ?? getUtm() });
export const requestResource = (p: ResourceRequestPayload) => post("/resources", { ...p, utm: p.utm ?? getUtm() });
export const subscribeNewsletter = (p: NewsletterPayload) => post("/newsletter", p);
