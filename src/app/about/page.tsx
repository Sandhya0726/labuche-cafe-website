import { Header } from "@/components/organisms/Header";
import {
  brand,
  getNavItems
} from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Lobuche Cafe",
  description:
    "From the mist-covered peaks of the Annapurna range to Australia — meet the people, the philosophy and the craft behind Lobuche Cafe.",
};

export default function AboutPage() {
  return (
    <>
      <Header brand={brand} items={getNavItems("About Us")} ctaHref="/reserve" />
      <main className="flex-1">
        {/* <HeroSection {...aboutHero} />
        <SplitMediaSection {...aboutJourney} />
        <PhilosophySection {...aboutPhilosophy} />
        <FoundersSection {...aboutFounders} />
        <CraftSection {...aboutCraft} />
        <ReservationCtaSection {...aboutCta} /> */}
<h1 className="text-center w-full"> In Progress...</h1>
      </main>
      {/* <SiteFooter {...footer} /> */}
    </>
  );
}
