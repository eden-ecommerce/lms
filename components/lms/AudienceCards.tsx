import { NsLink } from "@components/ns-link";
import { ArrowRight, Building2, Briefcase, HeartHandshake } from "lucide-react";
import { lmsHref } from "./lms-config";

const AUDIENCES = [
  {
    icon: Building2,
    tag: "Enterprise",
    title: "Built for scale. Ready for complexity.",
    description:
      "Multi-tenant isolation, granular admin roles, compliance auditing and AI-powered benchmarking for training providers and large organisations.",
    href: lmsHref("/audiences#enterprise"),
  },
  {
    icon: Briefcase,
    tag: "SME & Professional",
    title: "Professional infrastructure, without the overhead.",
    description:
      "Rolling release scheduling, certificate issuance and branded client portals for consultancies, trade bodies and growing teams.",
    href: lmsHref("/audiences#sme"),
  },
  {
    icon: HeartHandshake,
    tag: "Faith & Community",
    title: "Equipping your community to grow and serve.",
    description:
      "Discipleship, safeguarding and youth programmes with kids-friendly modes, devotional content and WhatsApp messaging — no technical team needed.",
    href: lmsHref("/audiences#faith"),
  },
];

export function AudienceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {AUDIENCES.map(({ icon: Icon, tag, title, description, href }) => (
        <NsLink
          key={href}
          href={href}
          className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
        >
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-6" />
          </div>
          <span className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {tag}
          </span>
          <h3 className="mt-1 text-balance font-serif text-lg font-semibold text-foreground">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Explore
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </NsLink>
      ))}
    </div>
  );
}
