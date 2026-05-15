import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface BentoGridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4 | 6 | 12;
  gap?: "sm" | "md" | "lg";
}

const columnsMap: Record<NonNullable<BentoGridProps["columns"]>, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  6: "sm:grid-cols-3 lg:grid-cols-6",
  12: "sm:grid-cols-6 lg:grid-cols-12",
};

const gapMap: Record<NonNullable<BentoGridProps["gap"]>, string> = {
  sm: "gap-3",
  md: "gap-6",
  lg: "gap-8",
};

export const BentoGrid = forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, columns = 12, gap = "md", ...props }, ref) => (
    <div
      ref={ref}
      className={cn("grid grid-cols-2", columnsMap[columns], gapMap[gap], className)}
      {...props}
    />
  ),
);
BentoGrid.displayName = "BentoGrid";

export interface BentoItemProps extends HTMLAttributes<HTMLDivElement> {
  colSpan?: number;
  rowSpan?: number;
}

const colSpanMap: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "sm:col-span-3",
  4: "sm:col-span-4",
  5: "sm:col-span-5",
  6: "sm:col-span-6",
  7: "sm:col-span-7",
  8: "sm:col-span-8",
  9: "sm:col-span-9",
  10: "sm:col-span-10",
  11: "sm:col-span-11",
  12: "sm:col-span-12",
};

const rowSpanMap: Record<number, string> = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
};

export const BentoItem = forwardRef<HTMLDivElement, BentoItemProps>(
  ({ className, colSpan = 1, rowSpan = 1, ...props }, ref) => (
    <div ref={ref} className={cn(colSpanMap[colSpan], rowSpanMap[rowSpan], className)} {...props} />
  ),
);
BentoItem.displayName = "BentoItem";
