import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { forwardRef, type HTMLAttributes } from "react";
import { Icon } from "@/components/atoms/Icon";
import { cn } from "@/lib/cn";

export type SocialLink = {
  label: string;
  href: string;
} & ({ icon: LucideIcon; iconSrc?: never } | { iconSrc: string; icon?: never });

export interface SocialLinksProps extends HTMLAttributes<HTMLDivElement> {
  links: SocialLink[];
}

export const SocialLinks = forwardRef<HTMLDivElement, SocialLinksProps>(
  ({ className, links, ...props }, ref) => (
    <div ref={ref} className={cn("flex gap-3", className)} {...props}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="bg-surface-container/40 text-on-secondary-container hover:bg-surface-container/70 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-105"
        >
          {link.iconSrc ? (
            <Image
              src={link.iconSrc}
              alt=""
              width={22}
              height={22}
              className="h-[22px] w-[22px] object-contain"
            />
          ) : link.icon ? (
            <Icon icon={link.icon} size={18} label={link.label} />
          ) : null}
        </a>
      ))}
    </div>
  ),
);
SocialLinks.displayName = "SocialLinks";
