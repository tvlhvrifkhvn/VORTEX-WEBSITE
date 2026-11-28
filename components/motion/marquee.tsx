import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  /** Seconds per loop (default 40). */
  speed?: number;
  className?: string;
}

/* §6.2.5 — CSS marquee: duplicated track, translateX(0 → -50%), pauses on hover/focus-within.
   Motion OFF / no JS: static wrapped list, duplicate hidden. Hard edges (no fades). */
export function Marquee({ items, speed = 40, className }: MarqueeProps) {
  const row = (hidden?: boolean) => (
    <ul aria-hidden={hidden || undefined} className={cn("flex shrink-0 items-center", hidden && "marquee-dup")}>
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap">
          <span className="px-6">{item}</span>
          <span aria-hidden="true" className="text-muted-foreground">+</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("marquee group overflow-hidden", className)}>
      <div
        className="marquee-track flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        {row()}
        {row(true)}
      </div>
    </div>
  );
}
