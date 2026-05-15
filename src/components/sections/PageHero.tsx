import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";

export interface PageHeroProps {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  tone?: "default" | "sage";
  className?: string;
}

export function PageHero({
  title,
  description,
  eyebrow,
  align = "left",
  tone = "default",
  className,
}: PageHeroProps) {
  const isSage = tone === "sage";
  return (
    <section
      className={cn(
        "pt-32 md:pt-40",
        isSage ? "bg-secondary-container text-on-background pb-20 md:pb-24" : "pb-12 md:pb-16",
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            "space-y-4",
            align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
          )}
        >
          {eyebrow ? (
            <span
              className={cn(
                "font-body block text-xs font-semibold tracking-[0.2em] uppercase",
                isSage ? "text-primary-fixed" : "text-primary-container",
              )}
            >
              {eyebrow}
            </span>
          ) : null}
          <h1
            className={cn(
              "font-display text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl",
              "text-on-surface",
            )}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={cn(
                "font-body text-base sm:text-lg",
                isSage ? "text-on-secondary-container" : "text-on-surface-variant",
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
