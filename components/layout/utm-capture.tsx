"use client";

import { useEffect } from "react";
import { captureUtm } from "@/lib/utm";

/** Stores utm_* params + referrer once per session (§9.7). Renders nothing. */
export function UtmCapture() {
  useEffect(() => captureUtm(), []);
  return null;
}
