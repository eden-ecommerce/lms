import type { Metadata } from "next";
import {
  Building2,
  Briefcase,
  HeartHandshake,
  ShieldCheck,
  BarChart3,
  Users,
  Award,
  Repeat,
  Globe,
  BookHeart,
  Baby,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@components/lms/SectionHeading";
import { CtaSection } from "@components/lms/CtaSection";

export const metadata: Metadata = {
  title: "Audiences",
  description:
    "One platform, configured for who you are — enterprise training providers, SMEs and professional bodies, and faith & community organisations.",
};

type Segment = {
  id: string;
  icon: typeof Building2;
  tag: string;
  title: string;
  intro: string;
  points: { icon: typeof ShieldCheck; label: string; detail: string }[];
};

const SEGMENTS: Segment[] = [
  {
    id: "enterprise",
    icon: Building2,
    tag: "Enterprise & Training Providers",
    title: "Built for scale. Ready for complexity.",
    intro:
      "Run many isolated learning environments from one platform. Each tenant gets its own branding, users and data, while you keep central oversight, compliance auditing and cross-programme benchmarking.",
    points: [
      {
        icon: ShieldCheck,
        label: "Multi-tenant isolation",
        detail:
          "Every organisation, region or client operates in a fully separated tenant with its own roles and data boundaries.",
      },
      {
        icon: Users,
        label: "Granular admin roles",
        detail:
          "Delegate course authoring, cohort management and reporting without handing over the keys to the whole platform.",
      },
      {
        icon: BarChart3,
        label: "AI-powered benchmarking",
        detail:
          "Compare completion, engagement and impact across cohorts and tenants, with automated theme analysis of qualitative feedback.",
      },
    ],
  },
  {
    id: "sme",
    icon: Briefcase,
    tag: "SME & Professional Bodies",
    title: "Professional infrastructure, without the overhead.",
    intro:
      "Deliver accredited training, member development and client onboarding from a branded portal — no in-house engineering team required.",
    points: [
      {
        icon: Repeat,
        label: "Rolling & cohort scheduling",
        detail:
          "Mix always-on self-paced courses with date-driven cohorts and automatic content release.",
      },
      {
        icon: Award,
        label: "Certificates & accreditation",
        detail:
          "Issue branded certificates on completion and track CPD hours for members and clients.",
      },
      {
        icon: Globe,
        label: "Branded client portals",
        detail:
          "Give each client a polished, on-brand learning space that reflects your organisation, not ours.",
      },
    ],
  },
  {
    id: "faith",
    icon: HeartHandshake,
    tag: "Faith & Community",
    title: "Equipping your community to grow and serve.",
    intro:
      "Designed for churches, charities and community groups who want to disciple, train volunteers and run youth programmes — with the safeguards and simplicity those settings need.",
    points: [
      {
        icon: BookHeart,
        label: "Discipleship & devotional content",
        detail:
          "Build courses from 26 content block types, including reflection journals, devotionals and small-group discussion prompts.",
      },
      {
        icon: Baby,
        label: "Kids-friendly & safeguarding modes",
        detail:
          "Age-appropriate interfaces, restricted communications and safeguarding-aware defaults for youth and children's work.",
      },
      {
        icon: MessageCircle,
        label: "WhatsApp & multi-channel messaging",
        detail:
          "Reach learners where they already are with email, SMS and WhatsApp reminders — no app download needed.",
      },
    ],
  },
];

export default function AudiencesPage() {
  return (
    <>
      <section className="border-b border-border bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
          <SectionHeading
            eyebrow="Audiences"
            title="One platform, configured for who you are"
            description="Christian360 LMS adapts to organisations of every size and purpose — from national training providers to a single church running a discipleship course."
          />
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-16 sm:gap-20 sm:py-20">
        {SEGMENTS.map(({ id, icon: Icon, tag, title, intro, points }) => (
          <section key={id} id={id} className="scroll-mt-28">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-10">
              <div className="lg:w-1/3">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <span className="mt-4 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {tag}
                </span>
                <h2 className="mt-2 text-balance font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                  {intro}
                </p>
              </div>

              <div className="grid flex-1 gap-4 sm:grid-cols-3">
                {points.map(({ icon: PointIcon, label, detail }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <PointIcon className="size-5 text-primary" />
                    <h3 className="mt-3 font-serif text-base font-semibold text-foreground">
                      {label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaSection
        title="Not sure which fits your organisation?"
        description="Tell us about your learners and we'll show you exactly how Christian360 LMS would be configured for you."
      />
    </>
  );
}
