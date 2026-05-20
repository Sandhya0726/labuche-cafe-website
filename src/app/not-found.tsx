import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Container } from "@/components/organisms/Container";
import { Header } from "@/components/organisms/Header";
import { brand, getNavItems } from "@/lib/site-data";
import { Compass, Home as HomeIcon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Page not found — Lobuche Cafe",
  description:
    "Looks like you've wandered off the trail. Head back to the cafe to find what you're looking for.",
};

export default function NotFound() {
  return (
    <>
      <Header brand={brand} items={getNavItems()} ctaHref="/reserve"/>
      <main className="flex flex-1 items-center justify-center py-24 md:py-32">
        <Container size="md">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <span className="border-outline-variant/40 bg-surface-container font-body text-primary-container inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase">
              <Icon icon={Compass} size={14} />
              Off the trail
            </span>

            <p
              aria-hidden="true"
              className="font-display text-primary-container text-7xl leading-none font-extrabold drop-shadow-sm sm:text-8xl md:text-[10rem]"
            >
              404
            </p>

            <h1 className="font-display text-on-surface text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
              This page slipped past the summit.
            </h1>

            <p className="font-body text-on-surface-variant max-w-xl text-base sm:text-lg">
              The page you&apos;re looking for has wandered off — maybe it&apos;s warming up with a
              cup of Himalayan brew. Let&apos;s get you back on the path.
            </p>

            <div className="mt-2">
              <Link href="/">
                <Button size="lg" variant="primary">
                  <Icon icon={HomeIcon} size={18} />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
