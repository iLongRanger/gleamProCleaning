import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Cleaning Quote in Metro Vancouver",
  description:
    "Request a free commercial cleaning walkthrough or home estimate in Metro Vancouver. A local, owner-led team. No obligation. Reply within one business day.",
  alternates: {
    canonical: "/request-walkthrough",
  },
};

export default function RequestWalkthroughLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
