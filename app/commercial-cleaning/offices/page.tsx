import Link from "next/link";

export default function OfficeCleaningPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm uppercase tracking-wider text-gray-500">
        Commercial Cleaning • Offices
      </p>

      <h1 className="mt-3 text-4xl font-bold">Office Cleaning</h1>

      <p className="mt-4 text-lg text-gray-600">
        Professional cleaning for offices, meeting rooms, kitchens, and
        washrooms — consistent standards and reliable schedules.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/request-walkthrough"
          className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white"
        >
          Request a Free Walk-Through
        </Link>
        <Link
          href="/commercial-cleaning"
          className="rounded-md border px-5 py-3 text-sm font-semibold"
        >
          Back to Commercial Cleaning
        </Link>
      </div>
    </main>
  );
}
