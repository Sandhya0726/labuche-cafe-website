import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const textareaVariants = cva(
  "w-full font-body text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:cursor-not-allowed disabled:opacity-50 resize-y",
  {
    variants: {
      variant: {
        filled:
          "bg-surface-container text-on-surface placeholder:text-on-surface-variant/60 border border-transparent focus-visible:border-secondary",
        outline:
          "bg-transparent border border-outline-variant text-on-surface placeholder:text-on-surface-variant/60 focus-visible:border-secondary",
        onCream:
          "bg-tertiary-fixed-dim text-on-tertiary-fixed placeholder:text-on-tertiary-fixed/50 border border-transparent focus-visible:ring-secondary-container focus-visible:border-secondary-container",
      },
      invalid: {
        true: "border-error focus-visible:ring-error",
        false: "",
      },
    },
    defaultVariants: {
      variant: "filled",
      invalid: false,
    },
  },
);

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, invalid, rows = 5, ...props }, ref) => (
    <textarea
      ref={ref}
      rows={rows}
      aria-invalid={invalid || undefined}
      className={cn(textareaVariants({ variant, invalid }), "rounded-2xl px-5 py-4", className)}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
