import type { ApiResult } from "./types";

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
const TIMEOUT_MS = 10_000;

/** POST JSON. With no API base URL set (Phase 1), returns a mock success after 600ms. */
export async function post(path: string, body: unknown): Promise<ApiResult> {
  if (!BASE) {
    await new Promise((r) => setTimeout(r, 600));
    if (process.env.NODE_ENV === "development") console.info("[api mock]", path, body);
    return { ok: true, mock: true };
  }

  // PHASE 2: real endpoint — BASE + path (e.g. /leads, /resources, /newsletter).
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${BASE.replace(/\/$/, "")}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!res.ok) return { ok: false, error: `Request failed (${res.status})` };
    return { ok: true };
  } catch (err) {
    const aborted = err instanceof DOMException && err.name === "AbortError";
    return { ok: false, error: aborted ? "Request timed out" : "Network error" };
  } finally {
    clearTimeout(timer);
  }
}
