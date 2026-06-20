import { EdenHeader } from "@components/common/EdenHeader";
import { Footer } from "@components/common/Footer";
import { QueryProvider } from "@providers/query-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@app/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Default OG image used when a page doesn't supply its own.
// Absolute URL required by the OG spec — metadataBase resolves relative paths.
const DEFAULT_OG_IMAGE = "https://www.eden.co.uk/lms/og-default.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eden.co.uk"),
  title: {
    default: "Christian360 LMS — Learning Management for Every Organisation",
    template: "%s | Christian360 LMS",
  },
  description:
    "A fully multi-tenant learning platform with a 26-type content block system, cohort scheduling, multi-channel communications and AI-powered impact measurement — for organisations from local charities to national training providers.",
  openGraph: {
    siteName: "Christian360 LMS",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Christian360 LMS — Eden.co.uk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@edencouk",
    images: [DEFAULT_OG_IMAGE],
  },
  // Use Eden's own favicon so the browser tab matches the main site.
  icons: {
    icon: "https://www.eden.co.uk/favicon.ico",
    shortcut: "https://www.eden.co.uk/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a3d2b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <QueryProvider>
          <EdenHeader />
          <div className="flex-1">{children}</div>
          <Footer />
        </QueryProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
