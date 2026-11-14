"use client";

import { useState } from "react";
import { footer } from "@/content/nav";
import { subscribeNewsletter } from "@/lib/api/forms";
import { Field, Input } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
type State = "idle" | "submitting" | "success" | "error";

/* Footer mini-form (§11.0, flag features.newsletter). Mock success until Phase 2. */
export function NewsletterForm() {
  const n = footer.newsletter;
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string>();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("company")) return; // honeypot
    const email = String(data.get("email") ?? "").trim();
    if (!EMAIL.test(email)) return setError(n.errorEmail);
    setError(undefined);
    setState("submitting");
    const res = await subscribeNewsletter({ email, source: "footer" });
    if (res.ok) return setState("success");
    setState("error");
    setError(n.errorSend);
  }

  if (state === "success") {
    return (
      <p role="status" className="label-mono border border-border p-4">
        {n.success}
      </p>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-4">
      <p className="label-mono">{n.title}</p>
      <p className="text-small text-muted-foreground">{n.text}</p>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <Field id="nl-email" label={n.label} error={error} className="flex-1">
          {(d, inv) => <Input id="nl-email" name="email" type="email" autoComplete="email" aria-describedby={d} aria-invalid={inv || undefined} />}
        </Field>
        <Button type="submit" variant="ghost" arrow={false} disabled={state === "submitting"} className="sm:mt-6">
          {state === "submitting" ? n.submitting : n.submit}
        </Button>
      </div>
    </form>
  );
}
