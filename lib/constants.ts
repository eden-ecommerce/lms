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
// Vercel injects these automatically — no hardcoding, stable across deploys:
//   • VERCEL_PROJECT_PRODUCTION_URL — the stable production *.vercel.app alias
//     (same for every production deploy). Used in production.
//   • VERCEL_URL — the per-deployment *.vercel.app URL. Used in preview so the
//     v0 preview iframe and Vercel preview deploys load their own assets.
//
// Development: same-origin localhost (assetPrefix left undefined in next.config).
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

const vercelDeploymentUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

// In production, prefer the stable production alias; fall back to the
// per-deployment URL. In preview, use the per-deployment URL.
const vercelOrigin =
  process.env.VERCEL_ENV === "production"
    ? (vercelProductionUrl ?? vercelDeploymentUrl)
    : vercelDeploymentUrl;

export const ASSET_BASE_URL =
  process.env.NODE_ENV === "production"
    ? (vercelOrigin ?? ASSET_DEV_ORIGIN)
    : ASSET_DEV_ORIGIN;

export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? (vercelOrigin ?? API_DEV_ORIGIN)
    : API_DEV_ORIGIN;
