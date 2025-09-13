import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load fonts and attach CSS variable names
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Use Next's typed Viewport export (prevents duplicate <meta> issues)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title:
    "Gleam Pro Cleaning | Luxury Residential & Commercial Cleaning, Greater Vancouver",
  description:
    "Prestige cleaning in Greater Vancouver. Trustworthy, inspiring, and detail-obsessed. (672) 970-3755.",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-gpc-180x180.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning avoids noisy diffs if any extension/theme momentarily flips classes
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      {/* Keep body markup deterministic (no window/Date/random in render) */}
      <body className="antialiased min-h-dvh">{children}</body>
    </html>
  );
}
