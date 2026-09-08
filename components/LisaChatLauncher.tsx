"use client";

import Image from "next/image";
import { useState, type ComponentType } from "react";
import { LoaderCircle } from "lucide-react";

export default function LisaChatLauncher() {
  const [Chat, setChat] = useState<ComponentType<{
    initialOpen?: boolean;
  }> | null>(null);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  async function openChat() {
    if (loading) return;
    setLoading(true);
    setFailed(false);
    try {
      const chatModule = await import("./LisaChat");
      setChat(() => chatModule.default);
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }

  if (Chat) return <Chat initialOpen />;

  return (
    <div className="fixed bottom-3 right-3 z-[80] sm:bottom-5 sm:right-5">
      {failed && (
        <p
          role="status"
          className="mb-3 max-w-64 rounded-lg border border-[#D8CEB9] bg-white p-4 text-sm text-[#0B192C] shadow-lg"
        >
          Chat couldn’t load. Try again or call{" "}
          <a className="underline" href="tel:+17782230719">
            778 223 0719
          </a>
          .
        </p>
      )}
      <button
        type="button"
        onClick={openChat}
        disabled={loading}
        aria-label={loading ? "Opening Lisa chat" : "Chat with Lisa"}
        aria-busy={loading}
        aria-expanded={false}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-lg border border-[#B59961]/55 bg-[#0B192C] text-white shadow-lg transition hover:border-[#D8C08E] disabled:cursor-wait"
      >
        {loading ? (
          <LoaderCircle size={24} className="animate-spin" aria-hidden="true" />
        ) : (
          <Image
            src="/logo-gpc-64x64.png"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12"
          />
        )}
      </button>
    </div>
  );
}
