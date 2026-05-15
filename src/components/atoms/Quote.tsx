import { forwardRef, type BlockquoteHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface QuoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  attribution?: string;
  tone?: "default" | "onCream";
}

export const Quote = forwardRef<HTMLQuoteElement, QuoteProps>(
  ({ className, children, attribution, tone = "default", ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn(
        "rounded-2xl border-l-4 p-8 italic",
        tone === "onCream"
          ? "border-on-primary-container/40 bg-tertiary-container text-on-tertiary-container"
          : "border-primary-fixed-dim bg-surface-container text-on-surface",
        className,
      )}
      {...props}
    >
      <p className="font-body text-base leading-relaxed sm:text-lg">{children}</p>
      {attribution ? (
        <footer className="font-body text-on-surface-variant mt-4 text-xs font-semibold tracking-[0.05em] uppercase not-italic">
          — {attribution}
        </footer>
      ) : null}
    </blockquote>
  ),
);
Quote.displayName = "Quote";
