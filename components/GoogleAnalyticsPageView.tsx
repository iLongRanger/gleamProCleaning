"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalyticsPageView({
  measurementId,
}: {
  measurementId: string;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId) return;

    const sendPageView = () => {
      if (typeof window.gtag !== "function") return false;

      window.gtag("event", "page_view", {
        send_to: measurementId,
        page_path: `${pathname}${window.location.search}`,
        page_location: window.location.href,
        page_title: document.title,
      });
      return true;
    };

    if (sendPageView()) return;

    const retry = window.setTimeout(sendPageView, 500);
    return () => window.clearTimeout(retry);
  }, [measurementId, pathname]);

  return null;
}
