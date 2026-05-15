import { Header } from "@/components/organisms/Header";
import {
  AboutSection,
  GallerySection,
  HeroSection,
  MenuSection,
  PromiseSection,
  ReservationCtaSection,
  SiteFooter,
  TestimonialsSection,
} from "@/components/sections";
import {
  about,
  brand,
  footer,
  gallery,
  hero,
  menu,
  navItems,
  promise,
  reservation,
  testimonials,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <Header brand={brand} items={navItems} ctaHref="/reserve" />
      <main className="flex-1">
        <HeroSection {...hero} />
        <AboutSection {...about} />
        <MenuSection {...menu} />
        <PromiseSection {...promise} />
        <GallerySection {...gallery} />
        <TestimonialsSection {...testimonials} />
        <ReservationCtaSection {...reservation} />
      </main>
      <SiteFooter {...footer} />
    </>
  );
}
