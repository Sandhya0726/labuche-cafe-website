import Image from "next/image";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";

export interface SplitMediaSectionProps {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
  /** Column split for the text/image columns on md+ screens. Defaults to "5-7". */
  split?: "5-7" | "6-6" | "7-5";
  tone?: "default" | "raised";
  id?: string;
  className?: string;
}

const splitMap: Record<
  NonNullable<SplitMediaSectionProps["split"]>,
  { text: string; image: string }
> = {
  "5-7": { text: "md:col-span-5", image: "md:col-span-7" },
  "6-6": { text: "md:col-span-6", image: "md:col-span-6" },
  "7-5": { text: "md:col-span-7", image: "md:col-span-5" },
};

export function SplitMediaSection({
  eyebrow,
  title,
  paragraphs,
  image,
  imageAlt,
  imageSide = "right",
  split = "5-7",
  tone = "default",
  id,
  className,
}: SplitMediaSectionProps) {
  const cols = splitMap[split];
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", tone === "raised" && "bg-surface-container-low", className)}
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className={cn("space-y-6", cols.text, imageSide === "left" && "md:order-2")}>
            {eyebrow ? (
              <span className="font-body text-primary-container text-xs font-semibold tracking-[0.2em] uppercase">
                {eyebrow}
              </span>
            ) : null}
            <h2 className="font-display text-on-surface text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div className="font-body text-on-surface-variant space-y-4 text-base leading-relaxed sm:text-lg">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className={cn(cols.image, imageSide === "left" && "md:order-1")}>
            <div className="border-outline-variant/30 shadow-whisper relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border md:aspect-[5/4]">
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
