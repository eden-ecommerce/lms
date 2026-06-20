import { NsLink } from "@components/ns-link";
import { buttonVariants } from "@components/ui/button";
import { cn } from "@lib/utils";
import { Hero } from "@components/lms/Hero";
import { AudienceCards } from "@components/lms/AudienceCards";
import { FeatureBlock } from "@components/lms/FeatureBlock";
import { FeatureGrid, type FeatureItem } from "@components/lms/FeatureGrid";
import { SectionHeading } from "@components/lms/SectionHeading";
import { StatStrip } from "@components/lms/StatStrip";
import { ContentBlockLibrary } from "@components/lms/ContentBlockLibrary";
import { Testimonial } from "@components/lms/Testimonial";
import { LogoStrip } from "@components/lms/LogoStrip";
import { CtaSection } from "@components/lms/CtaSection";
import {
  CourseBuilderScreen,
  AnalyticsScreen,
  CohortScreen,
  ContentBlocksScreen,
} from "@components/lms/screens";
import { LMS_PATH, lmsHref } from "@components/lms/lms-config";
import type { Metadata } from "next";
import {
  CalendarClock,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Learning Management for Every Organisation",
  description:
    "Christian360 LMS gives organisations the tools to design, deliver and measure learning programmes — for any audience, at any scale. Book a demo today.",
  alternates: { canonical: `https://www.eden.co.uk${LMS_PATH}` },
  openGraph: {
    title: "Christian360 LMS — One platform. Every audience. Proven impact.",
    description:
      "A fully multi-tenant learning platform with a 26-type content block system, cohort scheduling and AI-powered impact measurement.",
    url: `https://www.eden.co.uk${LMS_PATH}`,
    type: "website",
  },
};

const CAPABILITIES: FeatureItem[] = [
  {
    icon: CalendarClock,
    title: "Cohorts & rolling release",
    description:
      "Run multiple cohorts at once, each on its own schedule — or drip content by days since a learner joined, with zero admin overhead.",
  },
  {
    icon: BarChart3,
    title: "11 analytics report areas",
    description:
      "Funnels, at-risk learners, enrolment sources and benchmark impact — a complete picture of progress and effectiveness.",
  },
  {
    icon: MessageSquare,
    title: "Multi-channel communications",
    description:
      "Email, SMS, WhatsApp, announcements and automated reminders — no third-party messaging tool required.",
  },
  {
    icon: Sparkles,
    title: "Practical AI",
    description:
      "Whisper transcription, Gemini chapter suggestions and benchmark theme analysis grounded in your real course content.",
  },
  {
    icon: ShieldCheck,
    title: "Certificates & compliance",
    description:
      "Auto-issued certificates, completion records with timestamps and enrolment-source audit trails for compliance programmes.",
  },
  {
    icon: Users,
    title: "Granular admin roles",
    description:
      "Course Creator, Enrolment Manager, Group Facilitator and more — give staff the access they need and nothing more.",
  },
];

export default function LmsHome() {
  return (
    <main>
      <Hero
        eyebrow="Christian360 LMS"
        headline="One platform. Every audience. Proven impact."
        subheadline="A learning management platform built to serve organisations from local charities to national training providers — with a 26-type content block system, cohort scheduling and AI-powered impact measurement, all inside a single codebase."
        screen={<CourseBuilderScreen />}
      />

      {/* Stat strip */}
      <section className="mx-auto -mt-8 max-w-5xl px-4">
        <StatStrip />
      </section>

      {/* Social proof */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <LogoStrip heading="Powering learning for Christian organisations" />
        </div>
      </section>

      {/* Audience segmentation */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Built for your context"
          title="Too big for simple tools. Too small for enterprise platforms."
          description="Christian360 LMS sits in the middle — feature-rich enough for serious programme delivery, approachable enough that a non-technical coordinator can run it without IT support."
        />
        <div className="mt-12">
          <AudienceCards />
        </div>
      </section>

      {/* Feature showcases */}
      <section className="border-y border-border bg-accent/20 py-16 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4">
          <SectionHeading
            eyebrow="Inside the platform"
            title="Design, deliver and measure — in one place"
            description="Every capability is built for real programmes: blended cohorts, drip schedules, live sessions and evidence of impact."
          />
          <FeatureBlock
            eyebrow="Course architecture"
            title="Build once, from 26 content block types"
            description="Structure courses as Modules, Sections and Lessons, each composed from an ordered sequence of blocks — from articles and video to flashcards, reflection journals and live classroom activities."
            bullets={[
              "Drag-and-drop builder with sequential gating",
              "Standard (cohort) and rolling (drip) delivery",
              "Course Filing Cabinet for searchable resources",
            ]}
            screen={<ContentBlocksScreen />}
          />
          <FeatureBlock
            reverse
            eyebrow="Cohorts & scheduling"
            title="Run every cohort on its own timeline"
            description="Each group gets its own release schedule, events calendar, discussion channels and facilitator team. Date-anchored or rolling — the platform adapts to each learner's start date automatically."
            bullets={[
              "Per-group release dates with early access",
              "Group events with RSVP, iCal and reminders",
              "Group Facilitator role scoped to one cohort",
            ]}
            screen={<CohortScreen />}
          />
          <FeatureBlock
            eyebrow="Impact measurement"
            title="Move from completion rates to evidence of impact"
            description="Paired pre/post benchmark surveys show before-and-after change, and Gemini analyses open-ended responses at scale to surface the themes behind the numbers — fundable evidence, not just attendance."
            bullets={[
              "Paired benchmark pre/post surveys",
              "AI theme analysis of open text responses",
              "11 report areas including at-risk detection",
            ]}
            screen={<AnalyticsScreen />}
          />
        </div>
      </section>

      {/* Content block library */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="26 content block types"
          title="An extensible, plugin-based content library"
          description="Five categories, 26 block types — and a plugin architecture that lets new types be added without touching platform core."
        />
        <div className="mt-12">
          <ContentBlockLibrary />
        </div>
        <div className="mt-10 text-center">
          <NsLink
            href={lmsHref("/features")}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            See all platform features
          </NsLink>
        </div>
      </section>

      {/* Capability grid */}
      <section className="border-t border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Everything in one place"
            title="A complete toolkit for delivering learning"
            description="Switch on what you need today and grow into the rest as your programmes scale."
          />
          <div className="mt-12">
            <FeatureGrid items={CAPABILITIES} />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <Testimonial
            quote="The platform holds the whole programme — pre-reading, live session logistics, post-session reflection and the ongoing community. It runs a genuinely blended operation as one cohesive learner experience."
            author="Transforming Lives for Good"
            role="Coaching Academy & Network Journey"
          />
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
