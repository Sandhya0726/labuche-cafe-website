import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const cardVariants = cva("relative flex flex-col shadow-whisper transition-colors", {
  variants: {
    surface: {
      cream: "bg-tertiary-container text-on-tertiary-container",
      beige: "bg-tertiary-fixed-dim text-on-tertiary-fixed",
      sage: "bg-secondary-container text-on-secondary-container",
      dark: "bg-surface-container-high text-on-surface",
    },
    padding: {
      none: "p-0",
      sm: "p-5",
      md: "p-8",
      lg: "p-10",
    },
    radius: {
      md: "rounded-xl",
      lg: "rounded-2xl",
      xl: "rounded-[1.75rem]",
    },
    bordered: {
      true: "border border-secondary/30",
      false: "",
    },
    interactive: {
      true: "cursor-pointer hover:border-secondary",
      false: "",
    },
  },
  defaultVariants: {
    surface: "cream",
    padding: "md",
    radius: "lg",
    bordered: false,
    interactive: false,
  },
  compoundVariants: [
    {
      interactive: true,
      bordered: false,
      class: "border border-transparent",
    },
  ],
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, surface, padding, radius, bordered, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ surface, padding, radius, bordered, interactive }), className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-4 flex flex-col gap-1.5", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

export const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-3", className)} {...props} />
  ),
);
CardBody.displayName = "CardBody";

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-6 flex items-center gap-3", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";
