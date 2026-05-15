import { cva, type VariantProps } from "class-variance-authority";
import { createElement, forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const headingVariants = cva("font-display tracking-tight text-on-surface", {
  variants: {
    level: {
      display: "text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-[3rem]",
      h1: "text-3xl font-bold leading-[1.2] sm:text-4xl",
      h2: "text-2xl font-bold leading-[1.3] sm:text-3xl",
      h3: "text-xl font-semibold leading-[1.4] sm:text-2xl",
      h4: "text-lg font-semibold leading-snug sm:text-xl",
    },
    tone: {
      default: "text-on-surface",
      muted: "text-on-surface-variant",
      onCream: "text-on-tertiary-container",
      accent: "text-primary-container",
    },
  },
  defaultVariants: {
    level: "h2",
    tone: "default",
  },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as?: HeadingTag;
}

const defaultTagForLevel: Record<NonNullable<HeadingProps["level"]>, HeadingTag> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, tone, as, children, ...props }, ref) => {
    const Tag = as ?? defaultTagForLevel[level ?? "h2"];
    return createElement(
      Tag,
      {
        ref,
        className: cn(headingVariants({ level, tone }), className),
        ...props,
      },
      children,
    );
  },
);
Heading.displayName = "Heading";
