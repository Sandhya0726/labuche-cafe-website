import type { LucideIcon } from "lucide-react";
import { forwardRef, type HTMLAttributes } from "react";
import { Icon } from "@/components/atoms/Icon";
import { cn } from "@/lib/cn";

export interface PhilosophyCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PhilosophyCard = forwardRef<HTMLDivElement, PhilosophyCardProps>(
  ({ className, icon, title, description, ...props }, ref) => (
    <article
      ref={ref}
      className={cn(
        "group border-outline-variant/20 bg-surface-container-highest hover:border-secondary rounded-[24px] border p-8 transition-colors duration-300 md:p-10",
        className,
      )}
      {...props}
    >
      <Icon icon={icon} size={36} className="text-primary-fixed-dim mb-6" />
      <h3 className="font-display text-on-surface mb-3 text-xl font-bold sm:text-2xl">{title}</h3>
      <p className="font-body text-on-surface-variant text-base leading-relaxed">{description}</p>
    </article>
  ),
);
PhilosophyCard.displayName = "PhilosophyCard";
