import Link from "next/link";
import { DishCard, type DishCardProps } from "@/components/molecules/DishCard";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";

export interface MenuDish extends Omit<DishCardProps, "className" | "featured"> {
  featured?: boolean;
}

export interface MenuSectionProps {
  eyebrow: string;
  title: string;
  link?: { label: string; href: string };
  dishes: MenuDish[];
  id?: string;
  className?: string;
}

export function MenuSection({ eyebrow, title, link, dishes, id, className }: MenuSectionProps) {
  return (
    <section id={id} className={cn("bg-on-surface text-surface py-20 md:py-28", className)}>
      <Container>
        <header className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="space-y-2">
            <span className="font-body text-secondary-container text-xs font-semibold tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>
          {link ? (
            <Link
              href={link.href}
              className="font-body text-secondary-container hover:text-surface text-sm font-semibold tracking-[0.05em] uppercase underline decoration-2 underline-offset-8 transition-colors"
            >
              {link.label}
            </Link>
          ) : null}
        </header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {dishes.map((dish) => (
            <DishCard key={dish.title} {...dish} />
          ))}
        </div>
      </Container>
    </section>
  );
}
