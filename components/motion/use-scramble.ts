"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DIGITS = "0123456789";
const ALNUM = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/* Shared engine for ScrambleNumber/ScrambleText (adapted from 21st.dev dqnamo/scramble-text):
   scramblable characters cycle (letters 40ms, digits 80ms — slower, calmer numbers) and lock left→right; everything else never scrambles. */
export function useScramble(final: string, kind: "digits" | "alnum") {
  const [display, setDisplay] = useState(final);
  const timer = useRef<number | undefined>(undefined);
  const [shown, setShown] = useState(final);
  if (shown !== final) {
    // value changed: show the new final value immediately; run() re-scrambles if wanted
    setShown(final);
    setDisplay(final);
  }

  const stop = useCallback(() => window.clearInterval(timer.current), []);

  const run = useCallback(
    (totalMs: number) => {
      stop();
      const pool = kind === "digits" ? DIGITS : ALNUM;
      const test = kind === "digits" ? /[0-9]/ : /[A-Z0-9]/;
      const chars = Array.from(final);
      const idx = chars.map((c, i) => (test.test(c) ? i : -1)).filter((i) => i >= 0);
      if (!idx.length) return setDisplay(final);
      // Times ("7:30 PM", "10:05"): scramble only through valid digits — hour 1–12, minute tens 0–5 — so no "9:79".
      const time = kind === "digits" ? /^(\d{1,2}):\d\d/.exec(final) : null;
      const h = time ? time[1].length : 0;
      const poolAt = (i: number) => {
        if (!time) return pool;
        if (i < h) return h === 1 ? "123456789" : i === 0 ? "1" : "012";
        if (i === h + 1) return "012345";
        return DIGITS;
      };
      const tick = kind === "digits" ? 80 : 40;
      const gap = Math.min(tick * 2, totalMs / (idx.length + 1));
      const start = performance.now();
      timer.current = window.setInterval(() => {
        const t = performance.now() - start;
        let done = true;
        const out = chars.map((c, i) => {
          const order = idx.indexOf(i);
          if (order < 0 || t >= totalMs - gap * (idx.length - 1 - order) - gap) return c;
          done = false;
          const p = poolAt(i);
          return p[Math.floor(Math.random() * p.length)];
        });
        setDisplay(out.join(""));
        if (done || t >= totalMs) {
          stop();
          setDisplay(final);
        }
      }, tick);
    },
    [final, kind, stop],
  );

  useEffect(() => stop, [stop]);

  return { display, run };
}
