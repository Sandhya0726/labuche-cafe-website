import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  price?: string;
  trailing?: ReactNode;
  divider?: boolean;
}

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  ({ className, title, description, price, trailing, divider = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group flex items-start justify-between gap-6 py-4",
        divider && "border-tertiary-container/20 border-b last:border-b-0",
        className,
      )}
      {...props}
    >
      <div className="flex-1 space-y-1">
        <h4 className="font-display text-on-surface text-lg leading-snug font-semibold">{title}</h4>
        {description ? (
          <p className="font-body text-on-surface-variant text-sm leading-relaxed">{description}</p>
        ) : null}
      </div>
      {price ? (
        <span className="font-display text-primary-container text-lg font-semibold">{price}</span>
      ) : null}
      {trailing}
    </div>
  ),
);
MenuItem.displayName = "MenuItem";
