"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  open: boolean;
  plan?: string | null;
  onClose: () => void;
};

// Brand palette
const colors = {
  navy: "#0B2545",
  emerald: "#0FA36B",
  gold: "#C9A227",
  silver: "#E5E7EB",
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/myzdvall";

export default function ChoosePlanModal({ open, plan, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Reset when closed
  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setError(null);
    }
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000]">
      {/* Backdrop (click to close) */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Customize your cleaning plan"
        className="
          fixed z-[1001]
          inset-x-0 bottom-0
          sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
          w-full sm:w-[36rem] md:w-[42rem]
          max-h-[90vh] overflow-y-auto   /* ✅ responsive scrolling */
        "
      >
        <div className="mx-auto w-full sm:w-auto rounded-t-2xl sm:rounded-2xl bg-white p-4 sm:p-7 shadow-2xl gpc-modal relative">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="hidden sm:block absolute right-4 top-3 text-slate-500 hover:text-slate-700"
          >
            ×
          </button>

          {submitted ? (
            <Success onClose={onClose} />
          ) : (
            <Form
              plan={plan ?? null}
              onSuccess={() => setSubmitted(true)}
              onError={(msg) => setError(msg)}
              onCancel={onClose}
            />
          )}

          {error ? (
            <p className="mt-3 text-sm text-red-600">
              {error || "Something went wrong. Please try again."}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Form({
  plan,
  onSuccess,
  onError,
  onCancel,
}: {
  plan: string | null;
  onSuccess: () => void;
  onError: (msg: string) => void;
  onCancel: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [pageUrl, setPageUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") setPageUrl(window.location.href);
  }, []);

  return (
    <form
      className="grid grid-cols-1 gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        onError(""); // clear old error

        try {
          const formEl = e.currentTarget as HTMLFormElement;
          const fd = new FormData(formEl);

          fd.set("_subject", "Gleam Pro Cleaning — Choose Plan Inquiry");
          fd.set("source", "Choose Plan Modal");
          if (pageUrl) fd.set("pageUrl", pageUrl);
          if (plan) fd.set("plan", plan);

          const res = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: fd,
          });

          if (res.ok) {
            onSuccess();
            formEl.reset();
          } else {
            type FormspreeError = { errors?: { message: string }[] };
            const data: FormspreeError = await res.json().catch(() => ({}));
            const msg =
              data?.errors?.[0]?.message ||
              "We couldn't send your message. Please try again.";
            onError(msg);
          }
        } catch {
          onError("Network error. Please check your connection and try again.");
        } finally {
          setLoading(false);
        }
      }}
    >
      <header className="text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
          Customize Your Plan
        </h3>
        <p className="mt-1 text-slate-600 text-sm sm:text-base">
          {plan
            ? `Preselected: ${plan}`
            : "Tell us what you need and we’ll tailor it."}
        </p>
      </header>

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Service Type
          </label>
          <select
            name="serviceType"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select service type…
            </option>
            <option>Residential</option>
            <option>Commercial</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Frequency
          </label>
          <select
            name="frequency"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select frequency…
            </option>
            <option>One-time</option>
            <option>Weekly</option>
            <option>Bi-weekly</option>
            <option>Monthly</option>
          </select>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Property
          </label>
          <select
            name="propertyType"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select property…
            </option>
            <option>Condo / Apartment</option>
            <option>Townhouse</option>
            <option>House</option>
            <option>Office</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Approx. Size
          </label>
          <input
            name="approxSize"
            type="text"
            required
            placeholder="e.g., 1,500 sq ft"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            name="name"
            required
            placeholder="Full name"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="(###) ###-####"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </div>
      </div>

      {/* Row 4 */}
      <div>
        <label className="block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Notes
        </label>
        <textarea
          name="notes"
          rows={3}
          placeholder="Any specifics we should know?"
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </div>

      {/* Hidden fields */}
      {plan ? <input type="hidden" name="plan" value={plan} /> : null}
      <input
        type="hidden"
        name="_subject"
        value="Gleam Pro Cleaning — Choose Plan Inquiry"
      />
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:justify-end pb-[env(safe-area-inset-bottom)]">
        <button
          type="button"
          onClick={onCancel}
          className="w-full sm:w-auto rounded-xl px-4 py-2 font-medium"
          style={{ backgroundColor: colors.silver, color: colors.navy }}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto rounded-xl px-4 py-2 font-semibold disabled:opacity-60"
          style={{ backgroundColor: colors.emerald, color: colors.navy }}
        >
          {loading ? "Submitting…" : "Submit"}
        </button>
      </div>
    </form>
  );
}

function Success({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center space-y-3">
      <h3 className="text-2xl font-semibold text-slate-900">Thank you!</h3>
      <p className="text-slate-600">
        Our Prestige Specialist will reach out shortly to finalize your
        personalized plan.
      </p>
      <button
        onClick={onClose}
        className="mt-2 rounded-xl px-4 py-2 font-semibold"
        style={{ backgroundColor: colors.emerald, color: colors.navy }}
      >
        Close
      </button>
    </div>
  );
}
