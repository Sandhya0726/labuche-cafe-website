import type { LucideIcon } from "lucide-react";
import { ContactForm, type ContactFormValues } from "@/components/molecules/ContactForm";
import { ContactInfoList, type ContactInfoItem } from "@/components/molecules/ContactInfoList";
import { SocialLinks, type SocialLink } from "@/components/molecules/SocialLinks";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";

export interface ContactHours {
  days: string;
  time: string;
}

export interface ContactSocialBlock {
  title: string;
  description: string;
  links: SocialLink[];
}

export interface ContactSectionProps {
  reachOutTitle?: string;
  contactInfo: ContactInfoItem[];
  hoursTitle?: string;
  hours: ContactHours[];
  social: ContactSocialBlock;
  formTitle?: string;
  onSubmit?: (values: ContactFormValues) => void | Promise<void>;
  id?: string;
  className?: string;
}

export function ContactSection({
  reachOutTitle = "Reach Out",
  contactInfo,
  hoursTitle = "Opening Hours",
  hours,
  social,
  formTitle = "Send us a Message",
  onSubmit,
  id,
  className,
}: ContactSectionProps) {
  return (
    <section id={id} className={cn("pb-16 md:pb-24", className)}>
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <InfoCard surface="container" title={reachOutTitle}>
              <ContactInfoList items={contactInfo} />
            </InfoCard>

            <InfoCard surface="container-high" title={hoursTitle}>
              <ul className="font-body text-on-surface space-y-3 text-base">
                {hours.map((row) => (
                  <li
                    key={row.days}
                    className="border-outline-variant/60 flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0"
                  >
                    <span>{row.days}</span>
                    <span className="font-semibold">{row.time}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <div className="shadow-whisper border-secondary/10 bg-secondary-container text-on-secondary-container hover:border-secondary/30 flex items-center justify-between gap-6 rounded-[24px] border p-8 transition-colors">
              <div className="space-y-1">
                <h2 className="font-display text-xl font-semibold">{social.title}</h2>
                <p className="font-body text-sm opacity-90">{social.description}</p>
              </div>
              <SocialLinks links={social.links} />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="shadow-whisper border-outline-variant/20 bg-surface-container-lowest h-full rounded-[24px] border p-8 md:p-10">
              <h2 className="font-display text-on-surface mb-8 text-2xl font-bold sm:text-3xl">
                {formTitle}
              </h2>
              <ContactForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface InfoCardProps {
  surface: "container" | "container-high";
  title: string;
  children: React.ReactNode;
}

function InfoCard({ surface, title, children }: InfoCardProps) {
  return (
    <div
      className={cn(
        "shadow-whisper border-secondary/10 hover:border-secondary/30 rounded-[24px] border p-8 transition-colors",
        surface === "container" ? "bg-surface-container" : "bg-surface-container-high",
      )}
    >
      <h2 className="font-display text-secondary mb-6 text-xl font-semibold sm:text-2xl">
        {title}
      </h2>
      {children}
    </div>
  );
}

export type { LucideIcon };
