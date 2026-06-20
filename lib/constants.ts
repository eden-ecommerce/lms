/**
 * REPLACE: Per-project deploy origins.
 *
 * Public config — safe in the client bundle. Hardcode production URLs before deploy.
 * API and asset origins may differ. Dev always uses localhost:3000.
 *
 * Private secrets (API keys, tokens, etc.) belong in `.env` — see `@lib/env-server`.
 *
 * ASSET_BASE_URL drives `assetPrefix` in `next.config.ts` so `/_next/static/*`
 * and imported `@public/*` assets resolve correctly behind the Eden Cloudflare Worker.
 */

export const ASSET_DEV_ORIGIN = "http://localhost:3000";
export const API_DEV_ORIGIN = "http://localhost:3000";

// Hardcoded fallback: this project's stable production *.vercel.app alias. Used
// when no NEXT_PUBLIC_ASSET_ORIGIN override and no Vercel-injected URL is present
// (e.g. an exported build), so production never accidentally points assets back
// at the eden.co.uk/lms Cloudflare path. Override per-clone via the env var.
export const ASSET_PRODUCTION_ORIGIN = "https://lms-eight-tau.vercel.app";

// Origin resolution — WHY assets must NOT load from eden.co.uk/lms:
//
// The app is served to visitors at https://www.eden.co.uk/lms, but that path is
// a Cloudflare proxy that strips the `/lms` prefix before forwarding the HTML
// request to Vercel. It only forwards the page route — it does NOT serve this
// deployment's `/_next/static/*` chunks or images. So if `assetPrefix` points at
// `https://www.eden.co.uk/lms`, every asset request 404s and the page renders
// unstyled. Assets MUST be fetched straight from the Vercel deployment, which
// serves `/_next/static/*` and images directly (with the right CORS headers).
//
// Resolution order (assetPrefix is evaluated at BUILD time, so a NEXT_PUBLIC_*
// var is inlined into the bundle — it is not needed at runtime):
//
//   1. NEXT_PUBLIC_ASSET_ORIGIN — explicit, portable override. Set this per
//      project in Vercel → Settings → Environment Variables to pin the stable
//      *.vercel.app alias (e.g. https://lms-eden.vercel.app). Recommended for a
//      reusable template: each clone sets its own value without editing source.
//   2. VERCEL_PROJECT_PRODUCTION_URL — auto-injected stable production alias.
//      Used in production when the override is absent.
//   3. VERCEL_URL — auto-injected per-deployment URL. Used in preview so the v0
//      preview iframe and Vercel preview deploys load their own assets.
//   4. ASSET_PRODUCTION_ORIGIN — hardcoded stable alias as the final safety net.
//
// Development: same-origin localhost (assetPrefix left undefined in next.config).
const explicitAssetOrigin = process.env.NEXT_PUBLIC_ASSET_ORIGIN?.replace(
  /\/+$/,
  "",
);

const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

const vercelDeploymentUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

// In production prefer an explicit override, then the stable production alias,
// then the per-deployment URL. In preview, use the per-deployment URL (or an
// explicit override if one is scoped to preview).
const resolvedOrigin =
  process.env.VERCEL_ENV === "production"
    ? (explicitAssetOrigin ??
      vercelProductionUrl ??
      vercelDeploymentUrl ??
      ASSET_PRODUCTION_ORIGIN)
    : (explicitAssetOrigin ?? vercelDeploymentUrl ?? ASSET_PRODUCTION_ORIGIN);

export const ASSET_BASE_URL =
  process.env.NODE_ENV === "production"
    ? (resolvedOrigin ?? ASSET_DEV_ORIGIN)
    : ASSET_DEV_ORIGIN;

export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? (resolvedOrigin ?? API_DEV_ORIGIN)
    : API_DEV_ORIGIN;
