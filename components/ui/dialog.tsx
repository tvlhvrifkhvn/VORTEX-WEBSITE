"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

/* Dialog (slot 9): shadcn/Radix pattern, restyled — square, ink scrim (no blur), hairline frame,
   mono "CLOSE ×" button. Built in-house (21st.dev quota). */
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;

interface DialogContentProps extends React.ComponentProps<typeof DialogPrimitive.Content> {
  closeLabel?: string;
  size?: "md" | "lg";
}

export function DialogContent({ className, children, closeLabel = "Close", size = "md", ...props }: DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-70 bg-ink/80 data-[state=closed]:animate-overlay-out data-[state=open]:animate-overlay-in" />
      <DialogPrimitive.Content
        data-theme="paper"
        className={cn(
          "fixed top-1/2 left-1/2 z-70 max-h-[90dvh] w-[calc(100%-2*var(--spacing-margin))] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-foreground p-6 md:p-10",
          "data-[state=closed]:animate-overlay-out data-[state=open]:animate-overlay-in",
          size === "md" ? "max-w-xl" : "max-w-6xl",
          className,
        )}
        {...props}
      >
        <DialogPrimitive.Close className="label-mono absolute top-0 right-0 min-h-11 px-4 hover:bg-foreground hover:text-background">
          {closeLabel.toUpperCase()} <span aria-hidden="true">×</span>
        </DialogPrimitive.Close>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
