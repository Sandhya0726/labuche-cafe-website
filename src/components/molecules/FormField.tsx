import { useId, type ReactNode } from "react";
import { Label } from "@/components/atoms/Label";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/cn";

export interface FormFieldProps {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  htmlFor?: string;
  className?: string;
  children: (ctx: {
    id: string;
    "aria-describedby"?: string;
    "aria-invalid"?: boolean;
  }) => ReactNode;
}

export function FormField({
  label,
  hint,
  error,
  required,
  htmlFor,
  className,
  children,
}: FormFieldProps) {
  const generatedId = useId();
  const id = htmlFor ?? generatedId;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {children({
        id,
        "aria-describedby": describedBy,
        "aria-invalid": Boolean(error) || undefined,
      })}
      {hint && !error ? (
        <Text id={hintId} size="sm" tone="muted">
          {hint}
        </Text>
      ) : null}
      {error ? (
        <Text id={errorId} size="sm" className="text-error">
          {error}
        </Text>
      ) : null}
    </div>
  );
}
