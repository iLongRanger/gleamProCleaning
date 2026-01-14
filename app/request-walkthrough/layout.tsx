import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Walk-Through | Gleam Pro Cleaning",
  description:
    "Request a commercial walk-through or residential estimate in Metro Vancouver. We will confirm scope and provide a tailored proposal.",
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
