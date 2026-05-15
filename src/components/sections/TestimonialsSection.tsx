"use client";

import { type TestimonialCardProps } from "@/components/molecules/TestimonialCard";
import { cn } from "@/lib/cn";
import { useRef } from "react";

export interface TestimonialsSectionProps {
  title: string;
  testimonials: Array<Omit<TestimonialCardProps, "className">>;
  id?: string;
  className?: string;
}

export function TestimonialsSection({
  title,
  testimonials,
  id,
  className,
}: TestimonialsSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    const node = trackRef.current;
    if (!node) return;
    const delta = node.clientWidth * 0.85;
    node.scrollBy({
      left: direction === "next" ? delta : -delta,
      behavior: "smooth",
    });
  };

  return (
    <section
      id={id}
      className={cn("bg-secondary-container text-on-secondary-container py-20 md:py-28", className)}
    >
      {/* <Container>
        <header className="mb-12 flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => scroll("prev")}
              className="border-on-secondary-container/30 text-on-secondary-container hover:bg-on-secondary-container/10 flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
            >
              <Icon icon={ChevronLeft} size={20} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => scroll("next")}
              className="border-on-secondary-container/30 text-on-secondary-container hover:bg-on-secondary-container/10 flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
            >
              <Icon icon={ChevronRight} size={20} />
            </button>
          </div>
        </header>
      </Container>
      <div
        ref={trackRef}
        className="flex [scrollbar-width:none] gap-6 overflow-x-auto px-4 pb-8 sm:px-6 md:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.authorName} {...t} />
        ))}
      </div> */}
    </section>
  );
}
