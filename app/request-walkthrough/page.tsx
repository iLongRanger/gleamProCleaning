"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { commercial } from "@/components/commercial/ui";
import { residential } from "@/components/residential/ui";
import {
  FIELD_LIMITS,
  PHONE_INPUT_PATTERN,
  validateLeadPayload,
} from "@/lib/validation/lead";

type Lane = "commercial" | "residential";

const colors = {
  gold: "#C9A227",
};

function SegmentedToggle({
  value,
  onChange,
}: {
  value: Lane;
  onChange: (v: Lane) => void;
}) {
  return (
    <div className="relative">
      <div
        className="absolute -inset-3 rounded-full blur-2xl opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(closest-side, ${colors.gold}, transparent)`,
        }}
      />

      <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 p-2 backdrop-blur-xl shadow-[0_0_30px_rgba(201,162,39,0.25)]">
        <button
          type="button"
          onClick={() => onChange("commercial")}
          className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition
            ${
              value === "commercial"
                ? "bg-white/15 text-white shadow-[0_0_18px_rgba(201,162,39,0.25)]"
                : "text-white/75 hover:text-white"
            }
          `}
        >
          Commercial
        </button>

        <button
          type="button"
          onClick={() => onChange("residential")}
          className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition
            ${
              value === "residential"
                ? "bg-white/15 text-white shadow-[0_0_18px_rgba(201,162,39,0.25)]"
                : "text-white/75 hover:text-white"
            }
          `}
        >
          Residential
        </button>
      </div>
    </div>
  );
}

export default function RequestWalkthroughPage() {
  const searchParams = useSearchParams();
  const typeParam = searchParams?.get("type") as Lane | null;

  const [lane, setLane] = useState<Lane>(typeParam === "residential" ? "residential" : "commercial");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    leadType: "commercial" as "commercial" | "residential",
    businessName: "",
    facilityType: "",
    fullName: "",
    address: "",
    sqft: "",
    frequency: "",
    painPoints: "",
    notes: "",
    phone: "",
    email: "",
    website: "", // Honeypot for spam protection
  });

  const designTokens = lane === "commercial" ? commercial : residential;

  const handleLaneChange = (newLane: Lane) => {
    setLane(newLane);
    setForm((prev) => ({ ...prev, leadType: newLane }));
  };

  return (
    <main className={designTokens.shell}>
      <div className={designTokens.page}>
        <p className={designTokens.eyebrow}>
          {lane === "commercial"
            ? "Commercial Cleaning • Metro Vancouver"
            : "Residential Cleaning • Metro Vancouver"}
        </p>

        <h1 className={designTokens.h1}>
          {lane === "commercial"
            ? "Request a Free Walk-Through"
            : "Request a Free Estimate"}
        </h1>

        <p className={designTokens.lead}>
          {lane === "commercial"
            ? "Tell us about your facility and we'll schedule a no-obligation walk-through. After visit, you'll receive a clear, fixed monthly proposal."
            : "Tell us about your home and we'll provide a detailed cleaning estimate based on your needs."}
        </p>

        <div className="mt-6">
          <SegmentedToggle value={lane} onChange={handleLaneChange} />
        </div>

        {!submitted ? (
          <form
            className="mt-8 space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              setError(null);
              setLoading(true);
              setFieldErrors({});

              try {
                const payload = {
                  ...form,
                  leadType: lane,
                  source: "walkthrough-page",
                  pageUrl:
                    typeof window !== "undefined"
                      ? window.location.href
                      : undefined,
                };
                const validation = validateLeadPayload(payload);
                if (!validation.ok) {
                  setError("Please fix the highlighted form fields.");
                  setFieldErrors(
                    validation.errors.reduce<Record<string, string>>(
                      (acc, issue) => {
                        if (!acc[issue.field]) {
                          acc[issue.field] = issue.message;
                        }
                        return acc;
                      },
                      {}
                    )
                  );
                  return;
                }

                const res = await fetch("/api/walkthrough", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(validation.data),
                });

                const data = (await res.json().catch(() => null)) as {
                  ok?: boolean;
                  error?: string;
                  details?: { field: string; message: string }[];
                } | null;

                if (!res.ok || !data?.ok) {
                  setError(
                    data?.error || "Something went wrong. Please try again."
                  );
                  if (Array.isArray(data?.details)) {
                    setFieldErrors(
                      data.details.reduce<Record<string, string>>(
                        (acc, issue) => {
                          if (!acc[issue.field]) {
                            acc[issue.field] = issue.message;
                          }
                          return acc;
                        },
                        {}
                      )
                    );
                  }
                  return;
                }

                setSubmitted(true);
              } catch {
                setError("Network error. Please try again.");
              } finally {
                setLoading(false);
              }
            }}
          >
            <div className="hidden">
              <label>Website</label>
              <Input
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            {lane === "commercial" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-white/90">
                    Business / Facility name
                  </label>
                  <Input
                    required
                    value={form.businessName}
                    onChange={(e) =>
                      setForm({ ...form, businessName: e.target.value })
                    }
                    minLength={FIELD_LIMITS.businessName.min}
                    maxLength={FIELD_LIMITS.businessName.max}
                    className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                  />
                  {fieldErrors.businessName ? (
                    <p className="mt-1 text-xs text-red-200">
                      {fieldErrors.businessName}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90">
                    Facility type
                  </label>
                  <select
                    required
                    value={form.facilityType}
                    onChange={(e) =>
                      setForm({ ...form, facilityType: e.target.value })
                    }
                    className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                  >
                    <option value="" className="bg-[#0B2545]">
                      Select one
                    </option>
                    <option value="restaurant" className="bg-[#0B2545]">
                      Restaurant / Pub
                    </option>
                    <option value="office" className="bg-[#0B2545]">
                      Office
                    </option>
                    <option value="community" className="bg-[#0B2545]">
                      Community Facility / School
                    </option>
                    <option value="other" className="bg-[#0B2545]">
                      Other
                    </option>
                  </select>
                  {fieldErrors.facilityType ? (
                    <p className="mt-1 text-xs text-red-200">
                      {fieldErrors.facilityType}
                    </p>
                  ) : null}
                </div>
              </>
            )}

            {lane === "residential" && (
              <div>
                <label className="block text-sm font-medium text-white/90">
                  Your name
                </label>
                <Input
                  required
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  minLength={FIELD_LIMITS.fullName.min}
                  maxLength={FIELD_LIMITS.fullName.max}
                  autoComplete="name"
                  className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                />
                {fieldErrors.fullName ? (
                  <p className="mt-1 text-xs text-red-200">
                    {fieldErrors.fullName}
                  </p>
                ) : null}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-white/90">
                Address
              </label>
              <Input
                required
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                minLength={FIELD_LIMITS.address.min}
                maxLength={FIELD_LIMITS.address.max}
                autoComplete="street-address"
                className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
              />
              {fieldErrors.address ? (
                <p className="mt-1 text-xs text-red-200">{fieldErrors.address}</p>
              ) : null}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {lane === "commercial" && (
                <div>
                  <label className="block text-sm font-medium text-white/90">
                    Approx. size (sqft)
                  </label>
                  <Input
                    required
                    value={form.sqft}
                    onChange={(e) => setForm({ ...form, sqft: e.target.value })}
                    inputMode="numeric"
                    pattern="^[0-9]{3,7}$"
                    minLength={3}
                    maxLength={7}
                    className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                  />
                  {fieldErrors.sqft ? (
                    <p className="mt-1 text-xs text-red-200">
                      {fieldErrors.sqft}
                    </p>
                  ) : null}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-white/90">
                  Cleaning frequency
                </label>
                <select
                  required
                  value={form.frequency}
                  onChange={(e) =>
                    setForm({ ...form, frequency: e.target.value })
                  }
                  className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                >
                  <option value="" className="bg-[#0B2545]">
                    Select
                  </option>
                  <option value="daily" className="bg-[#0B2545]">
                    Daily
                  </option>
                  <option value="5x-week" className="bg-[#0B2545]">
                    5x per week
                  </option>
                  <option value="weekly" className="bg-[#0B2545]">
                    Weekly
                  </option>
                  <option value="bi-weekly" className="bg-[#0B2545]">
                    Bi-weekly
                  </option>
                  <option value="monthly" className="bg-[#0B2545]">
                    Monthly
                  </option>
                  <option value="custom" className="bg-[#0B2545]">
                    Custom
                  </option>
                </select>
                {fieldErrors.frequency ? (
                  <p className="mt-1 text-xs text-red-200">
                    {fieldErrors.frequency}
                  </p>
                ) : null}
              </div>
            </div>

            {lane === "commercial" && (
              <div>
                <label className="block text-sm font-medium text-white/90">
                  Main pain points
                </label>
                <Textarea
                  rows={3}
                  className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                  value={form.painPoints}
                  onChange={(e) =>
                    setForm({ ...form, painPoints: e.target.value })
                  }
                  maxLength={FIELD_LIMITS.painPoints.max}
                  placeholder="Missed cleans, inspection concerns, unreliable staff, etc."
                />
                {fieldErrors.painPoints ? (
                  <p className="mt-1 text-xs text-red-200">
                    {fieldErrors.painPoints}
                  </p>
                ) : null}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-white/90">
                Additional notes (optional)
              </label>
              <Textarea
                rows={2}
                className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                maxLength={FIELD_LIMITS.notes.max}
                placeholder={
                  lane === "commercial"
                    ? "Any other details you'd like us to know..."
                    : "Special requests, number of bedrooms/bathrooms, pets, etc."
                }
              />
              {fieldErrors.notes ? (
                <p className="mt-1 text-xs text-red-200">{fieldErrors.notes}</p>
              ) : null}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-white/90">
                  Contact email
                </label>
                <Input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={FIELD_LIMITS.email.max}
                  autoComplete="email"
                  className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                />
                {fieldErrors.email ? (
                  <p className="mt-1 text-xs text-red-200">{fieldErrors.email}</p>
                ) : null}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90">
                  Contact phone number
                </label>
                <Input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="e.g. 604-555-1234"
                  minLength={FIELD_LIMITS.phone.min}
                  maxLength={FIELD_LIMITS.phone.max}
                  pattern={PHONE_INPUT_PATTERN}
                  inputMode="tel"
                  autoComplete="tel"
                  className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-emerald-400/50"
                />
                {fieldErrors.phone ? (
                  <p className="mt-1 text-xs text-red-200">{fieldErrors.phone}</p>
                ) : null}
              </div>
            </div>

            {error && (
              <div className="rounded-2xl border border-red-400/20 bg-red-900/20 p-4">
                <p className="text-sm text-red-200">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={designTokens.cta}
            >
              {loading
                ? "Submitting..."
                : lane === "commercial"
                  ? "Submit Walk-Through Request"
                  : "Submit Estimate Request"}
            </button>
          </form>
        ) : (
          <div className={designTokens.section}>
            <h2 className={designTokens.h2Large}>
              {lane === "commercial"
                ? "Walk-Through Request Received"
                : "Estimate Request Received"}
            </h2>
            <p className={designTokens.lead}>
              Thank you. We&apos;ll contact you shortly (same business day).
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
