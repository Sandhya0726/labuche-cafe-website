import { forwardRef, type LabelHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("font-body text-on-surface text-sm font-semibold", className)}
      {...props}
    >
      {children}
      {required ? (
        <span aria-hidden="true" className="text-error ml-0.5">
          *
        </span>
      ) : null}
    </label>
  ),
);
Label.displayName = "Label";
