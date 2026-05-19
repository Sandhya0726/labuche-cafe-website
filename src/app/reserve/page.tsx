import { Header } from "@/components/organisms/Header";
import { brand, getNavItems } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reserve a Table — Lobuche Cafe",
  description:
    "Book a table at Lobuche Cafe. Pick a date, time and party size — we'll confirm your reservation by email.",
};

export default function ReservePage() {
  return (
    <>
      <Header brand={brand} items={getNavItems()} ctaHref="/reserve" />
      {/* <main className="flex-1">
        <PageHero align="center" title={reserveHero.title} description={reserveHero.description} />
        <ReservationFormSection {...reserveForm} />
      </main> */}
      <h1 className="w-full text-center"> In Progress...</h1>

      {/* <SiteFooter {...footer} /> */}
    </>
  );
}
