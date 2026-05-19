import { Header } from "@/components/organisms/Header";
import {
  GallerySection,
  HeroSection,
  ReservationCtaSection,
  SiteFooter,
} from "@/components/sections";
import { brand, footer, gallery, hero, navItems, reservation } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <Header brand={brand} items={navItems} ctaHref="/reserve" />
      <main className="flex-1">
        <HeroSection {...hero} />
        {/* <AboutSection {...about} /> */}
        {/* <MenuSection {...menu} /> */}
        {/* <PromiseSection {...promise} /> */}
        <GallerySection {...gallery} />
        {/* <TestimonialsSection {...testimonials} /> */}
        <ReservationCtaSection {...reservation} />
      </main>
      <SiteFooter {...footer} />
    </>
  );
}
