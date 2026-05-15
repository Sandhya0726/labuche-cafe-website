import { MasonryGallery, type GalleryImage } from "@/components/organisms/MasonryGallery";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";

export interface GallerySectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  images: GalleryImage[];
  id?: string;
  className?: string;
}

export function GallerySection({
  eyebrow,
  title,
  description,
  images,
  id,
  className,
}: GallerySectionProps) {
  return (
    <section id={id} className={cn("bg-background py-20 md:py-28", className)}>
      <Container>
        <header className="mb-12 max-w-2xl space-y-3">
          {eyebrow ? (
            <span className="font-body text-primary-container text-xs font-semibold tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="font-body text-on-surface-variant text-base sm:text-lg">{description}</p>
          ) : null}
        </header>
        <MasonryGallery images={images} />
      </Container>
    </section>
  );
}
