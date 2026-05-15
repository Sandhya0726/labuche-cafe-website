import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  tone?: "default" | "soft" | "sage";
}

const toneMap: Record<NonNullable<DividerProps["tone"]>, string> = {
  default: "bg-outline-variant",
  soft: "bg-tertiary-container/30",
  sage: "bg-secondary/30",
};

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", tone = "default", ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={cn(
        toneMap[tone],
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
      {...props}
    />
  ),
);
Divider.displayName = "Divider";
