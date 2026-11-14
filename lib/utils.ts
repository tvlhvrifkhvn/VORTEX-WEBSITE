import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/* Teach tailwind-merge the custom type scale, so `text-h2` (size) and
   `text-foreground` (color) never cancel each other out. */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["giant", "hero", "display", "h2", "h3", "lead", "body", "small", "button", "label", "micro"] },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
