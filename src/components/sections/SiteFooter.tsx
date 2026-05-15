import { BrandLogo } from "@/components/atoms/BrandLogo";
import { Icon } from "@/components/atoms/Icon";
import { SocialLinks, type SocialLink } from "@/components/molecules/SocialLinks";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export interface FooterLinkColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export interface SiteFooterProps {
  brand: string;
  description: string;
  linkColumn: FooterLinkColumn;
  visit: {
    title: string;
    address: string[];
    hours: Array<{ days: string; time: string }>;
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    socials: SocialLink[];
  };
  map: {
    title?: string;
    /** Full address used for the embedded Google Maps query. */
    query: string;
    /** Label rendered above the map block. */
    label?: string;
  };
  legal: Array<{ label: string; href: string }>;
  copyright: string;
  className?: string;
}

export function SiteFooter({
  brand,
  description,
  linkColumn,
  visit,
  contact,
  map,
  legal,
  copyright,
  className,
}: SiteFooterProps) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(map.query)}&output=embed`;

  return (
    <footer
      className={cn(
        "border-outline-variant/20 bg-secondary-container text-on-secondary-container border-t",
        className,
      )}
    >
      <Container>
        <div className="border-on-secondary-container/10 space-y-4 border-t py-10">
          {map.label ? (
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-body text-primary-fixed text-xs font-semibold tracking-[0.2em] uppercase">
                {map.title ?? "Find Us"}
              </h4>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  map.query,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-on-secondary-container/80 hover:text-on-secondary-container text-xs font-semibold tracking-[0.05em] uppercase"
              >
                Open in Maps ↗
              </a>
            </div>
          ) : null}
          <div className="border-on-secondary-container/15 bg-surface-container aspect-[3/1] w-full overflow-hidden rounded-[24px] border">
            <iframe
              title={`Map showing ${map.query}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              allowFullScreen
            />
          </div>
          {map.label ? (
            <p className="font-body text-on-secondary-container/70 text-sm">{map.label}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
          <div className="space-y-6 md:col-span-1">
            <BrandLogo size="lg" alt={brand} />
            <p className="font-body text-on-secondary-container/80 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div className="space-y-5">
            <h4 className="font-body text-primary-fixed text-xs font-semibold tracking-[0.2em] uppercase">
              {linkColumn.title}
            </h4>
            <nav className="flex flex-col gap-3">
              {linkColumn.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-on-secondary-container/80 decoration-primary-fixed/60 hover:text-on-secondary-container text-sm underline underline-offset-4 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-5">
            <h4 className="font-body text-primary-fixed text-xs font-semibold tracking-[0.2em] uppercase">
              {visit.title}
            </h4>
            <div className="font-body text-on-secondary-container/80 space-y-4 text-sm">
              <p className="flex items-start gap-2">
                <Icon icon={MapPin} size={16} className="mt-0.5" />
                <span>
                  {visit.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <div className="space-y-2">
                {visit.hours.map((row) => (
                  <div key={row.days} className="flex items-start gap-2">
                    <Icon icon={Clock} size={16} className="mt-0.5" />
                    <div>
                      <p className="text-on-secondary-container font-semibold">{row.days}</p>
                      <p>{row.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="font-body text-primary-fixed text-xs font-semibold tracking-[0.2em] uppercase">
              {contact.title}
            </h4>
            <div className="font-body text-on-secondary-container/80 space-y-3 text-sm">
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-on-secondary-container flex items-center gap-2"
              >
                <Icon icon={Mail} size={16} />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="hover:text-on-secondary-container flex items-center gap-2"
              >
                <Icon icon={Phone} size={16} />
                {contact.phone}
              </a>
            </div>
            <SocialLinks links={contact.socials} />
          </div>
        </div>

        <div className="border-on-secondary-container/10 border-t py-6">
          <div className="font-body text-on-secondary-container/60 flex flex-col items-center justify-between gap-4 text-xs md:flex-row">
            <p>{copyright}</p>
            <div className="flex gap-6">
              {legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-on-secondary-container transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
