"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "./motion-provider";

const STEP = 9; // mesh cell in the glyph mask (px at a 420px glyph)

/* A glyph (default "?") drawn as a hairline ink wireframe that keeps moving: the mesh sways in 3D and a slow
   ripple runs through it. No outline — the edge is just where the mesh stops. Sized to fit its box with equal
   space on every side. Canvas, decorative; runs only on screen; motion off → one still frame. */
export function MeshGlyph({ glyph = "?", className }: { glyph?: string; className?: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { enabled } = useMotion();

  useEffect(() => {
    const cv = canvas.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return;
    let raf = 0, visible = false, live = true;
    let pts: { x: number; y: number; i: number; j: number }[] = [];
    let index = new Map<string, number>();
    let w = 0, h = 0;

    const build = () => {
      const S = 420, m = document.createElement("canvas");
      m.width = S; m.height = S;
      const mc = m.getContext("2d", { willReadFrequently: true })!;
      mc.font = `400 ${S * 0.95}px "Anton"`;
      mc.textAlign = "center"; mc.textBaseline = "middle";
      mc.fillText(glyph, S / 2, S / 2);
      const data = mc.getImageData(0, 0, S, S).data;
      pts = []; index = new Map();
      for (let y = 0; y < S; y += STEP) for (let x = 0; x < S; x += STEP)
        if (data[(y * S + x) * 4 + 3] > 128) { index.set(`${x},${y}`, pts.length); pts.push({ x, y, i: x, j: y }); }
      // normalise to the glyph's own box, centred on 0
      const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y);
      const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
      const span = Math.max(maxX - minX, maxY - minY) || 1;
      pts.forEach((p) => { p.x = (p.x - (minX + maxX) / 2) / span; p.y = (p.y - (minY + maxY) / 2) / span; });
    };
    const size = () => {
      const r = cv.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
      w = r.width; h = r.height; cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const scale = Math.min(w, h) * 0.92, cx = w / 2, cy = h / 2;
      const a = Math.sin(t * 0.0006) * 0.75, ca = Math.cos(a), sa = Math.sin(a);
      const proj = pts.map((p) => {
        const z = 0.05 * Math.sin(p.y * 9 + t * 0.002) + 0.03 * Math.sin(p.x * 7 - t * 0.0015);
        const x = p.x * ca + z * sa, zz = -p.x * sa + z * ca, k = 1 / (1 + zz * 0.9);
        return [cx + x * scale * k, cy + p.y * scale * k, zz] as const;
      });
      ctx.strokeStyle = getComputedStyle(cv).color;
      ctx.lineWidth = 0.8;
      pts.forEach((p, n) => {
        for (const [dx, dy] of [[STEP, 0], [0, STEP]]) {
          const m = index.get(`${p.i + dx},${p.j + dy}`);
          if (m === undefined) continue;
          ctx.globalAlpha = 0.8 + 0.2 * Math.max(0, 1 - Math.abs(proj[n][2]) * 4);
          ctx.beginPath(); ctx.moveTo(proj[n][0], proj[n][1]); ctx.lineTo(proj[m][0], proj[m][1]); ctx.stroke();
        }
      });
      ctx.globalAlpha = 1;
    };
    const tick = (t: number) => { draw(t); raf = visible && enabled ? requestAnimationFrame(tick) : 0; };

    const ro = new ResizeObserver(() => { size(); draw(1500); });
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && enabled && !raf && pts.length) raf = requestAnimationFrame(tick); });
    document.fonts.load('400 100px "Anton"').then(() => {
      if (!live) return;
      build(); size(); draw(1500);
      ro.observe(cv); io.observe(cv);
    });
    return () => { live = false; ro.disconnect(); io.disconnect(); cancelAnimationFrame(raf); };
  }, [enabled, glyph]);

  return <canvas ref={canvas} aria-hidden="true" className={className} />;
}
