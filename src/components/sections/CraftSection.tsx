import { CraftBlock, type CraftBlockProps } from "@/components/molecules/CraftBlock";
import { Container } from "@/components/organisms/Container";
import { cn } from "@/lib/cn";

export type CraftBlockItem = Omit<CraftBlockProps, "className">;

export interface CraftSectionProps {
  eyebrow?: string;
  title?: string;
  blocks: CraftBlockItem[];
  /** When true, every other block is vertically offset for a staggered layout. */
  staggered?: boolean;
  tone?: "default" | "raised";
  id?: string;
  className?: string;
}

export function CraftSection({
  eyebrow,
  title,
  blocks,
  staggered = true,
  tone = "raised",
  id,
  className,
}: CraftSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        tone === "raised" ? "bg-surface-dim" : "bg-background",
        className,
      )}
    >
      <Container>
        {eyebrow || title ? (
          <header className="mb-12 max-w-2xl space-y-3 md:mb-16">
            {eyebrow ? (
              <span className="font-body text-primary-container text-xs font-semibold tracking-[0.2em] uppercase">
                {eyebrow}
              </span>
            ) : null}
            {title ? (
              <h2 className="font-display text-on-surface text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            ) : null}
          </header>
        ) : null}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
          {blocks.map((block, idx) => (
            <CraftBlock
              key={block.title}
              {...block}
              className={cn(staggered && idx % 2 === 1 ? "md:mt-24" : undefined)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
