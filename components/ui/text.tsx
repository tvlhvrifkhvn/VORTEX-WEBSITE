import { Fragment } from "react";
import { cn } from "@/lib/utils";

const isPlaceholder = (s: unknown) => typeof s === "string" && s.includes("[[PLACEHOLDER");

/** Content strings may mark ONE key phrase per paragraph as **bold** → <strong> (600). */
export function rich(s: string): React.ReactNode {
  if (!s.includes("**")) return s;
  return s.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>));
}

/** The same string without the ** marks (metadata, search, aria). */
export const plain = (s: string) => s.replace(/\*\*/g, "");

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
      {rich(children)}
    </Tag>
  );
}
