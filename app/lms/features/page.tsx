import { SectionHeading } from "@components/lms/SectionHeading";
import { FeatureGrid, type FeatureItem } from "@components/lms/FeatureGrid";
import { ContentBlockLibrary } from "@components/lms/ContentBlockLibrary";
import { CtaSection } from "@components/lms/CtaSection";
import { lmsHref } from "@components/lms/lms-config";
import type { Metadata } from "next";
import {
  Layers,
  Users,
  ClipboardCheck,
  BarChart3,
  MessageSquare,
  Sparkles,
  Award,
  Boxes,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Platform Features",
  description:
    "Course architecture, cohorts, assessment, analytics, communications, AI and certificates — the full capability set of Christian360 LMS.",
  alternates: { canonical: `https://www.eden.co.uk${lmsHref("/features")}` },
};

const COURSE_ARCHITECTURE: FeatureItem[] = [
  {
    icon: Layers,
    title: "Course → Module → Lesson → Block",
    description:
      "A clear hierarchy with an ordered sequence of content blocks in every lesson, locked behind completion, date or payment gates.",
  },
  {
    icon: Boxes,
    title: "Sequential gating & drip",
    description:
      "Require previous completion, set per-lesson block requirements, and choose standard or rolling delivery modes.",
  },
  {
    icon: ClipboardCheck,
    title: "Applications & catalogue",
    description:
      "Public course catalogue with self-enrolment, plus application forms with an admin approval workflow and draft/preview modes.",
  },
];

const COHORTS: FeatureItem[] = [
  {
    icon: Users,
    title: "Groups with their own schedule",
    description:
      "Per-group module release dates, early access and rolling release N days after a learner joins the group.",
  },
  {
    icon: MessageSquare,
    title: "Events & discussion channels",
    description:
      "Group events with RSVP, iCal export, capacity limits and reminders — plus discussion channels with configurable permissions.",
  },
  {
    icon: Award,
    title: "Group Facilitator role",
    description:
      "Manage one group — members, comms and group analytics — without org-wide access. Auto-enrol linked courses on join.",
  },
];

const ASSESSMENT: FeatureItem[] = [
  {
    icon: ClipboardCheck,
    title: "Quizzes & assignments",
    description:
      "Multiple choice, true/false and short answer with passing scores; assignment submission tracking with due dates and resubmission.",
  },
  {
    icon: Layers,
    title: "Interactive & engagement",
    description:
      "Interactive video, cloze, drag-drop matching, sorting and hotspot image maps — plus surveys and polls with live results.",
  },
  {
    icon: BarChart3,
    title: "Pre/post benchmarking",
    description:
      "Paired benchmark surveys with side-by-side comparison and AI theme analysis of open-ended responses.",
  },
];

const ANALYTICS: FeatureItem[] = [
  {
    icon: BarChart3,
    title: "Overview & course detail",
    description:
      "KPIs, 12-week trends, learner segments, module funnels, group comparison and drop-off analysis.",
  },
  {
    icon: Users,
    title: "At-risk learner detection",
    description:
      "Surface stalled and never-started learners with configurable thresholds, then drill in and reach out.",
  },
  {
    icon: ClipboardCheck,
    title: "Export & compliance",
    description:
      "Certificate issuance reporting and a 14-category CSV export (ZIP) for external BI tools and compliance.",
  },
];

const COMMS_AI: FeatureItem[] = [
  {
    icon: MessageSquare,
    title: "Email, SMS & WhatsApp",
    description:
      "Bulk and personalised messaging with delivery and read tracking, plus org-wide and course-targeted announcements.",
  },
  {
    icon: Sparkles,
    title: "Ask the Expert + AI Assistant",
    description:
      "Course-scoped Q&A with external token links (no account needed), and a RAG assistant grounded in course content.",
  },
  {
    icon: Award,
    title: "Certificates on completion",
    description:
      "Auto-issued, org-branded, server-side PDF certificates with completion records for auditable compliance programmes.",
  },
];

function FeatureSection({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: FeatureItem[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10">
        <FeatureGrid items={items} />
      </div>
    </section>
  );
}

export default function FeaturesPage() {
  return (
    <main>
      {/* Page header */}
      <section className="border-b border-border bg-gradient-to-b from-accent/40 to-background">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:py-20">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Platform features
          </span>
          <h1 className="mt-5 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Everything you need to run professional programmes
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            From course architecture to impact reporting — without needing a
            dedicated LMS administrator.
          </p>
        </div>
      </section>

      <FeatureSection
        eyebrow="Course architecture"
        title="Structured, gated and flexible"
        description="Build courses from a clear hierarchy with completion gates, schedules and a searchable resource library."
        items={COURSE_ARCHITECTURE}
      />

      <div className="bg-accent/20">
        <FeatureSection
          eyebrow="Cohorts & groups"
          title="Run cohorts the way your programme works"
          description="Group-level schedules, events and facilitators let the same course run simultaneously for many cohorts."
          items={COHORTS}
        />
      </div>

      <FeatureSection
        eyebrow="Assessment & evaluation"
        title="From formal quizzes to reflective journals"
        description="A full suite of assessment types paired with benchmarking to measure real-world programme impact."
        items={ASSESSMENT}
      />

      {/* Content block library */}
      <section className="border-y border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="The content block system"
            title="26 block types across 5 categories"
            description="A plugin architecture with auto-discovery — new content types can be added without modifying platform core."
          />
          <div className="mt-12">
            <ContentBlockLibrary />
          </div>
        </div>
      </section>

      <FeatureSection
        eyebrow="Analytics & reporting"
        title="A complete picture of progress and effectiveness"
        description="Eleven dedicated report areas, at-risk detection and export built for compliance and BI."
        items={ANALYTICS}
      />

      <div className="bg-accent/20">
        <FeatureSection
          eyebrow="Communications, AI & certificates"
          title="Reach learners and prove completion"
          description="A multi-channel communications stack, practical AI and auto-issued certificates — all built in."
          items={COMMS_AI}
        />
      </div>

      <CtaSection
        title="Want to see these features with your own programmes?"
        description="Book a personalised demo and we'll walk through the platform with your use case in mind."
      />
    </main>
  );
}
