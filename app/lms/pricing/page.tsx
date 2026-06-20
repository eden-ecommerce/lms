import type { Metadata } from "next";
import { SectionHeading } from "@components/lms/SectionHeading";
import { PricingTable } from "@components/lms/PricingTable";
import { DemoForm } from "@components/lms/DemoForm";

export const metadata: Metadata = {
  title: "Pricing & demo",
  description:
    "Plans for organisations of every size — from community groups to national training providers. Book a personalised demo of Christian360 LMS.",
};

const FAQS = [
  {
    q: "How is pricing structured?",
    a: "Pricing is tailored to your number of learners, tenants and the features you need. We'll give you a clear quote after a short demo — no surprises.",
  },
  {
    q: "Can we move between plans?",
    a: "Yes. Many organisations start on Community or Professional and move to Enterprise as they add tenants, programmes and reporting needs.",
  },
  {
    q: "Is there a setup or onboarding service?",
    a: "Every plan includes guided onboarding. Enterprise customers get dedicated support to configure tenants, roles and integrations.",
  },
  {
    q: "Do you support charities and churches?",
    a: "Yes — the Community plan is designed specifically for churches, charities and community groups, with pricing to match.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-border bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
          <SectionHeading
            eyebrow="Pricing"
            title="A plan for every kind of organisation"
            description="Choose the starting point that fits your learners. Every plan is configured to your needs — book a demo and we'll build a quote around you."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <PricingTable />
      </section>

      <section className="border-t border-border bg-accent/20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground">
              Book your personalised demo
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Tell us a little about your organisation and we&apos;ll show you
              exactly how Christian360 LMS would work for your learners — and
              answer any questions on pricing.
            </p>

            <dl className="mt-8 flex flex-col gap-6">
              {FAQS.map(({ q, a }) => (
                <div key={q}>
                  <dt className="font-serif text-base font-semibold text-foreground">
                    {q}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div id="demo" className="scroll-mt-28">
            <DemoForm />
          </div>
        </div>
      </section>
    </>
  );
}
