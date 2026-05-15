import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";

export interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage: string;
  backgroundAlt?: string;
  className?: string;
}

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  backgroundAlt = "",
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[680px] w-full items-center overflow-hidden lg:min-h-[820px]",
        className,
      )}
    >
      <Image
        src={backgroundImage}
        alt={backgroundAlt}
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover brightness-[0.45]"
      />
      <div className="from-background/80 via-background/40 pointer-events-none absolute inset-0 bg-gradient-to-r to-transparent" />
      <Container className="relative z-10 py-24">
        <div className="text-on-surface max-w-3xl space-y-6">
          {eyebrow ? (
            <span className="font-body text-primary-container text-xs font-semibold tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="font-display text-4xl leading-[1.05] font-extrabold drop-shadow-lg sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="font-body text-on-surface/90 max-w-xl text-lg leading-relaxed sm:text-xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href={primaryCta.href}>
              <Button size="lg" variant="primary">
                {primaryCta.label}
              </Button>
            </Link>
            {secondaryCta ? (
              <Link href={secondaryCta.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-on-surface/60 text-on-surface hover:bg-on-surface/10"
                >
                  {secondaryCta.label}
                </Button>
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
