import { cva, type VariantProps } from "class-variance-authority";
import { createElement, forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const textVariants = cva("font-body", {
  variants: {
    size: {
      lg: "text-lg leading-relaxed font-medium",
      md: "text-base leading-relaxed font-normal",
      sm: "text-sm leading-normal font-normal",
      label: "text-sm font-semibold uppercase tracking-[0.05em]",
    },
    tone: {
      default: "text-on-surface",
      muted: "text-on-surface-variant",
      onCream: "text-on-tertiary-container",
      onSage: "text-on-secondary",
      accent: "text-primary-container",
    },
  },
  defaultVariants: {
    size: "md",
    tone: "default",
  },
});

type TextTag = "p" | "span" | "div" | "small";

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
  as?: TextTag;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, tone, as = "p", children, ...props }, ref) =>
    createElement(
      as,
      {
        ref,
        className: cn(textVariants({ size, tone }), className),
        ...props,
      },
      children,
    ),
);
Text.displayName = "Text";
