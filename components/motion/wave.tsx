"use client";

import { useEffect, useRef } from "react";
import type { MotionValue } from "motion/react";
import { useMotion } from "./motion-provider";

const VW = 400; // viewBox width
const VH = 100; // viewBox height
const W = 100; // wavelength: 4 waves across = medium frequency
const A = 44; // amplitude: fills the free height of the panel

/* Night-shift panel: a thick signal wave that IS the scroll progress — drawn from the left up to `progress`,
   with a rounded tip, nothing shown ahead of it. While on screen it keeps flowing (phase shifts one wavelength
   per 2.4s); motion off → still, but it still grows with the scroll. Uniform 6px stroke at any panel size. */
export function Wave({ progress, className }: { progress: MotionValue<number>; className?: string }) {
  const path = useRef<SVGPathElement>(null);
  const { enabled } = useMotion();

  useEffect(() => {
    const el = path.current;
    if (!el) return;
    let phase = 0, raf = 0, last = 0, visible = false;
    const draw = () => {
      const end = Math.max(2, progress.get() * VW);
      const y = (x: number) => (VH / 2 + A * Math.sin((2 * Math.PI * (x + phase)) / W)).toFixed(2);
      let d = `M0 ${y(0)}`;
      for (let x = 2; x < end; x += 2) d += `L${x} ${y(x)}`;
      d += `L${end.toFixed(1)} ${y(end)}`;
      el.setAttribute("d", d);
    };
    const tick = (t: number) => {
      if (last) phase += ((t - last) / 2400) * W;
      last = t;
      draw();
      raf = visible ? requestAnimationFrame(tick) : 0;
    };
    draw();
    const unsub = progress.on("change", () => { if (!raf) draw(); });
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting && enabled;
      last = 0;
      if (visible && !raf) raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); unsub(); };
  }, [enabled, progress]);

  return (
    <svg aria-hidden="true" viewBox={`0 0 ${VW} ${VH}`} preserveAspectRatio="none" className={`block w-full overflow-visible text-signal ${className ?? ""}`}>
      <path ref={path} fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
