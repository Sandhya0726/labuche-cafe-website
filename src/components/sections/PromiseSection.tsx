import { FeatureCard, type FeatureCardProps } from "@/components/molecules/FeatureCard";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";

export interface PromiseFeature extends Omit<FeatureCardProps, "className" | "layout"> {
  span?: 1 | 2;
}

export interface PromiseSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  features: PromiseFeature[];
  id?: string;
  className?: string;
}

const colSpanMap: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
};

export function PromiseSection({
  eyebrow,
  title,
  description,
  features,
  id,
  className,
}: PromiseSectionProps) {
  return (
    <section id={id} className={cn("bg-surface-container py-20 md:py-28", className)}>
      <Container>
        <header className="mx-auto mb-16 max-w-2xl space-y-3 text-center">
          {eyebrow ? (
            <span className="font-body text-primary-container text-xs font-semibold tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="font-body text-on-surface-variant text-base sm:text-lg">{description}</p>
        </header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const { span = 1, ...rest } = feature;
            return (
              <FeatureCard
                key={feature.title}
                {...rest}
                layout={span === 2 ? "row" : "stack"}
                className={colSpanMap[span]}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
