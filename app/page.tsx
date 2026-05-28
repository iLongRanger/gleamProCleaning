import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";
import HomeJsonLd from "./_home-jsonld";
import { serviceAreas } from "@/lib/service-areas";

export const metadata: Metadata = {
  title: "Commercial & Residential Cleaning in Metro Vancouver",
  description:
    "Premium commercial and residential cleaning across Metro Vancouver — restaurants, offices, community facilities, and homes. Same-day response, walk-through quoted.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Commercial & Residential Cleaning in Metro Vancouver | Gleam Pro",
    description:
      "Walk-through quoted, named-team executed. Restaurants, offices, community facilities, and homes across Metro Vancouver.",
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
