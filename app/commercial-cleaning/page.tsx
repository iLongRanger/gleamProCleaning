import Link from "next/link";

const serviceAreas = [
  "Vancouver",
  "Burnaby",
  "New Westminster",
  "Surrey",
  "Delta",
  "Coquitlam",
];

export default function CommercialCleaningHubPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-wider text-gray-500">
          Commercial Cleaning • Metro Vancouver
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Commercial Cleaning Services for Businesses
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Reliable teams, consistent results, and clear communication — designed
          for restaurants, offices, and community facilities.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/request-walkthrough"
            className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white"
          >
            Request a Free Walk-Through
          </Link>

          <Link
            href="/commercial-cleaning/restaurants"
            className="rounded-md border px-5 py-3 text-sm font-semibold"
          >
            Restaurant Cleaning
          </Link>
        </div>
      </div>

      <section className="mt-12 rounded-2xl border p-6 md:p-8">
        <h2 className="text-xl font-semibold md:text-2xl">
          Industries we serve
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Explore our most common commercial cleaning scopes. All services
          include a free walk-through and a tailored checklist.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <a
            href="/commercial-cleaning/restaurants"
            className="rounded-xl border p-4 transition hover:shadow-sm"
          >
            <div className="font-medium">Restaurants &amp; Pubs</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Grease, high-touch surfaces, washrooms, and inspection-ready
              routines.
            </div>
          </a>

          <a
            href="/commercial-cleaning/offices"
            className="rounded-xl border p-4 transition hover:shadow-sm"
          >
            <div className="font-medium">Offices</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Desks, meeting rooms, kitchens, restrooms, and consistent
              day-to-day presentation.
            </div>
          </a>

          <a
            href="/commercial-cleaning/community-facilities"
            className="rounded-xl border p-4 transition hover:shadow-sm"
          >
            <div className="font-medium">Community Facilities</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Multi-room facilities, higher foot traffic, and dependable
              sanitation standards.
            </div>
          </a>
        </div>

        <div className="mt-6">
          <a
            href="/request-walkthrough"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium shadow-sm transition hover:opacity-90"
          >
            Request a Free Walk-Through
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-xl font-semibold md:text-2xl">
          Industries we serve
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Commercial-first cleaning focused on reliable routines and
          inspection-ready standards.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border p-5">
            <div className="font-medium">Restaurants &amp; Pubs</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Grease control, high-touch disinfection, washrooms, and closing
              support.
            </div>
          </div>
          <div className="rounded-2xl border p-5">
            <div className="font-medium">Offices</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Consistent presentation for teams and clients — daily, weekly, or
              custom.
            </div>
          </div>
          <div className="rounded-2xl border p-5">
            <div className="font-medium">Community Facilities</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Multi-room facilities with higher traffic and sanitation
              requirements.
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href="/commercial-cleaning"
            className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-medium transition hover:shadow-sm"
          >
            Explore Commercial Cleaning
          </a>
          <a
            href="/request-walkthrough"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium shadow-sm transition hover:opacity-90"
          >
            Request a Free Walk-Through
          </a>
        </div>
      </section>

      {/* Featured vertical: Restaurants */}
      <section className="mt-16 rounded-xl border p-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold">
              Restaurant & Pub Cleaning (Featured)
            </h2>
            <p className="mt-3 text-gray-700">
              Busy kitchens need consistent cleanliness and predictable
              checklists. We help you stay inspection-ready with dependable
              service and documented scope.
            </p>

            <ul className="mt-5 space-y-2 text-gray-700">
              <li>• Front-of-house + washrooms</li>
              <li>• Floors, glass, high-touch areas</li>
              <li>• Closing support and recurring maintenance</li>
              <li>• Custom scope based on traffic + schedule</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/commercial-cleaning/restaurants"
                className="rounded-md border px-4 py-2 text-sm font-medium"
              >
                View Restaurant Cleaning
              </Link>
              <Link
                href="/request-walkthrough"
                className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
              >
                Request Walk-Through
              </Link>
            </div>
          </div>

          <div className="rounded-xl border bg-gray-50 p-6">
            <h3 className="text-lg font-semibold">Best for</h3>
            <p className="mt-2 text-gray-700">
              Restaurants, pubs, cafés, commissary kitchens, and food service
              spaces that need consistent standards and fast communication.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Typical cadence</h3>
            <p className="mt-2 text-gray-700">
              Daily, 5x/week, or custom schedules depending on hours of
              operation and traffic.
            </p>

            <h3 className="mt-6 text-lg font-semibold">What you receive</h3>
            <p className="mt-2 text-gray-700">
              A fixed monthly proposal after an on-site walk-through.
            </p>
          </div>
        </div>
      </section>

      {/* Other verticals */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Other Commercial Cleaning</h2>
        <p className="mt-3 text-gray-600">
          Choose the vertical that best matches your facility.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Link
            href="/commercial-cleaning/offices"
            className="rounded-xl border p-6 hover:bg-gray-50"
          >
            <h3 className="text-lg font-semibold">Office Cleaning</h3>
            <p className="mt-2 text-gray-600">
              Professional cleaning for workspaces, meeting rooms, kitchens, and
              washrooms.
            </p>
          </Link>

          <Link
            href="/commercial-cleaning/community-facilities"
            className="rounded-xl border p-6 hover:bg-gray-50"
          >
            <h3 className="text-lg font-semibold">Community Facilities</h3>
            <p className="mt-2 text-gray-600">
              Reliable janitorial support for shared spaces, centers, and
              facilities with varied traffic.
            </p>
          </Link>

          <Link
            href="/request-walkthrough"
            className="rounded-xl border p-6 hover:bg-gray-50"
          >
            <h3 className="text-lg font-semibold">Request a Walk-Through</h3>
            <p className="mt-2 text-gray-600">
              We’ll review your space and provide a fixed monthly proposal.
            </p>
          </Link>
        </div>
      </section>

      {/* Service areas */}
      <section className="mt-16 rounded-xl border p-8">
        <h2 className="text-2xl font-bold">Service Areas</h2>
        <p className="mt-3 text-gray-600">Serving Metro Vancouver including:</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {serviceAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border px-3 py-1 text-sm text-gray-700"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-16 rounded-xl border bg-gray-50 p-10 text-center">
        <h2 className="text-2xl font-bold">
          Ready for a cleaner, more consistent facility?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-700">
          Request a walk-through and we’ll send a clear proposal based on your
          scope and schedule.
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
