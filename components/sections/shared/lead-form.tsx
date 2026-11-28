"use client";

import { useState } from "react";
import { leadForm as f } from "@/content/book";
import { submitLead } from "@/lib/api/forms";
import type { LeadPayload } from "@/lib/api/types";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { Checkbox, Radio } from "@/components/ui/choice";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/labels";

export interface LeadPrefill { file?: LeadPayload["file"]; hours?: string; message?: string }
type Errors = Partial<Record<"name" | "email" | "role" | "send", string>>;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Booking form (§11.10): validate → submitLead (mock until Phase 2) → RECEIVED panel. SMS consent is separate and optional. */
export function LeadForm({ prefill = {} }: { prefill?: LeadPrefill }) {
  const [state, setState] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    if (d.get("company")) return; // honeypot
    const v = (k: string) => String(d.get(k) ?? "").trim();
    const next: Errors = {};
    if (!v("name")) next.name = f.errors.name;
    if (!EMAIL.test(v("email"))) next.email = f.errors.email;
    if (!v("role")) next.role = f.errors.role;
    setErrors(next);
    const first = (["name", "email", "role"] as const).find((k) => next[k]);
    if (first) return document.getElementById(`lf-${first}`)?.focus();
    setState("submitting");
    const res = await submitLead({
      name: v("name"), email: v("email"), phone: v("phone") || undefined, role: v("role"),
      file: (v("file") || "unsure") as LeadPayload["file"], hoursPerWeek: Number(v("hours")) || undefined,
      message: v("message") || undefined, smsConsent: d.get("sms") === "on", source: "book-a-call",
    });
    if (res.ok) return setState("success");
    setState("idle");
    setErrors({ send: f.errors.send });
  }

  if (state === "success") {
    return (
      <div role="status" data-theme="ink" className="p-8">
        <p className="label-mono text-signal">{f.successLabel}</p>
        <p className="mt-4 text-h3 font-semibold">{f.success}</p>
      </div>
    );
  }

  const inv = (k: keyof Errors) => (errors[k] ? true : undefined);
  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-6">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <Field id="lf-name" label={f.name} required error={errors.name}>
        {(d) => <Input id="lf-name" name="name" autoComplete="name" required aria-describedby={d} aria-invalid={inv("name")} />}
      </Field>
      <Field id="lf-email" label={f.email} required error={errors.email}>
        {(d) => <Input id="lf-email" name="email" type="email" autoComplete="email" spellCheck={false} required aria-describedby={d} aria-invalid={inv("email")} />}
      </Field>
      <Field id="lf-phone" label={f.phone} optionalLabel={f.optional}>
        {(d) => <Input id="lf-phone" name="phone" type="tel" autoComplete="tel" aria-describedby={d} />}
      </Field>
      <Field id="lf-role" label={f.role} required error={errors.role}>
        {(d) => (
          <Select id="lf-role" name="role" required defaultValue="" aria-describedby={d} aria-invalid={inv("role")}>
            <option value="" disabled>{f.rolePlaceholder}</option>
            {f.roles.map((r) => <option key={r}>{r}</option>)}
          </Select>
        )}
      </Field>
      <fieldset>
        <legend className="label-mono">{f.file}</legend>
        <div className="mt-2 flex flex-col sm:flex-row sm:gap-6">
          {f.files.map((o) => <Radio key={o.value} name="file" value={o.value} label={o.label} defaultChecked={(prefill.file ?? "unsure") === o.value} />)}
        </div>
      </fieldset>
      <Field id="lf-hours" label={f.hours} optionalLabel={f.optional}>
        {(d) => <Input id="lf-hours" name="hours" type="number" inputMode="numeric" autoComplete="off" min={1} max={60} defaultValue={prefill.hours} aria-describedby={d} />}
      </Field>
      <Field id="lf-message" label={f.message} optionalLabel={f.optional} hint={f.messageHint}>
        {(d) => <Textarea id="lf-message" name="message" defaultValue={prefill.message} aria-describedby={d} />}
      </Field>
      <div data-claim="" className="border-t border-border pt-4">
        <Tag className="mb-2">{f.smsDraft}</Tag>
        <Checkbox name="sms" label={<span className="text-small">{f.sms}</span>} />
      </div>
      {errors.send && <p role="alert" className="font-medium">{errors.send}</p>}
      <Button type="submit" size="lg" disabled={state === "submitting"} className="self-start">
        {state === "submitting" ? f.submitting : f.submit}
      </Button>
    </form>
  );
}
