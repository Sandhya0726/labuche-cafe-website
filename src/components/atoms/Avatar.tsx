import Image from "next/image";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface AvatarProps {
  src: string;
  alt: string;
  size?: 32 | 40 | 48 | 56 | 64;
  bordered?: boolean;
  className?: string;
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, size = 48, bordered = true, className }, ref) => (
    <span
      ref={ref}
      className={cn(
        "relative inline-block overflow-hidden rounded-full",
        bordered && "ring-primary-container ring-2",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} fill sizes={`${size}px`} className="object-cover" />
    </span>
  ),
);
Avatar.displayName = "Avatar";
