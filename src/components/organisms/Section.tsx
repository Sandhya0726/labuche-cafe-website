import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Container, type ContainerProps } from "./Container";
import { cn } from "@/lib/cn";

const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      sm: "py-12 md:py-16",
      md: "py-16 md:py-24",
      lg: "py-24 md:py-32",
    },
    tone: {
      default: "bg-background text-on-background",
      raised: "bg-surface-container-low text-on-surface",
      cream: "bg-tertiary-container text-on-tertiary-container",
    },
  },
  defaultVariants: {
    spacing: "md",
    tone: "default",
  },
});

export interface SectionProps
  extends HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
  eyebrow?: string;
  title?: string;
  description?: string;
  containerSize?: ContainerProps["size"];
  align?: "left" | "center";
  actions?: ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      spacing,
      tone,
      eyebrow,
      title,
      description,
      containerSize = "lg",
      align = "left",
      actions,
      children,
      ...props
    },
    ref,
  ) => {
    const hasHeader = eyebrow || title || description || actions;
    return (
      <section ref={ref} className={cn(sectionVariants({ spacing, tone }), className)} {...props}>
        <Container size={containerSize}>
          {hasHeader ? (
            <header
              className={cn(
                "mb-12 flex flex-col gap-4",
                align === "center" && "items-center text-center",
              )}
            >
              {eyebrow ? (
                <Text size="label" tone="accent">
                  {eyebrow}
                </Text>
              ) : null}
              {title ? <Heading level="h1">{title}</Heading> : null}
              {description ? (
                <Text size="lg" tone="muted" className="max-w-2xl">
                  {description}
                </Text>
              ) : null}
              {actions ? <div className="mt-2 flex gap-3">{actions}</div> : null}
            </header>
          ) : null}
          {children}
        </Container>
      </section>
    );
  },
);
Section.displayName = "Section";
