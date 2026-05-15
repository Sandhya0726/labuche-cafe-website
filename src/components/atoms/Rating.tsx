import { Star } from "lucide-react";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: number;
}

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  ({ className, value, max = 5, size = 18, ...props }, ref) => {
    const filled = Math.max(0, Math.min(max, Math.round(value)));
    return (
      <div
        ref={ref}
        role="img"
        aria-label={`${filled} out of ${max} stars`}
        className={cn("flex items-center gap-0.5", className)}
        {...props}
      >
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            width={size}
            height={size}
            aria-hidden="true"
            strokeWidth={1.5}
            className={cn(
              i < filled ? "fill-primary-container text-primary-container" : "text-outline-variant",
            )}
          />
        ))}
      </div>
    );
  },
);
Rating.displayName = "Rating";
