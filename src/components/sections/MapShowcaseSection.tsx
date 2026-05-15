import Image from "next/image";
import { Navigation } from "lucide-react";
import { Icon } from "@/components/atoms/Icon";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";

export interface MapShowcaseSectionProps {
  atmosphereImage: string;
  atmosphereImageAlt?: string;
  atmosphereCaption: string;
  mapImage: string;
  mapImageAlt?: string;
  directionsHref?: string;
  directionsLabel?: string;
  className?: string;
}

export function MapShowcaseSection({
  atmosphereImage,
  atmosphereImageAlt = "Cafe interior at night",
  atmosphereCaption,
  mapImage,
  mapImageAlt = "Map of the cafe location",
  directionsHref = "#",
  directionsLabel = "Get Directions",
  className,
}: MapShowcaseSectionProps) {
  return (
    <section className={cn("pb-24", className)}>
      <Container>
        <div className="grid grid-cols-1 gap-6 md:auto-rows-[260px] md:grid-cols-3 lg:auto-rows-[320px]">
          <figure className="bg-surface-container-high relative overflow-hidden rounded-[24px] md:col-span-2 md:row-span-1">
            <Image
              src={atmosphereImage}
              alt={atmosphereImageAlt}
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover opacity-70"
            />
            <div className="from-background/95 via-background/40 absolute inset-0 bg-gradient-to-t to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <p className="font-display text-on-surface text-xl font-semibold sm:text-2xl">
                {atmosphereCaption}
              </p>
            </figcaption>
          </figure>

          <a
            href={directionsHref}
            className="group bg-surface-container-high relative block overflow-hidden rounded-[24px]"
          >
            <Image
              src={mapImage}
              alt={mapImageAlt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            />
            <div className="bg-background/50 absolute inset-0 flex items-center justify-center">
              <span className="border-primary-container/30 bg-surface-container/90 text-on-surface flex items-center gap-2 rounded-full border px-5 py-3 backdrop-blur transition-transform group-hover:scale-105">
                <Icon icon={Navigation} size={18} className="text-primary-container" />
                <span className="font-body text-sm font-semibold">{directionsLabel}</span>
              </span>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}
