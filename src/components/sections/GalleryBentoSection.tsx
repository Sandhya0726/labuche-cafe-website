"use client";

import { useMemo, useState } from "react";
import { Chip } from "@/components/atoms/Chip";
import {
  BentoGalleryItem,
  type BentoGalleryItemProps,
} from "@/components/molecules/BentoGalleryItem";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";

export interface GalleryBentoItem extends Omit<BentoGalleryItemProps, "className"> {
  id: string;
  category: string;
  /** Tailwind md:col-span class controlling grid placement. */
  colSpanClassName?: string;
}

export interface GalleryBentoSectionProps {
  categories: string[];
  items: GalleryBentoItem[];
  initialCategory?: string;
  id?: string;
  className?: string;
}

export function GalleryBentoSection({
  categories,
  items,
  initialCategory = "All",
  id,
  className,
}: GalleryBentoSectionProps) {
  const [active, setActive] = useState(initialCategory);

  const visibleItems = useMemo(() => {
    if (active === "All") return items;
    return items.filter((item) => item.category === active);
  }, [active, items]);

  return (
    <section id={id} className={cn("bg-background py-16 md:py-20", className)}>
      <Container>
        <div
          role="tablist"
          aria-label="Gallery category"
          className="mb-12 flex flex-wrap justify-center gap-3 md:mb-16 md:gap-4"
        >
          {categories.map((category) => (
            <Chip
              key={category}
              role="tab"
              aria-selected={active === category}
              active={active === category}
              onClick={() => setActive(category)}
            >
              {category}
            </Chip>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {visibleItems.map((item) => {
            const { id: itemId, category, colSpanClassName, ...rest } = item;
            void category;
            return (
              <BentoGalleryItem
                key={itemId}
                className={cn(colSpanClassName ?? "md:col-span-4")}
                {...rest}
              />
            );
          })}
        </div>

        {visibleItems.length === 0 ? (
          <p className="font-body text-on-surface-variant mt-12 text-center">
            No moments captured for this category yet — check back soon.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
