import { Divider } from "@/components/atoms/Divider";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { Container } from "./Container";

export interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export interface FooterProps {
  brand?: string;
  tagline?: string;
  columns?: FooterColumn[];
  copyright?: string;
  className?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Visit",
    links: [
      { label: "Hours", href: "#hours" },
      { label: "Location", href: "#location" },
      { label: "Reservations", href: "#reserve" },
    ],
  },
  {
    title: "Cafe",
    links: [
      { label: "Menu", href: "#menu" },
      { label: "Sourcing", href: "#sourcing" },
      { label: "Events", href: "#events" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "#instagram" },
      { label: "Newsletter", href: "#newsletter" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer({
  brand = "Lobuche Cafe",
  tagline = "Carefully crafted dishes and beverages in a welcoming, hygienic atmosphere.",
  columns = defaultColumns,
  copyright = `© ${new Date().getFullYear()} Lobuche Cafe. All rights reserved.`,
  className,
}: FooterProps) {
  return (
    <footer
      className={cn(
        "border-outline-variant/40 bg-surface-container-lowest mt-auto border-t",
        className,
      )}
    >
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="space-y-3">
            <Heading level="h3" as="p">
              {brand}
            </Heading>
            <Text tone="muted" className="max-w-sm">
              {tagline}
            </Text>
          </div>
          {columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <Text size="label" tone="accent">
                {column.title}
              </Text>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-on-surface-variant hover:text-on-surface text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Divider />
        <div className="py-6">
          <Text size="sm" tone="muted">
            {copyright}
          </Text>
        </div>
      </Container>
    </footer>
  );
}
