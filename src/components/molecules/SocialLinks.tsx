import type { LucideIcon } from "lucide-react";
import { forwardRef, type HTMLAttributes } from "react";
import { Icon } from "@/components/atoms/Icon";
import { cn } from "@/lib/cn";

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

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
          className="bg-surface-container/40 text-on-secondary-container hover:bg-primary-fixed hover:text-on-primary-fixed flex h-10 w-10 items-center justify-center rounded-full transition-colors"
        >
          <Icon icon={link.icon} size={18} label={link.label} />
        </a>
      ))}
    </div>
  ),
);
SocialLinks.displayName = "SocialLinks";
