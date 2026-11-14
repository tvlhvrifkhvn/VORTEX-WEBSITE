import { cn } from "@/lib/utils";

/** Max 1440px, fluid side margins (§4.5). */
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("container-vx", className)} {...props} />;
}

/** 4 / 8 / 12 columns (§4.5). */
export function Grid({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("grid-vx", className)} {...props} />;
}
