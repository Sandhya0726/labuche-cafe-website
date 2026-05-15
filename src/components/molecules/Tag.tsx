import { forwardRef, type HTMLAttributes } from "react";
import { Badge, type BadgeProps } from "@/components/atoms/Badge";
import { cn } from "@/lib/cn";

export interface TagGroupProps extends HTMLAttributes<HTMLDivElement> {
  items: Array<{ label: string; tone?: BadgeProps["tone"] }>;
  size?: BadgeProps["size"];
}

export const TagGroup = forwardRef<HTMLDivElement, TagGroupProps>(
  ({ className, items, size = "md", ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-wrap items-center gap-2", className)} {...props}>
      {items.map((item) => (
        <Badge key={item.label} tone={item.tone ?? "sage"} size={size}>
          {item.label}
        </Badge>
      ))}
    </div>
  ),
);
TagGroup.displayName = "TagGroup";
