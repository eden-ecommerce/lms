import type { Metadata } from "next";
import {
  CreditCard,
  Mail,
  MessageCircle,
  Video,
  Calendar,
  KeyRound,
  Webhook,
  Database,
} from "lucide-react";
import { SectionHeading } from "@components/lms/SectionHeading";
import { FeatureGrid, type FeatureItem } from "@components/lms/FeatureGrid";
import { CtaSection } from "@components/lms/CtaSection";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Christian360 LMS connects to the tools you already use — payments, email, WhatsApp, video conferencing, calendars and single sign-on.",
};

const NATIVE: FeatureItem[] = [
  {
    icon: CreditCard,
    title: "Payments & checkout",
    description:
      "Sell courses and cohorts with integrated payments, discount codes and invoicing — revenue flows straight into your reporting.",
  },
  {
    icon: Mail,
    title: "Email delivery",
    description:
      "Transactional and scheduled email for enrolments, reminders and nudges, with per-tenant sender branding.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & SMS",
    description:
      "Reach learners on the channels they actually open. Automated reminders and broadcasts without an app download.",
  },
  {
    icon: Video,
    title: "Video conferencing",
    description:
      "Attach live sessions to cohort modules and track attendance against the schedule automatically.",
  },
  {
    icon: Calendar,
    title: "Calendar sync",
    description:
      "Release dates and live sessions sync to learners' calendars so blended programmes stay on track.",
  },
  {
    icon: KeyRound,
    title: "Single sign-on (SSO)",
    description:
      "Let learners and admins sign in with your existing identity provider for enterprise-grade access control.",
  },
];

const EXTENSIBILITY: FeatureItem[] = [
  {
    icon: Webhook,
    title: "Webhooks & API",
    description:
      "Push enrolment, completion and engagement events to your CRM, data warehouse or automation tools in real time.",
  },
  {
    icon: Database,
    title: "Data export",
    description:
      "Export analytics and learner records on demand for reporting, audits and funder requirements.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="border-b border-border bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
          <SectionHeading
            eyebrow="Integrations"
            title="Connects to the tools you already use"
            description="Six native integrations cover the essentials, and an open API plus webhooks let you extend the platform into the rest of your stack."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
          Native integrations
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Configured per tenant and ready to switch on — no custom development
          required.
        </p>
        <div className="mt-8">
          <FeatureGrid items={NATIVE} />
        </div>
      </section>

      <section className="border-t border-border bg-accent/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            Build on top of the platform
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            For teams who want to go further, the platform is open by design.
          </p>
          <div className="mt-8">
            <FeatureGrid items={EXTENSIBILITY} />
          </div>
        </div>
      </section>

      <CtaSection
        title="Need a specific integration?"
        description="Tell us what's in your stack and we'll walk you through how Christian360 LMS fits alongside it."
      />
    </>
  );
}
