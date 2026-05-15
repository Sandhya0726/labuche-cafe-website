import type { LucideIcon } from "lucide-react";
import { forwardRef, type HTMLAttributes } from "react";
import { Icon } from "@/components/atoms/Icon";
import { cn } from "@/lib/cn";

export interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export interface ContactInfoListProps extends HTMLAttributes<HTMLUListElement> {
  items: ContactInfoItem[];
}

export const ContactInfoList = forwardRef<HTMLUListElement, ContactInfoListProps>(
  ({ className, items, ...props }, ref) => (
    <ul ref={ref} className={cn("space-y-6", className)} {...props}>
      {items.map((item) => {
        const content = (
          <>
            <Icon
              icon={item.icon}
              size={22}
              className="text-primary-container mt-0.5"
              label={item.label}
            />
            <div className="space-y-1">
              <p className="font-body text-outline text-xs font-semibold tracking-[0.05em] uppercase">
                {item.label}
              </p>
              <p className="font-body text-on-surface text-base">{item.value}</p>
            </div>
          </>
        );
        return (
          <li key={item.label} className="flex items-start gap-4">
            {item.href ? (
              <a
                href={item.href}
                className="flex flex-1 items-start gap-4 transition-opacity hover:opacity-90"
              >
                {content}
              </a>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>
  ),
);
ContactInfoList.displayName = "ContactInfoList";
