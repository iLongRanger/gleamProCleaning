import Link from "next/link";
import { residential } from "@/components/residential/ui";

export const metadata = {
  title: "Deep Home Cleaning in Metro Vancouver | Gleam Pro Cleaning",
  description:
    "Intensive one-time deep cleaning services in Metro Vancouver. Perfect for spring refresh, before events, or when your home needs extra attention.",
};

export default function DeepCleaningPage() {
  return (
    <div className={residential.shell}>
      <div className="relative">
        <div className={residential.glow} />
        <main className={`relative z-10 ${residential.page}`}>
          {/* Hero */}
          <section className={residential.section}>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className={residential.eyebrow}>
                  Residential Cleaning • Deep Cleaning Service
                </p>
                <h1 className={residential.h1}>
                  Intensive home cleaning{" "}
                  <span style={{ color: "#D4A574" }}>for a truly fresh space</span>
                </h1>
                <p className={residential.lead}>
                  Sometimes your home needs more than routine maintenance. Our deep
                  cleaning service addresses every detail - from baseboards to behind
                  appliances - leaving your space refreshed and renewed.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/request-walkthrough" className={residential.cta}>
                    Get a Free Home Estimate
                  </Link>
                  <Link
                    href="/residential-cleaning"
                    className={residential.secondary}
                  >
                    Back to Residential Services
                  </Link>
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Perfect for spring refresh or events",
                    "Detailed cleaning of often-missed areas", 
                    "Behind and under appliances",
                    "Interior windows and baseboards",
                  ].map((item) => (
                    <li key={item} className={residential.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proof / Fit card */}
              <div className="w-full md:w-[360px]">
                <div className={residential.cardSoft}>
                  <h2 className={`${residential.h3} ${residential.accent}`}>
                    Ideal for
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>• Spring cleaning refresh</li>
                    <li>• Before/after special events</li>
                    <li>• Post-renovation cleanup</li>
                    <li>• When routine maintenance isn't enough</li>
                  </ul>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className={`text-sm font-semibold ${residential.accent}`}>
                      Deep cleaning focus
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      Comprehensive cleaning that goes beyond regular maintenance to reach every detail and corner.
                    </p>
                  </div>

                  <p className="mt-4 text-xs text-white/60">
                    Scope customized based on your home's specific needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Problems / Outcomes */}
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className={residential.card}>
              <h2 className={residential.h2}>When you need deep cleaning</h2>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>• Seasonal refresh (spring/fall cleaning)</li>
                <li>• Before hosting special events or gatherings</li>
                <li>• Post-renovation or construction cleanup</li>
                <li>• Moving in or out of a home</li>
                <li>• When regular cleaning feels insufficient</li>
              </ul>
            </div>

            <div className={residential.card}>
              <h2 className={residential.h2}>What deep cleaning achieves</h2>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>• Thorough attention to often-overlooked areas</li>
                <li>• Removal of built-up dust and grime</li>
                <li>• Fresh, renewed feeling throughout home</li>
                <li>• Detailed cleaning behind/under objects</li>
                <li>• Preparation for ongoing maintenance</li>
              </ul>
            </div>
          </section>

          {/* Scope */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>
              What's included (comprehensive deep clean)
            </h2>
            <p className={residential.lead}>
              Deep cleaning covers all regular areas plus detailed work on spaces
              that need extra attention. Customized to your home.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <ScopeCard
                title="All Rooms"
                items={[
                  "Comprehensive dusting (all surfaces)",
                  "Ceiling fans & light fixtures",
                  "Wall spot cleaning where needed",
                  "Door frames & handles detailed",
                  "Floor cleaning (vacuum/mop/wash)",
                ]}
              />
              <ScopeCard
                title="Kitchen & Bathrooms"
                items={[
                  "Appliance interiors (microwave, fridge)",
                  "Cabinet exteriors + interiors",
                  "Countertops + backsplash detailed",
                  "Tile grout cleaning as needed",
                  "Exhaust fan cleaning",
                ]}
              />
              <ScopeCard
                title="Detail Work"
                items={[
                  "Baseboards + trim detailed",
                  "Window interiors cleaned",
                  "Behind/under furniture moved",
                  "Light switch plates + outlet covers",
                  "Heating/AC vent cleaning",
                ]}
              />
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className={`${residential.h3} ${residential.accent}`}>
                Optional add-ons
              </h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-white/80">
                <p>• Carpet shampoo/extraction cleaning</p>
                <p>• Upholstery deep cleaning</p>
                <p>• Interior window washing (all windows)</p>
                <p>• Garage or storage area cleaning</p>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>How it works</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <StepCard
                step="1"
                title="Free Consultation"
                text="We assess your home, discuss specific deep cleaning needs, and identify priority areas."
              />
              <StepCard
                step="2"
                title="Detailed Quote"
                text="You receive a comprehensive estimate covering all areas and any optional add-ons."
              />
              <StepCard
                step="3"
                title="Intensive Service"
                text="Our team delivers thorough deep cleaning with attention to every detail."
              />
            </div>
          </section>

          {/* FAQ */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Faq
                q="How is deep cleaning different from regular cleaning?"
                a="Deep cleaning is more intensive and detailed, addressing areas often missed in regular maintenance like baseboards, behind furniture, and appliance interiors."
              />
              <Faq
                q="How long does deep cleaning take?"
                a="Typically 4-8 hours depending on home size and condition. We'll provide time estimate during consultation."
              />
              <Faq
                q="Do I need to move furniture?"
                a="We can move light furniture. For heavy items, please have them moved or let us know in advance for special arrangements."
              />
              <Faq
                q="What should I do before the deep cleaning?"
                a="Please pick up personal items, valuables, and clutter. We'll handle everything else including moving light furniture as needed."
              />
            </div>
          </section>

          {/* Final CTA */}
          <section className={residential.sectionDark}>
            <h2 className={residential.h2Large}>
              Ready for a comprehensive home refresh?
            </h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Start with a free consultation and we'll create a detailed deep
              cleaning plan tailored to your home.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/request-walkthrough" className={residential.ctaLight}>
                Get a Free Home Estimate
              </Link>
              <Link
                href="/residential-cleaning/recurring"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Recurring Cleaning
              </Link>
              <Link
                href="/residential-cleaning/move-in-out"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Move-In/Out
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function ScopeCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className={residential.cardSoft}>
      <h3 className={`${residential.h3} ${residential.accent}`}>{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-white/80">
        {items.map((t) => (
          <li key={t}>• {t}</li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className={residential.cardSoft}>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
          {step}
        </span>
        <h3 className={`${residential.h3} ${residential.accent}`}>{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-white/80">{text}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className={residential.cardSoft}>
      <p className={`text-sm font-semibold ${residential.accent}`}>{q}</p>
      <p className="mt-2 text-sm leading-6 text-white/80">{a}</p>
    </div>
  );
}