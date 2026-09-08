import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";
import "./marketing.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleAnalyticsPageView from "../components/GoogleAnalyticsPageView";
import LisaChatLauncher from "../components/LisaChatLauncher";
import { site } from "@/lib/site";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const LISA_ENABLED = process.env.LISA_ENABLED === "true";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gleampro.ca"),
  title: {
    default: "Gleam Pro Cleaning | Commercial Cleaning in Metro Vancouver",
    template: "%s | Gleam Pro Cleaning",
  },
  description:
    "Commercial-first cleaning for restaurants, offices, and community facilities in Metro Vancouver, with premium residential estimates available.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    siteName: "Gleam Pro Cleaning",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: site.socialImage,
        width: 1200,
        height: 630,
        alt: "Gleam Pro Cleaning — commercial cleaning in Metro Vancouver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [site.socialImage],
  },
  icons: {
    icon: [
      { url: "/logo-gpc-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-gpc-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/logo-gpc-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${geistSans.variable}`}>
      <body className="bg-[#0B192C] text-white font-sans antialiased">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        {LISA_ENABLED ? <LisaChatLauncher /> : null}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
                document.addEventListener('click', function(e) {
                  var a = e.target.closest && e.target.closest('a[href^="tel:"]');
                  if (a) gtag('event', 'phone_click', { phone: a.getAttribute('href').replace('tel:','') });
                });
              `}
            </Script>
            <GoogleAnalyticsPageView measurementId={GA_ID} />
          </>
        ) : null}
      </body>
    </html>
  );
}
