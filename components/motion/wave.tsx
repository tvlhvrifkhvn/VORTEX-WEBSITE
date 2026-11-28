import { cn } from "@/lib/utils";

const W = 100; // wavelength (viewBox units): 4 waves across = medium frequency
const A = 7; // amplitude: low
const d = Array.from({ length: 251 }, (_, i) => {
  const x = i * 2;
  return `${i ? "L" : "M"}${x} ${(20 + A * Math.sin((2 * Math.PI * x) / W)).toFixed(2)}`;
}).join(" ");

/* Night-shift panel: a thick signal wave that runs continuously (one wavelength per 2.4s, seamless loop).
   CSS animation → stops under the global motion-off switch. Decorative. */
export function Wave({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 40" preserveAspectRatio="none" className={cn("block h-10 w-full overflow-hidden text-signal", className)}>
      <path d={d} fill="none" stroke="currentColor" strokeWidth="5" className="animate-wave" />
    </svg>
  );
}
