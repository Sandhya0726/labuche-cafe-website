import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  tone?: "default" | "onCream";
}

export const Stat = forwardRef<HTMLDivElement, StatProps>(
  ({ className, value, label, tone = "default", ...props }, ref) => (
    <div ref={ref} className={cn("space-y-1", className)} {...props}>
      <p
        className={cn(
          "font-display text-3xl font-bold sm:text-4xl",
          tone === "onCream" ? "text-on-tertiary-container" : "text-on-surface",
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "font-body text-xs font-semibold tracking-[0.05em] uppercase",
          tone === "onCream" ? "text-on-tertiary-container/70" : "text-on-surface-variant",
        )}
      >
        {label}
      </p>
    </div>
  ),
);
Stat.displayName = "Stat";
