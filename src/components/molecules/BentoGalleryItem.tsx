import Image from "next/image";
import { forwardRef, type HTMLAttributes } from "react";
import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/cn";

export type BentoCaptionStyle = "gradient" | "corner" | "hover" | "bordered";

export interface BentoGalleryItemProps extends HTMLAttributes<HTMLElement> {
  image: string;
  imageAlt: string;
  title?: string;
  description?: string;
  badge?: string;
  captionStyle?: BentoCaptionStyle;
  /** Tailwind class controlling rendered image height (e.g. `h-[400px]`). */
  heightClassName?: string;
}

export const BentoGalleryItem = forwardRef<HTMLElement, BentoGalleryItemProps>(
  (
    {
      className,
      image,
      imageAlt,
      title,
      description,
      badge,
      captionStyle = "gradient",
      heightClassName = "h-[400px]",
      ...props
    },
    ref,
  ) => (
    <figure
      ref={ref}
      className={cn(
        "group border-outline-variant/10 bg-surface-container shadow-whisper relative overflow-hidden rounded-[24px] border",
        className,
      )}
      {...props}
    >
      <div className={cn("relative w-full", heightClassName)}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {captionStyle === "gradient" && title ? (
        <figcaption className="absolute inset-x-0 bottom-0 space-y-1 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
          <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{title}</h3>
          {description ? (
            <p className="font-body text-sm text-white/80 sm:text-base">{description}</p>
          ) : null}
        </figcaption>
      ) : null}

      {captionStyle === "corner" && (title || badge) ? (
        <figcaption className="absolute bottom-6 left-6 space-y-2">
          {badge ? <Badge tone="accent">{badge}</Badge> : null}
          {title ? (
            <h3 className="font-display text-lg font-semibold text-white sm:text-xl">{title}</h3>
          ) : null}
        </figcaption>
      ) : null}

      {captionStyle === "hover" ? (
        <figcaption className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {title ? (
            <span className="font-display text-xl font-semibold text-white sm:text-2xl">
              {title}
            </span>
          ) : null}
        </figcaption>
      ) : null}

      {captionStyle === "bordered" ? (
        <span
          aria-hidden="true"
          className="group-hover:border-primary-fixed/20 pointer-events-none absolute inset-0 rounded-[24px] border-[16px] border-transparent transition-colors duration-500"
        />
      ) : null}
    </figure>
  ),
);
BentoGalleryItem.displayName = "BentoGalleryItem";
