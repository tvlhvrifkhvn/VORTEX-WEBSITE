/* Form payloads (SPEC §9.7). Phase 2 backend accepts these shapes. */
export type Utm = Record<string, string>;

export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  role: string;
  file: "01" | "02" | "unsure";
  hoursPerWeek?: number;
  message?: string;
  smsConsent: boolean;
  source: string;
  utm?: Utm;
}
export interface ResourceRequestPayload { email: string; resourceId: string; source: string; utm?: Utm }
export interface NewsletterPayload { email: string; source: string }
export interface ApiResult { ok: boolean; mock?: boolean; error?: string }
