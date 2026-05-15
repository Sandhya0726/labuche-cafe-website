import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const selectVariants = cva(
  "w-full appearance-none font-body text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:cursor-not-allowed disabled:opacity-50 pr-12",
  {
    variants: {
      variant: {
        filled:
          "bg-tertiary-container text-on-tertiary-container border border-transparent focus-visible:border-secondary",
        outline:
          "bg-transparent border border-outline-variant text-on-surface focus-visible:border-secondary",
        onCream:
          "bg-tertiary-fixed-dim text-on-tertiary-fixed border border-transparent focus-visible:ring-secondary-container focus-visible:border-secondary-container",
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

export interface SelectProps
  extends
    Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, size, invalid, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(selectVariants({ variant, size, invalid }), className)}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        width={18}
        height={18}
        strokeWidth={2}
        className={cn(
          "pointer-events-none absolute top-1/2 right-4 -translate-y-1/2",
          variant === "onCream" ? "text-on-tertiary-fixed" : "text-on-surface-variant",
        )}
      />
    </div>
  ),
);
Select.displayName = "Select";
