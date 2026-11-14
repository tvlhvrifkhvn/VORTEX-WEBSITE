"use client";

import { useSyncExternalStore } from "react";

/* Minute tick store: timeout to the next minute, then every 60s. */
function subscribe(onChange: () => void) {
  let interval: number | undefined;
  const timeout = window.setTimeout(() => {
    onChange();
    interval = window.setInterval(onChange, 60_000);
  }, 60_000 - (Date.now() % 60_000));
  return () => {
    window.clearTimeout(timeout);
    window.clearInterval(interval);
  };
}
const minute = () => Math.floor(Date.now() / 60_000);

/** Current time, updated on the minute. null on the server and during hydration (placeholders, no CLS). */
export function useMinute() {
  const m = useSyncExternalStore(subscribe, minute, () => null);
  return m === null ? null : new Date(m * 60_000);
}
