"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "./motion-provider";

const S = 600; // mask size (px)
const INNER = 460; // drifting interior points
const EDGE = 240; // fixed outline points
const LINK = 52; // max link length in mask px
const NEAR = 5; // links per point

/* A glyph (default "?") drawn as a triangulated hairline net, like a wire-mesh icon: fixed outline points trace
   the shape, interior points drift slowly at random (the glyph itself never moves), every node shows as a tiny
   corner. Links only inside the shape. Fits its box with equal margins. Canvas, decorative; runs only on screen;
   motion off → one still frame. */
export function MeshGlyph({ glyph = "?", className }: { glyph?: string; className?: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { enabled } = useMotion();

  useEffect(() => {
    const cv = canvas.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return;
    let raf = 0, visible = false, live = true, w = 0, h = 0;
    let inside: (x: number, y: number) => boolean = () => false;
    let box = { x: 0, y: 0, s: 1 };
    type P = { bx: number; by: number; x: number; y: number; r: number; f1: number; f2: number; p1: number; p2: number; fixed: boolean };
    let pts: P[] = [];

    const build = () => {
      const m = document.createElement("canvas");
      m.width = S; m.height = S;
      const mc = m.getContext("2d", { willReadFrequently: true })!;
      mc.font = `600 ${S * 0.92}px "Inter Tight Variable", "Inter Tight", sans-serif`;
      mc.textAlign = "center"; mc.textBaseline = "middle";
      mc.fillText(glyph, S / 2, S / 2);
      const a = mc.getImageData(0, 0, S, S).data;
      inside = (x, y) => x >= 0 && y >= 0 && x < S && y < S && a[((y | 0) * S + (x | 0)) * 4 + 3] > 128;
      const edge: [number, number][] = [];
      let minX = S, minY = S, maxX = 0, maxY = 0;
      for (let y = 1; y < S - 1; y++) for (let x = 1; x < S - 1; x++) {
        if (!inside(x, y)) continue;
        minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y);
        if (!inside(x - 1, y) || !inside(x + 1, y) || !inside(x, y - 1) || !inside(x, y + 1)) edge.push([x, y]);
      }
      box = { x: (minX + maxX) / 2, y: (minY + maxY) / 2, s: Math.max(maxX - minX, maxY - minY) };
      const rnd = () => Math.random();
      pts = [];
      for (let k = 0; k < EDGE; k++) {
        const [x, y] = edge[Math.floor((k / EDGE) * edge.length + rnd() * (edge.length / EDGE)) % edge.length];
        pts.push({ bx: x, by: y, x, y, r: 0, f1: 0, f2: 0, p1: 0, p2: 0, fixed: true });
      }
      for (let tries = 0, k = 0; k < INNER && tries < 50000; tries++) {
        const x = minX + rnd() * (maxX - minX), y = minY + rnd() * (maxY - minY);
        if (!inside(x, y)) continue;
        pts.push({ bx: x, by: y, x, y, r: 6 + rnd() * 8, f1: 0.0003 + rnd() * 0.0005, f2: 0.0003 + rnd() * 0.0005, p1: rnd() * 7, p2: rnd() * 7, fixed: false });
        k++;
      }
    };
    const size = () => {
      const r = cv.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
      w = r.width; h = r.height; cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = (t: number) => {
      for (const p of pts) {
        if (p.fixed) continue;
        const x = p.bx + p.r * Math.sin(t * p.f1 + p.p1), y = p.by + p.r * Math.cos(t * p.f2 + p.p2);
        if (inside(x, y)) { p.x = x; p.y = y; }
      }
      const k = (Math.min(w, h) * 0.9) / box.s, ox = w / 2 - box.x * k, oy = h / 2 - box.y * k;
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = ctx.fillStyle = getComputedStyle(cv).color;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i], near: [number, number][] = [];
        for (let j = 0; j < pts.length; j++) {
          if (j === i) continue;
          const d = Math.hypot(pts[j].x - a.x, pts[j].y - a.y);
          if (d < LINK) near.push([d, j]);
        }
        near.sort((u, v) => u[0] - v[0]);
        for (const [, j] of near.slice(0, NEAR)) {
          const b = pts[j];
          if (!inside((a.x + b.x) / 2, (a.y + b.y) / 2)) continue; // stay inside the shape
          ctx.moveTo(ox + a.x * k, oy + a.y * k); ctx.lineTo(ox + b.x * k, oy + b.y * k);
        }
      }
      ctx.stroke();
      for (const p of pts) { const d = p.fixed ? 1.2 : 1.8; ctx.fillRect(ox + p.x * k - d / 2, oy + p.y * k - d / 2, d, d); } // tiny corners
    };
    const tick = (t: number) => { draw(t); raf = visible && enabled ? requestAnimationFrame(tick) : 0; };

    const ro = new ResizeObserver(() => { size(); draw(performance.now()); });
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && enabled && !raf && pts.length) raf = requestAnimationFrame(tick); });
    document.fonts.load('600 100px "Inter Tight Variable"').then(() => {
      if (!live) return;
      build(); size(); draw(1500);
      ro.observe(cv); io.observe(cv);
    });
    return () => { live = false; ro.disconnect(); io.disconnect(); cancelAnimationFrame(raf); };
  }, [enabled, glyph]);

  return <canvas ref={canvas} aria-hidden="true" className={className} />;
}
