import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-body font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim",
        secondary: "bg-secondary-container text-on-secondary-container hover:bg-secondary",
        tertiary: "bg-tertiary-container text-on-tertiary-container hover:bg-tertiary-fixed-dim",
        outline:
          "border border-outline-variant bg-transparent text-on-surface hover:border-secondary hover:bg-surface-container-high",
        ghost: "bg-transparent text-on-surface hover:bg-surface-container-high",
        danger: "bg-error-container text-on-error-container hover:opacity-90",
      },
      size: {
        sm: "h-9 rounded-lg px-4 text-sm",
        md: "h-12 rounded-xl px-6 text-base",
        lg: "h-14 rounded-2xl px-8 text-lg",
        icon: "h-12 w-12 rounded-xl",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { buttonVariants };
