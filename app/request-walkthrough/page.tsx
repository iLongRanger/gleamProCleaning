import Link from "next/link";

export default function RequestWalkthroughPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-wider text-gray-500">
          Commercial Cleaning • Metro Vancouver
        </p>

        <h1 className="mt-3 text-4xl font-bold">Request a Free Walk-Through</h1>

        <p className="mt-4 text-lg text-gray-600">
          Tell us about your facility and we’ll schedule a no-obligation
          walk-through. After the visit, you’ll receive a clear, fixed monthly
          proposal.
        </p>
      </div>

      <section className="rounded-lg border p-6">
        <h2 className="text-xl font-semibold">What happens next</h2>

        <ol className="mt-4 list-decimal space-y-2 pl-5 text-gray-700">
          <li>We confirm a walk-through time that works for you.</li>
          <li>We review your space and agree on scope and frequency.</li>
          <li>You receive a fixed monthly proposal (no surprises).</li>
        </ol>

        <div className="mt-8 rounded-lg border border-dashed p-6 text-center text-gray-500">
          Walk-through request form coming next.
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/commercial-cleaning"
            className="rounded-md border px-4 py-2 text-sm font-medium"
          >
            View Commercial Services
          </Link>

          <a
            href="tel:+16729703755"
            className="rounded-md border px-4 py-2 text-sm font-medium"
          >
            Call: (672) 970-3755
          </a>
        </div>
      </section>
    </main>
  );
}
