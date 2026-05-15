import Image from "next/image";
import { Quote } from "@/components/atoms/Quote";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";

export interface FounderPortrait {
  src: string;
  alt: string;
  name?: string;
}

export interface FoundersSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  portraits: [FounderPortrait, FounderPortrait];
  quote: string;
  quoteAttribution?: string;
  id?: string;
  className?: string;
}

export function FoundersSection({
  eyebrow,
  title,
  description,
  portraits,
  quote,
  quoteAttribution,
  id,
  className,
}: FoundersSectionProps) {
  const [first, second] = portraits;
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Portrait portrait={first} />
            <Portrait portrait={second} className="mt-10 sm:mt-16" />
          </div>
          <div className="space-y-6">
            {eyebrow ? (
              <span className="font-body text-primary-container text-xs font-semibold tracking-[0.2em] uppercase">
                {eyebrow}
              </span>
            ) : null}
            <h2 className="font-display text-on-surface text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="font-body text-on-surface-variant text-base leading-relaxed sm:text-lg">
              {description}
            </p>
            <Quote attribution={quoteAttribution}>{quote}</Quote>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface PortraitProps {
  portrait: FounderPortrait;
  className?: string;
}

function Portrait({ portrait, className }: PortraitProps) {
  return (
    <figure className={cn("relative aspect-[3/4] overflow-hidden rounded-[24px]", className)}>
      <Image
        src={portrait.src}
        alt={portrait.alt}
        fill
        sizes="(min-width: 768px) 25vw, 50vw"
        className="object-cover"
      />
    </figure>
  );
}
