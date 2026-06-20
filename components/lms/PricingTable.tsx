import { NsLink } from "@components/ns-link";
import { buttonVariants } from "@components/ui/button";
import { cn } from "@lib/utils";
import { Check } from "lucide-react";
import { DEMO_HREF } from "./lms-config";

type Tier = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Community",
    tagline: "For churches, charities & community groups",
    description:
      "Run discipleship, safeguarding and youth programmes with the right tone for every audience.",
    features: [
      "Full 26-type content block library",
      "Groups, events & discussion channels",
      "Configurable fun levels & kids mode",
      "WhatsApp & SMS messaging",
      "Certificates on completion",
    ],
    cta: "Book a demo",
  },
  {
    name: "Professional",
    tagline: "For consultancies, SMEs & membership bodies",
    description:
      "Deliver client CPD and onboarding on a rolling schedule with branded portals and paid access.",
    features: [
      "Everything in Community",
      "Rolling (drip) release scheduling",
      "Ask the Expert with token links",
      "Stripe paid courses & access codes",
      "Course Filing Cabinet",
      "Branded iOS & Android app",
    ],
    cta: "Book a demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For training providers & national charities",
    description:
      "Multi-tenant delivery at scale with granular roles, compliance auditing and impact reporting.",
    features: [
      "Everything in Professional",
      "Full multi-tenancy & white-label",
      "Granular role presets",
      "Pre/post benchmarking + AI analysis",
      "11 analytics report areas",
      "14-category data export (ZIP)",
    ],
    cta: "Talk to sales",
  },
];

export function PricingTable() {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-3">
      {TIERS.map((tier) => (
        <div
          key={tier.name}
          className={cn(
            "flex flex-col rounded-3xl border bg-card p-8",
            tier.highlighted
              ? "border-primary shadow-lg ring-1 ring-primary"
              : "border-border",
          )}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              {tier.name}
            </h3>
            {tier.highlighted ? (
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most popular
              </span>
            ) : null}
          </div>

          <p className="mt-2 text-sm font-medium text-primary">{tier.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {tier.description}
          </p>

          <ul className="mt-6 flex flex-1 flex-col gap-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <NsLink
            href={DEMO_HREF}
            className={cn(
              buttonVariants({
                variant: tier.highlighted ? "default" : "outline",
                size: "lg",
              }),
              "mt-8 w-full",
            )}
          >
            {tier.cta}
          </NsLink>
        </div>
      ))}
    </div>
  );
}
