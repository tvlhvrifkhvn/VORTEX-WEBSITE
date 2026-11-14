"use client";

import { useState } from "react";
import { form as f } from "@/content/resources";
import { requestResource } from "@/lib/api/forms";
import { Field, Input } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Email gate for a checklist (§11.9): validate → requestResource (mock until Phase 2) → RECEIVED panel. */
export function ResourceForm({ resourceId }: { resourceId: string }) {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>();
  const id = `rf-${resourceId}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("company")) return; // honeypot
    const email = String(data.get("email") ?? "").trim();
    if (!EMAIL.test(email)) return setError(f.errorEmail);
    setError(undefined);
    setState("submitting");
    const res = await requestResource({ email, resourceId, source: "resources" });
    if (res.ok) return setState("success");
    setState("error");
    setError(f.errorSend);
  }

  if (state === "success") {
    return (
      <div role="status" data-theme="ink" className="mt-6 p-6">
        <p className="label-mono text-signal">{f.successLabel}</p>
        <p className="mt-3 text-lead">{f.success}</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <Field id={id} label={f.email} required error={error}>
        {(d, inv) => <Input id={id} name="email" type="email" autoComplete="email" required aria-describedby={d} aria-invalid={inv || undefined} />}
      </Field>
      <Button type="submit" disabled={state === "submitting"} className="self-start">
        {state === "submitting" ? f.submitting : f.submit}
      </Button>
    </form>
  );
}
