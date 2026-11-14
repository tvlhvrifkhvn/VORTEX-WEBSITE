"use client";

import { useSearchParams } from "next/navigation";
import { leadForm as f } from "@/content/book";
import { plans } from "@/content/pricing";
import { LeadForm, type LeadPrefill } from "./lead-form";

/* Reads ?file= ?hours= ?wage= ?plan= and pre-fills the lead form. Render inside <Suspense>. */
export function LeadFormParams() {
  const q = useSearchParams();
  const file = q.get("file");
  const hours = q.get("hours") ?? undefined;
  const wage = q.get("wage");
  const plan = plans.find((p) => p.id === q.get("plan"));
  const lines = [hours && wage ? f.prefill.calculator(hours, wage) : null, plan ? f.prefill.plan(plan.name) : null].filter(Boolean);
  const prefill: LeadPrefill = {
    file: file === "01" || file === "02" ? file : undefined,
    hours: hours ?? plan?.hours?.match(/^\d+/)?.[0],
    message: lines.join(" ") || undefined,
  };
  return <LeadForm prefill={prefill} />;
}
