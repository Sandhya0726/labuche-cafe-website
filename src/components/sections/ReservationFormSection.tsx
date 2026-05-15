import Image from "next/image";
import { MapPin, UtensilsCrossed } from "lucide-react";
import { Icon } from "@/components/atoms/Icon";
import {
  ReservationForm,
  type ReservationFormValues,
} from "@/components/molecules/ReservationForm";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";

export interface ReservationHoursRow {
  days: string;
  time: string;
}

export interface ReservationExperience {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

export interface ReservationFormSectionProps {
  experience: ReservationExperience;
  hoursTitle?: string;
  hours: ReservationHoursRow[];
  locationLabel: string;
  onSubmit?: (values: ReservationFormValues) => void | Promise<void>;
  id?: string;
  className?: string;
}

export function ReservationFormSection({
  experience,
  hoursTitle = "Opening Hours",
  hours,
  locationLabel,
  onSubmit,
  id,
  className,
}: ReservationFormSectionProps) {
  return (
    <section id={id} className={cn("pb-24 md:pb-32", className)}>
      <Container size="md">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <div className="shadow-whisper bg-tertiary-container relative overflow-hidden rounded-[24px] p-6 md:p-10 lg:p-12">
              <Icon
                icon={UtensilsCrossed}
                size={120}
                aria-hidden
                className="text-on-secondary-fixed-variant/10 pointer-events-none absolute top-6 right-6"
              />
              <div className="relative z-10">
                <ReservationForm onSubmit={onSubmit} />
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <article className="group bg-secondary-container relative flex aspect-square flex-col justify-end overflow-hidden rounded-[24px] p-6 md:p-8">
              <Image
                src={experience.image}
                alt={experience.imageAlt ?? experience.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="absolute inset-0 object-cover opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
              />
              <div className="from-secondary-container/95 via-secondary-container/40 absolute inset-0 bg-gradient-to-t to-transparent" />
              <div className="relative z-10 space-y-2">
                <h3 className="font-display text-on-surface text-xl font-semibold sm:text-2xl">
                  {experience.title}
                </h3>
                <p className="font-body text-secondary text-sm sm:text-base">
                  {experience.description}
                </p>
              </div>
            </article>

            <article className="border-outline-variant/30 bg-surface-container-high rounded-[24px] border p-6 md:p-8">
              <h3 className="font-display text-on-surface mb-4 text-lg font-semibold sm:text-xl">
                {hoursTitle}
              </h3>
              <ul className="font-body text-on-surface-variant space-y-3 text-sm sm:text-base">
                {hours.map((row) => (
                  <li
                    key={row.days}
                    className="border-outline-variant/30 flex items-center justify-between border-b pb-2 last:border-b-0 last:pb-0"
                  >
                    <span>{row.days}</span>
                    <span className="text-on-surface font-semibold">{row.time}</span>
                  </li>
                ))}
              </ul>
              <div className="text-primary-fixed mt-6 flex items-center gap-2">
                <Icon icon={MapPin} size={18} />
                <span className="font-body text-sm font-semibold tracking-[0.05em] uppercase">
                  {locationLabel}
                </span>
              </div>
            </article>
          </aside>
        </div>
      </Container>
    </section>
  );
}
