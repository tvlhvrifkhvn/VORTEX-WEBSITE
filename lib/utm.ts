import type { Utm } from "./api/types";

const KEY = "vx-utm";

/** Store utm_* params + referrer on first load of the session (call once from a client component). */
export function captureUtm() {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const utm: Utm = {};
    params.forEach((v, k) => {
      if (k.startsWith("utm_")) utm[k] = v;
    });
    if (document.referrer) utm.referrer = document.referrer;
    sessionStorage.setItem(KEY, JSON.stringify(utm));
  } catch {
    /* storage blocked — ignore */
  }
}

export function getUtm(): Utm | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Utm) : undefined;
  } catch {
    return undefined;
  }
}
