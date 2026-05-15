import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  size?: "sm" | "md";
}

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, active = false, size = "md", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      aria-pressed={active}
      className={cn(
        "font-body focus-visible:ring-primary-container focus-visible:ring-offset-background inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        size === "sm" ? "h-9 px-4 text-sm" : "h-11 px-6 text-sm md:px-8",
        active
          ? "bg-primary-fixed text-on-primary-fixed shadow-whisper"
          : "bg-surface-container-high text-on-surface-variant hover:bg-surface-variant hover:text-on-surface",
        className,
      )}
      {...props}
    />
  ),
);
Chip.displayName = "Chip";
