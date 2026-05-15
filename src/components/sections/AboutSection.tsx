import Image from "next/image";
import { Stat } from "@/components/atoms/Stat";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";

export interface AboutSectionStat {
  value: string;
  label: string;
}

export interface AboutSectionProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt?: string;
  stats?: AboutSectionStat[];
  id?: string;
  className?: string;
}

export function AboutSection({
  eyebrow,
  title,
  paragraphs,
  image,
  imageAlt,
  stats,
  id,
  className,
}: AboutSectionProps) {
  return (
    <section
      id={id}
      className={cn("bg-tertiary-container text-on-tertiary-container py-20 md:py-28", className)}
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative">
            <div className="bg-secondary-container/30 absolute -z-10 hidden h-full w-full translate-x-4 rotate-3 rounded-[40px] md:block" />
            <div className="shadow-whisper relative aspect-[4/5] w-full -rotate-1 overflow-hidden rounded-[24px]">
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <span className="font-body text-secondary-container text-xs font-semibold tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div className="font-body text-on-tertiary-container/80 space-y-4 text-base leading-relaxed sm:text-lg">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {stats && stats.length > 0 ? (
              <div className="border-on-tertiary-container/15 grid grid-cols-2 gap-8 border-t pt-6 sm:flex sm:gap-12">
                {stats.map((stat) => (
                  <Stat key={stat.label} value={stat.value} label={stat.label} tone="onCream" />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
