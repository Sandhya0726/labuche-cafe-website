import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const inputVariants = cva(
  "w-full font-body text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        filled:
          "bg-tertiary-container text-on-tertiary-container placeholder:text-on-tertiary-container/60 border border-transparent focus-visible:border-secondary",
        outline:
          "bg-transparent border border-outline-variant text-on-surface placeholder:text-on-surface-variant focus-visible:border-secondary",
        onCream:
          "bg-tertiary-fixed-dim text-on-tertiary-fixed placeholder:text-on-tertiary-fixed/50 border border-transparent focus-visible:ring-secondary-container focus-visible:border-secondary-container",
      },
      size: {
        sm: "h-9 rounded-md px-3 text-sm",
        md: "h-12 rounded-2xl px-4",
        lg: "h-14 rounded-2xl px-5 text-lg",
      },
      invalid: {
        true: "border-error focus-visible:ring-error",
        false: "",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
      invalid: false,
    },
  },
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputVariants> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, invalid, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      aria-invalid={invalid || undefined}
      className={cn(inputVariants({ variant, size, invalid }), className)}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { inputVariants };
