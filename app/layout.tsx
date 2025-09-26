import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header"
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Gleam Pro Cleaning | Luxury Residential & Commercial Cleaning",
  description: "Prestige cleaning in Greater Vancouver.",
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
