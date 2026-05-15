import Image from "next/image";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface CraftBlockProps extends HTMLAttributes<HTMLElement> {
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  imageHeightClassName?: string;
}

export const CraftBlock = forwardRef<HTMLElement, CraftBlockProps>(
  (
    {
      className,
      image,
      imageAlt,
      title,
      description,
      imageHeightClassName = "h-72 md:h-[420px]",
      ...props
    },
    ref,
  ) => (
    <article ref={ref} className={cn("space-y-6", className)} {...props}>
      <div className={cn("relative overflow-hidden rounded-[24px]", imageHeightClassName)}>
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <h3 className="font-display text-on-surface text-2xl font-bold sm:text-3xl">{title}</h3>
      <p className="font-body text-on-surface-variant text-base leading-relaxed">{description}</p>
    </article>
  ),
);
CraftBlock.displayName = "CraftBlock";
