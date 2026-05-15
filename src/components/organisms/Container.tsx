import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-[1280px]",
      xl: "max-w-[1440px]",
      full: "max-w-none",
    },
    padded: {
      true: "px-4 sm:px-6 md:px-10",
      false: "",
    },
  },
  defaultVariants: {
    size: "lg",
    padded: true,
  },
});

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padded, ...props }, ref) => (
    <div ref={ref} className={cn(containerVariants({ size, padded }), className)} {...props} />
  ),
);
Container.displayName = "Container";
