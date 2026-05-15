import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/atoms/Icon";
import { cn } from "@/lib/cn";

const iconBoxVariants = cva("flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl", {
  variants: {
    tone: {
      accent: "bg-primary-container text-on-primary-container",
      sage: "bg-secondary-container text-on-secondary-container",
      neutral: "bg-surface-container-high text-on-surface",
      warm: "bg-primary-fixed-dim text-on-primary-fixed",
      cream: "bg-secondary-fixed text-on-secondary-fixed",
    },
  },
  defaultVariants: { tone: "accent" },
});

export interface FeatureCardProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof iconBoxVariants> {
  icon: LucideIcon;
  title: string;
  description: string;
  layout?: "stack" | "row";
}

export const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, icon, title, description, tone, layout = "stack", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "shadow-whisper border-outline-variant/20 bg-background hover:border-secondary/50 flex rounded-2xl border p-10 transition-colors",
        layout === "stack"
          ? "flex-col items-center gap-6 text-center"
          : "flex-col items-start gap-6 text-left md:flex-row md:items-center",
        className,
      )}
      {...props}
    >
      <span className={iconBoxVariants({ tone })}>
        <Icon icon={icon} size={26} />
      </span>
      <div className={cn(layout === "stack" ? "space-y-2" : "space-y-2")}>
        <h3 className="font-display text-on-surface text-xl font-semibold">{title}</h3>
        <p className="font-body text-on-surface-variant text-base leading-relaxed">{description}</p>
      </div>
    </div>
  ),
);
FeatureCard.displayName = "FeatureCard";
