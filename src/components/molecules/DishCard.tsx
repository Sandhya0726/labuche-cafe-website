import Image from "next/image";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface DishCardProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  price: string;
  image: string;
  imageAlt?: string;
  tag?: string;
  featured?: boolean;
}

export const DishCard = forwardRef<HTMLElement, DishCardProps>(
  (
    { className, title, description, price, image, imageAlt, tag, featured = false, ...props },
    ref,
  ) => (
    <article
      ref={ref}
      className={cn(
        "shadow-whisper group border-outline-variant/10 bg-surface-container-lowest hover:border-secondary/40 cursor-pointer overflow-hidden rounded-2xl border transition-colors",
        featured && "md:col-span-2",
        className,
      )}
      {...props}
    >
      <div className={cn("flex h-full flex-col", featured && "md:flex-row")}>
        <div
          className={cn("relative overflow-hidden", featured ? "h-64 md:h-auto md:w-1/2" : "h-56")}
        >
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div
          className={cn("flex flex-col justify-center gap-3 p-8", featured && "md:w-1/2 md:p-10")}
        >
          {tag ? (
            <span className="font-body text-secondary text-xs font-bold tracking-[0.05em] uppercase">
              {tag}
            </span>
          ) : null}
          <h3
            className={cn(
              "font-display text-on-surface font-semibold",
              featured ? "text-2xl" : "text-xl",
            )}
          >
            {title}
          </h3>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed">{description}</p>
          <p
            className={cn(
              "font-display text-primary-container font-semibold",
              featured ? "text-2xl" : "text-xl",
            )}
          >
            {price}
          </p>
        </div>
      </div>
    </article>
  ),
);
DishCard.displayName = "DishCard";
