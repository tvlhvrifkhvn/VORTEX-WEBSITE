import { cn } from "@/lib/utils";

const isPlaceholder = (s: unknown) => typeof s === "string" && s.includes("[[PLACEHOLDER");

type TextProps<T extends React.ElementType> = { as?: T; children: string; claim?: boolean; className?: string } & Omit<React.ComponentProps<T>, "children">;

/** Placeholder-aware text: content containing [[PLACEHOLDER gets data-placeholder; claims get data-claim (§9.6). */
export function Text<T extends React.ElementType = "span">({ as, children, claim, className, ...props }: TextProps<T>) {
  const Tag = (as ?? "span") as React.ElementType;
  return (
    <Tag
      data-placeholder={isPlaceholder(children) ? "" : undefined}
      data-claim={claim ? "" : undefined}
      className={cn(className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
