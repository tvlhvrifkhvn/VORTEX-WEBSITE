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

/** Big number + mono unit + tiny label (+ note). Numbers scramble on enter (§6.2.3). */
/** `wide`: on desktop the number sits left and the label right, so wide tiles have no empty half. */
export function StatTile({ stat, index, theme, className, wide }: { stat: Stat; index?: string; theme?: Theme; className?: string; wide?: boolean }) {
  return (
    <Tile theme={theme} claim={stat.claim} className={cn("justify-between gap-10", className)}>
      {index && <span className="label-mono tabular text-muted-foreground">{index}</span>}
      <div className={cn(wide && "lg:flex lg:items-end lg:justify-between lg:gap-10")}>
        <p className="flex flex-wrap items-baseline gap-x-3">
          <ScrambleNumber value={stat.value} prefix={stat.prefix} className="text-stat font-semibold" />
          {stat.suffix && <span className="label-mono">{stat.suffix.trim()}</span>}
        </p>
        <Text as="p" className={cn("label-mono mt-3", wide && "lg:mt-0 lg:max-w-[22ch] lg:text-right")}>{stat.label}</Text>
        {stat.note && <Text as="p" className="mt-2 text-small text-muted-foreground">{stat.note}</Text>}
      </div>
    </Tile>
  );
}
