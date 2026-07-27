import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";
import HomeJsonLd from "./_home-jsonld";
import { serviceAreas } from "@/lib/service-areas";

export const metadata: Metadata = {
  title: "Commercial Cleaning in Metro Vancouver",
  description:
    "Family-owned commercial cleaning across Metro Vancouver. Free 15-minute walkthrough, written quote in 24 hours, 30-day no-lock-in trial.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Commercial Cleaning in Metro Vancouver | Gleam Pro",
    description:
      "Owner-led night crews for breweries, kitchens, clinics, offices, and community facilities across Metro Vancouver.",
    url: "/",
    type: "website",
  },
};

export default function Page() {
  const areaNames = serviceAreas.map((area) => area.name);
  return (
    <>
      <HomeJsonLd areaNames={areaNames} />
      <HomeClient />
    </>
  );
}
