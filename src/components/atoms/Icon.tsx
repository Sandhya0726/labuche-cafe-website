import { forwardRef, type SVGAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, "ref"> {
  icon: LucideIcon;
  size?: number;
  label?: string;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon: LucideIconCmp, size = 20, label, className, ...props }, ref) => (
    <LucideIconCmp
      ref={ref}
      width={size}
      height={size}
      strokeWidth={1.75}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      className={cn("shrink-0", className)}
      {...props}
    />
  ),
);
Icon.displayName = "Icon";
