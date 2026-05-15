"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { cn } from "@/lib/cn";

export interface NewsletterFormProps {
  placeholder?: string;
  cta?: string;
  className?: string;
  onSubmit?: (email: string) => void | Promise<void>;
}

export function NewsletterForm({
  placeholder = "Email address",
  cta = "Subscribe",
  className,
  onSubmit,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    await onSubmit?.(email);
    setDone(true);
    setEmail("");
  }

  return (
    <form className={cn("space-y-3", className)} onSubmit={handleSubmit}>
      <Input
        type="email"
        required
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="filled"
      />
      <Button type="submit" fullWidth variant="primary">
        {done ? "Subscribed" : cta}
      </Button>
    </form>
  );
}
