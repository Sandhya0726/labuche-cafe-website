import { Header } from "@/components/organisms/Header";
import { brand, getNavItems } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Lobuche Cafe",
  description:
    "Visit Lobuche Cafe in Melbourne. Reach out by email, phone or the contact form, or step into our world of artisanal Nepali coffee and dishes.",
};

export default function ContactPage() {
  return (
    <>
      <Header brand={brand} items={getNavItems("Contact")} ctaHref="/reserve" />
      <main className="flex-1">
        {/* <PageHero
          eyebrow={contactHero.eyebrow}
          title={contactHero.title}
          description={contactHero.description}
        />
        <ContactSection {...contact} />
        <MapShowcaseSection {...mapShowcase} /> */}
        <h1 className="w-full text-center"> In Progress...</h1>
      </main>
      {/* <SiteFooter {...footer} /> */}
    </>
  );
}
