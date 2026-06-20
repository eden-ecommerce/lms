import { Hero } from "@components/event-manager/Hero";
import { AudienceCards } from "@components/event-manager/AudienceCards";
import { FeatureBlock } from "@components/event-manager/FeatureBlock";
import { FeatureGrid, type FeatureItem } from "@components/event-manager/FeatureGrid";
import { SectionHeading } from "@components/event-manager/SectionHeading";
import { Testimonial } from "@components/event-manager/Testimonial";
import { LogoStrip } from "@components/event-manager/LogoStrip";
import { CtaSection } from "@components/event-manager/CtaSection";
import { emAsset, EM_PATH } from "@components/event-manager/em-config";
import type { Metadata } from "next";
import {
  CalendarClock,
  Languages,
  Bell,
  ShoppingBasket,
  Library,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Event Management & Mobile App for Christian Events",
  description:
    "Christian360 Events is the all-in-one event management platform and mobile app for conferences, churches, retreats and holiday parks. Book a demo today.",
  alternates: { canonical: `https://www.eden.co.uk${EM_PATH}` },
  openGraph: {
    title: "Christian360 Events — Event Management & Mobile App",
    description:
      "The flexible event management platform and mobile app for Christian conferences, churches, retreats and holiday parks.",
    url: `https://www.eden.co.uk${EM_PATH}`,
    type: "website",
  },
};

const CAPABILITIES: FeatureItem[] = [
  {
    icon: CalendarClock,
    title: "Day-Planner & Programmes",
    description:
      "Build multi-day, multi-venue schedules with smart filtering so every attendee sees the right sessions.",
  },
  {
    icon: Languages,
    title: "Live Translation",
    description:
      "Stream real-time translated audio to delegates' own phones in dozens of languages — no extra hardware.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description:
      "Send timely alerts for session changes, prayer requests and announcements straight to the lock screen.",
  },
  {
    icon: ShoppingBasket,
    title: "Click & Collect",
    description:
      "Let guests order food and merchandise from their seat and skip the queues at busy events.",
  },
  {
    icon: Library,
    title: "Talks Archive CMS",
    description:
      "Publish a searchable library of talks and sermons your community can revisit any time.",
  },
  {
    icon: Wrench,
    title: "Maintenance Requests",
    description:
      "Guests report on-site issues with a photo and location, routed straight to your operations team.",
  },
];

export default function EventManagerHome() {
  return (
    <main>
      <Hero
        eyebrow="Christian360 Events"
        headline="Event management & a mobile app, built for the Church"
        subheadline="One flexible platform to run conferences, weekly church life and year-round retreats — with a beautiful branded app your community will actually use."
        mockup={{ src: emAsset("/day-planner.png"), alt: "Day planner programme view in the Christian360 Events app" }}
        secondaryMockup={{ src: emAsset("/lock-notification.png"), alt: "Push notification on a phone lock screen" }}
      />

      {/* Social proof */}
      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4">
          <LogoStrip heading="Trusted by leading Christian events & organisations" />
        </div>
      </section>

      {/* Audience segmentation */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Built for your context"
          title="One platform, three very different jobs"
          description="Christian360 Events adapts to how you gather — whether that's a single weekend festival, a busy local church, or a holiday park welcoming guests all year round."
        />
        <div className="mt-12">
          <AudienceCards />
        </div>
      </section>

      {/* Feature showcases (Z-pattern) */}
      <section className="border-y border-border bg-accent/20 py-16 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4">
          <SectionHeading
            eyebrow="Inside the app"
            title="Powerful features your attendees will love"
            description="Every capability is designed for real-world events — flexible enough for festivals, simple enough for a Sunday service."
          />
          <FeatureBlock
            eyebrow="Day-Planner"
            title="A personalised programme in every pocket"
            description="Attendees filter the schedule by stage, track or interest and save the sessions that matter to them. Organisers update the programme in seconds and everyone sees the change instantly."
            bullets={[
              "Multi-day, multi-venue scheduling",
              "Smart filtering by track, stage and audience",
              "Personal saved agendas and reminders",
            ]}
            mockup={{ src: emAsset("/day-planner.png"), alt: "Day planner programme view with filtering" }}
          />
          <FeatureBlock
            reverse
            eyebrow="Live Translation"
            title="Break the language barrier in real time"
            description="Delegates listen to live, translated audio through their own headphones in the language they choose — perfect for international conferences and multicultural congregations."
            bullets={[
              "Real-time audio to attendees' phones",
              "Dozens of languages, no extra hardware",
              "Crystal-clear streaming across venues",
            ]}
            mockup={{ src: emAsset("/live-translation.png"), alt: "Live translation audio interface" }}
          />
          <FeatureBlock
            eyebrow="Click & Collect"
            title="No more queues at the café tent"
            description="Guests order food, drinks and merchandise from wherever they are and collect when it's ready. Caterers manage demand with a live order dashboard."
            bullets={[
              "Order ahead from any seat",
              "Timed collection slots",
              "Live kitchen and stock dashboard",
            ]}
            mockup={{ src: emAsset("/click-collect.png"), alt: "Click and collect ordering interface" }}
          />
        </div>
      </section>

      {/* Capability grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Everything in one place"
          title="A complete toolkit for gathering people"
          description="Mix and match the features you need today and switch others on as you grow."
        />
        <div className="mt-12">
          <FeatureGrid items={CAPABILITIES} />
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <Testimonial
            quote="The day-planner and push notifications transformed how delegates experience our convention. Everything our team needs to run a 10,000-person event now lives in one place."
            author="Event Director"
            role="Keswick Convention"
          />
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
