import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full font-body font-semibold uppercase tracking-wider",
  {
    variants: {
      tone: {
        sage: "bg-secondary text-on-secondary",
        cream: "bg-tertiary-container text-on-tertiary-container",
        accent: "bg-primary-container text-on-primary-container",
        outline: "border border-outline-variant bg-transparent text-on-surface-variant",
        danger: "bg-error-container text-on-error-container",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[10px]",
        md: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      tone: "sage",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, tone, size, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ tone, size }), className)} {...props} />
  ),
);
Badge.displayName = "Badge";
