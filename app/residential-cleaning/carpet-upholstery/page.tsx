import Link from "next/link";
import { residential } from "@/components/residential/ui";

export const metadata = {
  title: "Carpet & Upholstery Cleaning in Metro Vancouver | Gleam Pro Cleaning",
  description:
    "Professional carpet cleaning and upholstery care in Metro Vancouver. Safe extraction methods, stain removal, and fabric-safe cleaning for all furniture types.",
};

export default function CarpetUpholsteryPage() {
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
                  Residential Cleaning • Carpet & Upholstery Care
                </p>
                <h1 className={residential.h1}>
                  Professional fabric care{" "}
                  <span style={{ color: "#D4A574" }}>that restores and refreshes</span>
                </h1>
                <p className={residential.lead}>
                  From stubborn carpet stains to delicate upholstery cleaning, we use
                  professional extraction and fabric-safe methods to restore your
                  furnishings. Safe for your family and pets.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/request-walkthrough?type=residential" className={residential.cta}>
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
                    "Professional hot water extraction",
                    "Fabric-safe cleaning methods", 
                    "Stain treatment and removal",
                    "Deodorizing and protection options",
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
                    <li>• Allergy concerns and sensitivities</li>
                    <li>• Pet owners with accident stains</li>
                    <li>• High-traffic carpet wear patterns</li>
                    <li>• Furniture refresh and maintenance</li>
                  </ul>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className={`text-sm font-semibold ${residential.accent}`}>
                      Cleaning methods
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      Hot water extraction for carpets, fabric-safe
                      solutions for upholstery, with proper drying
                      techniques for best results.
                    </p>
                  </div>

                  <p className="mt-4 text-xs text-white/60">
                    All methods are eco-friendly and family-safe.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Problems / Outcomes */}
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className={residential.card}>
              <h2 className={residential.h2}>Common fabric challenges</h2>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>• Set-in stains from spills and accidents</li>
                <li>• Pet odors and dander buildup</li>
                <li>• High-traffic carpet wear patterns</li>
                <li>• Allergy triggers in upholstery</li>
                <li>• DIY cleaning making stains worse</li>
              </ul>
            </div>

            <div className={residential.card}>
              <h2 className={residential.h2}>What professional care achieves</h2>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>• Deep extraction removes embedded dirt</li>
                <li>• Proper treatment prevents stain setting</li>
                <li>• Elimination of odors at source</li>
                <li>• Fabric protection for future resistance</li>
                <li>• Extended life of carpets and furniture</li>
              </ul>
            </div>
          </section>

          {/* Scope */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>
              What's included (professional fabric care)
            </h2>
            <p className={residential.lead}>
              Thorough cleaning using industry-standard methods with proper
              equipment and fabric-safe solutions for optimal results.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <ScopeCard
                title="Carpet Cleaning"
                items={[
                  "Pre-vacuum and pre-treatment",
                  "Hot water extraction cleaning",
                  "Spot and stain treatment",
                  "Deodorizing application",
                  "Fiber protection (optional add-on)",
                ]}
              />
              <ScopeCard
                title="Upholstery Cleaning"
                items={[
                  "Fabric type identification",
                  "Color-safe cleaning solutions",
                  "Gentle agitation and extraction",
                  "Stain pretreatment for spots",
                  "Fabric protector application",
                ]}
              />
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className={`${residential.h3} ${residential.accent}`}>
                Common stains we treat
              </h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-white/80">
                <p>• Coffee, tea, and beverage stains</p>
                <p>• Pet stains and odors</p>
                <p>• Food spills and grease marks</p>
                <p>• Mud and dirt ground-in stains</p>
                <p>• Ink and dye transfer marks</p>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>How it works</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <StepCard
                step="1"
                title="Fabric Assessment"
                text="We identify fiber types, test for colorfastness, and evaluate specific stain conditions."
              />
              <StepCard
                step="2"
                title="Pre-Treatment"
                text="Targeted pretreatment of stains and high-traffic areas with appropriate solutions."
              />
              <StepCard
                step="3"
                title="Deep Cleaning"
                text="Professional extraction and cleaning with proper drying techniques for best results."
              />
            </div>
          </section>

          {/* FAQ */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Faq
                q="How long does carpet cleaning take to dry?"
                a="Typically 6-12 hours depending on humidity and airflow. We recommend good ventilation and can provide air movers if needed."
              />
              <Faq
                q="Is it safe for pets and children?"
                a="Yes. We use eco-friendly, non-toxic cleaning solutions that are safe for the whole family. Fabrics are typically dry to the touch within hours."
              />
              <Faq
                q="Can you remove old, set-in stains?"
                a="Many old stains can be significantly improved or removed, though some may be permanent. We'll assess during consultation and set realistic expectations."
              />
              <Faq
                q="How often should carpets be professionally cleaned?"
                a="Every 12-18 months for normal traffic, more frequently for homes with pets, allergies, or high-traffic areas."
              />
            </div>
          </section>

          {/* Final CTA */}
          <section className={residential.sectionDark}>
            <h2 className={residential.h2Large}>
              Ready to refresh your carpets and furniture?
            </h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Start with a free consultation and We'll create a fabric care
              plan tailored to your specific needs and concerns.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/request-walkthrough?type=residential" className={residential.ctaLight}>
                Get a Free Home Estimate
              </Link>
              <Link
                href="/residential-cleaning/recurring"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Recurring Cleaning
              </Link>
              <Link
                href="/residential-cleaning/deep-cleaning"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Deep Cleaning
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