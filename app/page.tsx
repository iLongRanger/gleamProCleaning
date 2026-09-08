import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import HomeJsonLd from "./_home-jsonld";
import { serviceAreas } from "@/lib/service-areas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Commercial Cleaning Metro Vancouver | Gleam Pro Cleaning",
  },
  description:
    "Owner-led commercial cleaning in Vancouver, Burnaby & New Westminster. Restaurants, offices & clinics. Get a free walkthrough and a clear, no-obligation quote.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Commercial Cleaning Metro Vancouver | Gleam Pro Cleaning",
    description:
      "Owner-led night crews for breweries, kitchens, clinics, offices, and community facilities across Metro Vancouver.",
    url: "/",
    type: "website",
    siteName: site.name,
    locale: "en_CA",
    images: [
      {
        url: site.socialImage,
        width: 1200,
        height: 630,
        alt: "Gleam Pro commercial cleaning in Metro Vancouver",
      },
    ],
  },
};

export default function Page() {
  const areaNames = serviceAreas.map((area) => area.name);
  return (
    <>
      <HomeJsonLd areaNames={areaNames} />
      <HomePage />
    </>
  );
}
