"use client";

import { useState } from "react";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Button } from "@components/ui/button";
import { CheckCircle2 } from "lucide-react";

const AUDIENCES = [
  "Church or community organisation",
  "Charity or voluntary sector",
  "Consultancy or professional services",
  "Training provider or membership body",
  "Other",
];

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
          Thanks — we&apos;ll be in touch
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          A member of the Christian360 team will reach out to arrange your
          personalised demo, usually within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="org">Organisation</Label>
          <Input id="org" name="org" required autoComplete="organization" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor="audience">What best describes you?</Label>
          <select
            id="audience"
            name="audience"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            {AUDIENCES.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor="message">What would you like to achieve? (optional)</Label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full">
        Request my demo
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We&apos;ll only use your details to arrange your demo. No spam, ever.
      </p>
    </form>
  );
}
