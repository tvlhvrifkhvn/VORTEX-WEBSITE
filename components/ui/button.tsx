import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* §6.2.12 — hard fill from the left (scaleX 0→1, 300ms quart), label color swap, arrow nudges 4px.
   Motion OFF → instant swap (global switch in globals.css). Min height 48px. */
export const buttonClass = cva(
  [
    "group/btn relative isolate inline-flex items-center justify-center gap-3 overflow-hidden",
    "font-mono text-button font-medium uppercase transition-colors duration-300 ease-in-out-quart",
    "before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out-quart",
    "hover:before:scale-x-100 focus-visible:before:scale-x-100 disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground before:bg-foreground hover:text-background focus-visible:text-background",
        secondary: "bg-secondary text-secondary-foreground before:bg-primary hover:text-primary-foreground focus-visible:text-primary-foreground",
        ghost: "border border-foreground text-foreground before:bg-foreground hover:text-background focus-visible:text-background",
        text: "min-h-11 justify-start px-0 underline-offset-4 before:hidden hover:underline",
      },
      size: { md: "min-h-12 px-5", lg: "min-h-14 px-7" },
    },
    compoundVariants: [{ variant: "text", class: "min-h-11 px-0" }],
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonVariants = VariantProps<typeof buttonClass>;
interface BaseProps extends ButtonVariants { className?: string; children: React.ReactNode; arrow?: "→" | "↗" | "↓" | false }
type AsLink = BaseProps & { href: string } & Omit<React.ComponentProps<"a">, "href" | "children" | "className">;
type AsButton = BaseProps & { href?: undefined } & Omit<React.ComponentProps<"button">, "children" | "className">;

export function Button(props: AsLink | AsButton) {
  const { variant, size, className, children, arrow, ...rest } = props;
  const external = typeof rest.href === "string" && /^https?:|^mailto:|^tel:/.test(rest.href);
  const glyph = arrow === false ? null : (arrow ?? (external ? "↗" : "→"));
  const inner = (
    <>
      <span>{children}</span>
      {glyph && (
        <span aria-hidden="true" className="font-sans text-body transition-transform duration-300 ease-in-out-quart group-hover/btn:translate-x-1 group-focus-visible/btn:translate-x-1">
          {glyph}
        </span>
      )}
    </>
  );
  const cls = cn(buttonClass({ variant, size }), className);

  if (rest.href !== undefined) {
    const { href, ...a } = rest as AsLink;
    if (external) {
      return (
        <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" {...a}>
          {inner}
          {href.startsWith("http") && <span className="sr-only"> (opens in a new tab)</span>}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...a}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} {...(rest as AsButton)}>
      {inner}
    </button>
  );
}

/** Inline text link with an arrow (→ internal, ↗ external). */
export function ArrowLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Button href={href} variant="text" className={cn("label-mono", className)}>
      {children}
    </Button>
  );
}
