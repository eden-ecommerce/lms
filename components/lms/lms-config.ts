import { assetUrl, NAMESPACE_PATH } from "@lib/config";

/** Absolute path to the LMS marketing site root, e.g. "/lms". */
export const LMS_PATH = NAMESPACE_PATH;

/** Build an internal href within the LMS site. */
export function lmsHref(path: string): string {
  if (path === "/" || path === "") return LMS_PATH;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${LMS_PATH}${normalized}`;
}

/** Build an asset URL for an image stored in `/public/lms`. */
export function lmsAsset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return assetUrl(`/lms${normalized}`);
}

/** Primary conversion target — "Book a demo". */
export const DEMO_HREF = lmsHref("/pricing");

export type LmsNavItem = { label: string; href: string; exact?: boolean };

/** Navigation items for the LMS sub-nav. */
export const LMS_NAV: LmsNavItem[] = [
  { label: "Overview", href: LMS_PATH, exact: true },
  { label: "Features", href: lmsHref("/features") },
  { label: "Audiences", href: lmsHref("/audiences") },
  { label: "Integrations", href: lmsHref("/integrations") },
  { label: "Case study", href: lmsHref("/case-study") },
  { label: "Pricing", href: lmsHref("/pricing") },
];
