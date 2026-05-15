"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { Text } from "@/components/atoms/Text";
import { Textarea } from "@/components/atoms/Textarea";
import { cn } from "@/lib/cn";

export interface ContactFormValues {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit?: (values: ContactFormValues) => Promise<void> | void;
  className?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_PATTERN = /^[+\d][\d\s().-]{6,}$/;

export function ContactForm({ onSubmit, className }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const submit: SubmitHandler<ContactFormValues> = async (values) => {
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
            placeholder="Julian Smith"
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
            placeholder="julian@example.com"
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

      <Field id="phone" label="Phone Number" error={errors.phone?.message}>
        <Input
          id="phone"
          type="tel"
          placeholder="+61 400 000 000"
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

      <Field id="message" label="Message" error={errors.message?.message}>
        <Textarea
          id="message"
          rows={5}
          placeholder="How can we help you today?"
          invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message", {
            required: "Please write a short message.",
            minLength: {
              value: 10,
              message: "Message should be at least 10 characters.",
            },
            maxLength: {
              value: 1000,
              message: "Message can be at most 1000 characters.",
            },
          })}
        />
      </Field>

      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
        <Button
          type="submit"
          size="lg"
          variant="primary"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? "Sending…" : "Send Message"}
        </Button>
        {submitted ? (
          <Text size="sm" tone="muted" role="status">
            Thanks — we&apos;ll be in touch shortly.
          </Text>
        ) : null}
      </div>
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
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <Text id={`${id}-error`} size="sm" className="text-error">
          {error}
        </Text>
      ) : null}
    </div>
  );
}
