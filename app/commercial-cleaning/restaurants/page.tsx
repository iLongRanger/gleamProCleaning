import Link from "next/link";

export default function RestaurantCleaningPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <section className="max-w-3xl">
        <p className="text-sm uppercase tracking-wider text-gray-500">
          Commercial Cleaning • Restaurants & Pubs
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Restaurant & Pub Cleaning Services
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          Consistent, inspection-ready cleaning for restaurants, pubs, cafés,
          and food service spaces across Metro Vancouver.
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
      </section>

      {/* Why restaurants choose us */}
      <section className="mt-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">
            Built for busy food service environments
          </h2>

          <p className="mt-4 text-gray-700">
            Restaurants operate on tight schedules, high traffic, and strict
            health standards. Our cleaning systems are designed to keep your
            space consistently clean — not just “good enough” on inspection day.
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Reliable recurring schedules</li>
            <li>• Consistent checklists and scope</li>
            <li>• High-touch and front-of-house focus</li>
            <li>• Clear communication with management</li>
          </ul>
        </div>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-lg font-semibold">Ideal for:</h3>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Restaurants & pubs</li>
            <li>• Cafés & coffee shops</li>
            <li>• Commissary kitchens</li>
            <li>• Food courts & shared kitchens</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold">Typical cadence</h3>

          <p className="mt-2 text-gray-700">
            Daily, 5× per week, or custom schedules based on your hours of
            operation and traffic.
          </p>
        </div>
      </section>

      {/* Checklist preview */}
      <section className="mt-16 rounded-xl border p-8">
        <h2 className="text-2xl font-bold">
          Sample cleaning checklist (preview)
        </h2>

        <p className="mt-3 text-gray-700">
          Final scope is customized during your walk-through. Below is a sample
          of what restaurants typically include.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3 text-gray-700">
          <div>
            <h3 className="font-semibold">Front of House</h3>
            <ul className="mt-3 space-y-1">
              <li>• Floors vacuumed & mopped</li>
              <li>• Tables and chairs wiped</li>
              <li>• Doors, glass, handles</li>
              <li>• Spot cleaning walls</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Washrooms</h3>
            <ul className="mt-3 space-y-1">
              <li>• Toilets & urinals sanitized</li>
              <li>• Sinks, mirrors, dispensers</li>
              <li>• Floors and high-touch points</li>
              <li>• Restocking (if provided)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">High-Touch Areas</h3>
            <ul className="mt-3 space-y-1">
              <li>• Switches & handles</li>
              <li>• POS counters</li>
              <li>• Railings & ledges</li>
              <li>• Staff common areas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Inspection readiness */}
      <section className="mt-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">
            Stay inspection-ready year-round
          </h2>

          <p className="mt-4 text-gray-700">
            Our goal is not last-minute cleanups — it’s maintaining a standard
            that helps you pass inspections confidently and consistently.
          </p>

          <p className="mt-4 text-gray-700">
            After a walk-through, you receive a clear scope so expectations are
            aligned from day one.
          </p>
        </div>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-lg font-semibold">What you get</h3>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Fixed monthly proposal</li>
            <li>• Defined scope & frequency</li>
            <li>• Reliable, trained cleaning team</li>
            <li>• Direct point of contact</li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-20 rounded-xl border bg-gray-50 p-10 text-center">
        <h2 className="text-2xl font-bold">
          Get a clear proposal for your restaurant
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-700">
          Request a free walk-through and we’ll build a cleaning scope based on
          your space, schedule, and operational needs.
        </p>

        <div className="mt-6">
          <Link
            href="/request-walkthrough"
            className="inline-flex rounded-md bg-black px-6 py-3 text-sm font-semibold text-white"
          >
            Request a Free Walk-Through
          </Link>
        </div>
      </section>
    </main>
  );
}
