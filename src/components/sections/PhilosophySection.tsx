import { PhilosophyCard, type PhilosophyCardProps } from "@/components/molecules/PhilosophyCard";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";

export type PhilosophyPillar = Omit<PhilosophyCardProps, "className">;

export interface PhilosophySectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  pillars: PhilosophyPillar[];
  id?: string;
  className?: string;
}

export function PhilosophySection({
  eyebrow,
  title,
  description,
  pillars,
  id,
  className,
}: PhilosophySectionProps) {
  return (
    <section id={id} className={cn("bg-surface-container-low py-20 md:py-28", className)}>
      <Container>
        <header className="mx-auto mb-12 max-w-2xl space-y-3 text-center md:mb-16">
          {eyebrow ? (
            <span className="font-body text-primary-container text-xs font-semibold tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="font-display text-on-surface text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="font-body text-on-surface-variant text-base sm:text-lg">{description}</p>
          ) : null}
        </header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <PhilosophyCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </Container>
    </section>
  );
}
