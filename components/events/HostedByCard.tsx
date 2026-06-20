"use client";

import { useState } from "react";
import { Globe, Building2, ChevronDown, ChevronUp } from "lucide-react";
import type { OrganisationHit } from "@lib/algolia/events";

type Props = {
  organisationName: string;
  organisationType?: string | null;
  organiserLogo?: string | null;
  orgHref?: string | null;
  org: OrganisationHit | null;
};

export function HostedByCard({
  organisationName,
  organisationType,
  organiserLogo,
  orgHref,
  org,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  const logoUrl = org?.logoUrl ?? organiserLogo ?? null;
  const hasBanner = !!org?.bannerUrl;
  const bio = org?.mission ?? org?.description ?? null;
  const type = org?.organisationType ?? organisationType ?? null;

  // Filter out tags that are just the org name or the type — keep only
  // meaningful category tags. Use categories array if available, else _tags.
  const badgeLabels: string[] = (() => {
    if (org?.categories && org.categories.length > 0) {
      return org.categories.map((c) => c.name).slice(0, 8);
    }
    if (org?.tags && org.tags.length > 0) {
      const skip = new Set([
        organisationName.toLowerCase(),
        (type ?? "").toLowerCase(),
      ]);
      return org.tags
        .filter((t) => !skip.has(t.toLowerCase()))
        .slice(0, 8);
    }
    return [];
  })();

  const hasExpandableContent = !!(bio || badgeLabels.length > 0 || org?.website || orgHref);

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card">
      {/* Banner */}
      {hasBanner && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={org!.bannerUrl!}
          alt=""
          className="h-28 w-full object-cover object-center"
          aria-hidden="true"
        />
      )}

      {/* Header row — always visible */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-3">
        {/* Logo — overlaps banner when present */}
        {logoUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoUrl}
            alt={organisationName}
            className={`h-12 w-12 shrink-0 rounded-lg border border-border bg-white object-contain p-1${hasBanner ? " -mt-10 ring-2 ring-card" : ""}`}
          />
        )}

        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Hosted by
          </p>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="text-sm font-semibold text-foreground">
              {organisationName}
            </span>
            {type && (
              <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium capitalize text-muted-foreground">
                {type}
              </span>
            )}
            {org?.yearFounded && (
              <span className="text-xs text-muted-foreground">
                Est. {org.yearFounded}
              </span>
            )}
          </div>
        </div>

        {/* Expand / collapse toggle */}
        {hasExpandableContent && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-label={expanded ? "Show less about this organisation" : "Show more about this organisation"}
            className="ml-auto shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {expanded ? (
              <ChevronUp className="h-4 w-4" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        )}
      </div>

      {/* Expandable section */}
      {expanded && hasExpandableContent && (
        <div className="border-t border-border px-4 py-3 space-y-3">
          {/* Category badges */}
          {badgeLabels.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {badgeLabels.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary"
                >
                  {label}
                </span>
              ))}
            </div>
          )}

          {/* Bio text */}
          {bio && (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {bio}
            </p>
          )}

          {/* Links */}
          {(org?.website || orgHref) && (
            <div className="flex flex-wrap items-center gap-3">
              {org?.website && (
                <a
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary underline-offset-2 hover:underline"
                >
                  <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                  Website
                </a>
              )}
              {orgHref && (
                <a
                  href={orgHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground underline-offset-2 hover:text-primary hover:underline"
                >
                  <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                  View profile on Eden
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
