"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Check,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import {
  answerLisaQuestion,
  lisaSuggestions,
  type LisaAction,
} from "@/lib/chat/lisa";

type ChatMessage = {
  id: number;
  role: "lisa" | "visitor";
  text: string;
  actions?: LisaAction[];
};

type LeadType = "commercial" | "residential";

const initialMessage: ChatMessage = {
  id: 1,
  role: "lisa",
  text: "Hi, I'm Lisa. How can I help with your cleaning needs today? I use approved Gleam Pro information and hand anything uncertain to the team.",
};

const fieldClass =
  "h-10 w-full border border-white/15 bg-[#0B2545] px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20";
const labelClass = "mb-1.5 block text-xs font-medium text-white/70";

function trackLisaEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export default function LisaChat() {
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [mode, setMode] = useState<"chat" | "lead">("chat");
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [question, setQuestion] = useState("");
  const [hasAskedQuestion, setHasAskedQuestion] = useState(false);
  const [leadType, setLeadType] = useState<LeadType>("commercial");
  const [leadStatus, setLeadStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [leadError, setLeadError] = useState<string | null>(null);
  const [lead, setLead] = useState({
    fullName: "",
    businessName: "",
    facilityType: "",
    address: "",
    phone: "",
    email: "",
    notes: "",
    website: "",
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextMessageId = useRef(2);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (window.sessionStorage.getItem("lisa-greeting-dismissed") !== "1") {
        setShowGreeting(true);
      }
    }, 5000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, mode, leadStatus]);

  const openChat = () => {
    setOpen(true);
    setShowGreeting(false);
    window.sessionStorage.setItem("lisa-greeting-dismissed", "1");
    trackLisaEvent("lisa_chat_open");
    window.setTimeout(() => inputRef.current?.focus(), 100);
  };

  const closeChat = () => {
    setOpen(false);
    setShowGreeting(false);
    window.sessionStorage.setItem("lisa-greeting-dismissed", "1");
  };

  const startLead = () => {
    setMode("lead");
    setLeadError(null);
    trackLisaEvent("lisa_lead_started", { lead_type: leadType });
  };

  const handleAction = (action: LisaAction) => {
    if (action.kind === "lead") startLead();
  };

  const askQuestion = (value: string) => {
    const trimmed = value.trim().slice(0, 300);
    if (!trimmed) return;

    const reply = answerLisaQuestion(trimmed);
    const visitorMessageId = nextMessageId.current;
    nextMessageId.current += 2;
    setMessages((current) => [
      ...current,
      { id: visitorMessageId, role: "visitor", text: trimmed },
      {
        id: visitorMessageId + 1,
        role: "lisa",
        text: reply.answer,
        actions: reply.actions,
      },
    ]);
    setQuestion("");
    setHasAskedQuestion(true);
    trackLisaEvent("lisa_question_answered", {
      intent: reply.intent,
      answer_status: reply.answered ? "approved" : "handoff",
    });
  };

  const submitQuestion = (event: FormEvent) => {
    event.preventDefault();
    askQuestion(question);
  };

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLeadError(null);

    if (!lead.fullName.trim()) {
      setLeadError("Please enter your name.");
      return;
    }
    if (leadType === "commercial" && !lead.businessName.trim()) {
      setLeadError("Please enter the business or facility name.");
      return;
    }
    if (leadType === "commercial" && !lead.facilityType) {
      setLeadError("Please select the facility type.");
      return;
    }

    setLeadStatus("sending");
    try {
      const response = await fetch("/api/walkthrough", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadType,
          fullName: lead.fullName,
          businessName: leadType === "commercial" ? lead.businessName : undefined,
          facilityType: leadType === "commercial" ? lead.facilityType : undefined,
          address: lead.address || undefined,
          phone: lead.phone,
          email: lead.email,
          notes: lead.notes || "Lead submitted through Lisa chat.",
          website: lead.website,
          source: "lisa-chat",
          pageUrl: window.location.href,
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        details?: Array<{ field: string; message: string }>;
      };

      if (!response.ok || !result.ok) {
        const detail = result.details?.[0]?.message;
        throw new Error(detail || result.error || "Unable to send your request.");
      }

      setLeadStatus("sent");
      trackLisaEvent("generate_lead", { source: "lisa-chat", lead_type: leadType });
      trackLisaEvent("lisa_lead_submitted", { lead_type: leadType });
    } catch (error) {
      setLeadStatus("idle");
      setLeadError(
        error instanceof Error
          ? error.message
          : "Unable to send your request. Please call 778 223 0719."
      );
    }
  };

  return (
    <div className="fixed bottom-3 right-3 z-[80] sm:bottom-5 sm:right-5">
      {showGreeting && !open ? (
        <div
          role="status"
          className="absolute bottom-[68px] right-0 w-[min(310px,calc(100vw-24px))] border border-white/15 bg-[#071629] p-4 text-white shadow-[0_18px_60px_rgba(0,0,0,0.42)]"
        >
          <button
            type="button"
            onClick={closeChat}
            className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center text-white/55 transition hover:text-white"
            aria-label="Dismiss Lisa's greeting"
            title="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex gap-3 pr-5">
            <LisaMark />
            <button type="button" onClick={openChat} className="text-left">
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#D4A574]">
                Lisa
              </span>
              <span className="mt-1 block text-sm leading-5 text-white/80">
                Hi, how can I help with your cleaning needs?
              </span>
            </button>
          </div>
        </div>
      ) : null}

      {open ? (
        <section
          role="dialog"
          aria-label="Chat with Lisa, Gleam Pro's virtual assistant"
          className="absolute bottom-[68px] right-0 flex h-[min(680px,calc(100dvh-96px))] w-[min(390px,calc(100vw-24px))] flex-col overflow-hidden border border-white/15 bg-[#050E1F] text-white shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
        >
          <header className="flex h-[70px] shrink-0 items-center justify-between border-b border-white/10 bg-[#071629] px-4">
            <div className="flex items-center gap-3">
              {mode === "lead" ? (
                <button
                  type="button"
                  onClick={() => setMode("chat")}
                  className="flex h-9 w-9 items-center justify-center text-white/65 transition hover:text-white"
                  aria-label="Return to chat"
                  title="Back to chat"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
              ) : (
                <LisaMark />
              )}
              <div>
                <h2 className="font-display text-xl leading-none text-white">Lisa</h2>
                <p className="mt-1 flex items-center gap-1.5 text-[11px] text-white/55">
                  <span className="h-1.5 w-1.5 bg-emerald-400" aria-hidden="true" />
                  Gleam Pro virtual assistant
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeChat}
              className="flex h-9 w-9 items-center justify-center text-white/60 transition hover:text-white"
              aria-label="Close chat"
              title="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          {mode === "chat" ? (
            <>
              <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
                <div aria-live="polite" className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "visitor" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[88%] border px-3.5 py-3 text-sm leading-5 ${
                          message.role === "visitor"
                            ? "border-[#D4A574]/30 bg-[#D4A574]/12 text-white"
                            : "border-white/10 bg-white/[0.055] text-white/80"
                        }`}
                      >
                        {message.role === "lisa" ? (
                          <span className="mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D4A574]">
                            <Sparkles className="h-3 w-3" /> Lisa
                          </span>
                        ) : null}
                        <p>{message.text}</p>
                        {message.actions?.length ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {message.actions.map((action) =>
                              action.kind === "link" ? (
                                <Link
                                  key={`${message.id}-${action.label}`}
                                  href={action.href}
                                  onClick={() => setOpen(false)}
                                  className="border border-white/15 px-3 py-1.5 text-xs font-medium text-white transition hover:border-[#D4A574]/60 hover:text-[#F0C99F]"
                                >
                                  {action.label}
                                </Link>
                              ) : (
                                <button
                                  key={`${message.id}-${action.label}`}
                                  type="button"
                                  onClick={() => handleAction(action)}
                                  className="bg-[#D4A574] px-3 py-1.5 text-xs font-semibold text-[#071629] transition hover:bg-[#E5BB8F]"
                                >
                                  {action.label}
                                </button>
                              )
                            )}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>

                {!hasAskedQuestion ? (
                  <div className="mt-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/40">
                      Common questions
                    </p>
                    <div className="mt-2 grid gap-2">
                      {lisaSuggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => askQuestion(suggestion)}
                          className="border border-white/10 bg-white/[0.025] px-3 py-2.5 text-left text-xs leading-4 text-white/70 transition hover:border-[#D4A574]/40 hover:text-white"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="shrink-0 border-t border-white/10 bg-[#071629] p-3">
                <form onSubmit={submitQuestion} className="flex items-center gap-2">
                  <label htmlFor="lisa-question" className="sr-only">
                    Ask Lisa a question
                  </label>
                  <input
                    ref={inputRef}
                    id="lisa-question"
                    value={question}
                    onChange={(event) => setQuestion(event.target.value.slice(0, 300))}
                    maxLength={300}
                    autoComplete="off"
                    placeholder="Ask about cleaning services..."
                    className="h-11 min-w-0 flex-1 border border-white/15 bg-[#0B2545] px-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#D4A574]"
                  />
                  <button
                    type="submit"
                    disabled={!question.trim()}
                    className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#D4A574] text-[#071629] transition hover:bg-[#E5BB8F] disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Send question"
                    title="Send"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <p className="flex items-center gap-1 text-[10px] text-white/38">
                    <ShieldCheck className="h-3 w-3" /> Approved site information only
                  </p>
                  <button
                    type="button"
                    onClick={startLead}
                    className="text-[11px] font-medium text-[#E5BB8F] hover:text-white"
                  >
                    Request service
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
              {leadStatus === "sent" ? (
                <div className="flex min-h-full flex-col items-center justify-center px-4 text-center">
                  <span className="flex h-12 w-12 items-center justify-center border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-white">Request received</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/65">
                    The Gleam Pro team will follow up within one business day to confirm the next step.
                  </p>
                  <button
                    type="button"
                    onClick={closeChat}
                    className="mt-6 bg-[#D4A574] px-5 py-2.5 text-sm font-semibold text-[#071629]"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D4A574]">
                    Request service
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-white">
                    Tell the team about your space
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-white/55">
                    No pricing or schedule is confirmed in chat. The team will review your details and contact you directly.
                  </p>

                  <form onSubmit={submitLead} className="mt-5 space-y-4">
                    <div className="grid grid-cols-2 border border-white/15 p-1" aria-label="Service type">
                      {(["commercial", "residential"] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setLeadType(type)}
                          className={`h-9 text-xs font-semibold capitalize transition ${
                            leadType === type
                              ? "bg-[#D4A574] text-[#071629]"
                              : "text-white/60 hover:text-white"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>

                    <div>
                      <label htmlFor="lisa-name" className={labelClass}>Your name</label>
                      <input
                        id="lisa-name"
                        required
                        maxLength={80}
                        autoComplete="name"
                        value={lead.fullName}
                        onChange={(event) => setLead({ ...lead, fullName: event.target.value })}
                        className={fieldClass}
                      />
                    </div>

                    {leadType === "commercial" ? (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="lisa-business" className={labelClass}>Business or facility</label>
                          <input
                            id="lisa-business"
                            required
                            maxLength={80}
                            autoComplete="organization"
                            value={lead.businessName}
                            onChange={(event) => setLead({ ...lead, businessName: event.target.value })}
                            className={fieldClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="lisa-facility" className={labelClass}>Facility type</label>
                          <select
                            id="lisa-facility"
                            required
                            value={lead.facilityType}
                            onChange={(event) => setLead({ ...lead, facilityType: event.target.value })}
                            className={fieldClass}
                          >
                            <option value="">Select</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="office">Office</option>
                            <option value="brewery">Brewery / taproom</option>
                            <option value="clinic">Clinic</option>
                            <option value="community">Community facility</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    ) : null}

                    <div>
                      <label htmlFor="lisa-address" className={labelClass}>City or service address <span className="text-white/35">(optional)</span></label>
                      <input
                        id="lisa-address"
                        maxLength={160}
                        autoComplete="street-address"
                        value={lead.address}
                        onChange={(event) => setLead({ ...lead, address: event.target.value })}
                        className={fieldClass}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="lisa-phone" className={labelClass}>Phone</label>
                        <input
                          id="lisa-phone"
                          required
                          type="tel"
                          minLength={10}
                          maxLength={20}
                          autoComplete="tel"
                          value={lead.phone}
                          onChange={(event) => setLead({ ...lead, phone: event.target.value })}
                          className={fieldClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="lisa-email" className={labelClass}>Email</label>
                        <input
                          id="lisa-email"
                          required
                          type="email"
                          maxLength={120}
                          autoComplete="email"
                          value={lead.email}
                          onChange={(event) => setLead({ ...lead, email: event.target.value })}
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="lisa-notes" className={labelClass}>What do you need? <span className="text-white/35">(optional)</span></label>
                      <textarea
                        id="lisa-notes"
                        rows={3}
                        maxLength={1000}
                        value={lead.notes}
                        onChange={(event) => setLead({ ...lead, notes: event.target.value })}
                        className="w-full resize-none border border-white/15 bg-[#0B2545] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20"
                      />
                    </div>

                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="lisa-website">Website</label>
                      <input
                        id="lisa-website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={lead.website}
                        onChange={(event) => setLead({ ...lead, website: event.target.value })}
                      />
                    </div>

                    {leadError ? (
                      <p role="alert" className="border border-red-300/20 bg-red-500/10 px-3 py-2 text-xs leading-5 text-red-100">
                        {leadError}
                      </p>
                    ) : null}

                    <button
                      type="submit"
                      disabled={leadStatus === "sending"}
                      className="flex h-11 w-full items-center justify-center bg-[#D4A574] px-4 text-sm font-semibold text-[#071629] transition hover:bg-[#E5BB8F] disabled:cursor-wait disabled:opacity-60"
                    >
                      {leadStatus === "sending" ? "Sending..." : "Send request"}
                    </button>
                    <p className="text-[10px] leading-4 text-white/40">
                      By submitting, you agree to our{" "}
                      <Link href="/privacy" onClick={() => setOpen(false)} className="underline hover:text-white">
                        Privacy Policy
                      </Link>
                      . Lisa does not confirm prices or availability.
                    </p>
                  </form>
                </>
              )}
            </div>
          )}
        </section>
      ) : null}

      <button
        type="button"
        onClick={open ? closeChat : openChat}
        className="flex h-14 w-14 items-center justify-center bg-[#D4A574] text-[#071629] shadow-[0_12px_36px_rgba(0,0,0,0.38)] transition hover:bg-[#E5BB8F] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#050E1F]"
        aria-label={open ? "Close Lisa chat" : "Chat with Lisa"}
        aria-expanded={open}
        title={open ? "Close chat" : "Chat with Lisa"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}

function LisaMark() {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D4A574]/35 bg-[#D4A574]/10 text-[#E5BB8F]">
      <Sparkles className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}
