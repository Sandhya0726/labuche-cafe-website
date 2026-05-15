import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";

export interface ReservationCtaSectionProps {
  title: string;
  description: string;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  perks?: string[];
  tone?: "dark" | "cream" | "sageCard";
  id?: string;
  className?: string;
}

export function ReservationCtaSection({
  title,
  description,
  cta,
  secondaryCta,
  perks,
  tone = "dark",
  id,
  className,
}: ReservationCtaSectionProps) {
  const isCream = tone === "cream";
  const isSageCard = tone === "sageCard";
  const outerClass = isCream
    ? "bg-primary-container text-on-primary-container py-24 md:py-32"
    : isSageCard
      ? "bg-surface-container-low py-20 md:py-28"
      : "bg-secondary-container pb-24 md:pb-32";
  const cardClass = isCream
    ? "px-4 md:px-0"
    : isSageCard
      ? "shadow-whisper rounded-[40px] border border-outline-variant/20 bg-secondary-container px-8 py-16 md:px-20"
      : "shadow-whisper rounded-[40px] border border-outline-variant/30 bg-surface-container-high px-8 py-16 md:px-16";
  const titleColor = isCream
    ? "text-on-primary-container"
    : isSageCard
      ? "text-on-background"
      : "text-on-surface";
  const descColor = isCream
    ? "text-on-primary-container/80"
    : isSageCard
      ? "text-on-secondary-container"
      : "text-on-surface/70";
  return (
    <section id={id} className={cn(outerClass, className)}>
      <Container>
        <div
          className={cn(
            "mx-auto flex max-w-4xl flex-col items-center gap-6 text-center",
            cardClass,
          )}
        >
          <h2
            className={cn(
              "font-display max-w-3xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl",
              titleColor,
            )}
          >
            {title}
          </h2>
          <p className={cn("font-body max-w-2xl text-base sm:text-lg", descColor)}>{description}</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Link href={cta.href}>
              <Button
                size="lg"
                variant={isCream ? "ghost" : "primary"}
                className={cn(
                  isCream && "bg-surface text-on-surface hover:bg-surface-container-high",
                )}
              >
                {cta.label}
              </Button>
            </Link>
            {secondaryCta ? (
              <Link href={secondaryCta.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    isCream &&
                      "border-on-primary-container/60 text-on-primary-container hover:bg-on-primary-container/10",
                    isSageCard &&
                      "border-primary-fixed text-primary-fixed hover:bg-primary-fixed/10",
                  )}
                >
                  {secondaryCta.label}
                </Button>
              </Link>
            ) : null}
          </div>
          {perks && perks.length > 0 ? (
            <ul
              className={cn(
                "mt-4 flex flex-wrap items-center justify-center gap-6",
                isCream ? "text-on-primary-container/70" : "text-on-surface/60",
              )}
            >
              {perks.map((perk) => (
                <li key={perk} className="font-body flex items-center gap-2 text-sm">
                  <Icon icon={CheckCircle2} size={16} />
                  {perk}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
