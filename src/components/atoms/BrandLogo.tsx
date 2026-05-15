import Image from "next/image";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface BrandLogoProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
  alt?: string;
  priority?: boolean;
}

const sizeMap: Record<NonNullable<BrandLogoProps["size"]>, string> = {
  sm: "h-6 sm:h-7",
  md: "h-7 sm:h-9",
  lg: "h-9 sm:h-12",
};

/**
 * The Lobuche Cafe wordmark logo. The PNG already encodes the brand
 * lockup (mountain + LOBUCHE / CAFE), so this atom is the single source
 * of truth for rendering the brand mark across the site.
 */
export const BrandLogo = forwardRef<HTMLSpanElement, BrandLogoProps>(
  ({ className, size = "md", alt = "Lobuche Cafe", priority, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("relative inline-flex items-center", sizeMap[size], className)}
      {...props}
    >
      <Image
        src="/logo/_Transparent logo.png"
        alt={alt}
        width={1280}
        height={250}
        priority={priority}
        sizes="(max-width: 640px) 160px, 220px"
        className="h-full w-auto object-contain"
      />
    </span>
  ),
);
BrandLogo.displayName = "BrandLogo";
