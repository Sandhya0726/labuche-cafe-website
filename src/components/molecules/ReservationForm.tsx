"use client";

import { CalendarCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { Select } from "@/components/atoms/Select";
import { Text } from "@/components/atoms/Text";
import { Textarea } from "@/components/atoms/Textarea";
import { cn } from "@/lib/cn";

export interface ReservationFormValues {
  fullName: string;
  email: string;
  phone: string;
  partySize: string;
  date: string;
  time: string;
  requests: string;
}

export interface ReservationFormProps {
  onSubmit?: (values: ReservationFormValues) => void | Promise<void>;
  className?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d][\d\s().-]{6,}$/;

const partySizes = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests" },
  { value: "5", label: "5+ Guests" },
];

export function ReservationForm({ onSubmit, className }: ReservationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormValues>({
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      partySize: "",
      date: "",
      time: "",
      requests: "",
    },
  });

  const submit: SubmitHandler<ReservationFormValues> = async (values) => {
    await onSubmit?.(values);
    setSubmitted(true);
    reset();
  };

  return (
    <form noValidate onSubmit={handleSubmit(submit)} className={cn("space-y-6", className)}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field id="fullName" label="Full Name" error={errors.fullName?.message}>
          <Input
            id="fullName"
            variant="onCream"
            placeholder="Aarav Sharma"
            autoComplete="name"
            invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName", {
              required: "Please enter your full name.",
              minLength: { value: 2, message: "Name is too short." },
              maxLength: { value: 80, message: "Name is too long." },
            })}
          />
        </Field>

        <Field id="email" label="Email Address" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            variant="onCream"
            placeholder="aarav@example.com"
            autoComplete="email"
            invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: EMAIL_PATTERN,
                message: "Enter a valid email address.",
              },
            })}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field id="phone" label="Phone Number" error={errors.phone?.message}>
          <Input
            id="phone"
            type="tel"
            variant="onCream"
            placeholder="+977 980-0000000"
            autoComplete="tel"
            invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone", {
              required: "Phone number is required.",
              pattern: {
                value: PHONE_PATTERN,
                message: "Enter a valid phone number.",
              },
            })}
          />
        </Field>

        <Field id="partySize" label="Number of Persons" error={errors.partySize?.message}>
          <Select
            id="partySize"
            variant="onCream"
            invalid={Boolean(errors.partySize)}
            aria-describedby={errors.partySize ? "partySize-error" : undefined}
            {...register("partySize", {
              required: "Please select a party size.",
            })}
          >
            <option value="">Select party size</option>
            {partySizes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field id="date" label="Reservation Date" error={errors.date?.message}>
          <Input
            id="date"
            type="date"
            variant="onCream"
            min={today}
            invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "date-error" : undefined}
            {...register("date", {
              required: "Reservation date is required.",
              validate: (value) => value >= today || "Pick today or a future date.",
            })}
          />
        </Field>

        <Field id="time" label="Reservation Time" error={errors.time?.message}>
          <Input
            id="time"
            type="time"
            variant="onCream"
            invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? "time-error" : undefined}
            {...register("time", { required: "Reservation time is required." })}
          />
        </Field>
      </div>

      <Field id="requests" label="Special Request (Optional)" error={errors.requests?.message}>
        <Textarea
          id="requests"
          variant="onCream"
          rows={4}
          placeholder="Any allergies or special occasions?"
          invalid={Boolean(errors.requests)}
          aria-describedby={errors.requests ? "requests-error" : undefined}
          {...register("requests", {
            maxLength: {
              value: 500,
              message: "Request can be at most 500 characters.",
            },
          })}
        />
      </Field>

      <div className="pt-2">
        <Button
          type="submit"
          size="lg"
          variant="primary"
          fullWidth
          disabled={isSubmitting}
          className="rounded-[24px]"
        >
          <Icon icon={CalendarCheck} size={20} />
          {isSubmitting ? "Sending…" : "Make a Reservation"}
        </Button>
      </div>

      {submitted ? (
        <Text size="sm" tone="muted" role="status" className="text-center">
          Thanks — your request was received. We&apos;ll confirm by email shortly.
        </Text>
      ) : null}
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-on-tertiary-fixed-variant">
        {label}
      </Label>
      {children}
      {error ? (
        <Text id={`${id}-error`} size="sm" className="text-error">
          {error}
        </Text>
      ) : null}
    </div>
  );
}
