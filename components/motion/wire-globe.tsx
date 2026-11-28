"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "./motion-provider";

const R = 30; // globe radius in the ring's 100×100 viewBox
const MERIDIANS = 6; // every 30° of longitude
const PARALLELS = [-0.8, -0.55, -0.28, 0.28, 0.55, 0.8]; // as a share of R, evenly spaced around the equator

/* Wireframe globe for the inside of tile C's ring (user request): outline, equator, parallels and
   6 meridians whose widths follow the rotation, so it reads as a turning globe. One full turn ≈ 24s,
   only while on screen; motion off → still. Drawn in currentColor, decorative (parent is aria-hidden). */
export function WireGlobe() {
  const { enabled } = useMotion();
  const group = useRef<SVGGElement>(null);

  useEffect(() => {
    const g = group.current;
    if (!g) return;
    const lines = [...g.querySelectorAll<SVGEllipseElement>("[data-m]")];
    const draw = (phase: number) =>
      lines.forEach((el, i) => el.setAttribute("rx", (R * Math.abs(Math.cos(phase + (i * Math.PI) / MERIDIANS))).toFixed(2)));
    draw(0.4);
    if (!enabled) return;
    let raf = 0;
    let start = 0;
    let visible = false;
    const tick = (t: number) => {
      if (!start) start = t;
      draw(0.4 + ((t - start) / 24000) * Math.PI * 2);
      raf = visible ? requestAnimationFrame(tick) : 0;
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(tick);
    });
    io.observe(g);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  return (
    <g ref={group} fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
      <circle cx="50" cy="50" r={R} />
      <line x1={50 - R} y1="50" x2={50 + R} y2="50" />
      {PARALLELS.map((p) => {
        const y = 50 + p * R;
        const half = R * Math.sqrt(1 - p * p);
        return <line key={p} x1={50 - half} y1={y} x2={50 + half} y2={y} strokeOpacity="0.85" />;
      })}
      {Array.from({ length: MERIDIANS }, (_, i) => (
        <ellipse key={i} data-m="" cx="50" cy="50" rx={R} ry={R} />
      ))}
    </g>
  );
}
