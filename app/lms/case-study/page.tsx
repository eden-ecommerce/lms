import type { Metadata } from "next";
import { Quote, Target, Layers, BarChart3 } from "lucide-react";
import { Testimonial } from "@components/lms/Testimonial";
import { StatStrip } from "@components/lms/StatStrip";
import { CtaSection } from "@components/lms/CtaSection";

export const metadata: Metadata = {
  title: "Case study — Transforming Lives for Good",
  description:
    "How Transforming Lives for Good (TLG) uses Christian360 LMS to deliver blended coaching programmes and measure real change in confidence and capability.",
};

const RESULTS = [
  { value: "92%", label: "Cohort completion" },
  { value: "+1.8", label: "Confidence uplift (5-pt)" },
  { value: "8", label: "Blended modules" },
  { value: "100%", label: "Safeguarding compliant" },
];

const SECTIONS = [
  {
    icon: Target,
    title: "The challenge",
    body: "TLG needed to train coaches and volunteers across the country in a consistent, safeguarding-aware way — blending in-person intensives with online learning, while proving the programme actually changed confidence and capability.",
  },
  {
    icon: Layers,
    title: "The build",
    body: "Using the 26-type content block system, TLG built an eight-module Coaching Academy mixing video, reading, reflection journals and live classroom activities. Cohorts follow a release schedule that alternates in-person and online sessions, with WhatsApp reminders keeping learners on track.",
  },
  {
    icon: BarChart3,
    title: "The measurement",
    body: "Benchmark pre- and post-surveys bookend the programme. AI theme analysis surfaces what learners attribute their growth to, turning qualitative feedback into evidence funders and trustees can act on.",
  },
];

export default function CaseStudyPage() {
  return (
    <>
      <section className="border-b border-border bg-accent/30">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:py-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Case study
          </span>
          <h1 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Transforming Lives for Good
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Equipping coaches across the UK with a blended, measurable
            programme — built and delivered on Christian360 LMS.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <StatStrip stats={RESULTS} />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-4">
        <div className="flex flex-col gap-10">
          {SECTIONS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  {title}
                </h2>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <Testimonial
          quote="The platform lets us run a genuinely blended programme and, for the first time, show the difference it makes. The benchmarking turns stories into evidence."
          author="Programme Lead"
          role="Transforming Lives for Good"
        />
      </section>

      <CtaSection
        title="Build a programme like this"
        description="See how the content blocks, cohort scheduling and benchmarking that power TLG's Coaching Academy could work for your organisation."
      />
    </>
  );
}
