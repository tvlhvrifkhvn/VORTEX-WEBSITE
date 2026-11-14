"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DIGITS = "0123456789";
const ALNUM = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/* Shared engine for ScrambleNumber/ScrambleText (adapted from 21st.dev dqnamo/scramble-text):
   scramblable characters cycle every 40ms and lock left→right; everything else never scrambles. */
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
      const gap = Math.min(60, totalMs / (idx.length + 1));
      const start = performance.now();
      timer.current = window.setInterval(() => {
        const t = performance.now() - start;
        let done = true;
        const out = chars.map((c, i) => {
          const order = idx.indexOf(i);
          if (order < 0 || t >= totalMs - gap * (idx.length - 1 - order) - gap) return c;
          done = false;
          return pool[Math.floor(Math.random() * pool.length)];
        });
        setDisplay(out.join(""));
        if (done || t >= totalMs) {
          stop();
          setDisplay(final);
        }
      }, 40);
    },
    [final, kind, stop],
  );

  useEffect(() => stop, [stop]);

  return { display, run };
}
