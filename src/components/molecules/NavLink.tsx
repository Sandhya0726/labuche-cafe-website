import Link, { type LinkProps } from "next/link";
import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

export interface NavLinkProps extends LinkProps, AnchorProps {
  active?: boolean;
  children: ReactNode;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, active = false, children, ...props }, ref) => (
    <Link
      ref={ref}
      aria-current={active ? "page" : undefined}
      className={cn(
        "font-body relative text-sm font-semibold tracking-[0.05em] uppercase transition-colors",
        active ? "text-primary-container" : "text-on-surface-variant hover:text-on-surface",
        "after:bg-primary-container after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-200",
        active && "after:scale-x-100",
        "hover:after:scale-x-100",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  ),
);
NavLink.displayName = "NavLink";
