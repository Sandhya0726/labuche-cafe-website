import { forwardRef, type HTMLAttributes } from "react";
import { Avatar } from "@/components/atoms/Avatar";
import { Rating } from "@/components/atoms/Rating";
import { cn } from "@/lib/cn";

export interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  quote: string;
  authorName: string;
  authorRole?: string;
  authorAvatar: string;
  rating?: number;
}

export const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ className, quote, authorName, authorRole, authorAvatar, rating = 5, ...props }, ref) => (
    <article
      ref={ref}
      className={cn(
        "shadow-whisper bg-surface-container text-on-surface flex w-[340px] shrink-0 flex-col gap-6 rounded-2xl p-8 sm:w-[400px]",
        className,
      )}
      {...props}
    >
      <Rating value={rating} />
      <p className="font-body text-base leading-relaxed italic sm:text-lg">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-auto flex items-center gap-4">
        <Avatar src={authorAvatar} alt={authorName} size={48} />
        <div className="space-y-0.5">
          <p className="font-body font-semibold">{authorName}</p>
          {authorRole ? (
            <p className="font-body text-on-surface-variant text-xs font-semibold tracking-[0.05em] uppercase">
              {authorRole}
            </p>
          ) : null}
        </div>
      </footer>
    </article>
  ),
);
TestimonialCard.displayName = "TestimonialCard";
