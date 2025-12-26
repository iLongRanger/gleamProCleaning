"use client";

import { useState } from "react";

export default function RequestWalkthroughPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    businessName: "",
    facilityType: "",
    address: "",
    sqft: "",
    frequency: "",
    painPoints: "",
    phone: "",
    email: "",
    website: "", // honeypot
  });

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm uppercase tracking-wider text-gray-500">
        Commercial Cleaning • Metro Vancouver
      </p>

      <h1 className="mt-3 text-4xl font-bold">Request a Free Walk-Through</h1>

      <p className="mt-4 text-lg text-gray-600">
        Tell us about your facility and we’ll schedule a no-obligation
        walk-through. After the visit, you’ll receive a clear, fixed monthly
        proposal.
      </p>

      {!submitted ? (
        <form
          className="mt-10 space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();
            setError(null);
            setLoading(true);

            try {
              const res = await fetch("/api/walkthrough", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
              });

              const data = await res.json().catch(() => null);

              if (!res.ok || !data?.ok) {
                setError(
                  data?.error || "Something went wrong. Please try again."
                );
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
            <input
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Business / Facility name
            </label>
            <input
              required
              value={form.businessName}
              onChange={(e) =>
                setForm({ ...form, businessName: e.target.value })
              }
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Facility type</label>
            <select
              required
              value={form.facilityType}
              onChange={(e) =>
                setForm({ ...form, facilityType: e.target.value })
              }
              className="mt-1 w-full rounded-md border px-3 py-2"
            >
              <option value="">Select one</option>
              <option>Restaurant / Pub</option>
              <option>Office</option>
              <option>Community Facility / School</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              required
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">
                Approx. size (sqft)
              </label>
              <input
                required
                value={form.sqft}
                onChange={(e) => setForm({ ...form, sqft: e.target.value })}
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Cleaning frequency
              </label>
              <select
                required
                value={form.frequency}
                onChange={(e) =>
                  setForm({ ...form, frequency: e.target.value })
                }
                className="mt-1 w-full rounded-md border px-3 py-2"
              >
                <option value="">Select</option>
                <option>Daily</option>
                <option>5x per week</option>
                <option>Weekly</option>
                <option>Custom</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">
              Main pain points
            </label>
            <textarea
              rows={3}
              className="mt-1 w-full rounded-md border px-3 py-2"
              value={form.painPoints}
              onChange={(e) => setForm({ ...form, painPoints: e.target.value })}
              placeholder="Missed cleans, inspection concerns, unreliable staff, etc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Contact email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Contact phone number
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="e.g. 604-555-1234"
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-black px-4 py-3 text-white disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Walk-Through Request"}
          </button>
        </form>
      ) : (
        <div className="mt-10 rounded-lg border bg-green-50 p-6">
          <h2 className="text-xl font-semibold">Request received</h2>
          <p className="mt-2 text-gray-700">
            Thank you. We’ll contact you shortly (same business day).
          </p>
        </div>
      )}
    </main>
  );
}
