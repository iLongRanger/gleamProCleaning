import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gleampro.ca"),
  title: {
    default: "Gleam Pro Cleaning | Commercial Cleaning in Metro Vancouver",
    template: "%s | Gleam Pro Cleaning",
  },
  description:
    "Commercial-first cleaning for restaurants, offices, and community facilities in Metro Vancouver, with premium residential estimates available.",
  openGraph: {
    title: "Gleam Pro Cleaning | Commercial Cleaning in Metro Vancouver",
    description:
      "Commercial-first cleaning for restaurants, offices, and community facilities in Metro Vancouver, with premium residential estimates available.",
    url: "/",
    siteName: "Gleam Pro Cleaning",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/logo-gpc.png",
        width: 512,
        height: 512,
        alt: "Gleam Pro Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Gleam Pro Cleaning | Commercial Cleaning in Metro Vancouver",
    description:
      "Commercial-first cleaning for restaurants, offices, and community facilities in Metro Vancouver, with premium residential estimates available.",
    images: ["/logo-gpc.png"],
  },
  icons: {
    icon: "/logo-gpc.png",
    apple: "/logo-gpc.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0B2545] text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
