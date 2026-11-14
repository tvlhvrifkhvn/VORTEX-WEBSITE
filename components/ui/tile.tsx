import { cn } from "@/lib/utils";
import type { Stat } from "@/content/types";
import { ScrambleNumber } from "@/components/motion/scramble-number";
import { CornerMarks } from "./corner-marks";
import { Text } from "./text";
import type { Theme } from "./section";

/** Bento layout: 4/8/12 columns, hairline gaps drawn by the tiles' own borders (§3.4). */
export function Bento({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("grid grid-cols-4 gap-(--spacing-gutter) md:grid-cols-8 lg:grid-cols-12", className)} {...props} />;
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

/** Big number + tiny label (+ note). Numbers scramble on enter (§6.2.3). */
export function StatTile({ stat, index, theme, className }: { stat: Stat; index?: string; theme?: Theme; className?: string }) {
  return (
    <Tile theme={theme} claim={stat.claim} className={cn("justify-between gap-10", className)}>
      {index && <span className="label-mono tabular text-muted-foreground">{index}</span>}
      <div>
        <ScrambleNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} className="text-display font-semibold" />
        <Text as="p" className="label-mono mt-3">{stat.label}</Text>
        {stat.note && <Text as="p" className="mt-2 text-small text-muted-foreground">{stat.note}</Text>}
      </div>
    </Tile>
  );
}
