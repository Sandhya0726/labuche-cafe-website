"use client";

import { BrandLogo } from "@/components/atoms/BrandLogo";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { NavLink } from "@/components/molecules/NavLink";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./Container";

export interface HeaderNavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderProps {
  brand?: string;
  brandHref?: string;
  items?: HeaderNavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  /** Hide the primary CTA in both desktop and mobile drawer. Defaults to true. */
  showCta?: boolean;
  sticky?: boolean;
  className?: string;
}

const defaultItems: HeaderNavItem[] = [
  { label: "Home", href: "/", active: true },
  { label: "Menu", href: "/#menu" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Header({
  brand = "Lobuche Cafe",
  brandHref = "/",
  items = defaultItems,
  ctaLabel = "Reserve Table",
  ctaHref = "/reserve",
  showCta = true,
  sticky = true,
  className,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  // Lock body scroll + close on ESC while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "border-outline-variant/30 bg-background/90 relative z-[50] w-full border-b shadow-sm backdrop-blur",
        sticky && "sticky top-0",
        className,
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href={brandHref} aria-label={brand} className="inline-flex items-center">
            <BrandLogo size="md" alt={brand} priority />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {items.map((item) => (
              <NavLink key={item.href} href={item.href} active={item.active}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {showCta ? (
            <div className="hidden md:block">
              <Link href={ctaHref}>
                <Button size="sm" variant="primary">
                  {ctaLabel}
                </Button>
              </Link>
            </div>
          ) : null}

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            onClick={() => setOpen(true)}
            className="text-on-surface cursor-pointer rounded-lg p-2 md:hidden"
          >
            <Icon icon={Menu} size={24} />
          </button>
        </div>
      </Container>

      {/* Mobile drawer (renders alongside the header so backdrop covers the page) */}
      <MobileDrawer
        open={open}
        brand={brand}
        brandHref={brandHref}
        items={items}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
        showCta={showCta}
        onClose={() => setOpen(false)}
      />
    </header>
  );
}

interface MobileDrawerProps {
  open: boolean;
  brand: string;
  brandHref: string;
  items: HeaderNavItem[];
  ctaLabel: string;
  ctaHref: string;
  showCta: boolean;
  onClose: () => void;
}

function MobileDrawer({
  open,
  brand,
  brandHref,
  items,
  ctaLabel,
  ctaHref,
  showCta,
  onClose,
}: MobileDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Panel */}
      <aside
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "border-outline-variant/30 bg-surface-container fixed inset-y-0 left-0 z-50 flex h-dvh w-[85%] max-w-sm flex-col border-r shadow-2xl transition-transform duration-300 ease-out md:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="border-outline-variant/30 flex items-center justify-between border-b px-6 py-5">
          <Link
            href={brandHref}
            aria-label={brand}
            onClick={onClose}
            className="inline-flex items-center"
          >
            <BrandLogo size="sm" alt={brand} />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="text-on-surface cursor-pointer rounded-lg p-2"
          >
            <Icon icon={X} size={22} />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              aria-current={item.active ? "page" : undefined}
              className={cn(
                "font-body rounded-xl px-4 py-3 text-sm font-semibold tracking-[0.05em] uppercase transition-colors",
                item.active
                  ? "bg-primary-container/15 text-primary-container"
                  : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {showCta ? (
          <div className="border-outline-variant/30 border-t p-6">
            <Link href={ctaHref} onClick={onClose}>
              <Button fullWidth size="md">
                {ctaLabel}
              </Button>
            </Link>
          </div>
        ) : null}
      </aside>
    </>
  );
}
