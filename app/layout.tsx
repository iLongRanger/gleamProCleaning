import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Gleam Pro Cleaning | Luxury Residential & Commercial Cleaning, Greater Vancouver",
  description:
    "Prestige cleaning in Greater Vancouver. Trustworthy, inspiring, and detail-obsessed. (672) 970-3755.",
  icons: {
    // Browsers accept PNG as a favicon via link rel=icon
    icon: "/logo-gpc.png",
    apple: "/logo-gpc.png", // or a 180x180 version if you have it
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
