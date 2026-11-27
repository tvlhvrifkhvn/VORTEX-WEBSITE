import { cn } from "@/lib/utils";
import type { Stat } from "@/content/types";
import { ScrambleNumber } from "@/components/motion/scramble-number";
import { CornerMarks } from "./corner-marks";
import { Text } from "./text";
import type { Theme } from "./section";

/** Bento layout: 4/8/12 columns, hairline gaps drawn by the tiles' own borders (§3.4). */
export function Bento({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("@container grid grid-cols-4 gap-(--spacing-gutter) md:grid-cols-8 lg:grid-cols-12", className)} {...props} />;
}

interface TileProps extends React.ComponentProps<"div"> {
  theme?: Theme;
  marks?: boolean;
  claim?: boolean;
}

/** Bento cell: square, hairline border, optional theme and corner marks. Set col/row spans via className. */
export function Tile({ theme, marks, claim, className, children, ...props }: TileProps) {
  return (
    <div
      data-theme={theme}
      data-claim={claim ? "" : undefined}
      className={cn("relative flex flex-col border border-border p-6", !theme && "bg-card text-card-foreground", className)}
      {...props}
    >
      {marks && <CornerMarks />}
      {children}
    </div>
  );
}

/** Big number + mono unit + tiny label (+ note). Numbers scramble on enter (§6.2.3). */
/** No index letter. The number and its unit share a baseline (unit on the right); the label sits at the bottom.
    The tile is a @container, so sizes follow the tile: "stat" (narrow tiles, number + unit fill the width),
    "giant" / "hero" (wide tiles; hero is the larger). `wide`: desktop row — number left, vertically centred; label bottom-right. */
export function StatTile({ stat, theme, className, wide, size = "stat" }: { stat: Stat; theme?: Theme; className?: string; wide?: boolean; size?: "stat" | "giant" | "hero" }) {
  return (
    <Tile theme={theme} claim={stat.claim} className={cn("@container justify-between gap-(--space-block)", wide && "lg:flex-row lg:items-center", className)}>
      <div className={cn("flex items-baseline gap-x-3", !wide && "pt-(--space-tight)")}>
        <ScrambleNumber value={stat.value} prefix={stat.prefix} className={size === "hero" ? "hero-num" : size === "giant" ? "giant-fit" : "stat-fit"} />
        {stat.suffix && <span className="label-mono">{stat.suffix.trim()}</span>}
      </div>
      <div className={cn(wide && "lg:max-w-[22ch] lg:self-end lg:text-right")}>
        <Text as="p" className="label-mono">{stat.label}</Text>
        {stat.note && <Text as="p" className="mt-2 text-small text-muted-foreground">{stat.note}</Text>}
      </div>
    </Tile>
  );
}
