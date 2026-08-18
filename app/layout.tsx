import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleAnalyticsPageView from "../components/GoogleAnalyticsPageView";
import LisaChat from "../components/LisaChat";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const LISA_ENABLED = process.env.LISA_ENABLED === "true";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
  alternates: {
    canonical: "/",
  },
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
    <html lang="en" className={`${cormorant.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#0B2545] text-white font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        {LISA_ENABLED ? <LisaChat /> : null}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
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
