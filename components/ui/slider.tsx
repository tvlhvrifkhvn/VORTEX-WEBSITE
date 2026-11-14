"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

/* Range slider (slot 8): shadcn/Radix pattern, restyled — hairline track, ink range, square thumb
   with a 44px hit area. Pass aria-label or aria-labelledby. Built in-house (21st.dev quota). */
export function Slider({ className, ...props }: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const count = (props.value ?? props.defaultValue ?? [0]).length;
  return (
    <SliderPrimitive.Root className={cn("relative flex h-11 w-full touch-none items-center select-none", className)} {...props}>
      <SliderPrimitive.Track className="relative h-px w-full grow bg-input">
        <SliderPrimitive.Range className="absolute h-1 -translate-y-[1.5px] bg-foreground" />
      </SliderPrimitive.Track>
      {Array.from({ length: count }, (_, i) => (
        <SliderPrimitive.Thumb
          key={i}
          aria-label={props["aria-label"]}
          className="relative block size-5 border-2 border-foreground bg-primary before:absolute before:-inset-3 before:content-['']"
        />
      ))}
    </SliderPrimitive.Root>
  );
}
