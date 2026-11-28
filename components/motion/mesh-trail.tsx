"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "./motion-provider";

const GAP = 7; // grid spacing (px) — finer mesh (user request)
const RADIUS = 130; // reach of the cursor (px)
const DECAY = 0.93; // per frame: the trail fades behind the cursor

/* Cursor mesh (tile E, user request): a hairline ink wireframe appears around the pointer, bulges toward
   the viewer like a 3D surface, and fades out behind it. Canvas behind the tile text, pointer-events none.
   Fine pointers + motion on only; touch and motion-off show the plain tile. Decorative. */
export function MeshTrail() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { enabled } = useMotion();

  useEffect(() => {
    const cv = canvas.current;
    const host = cv?.parentElement;
    if (!cv || !host || !enabled || !window.matchMedia("(pointer: fine)").matches) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    let w = 0, h = 0, cols = 0, rows = 0, heat = new Float32Array(0), raf = 0;
    const cur = { x: -999, y: -999 };

    const size = () => {
      const r = host.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
      w = r.width; h = r.height;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / GAP) + 1; rows = Math.ceil(h / GAP) + 1;
      heat = new Float32Array(cols * rows);
    };
    const pos = (i: number, j: number) => {
      const x = i * GAP, y = j * GAP, k = heat[j * cols + i];
      const dx = x - cur.x, dy = y - cur.y;
      const d = Math.hypot(dx, dy) || 1, lift = k * 10 * Math.max(0, 1 - d / RADIUS);
      return [x + (dx / d) * lift, y + (dy / d) * lift - k * 4] as const; // push outward + rise = bulge
    };
    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      let live = false;
      for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
        const n = j * cols + i, d = Math.hypot(i * GAP - cur.x, j * GAP - cur.y);
        if (d < RADIUS) heat[n] = Math.max(heat[n], 1 - d / RADIUS);
        heat[n] *= DECAY;
        if (heat[n] > 0.02) live = true;
      }
      ctx.strokeStyle = getComputedStyle(host).color;
      ctx.lineWidth = 0.5;
      for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
        const k = heat[j * cols + i];
        if (k < 0.03) continue;
        const [x, y] = pos(i, j);
        for (const [di, dj] of [[1, 0], [0, 1]] as const) {
          if (i + di >= cols || j + dj >= rows) continue;
          const k2 = heat[(j + dj) * cols + i + di];
          if (k2 < 0.03) continue;
          const [x2, y2] = pos(i + di, j + dj);
          ctx.globalAlpha = Math.min(k, k2) * 0.9;
          ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x2, y2); ctx.stroke();
        }
        ctx.globalAlpha = k; ctx.fillRect(x - 0.5, y - 0.5, 1, 1); // dotted nodes
      }
      ctx.globalAlpha = 1;
      raf = live ? requestAnimationFrame(frame) : 0;
    };
    const move = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      cur.x = e.clientX - r.left; cur.y = e.clientY - r.top;
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const leave = () => { cur.x = cur.y = -999; };
    size();
    const ro = new ResizeObserver(size); ro.observe(host);
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    return () => {
      ro.disconnect(); cancelAnimationFrame(raf);
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
    };
  }, [enabled]);

  return <canvas ref={canvas} aria-hidden="true" className="pointer-events-none absolute inset-0 size-full" />;
}
