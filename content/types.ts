/* Content model (SPEC §9.5). Extend here; never hard-code copy in components. */
export type FileId = "01" | "02";
/** Unconfirmed marketing claim — highlighted in review mode (?review=1). */
export type Claim = { claim?: true };

export interface Stat extends Claim { value: number | string; prefix?: string; suffix?: string; label: string; note?: string }
export type ServiceTier = "core" | "addon";
export interface Service extends Claim { id: string; file: FileId; index: string; title: string; summary: string; /** One line (≤40 chars) for the home file-panel rows. */ short?: string; includes: string[]; tier: ServiceTier; featured?: boolean; onRequest?: true; sampleImage?: string }
/** price: number = shown (formatted from `unit`), null = "Contact for pricing"; custom: shows "Custom". */
export interface PricingPlan extends Claim { id: string; file: FileId; name: string; tagline: string; price: number | null; unit?: "month" | "supplement"; from?: true; custom?: true; hours?: string; features: string[]; recommended?: boolean }
export type FaqTag = "general" | "file01" | "file02" | "billing" | "security" | "home";
export interface FaqItem extends Claim { q: string; a: string; tags: FaqTag[] }
export interface Step { time?: string; title: string; text: string; file?: FileId | "both" }

export interface ImageSlot { id: string; src: string; alt: string; width: number; height: number; placeholder: boolean }
export interface NavLink { label: string; href: string; file?: FileId }
export interface Tool extends Claim { name: string; file: FileId | "both" }
export interface PageMeta { title: string; description: string; path: string }
