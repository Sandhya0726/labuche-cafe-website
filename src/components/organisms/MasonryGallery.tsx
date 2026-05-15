import Image from "next/image";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface MasonryGalleryProps extends HTMLAttributes<HTMLDivElement> {
  images: GalleryImage[];
  columns?: { base?: 1 | 2; md?: 2 | 3; lg?: 3 | 4 };
}

export const MasonryGallery = forwardRef<HTMLDivElement, MasonryGalleryProps>(
  ({ className, images, columns = { base: 1, md: 2, lg: 4 }, ...props }, ref) => {
    const columnClasses = cn(
      columns.base === 2 ? "columns-2" : "columns-1",
      columns.md === 3 ? "md:columns-3" : "md:columns-2",
      columns.lg === 3 ? "lg:columns-3" : "lg:columns-4",
    );
    return (
      <div ref={ref} className={cn(columnClasses, "gap-6 [&>figure]:mb-6", className)} {...props}>
        {images.map((image) => (
          <figure key={image.src} className="break-inside-avoid overflow-hidden rounded-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              width={640}
              height={800}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </figure>
        ))}
      </div>
    );
  },
);
MasonryGallery.displayName = "MasonryGallery";
