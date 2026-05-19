import { Header } from "@/components/organisms/Header";
import { brand, getNavItems } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Lobuche Cafe",
  description:
    "Captured moments from Lobuche Cafe — signature dishes, mountain brews and the atmosphere of our Himalayan-inspired sanctuary.",
};

export default function GalleryPage() {
  return (
    <>
      <Header brand={brand} items={getNavItems("Gallery")} ctaHref="/reserve" />
      <main className="flex-1">
        {/* <PageHero
          tone="sage"
          align="center"
          eyebrow={galleryHero.eyebrow}
          title={galleryHero.title}
          description={galleryHero.description}
        />
        <GalleryBentoSection {...galleryBento} />
        <ReservationCtaSection {...galleryCta} /> */}
        <h1 className="w-full text-center"> In Progress...</h1>
      </main>
      {/* <SiteFooter {...footer} /> */}
    </>
  );
}
