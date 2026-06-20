import { SubNav } from "@components/lms/SubNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Christian360 LMS — One platform. Every audience. Proven impact.",
    template: "%s | Christian360 LMS",
  },
  description:
    "A fully multi-tenant learning management platform with a 26-type content block system, cohort scheduling, multi-channel communications and AI-powered impact measurement.",
};

export default function LmsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background">
      <SubNav />
      {children}
    </div>
  );
}
