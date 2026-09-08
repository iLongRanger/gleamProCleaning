import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck2,
  Check,
  ClipboardCheck,
  Clock3,
  MapPin,
  Moon,
  Phone,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { serviceAreas } from "@/lib/service-areas";
import { commercialServices, homeFaqs, site } from "@/lib/site";

const serviceCards = [
  {
    title: "Restaurants & pubs",
    description:
      "From the kitchen line to the last table. A fresh start for every service.",
    image: "/images/home/taproom-cleaning.png",
    alt: "Clean taproom with polished floors, tables, and a long bar",
    href: "/commercial-cleaning/restaurants",
    label: "HOSPITALITY",
  },
  {
    title: "Offices & workplaces",
    description:
      "Welcoming workspaces. Fresh common areas. One less thing on your to-do list.",
    image: "/images/home/commercial-overview-cleaning.png",
    alt: "Commercial cleaning in a bright office environment",
    href: "/commercial-cleaning/offices",
    label: "WORKSPACES",
  },
  {
    title: "Clinics & medical offices",
    description:
      "Thoughtful cleaning for reception areas, treatment rooms, and busy practices.",
    image: "/images/home/clinic-cleaning.png",
    alt: "A clean, organized medical clinic reception area",
    href: "/clinics",
    label: "HEALTHCARE",
  },
];
const routes = ["burnaby", "new-westminster", "vancouver"].map((slug) =>
  serviceAreas.find((area) => area.slug === slug)!,
);

export default function HomePage() {
  return (
    <div className="gpc-home">
      <section className="home-hero" aria-labelledby="hero-heading">
        <div className="gpc-container hero-grid">
          <div className="hero-copy">
            <p className="gpc-eyebrow">
              <span className="status-dot" /> COMMERCIAL CLEANING · METRO
              VANCOUVER
            </p>
            <h1 id="hero-heading">
              A cleaner space.
              <br />A better <em>start.</em>
            </h1>
            <p className="hero-description">
              Your business, ready before you open. Owner-led cleaning for
              restaurants, offices, and clinics across Metro Vancouver.
            </p>
            <div className="hero-actions">
              <Link href="#free-quote" className="gpc-button">
                Get a free cleaning quote{" "}
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
              <a href={`tel:${site.telephone}`} className="hero-phone">
                <Phone size={18} aria-hidden="true" />
                <span>
                  <small>LET’S TALK</small>
                  {site.phone}
                </span>
              </a>
            </div>
            <p className="hero-note">
              <Check size={15} aria-hidden="true" /> Free walkthrough{" "}
              <span>·</span> No obligation <span>·</span> No lock-in
            </p>
            <div className="hero-proof">
              <span className="proof-icon">
                <UsersRound size={22} aria-hidden="true" />
              </span>
              <p>
                <strong>Family-owned. Personally accountable.</strong>
                <br />
                <span>Professional cleaning experience since 2019.</span>
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <Image
                src="/images/home/commercial-hero.png"
                alt="Cleaners vacuuming and detailing a bright commercial lobby"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 600px) calc(100vw - 52px), (max-width: 900px) calc(100vw - 76px), (max-width: 1320px) calc((100vw - 135px) / 2), 587px"
                className="hero-image"
              />
            </div>
            <div className="hero-image-label">
              <span className="status-dot" /> EVERY DETAIL. EVERY VISIT.
            </div>
            <div className="hero-image-note">
              <span className="hero-note-icon">
                <Sparkles size={23} aria-hidden="true" />
              </span>
              <div>
                <strong>We take care of the clean.</strong>
                <span>You take care of your business.</span>
              </div>
            </div>
            <span className="hero-corner-mark" aria-hidden="true">
              ✳
            </span>
          </div>
        </div>
        <a href="#services" className="hero-explore">
          A FRESH APPROACH TO CLEAN <ArrowDown size={14} aria-hidden="true" />
        </a>
      </section>

      <section
        className="trust-strip"
        aria-label="Our cleaning service commitments"
      >
        <div className="gpc-container trust-grid">
          {[
            {
              icon: ShieldCheck,
              title: "$1M liability insured",
              sub: "Care you can count on",
            },
            {
              icon: UsersRound,
              title: "Owner-led crews",
              sub: "People who know your space",
            },
            {
              icon: Moon,
              title: "After-hours cleaning",
              sub: "Around your opening hours",
            },
            {
              icon: CalendarCheck2,
              title: "30-day trial",
              sub: "No lock-in. Cancel anytime.",
            },
          ].map(({ icon: Icon, title, sub }) => (
            <div className="trust-item" key={title}>
              <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <strong>{title}</strong>
                <span>{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="home-services gpc-section"
        aria-labelledby="services-heading"
      >
        <div className="gpc-container">
          <div className="section-heading-row">
            <div>
              <p className="gpc-eyebrow">SPACES WE CARE FOR</p>
              <h2 id="services-heading">
                Your space is unique.
                <br />
                <em>Your cleaning should be, too.</em>
              </h2>
            </div>
            <div className="section-heading-aside">
              <p>
                The right people, a clear checklist, and a schedule that works
                for you.
              </p>
              <Link href="/commercial-cleaning" className="gpc-text-link">
                Explore all services{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="service-card-grid">
            {serviceCards.map((card, index) => (
              <Link key={card.href} href={card.href} className="service-card">
                <div className="service-card-image">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                  <span>{card.label}</span>
                </div>
                <div className="service-card-body">
                  <div className="service-card-title">
                    <h3>{card.title}</h3>
                    <span className="service-arrow">
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </span>
                  </div>
                  <p>{card.description}</p>
                  <span className="service-card-number">0{index + 1}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="more-services">
            <span>Also here for</span>
            {commercialServices
              .filter((service) =>
                ["brewery", "other", "community"].includes(service.facility),
              )
              .map((service) => (
                <Link key={service.href} href={service.href}>
                  {service.name}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section
        className="home-difference gpc-section"
        aria-labelledby="difference-heading"
      >
        <div className="gpc-container difference-grid">
          <div className="difference-photo">
            <Image
              src="/images/home/taproom-cleaning.png"
              alt="A freshly cleaned taproom ready for guests"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <div className="difference-caption">
              <span>THE GLEAM PRO STANDARD</span>
              <p>
                Ready for your
                <br />
                <em>first impression.</em>
              </p>
            </div>
          </div>
          <div className="difference-copy">
            <p className="gpc-eyebrow">A LOCAL TEAM. A PERSONAL STANDARD.</p>
            <h2 id="difference-heading">
              Good cleaning.
              <br />
              <em>Even better peace of mind.</em>
            </h2>
            <p className="section-lead">
              You shouldn’t have to chase your cleaning company. We’re a
              family-owned team that takes responsibility for the work, from
              your first walkthrough to the details of every visit.
            </p>
            <div className="difference-points">
              {[
                {
                  title: "The owners are involved.",
                  text: "Direct communication with the people responsible for your space. Clear answers when you need them.",
                  icon: UsersRound,
                },
                {
                  title: "You know what’s included.",
                  text: "A written scope, an agreed schedule, and a quote based on your actual space. No guesswork.",
                  icon: ClipboardCheck,
                },
                {
                  title: "Your day starts without disruption.",
                  text: "After-hours cleaning that fits your business, with access and closing routines agreed in advance.",
                  icon: Clock3,
                },
              ].map(({ title, text, icon: Icon }) => (
                <div key={title}>
                  <span>
                    <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="gpc-text-link">
              Get to know Gleam Pro{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="home-process gpc-section"
        aria-labelledby="process-heading"
      >
        <div className="gpc-container">
          <div className="section-heading-row">
            <div>
              <p className="gpc-eyebrow">LESS ADMIN. MORE PEACE OF MIND.</p>
              <h2 id="process-heading">
                A fresh start in <em>three steps.</em>
              </h2>
            </div>
            <Link className="gpc-text-link" href="#free-quote">
              Let’s get started <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="process-grid">
            {[
              {
                number: "01",
                label: "LET’S MEET",
                title: "Show us your space.",
                text: "Request a free, 15-minute walkthrough. We’ll listen to your priorities and take a look at what needs care.",
              },
              {
                number: "02",
                label: "A CLEAR PLAN",
                title: "Get your written quote.",
                text: "Within 24 hours after the visit, you’ll receive a proposal with your scope, schedule, and price.",
              },
              {
                number: "03",
                label: "WE’LL TAKE IT FROM HERE",
                title: "Come back to clean.",
                text: "Start with a 30-day trial. Our owner-led crew gets to work, with no lock-in and the option to cancel anytime.",
              },
            ].map((step) => (
              <div className="process-step" key={step.number}>
                <div className="process-step-top">
                  <span>{step.number}</span>
                  <ArrowRight size={22} strokeWidth={1.3} aria-hidden="true" />
                </div>
                <p className="gpc-eyebrow">{step.label}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="home-areas gpc-section"
        aria-labelledby="areas-heading"
      >
        <div className="gpc-container areas-grid">
          <div>
            <p className="gpc-eyebrow">
              <MapPin size={14} aria-hidden="true" /> PROUDLY LOCAL
            </p>
            <h2 id="areas-heading">
              Your neighbourhood.
              <br />
              <em>Our nightly route.</em>
            </h2>
            <p className="section-lead">
              Based in New Westminster, we care for businesses across Metro
              Vancouver. Our regular nightly routes start here.
            </p>
            <Link href="/service-areas" className="gpc-text-link">
              View all service areas{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="area-list">
            {routes.map((area, index) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`}>
                <span className="area-index">0{index + 1}</span>
                <div>
                  <h3>{area.name}</h3>
                  <p>{area.neighborhoods.slice(0, 3).join(" · ")}</p>
                </div>
                <ArrowUpRight size={23} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            ))}
            <div className="additional-areas">
              <span>Also serving</span>
              {serviceAreas
                .filter((area) => !routes.includes(area))
                .map((area) => (
                  <Link key={area.slug} href={`/service-areas/${area.slug}`}>
                    {area.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-faq gpc-section" aria-labelledby="faq-heading">
        <div className="gpc-container faq-grid">
          <div>
            <p className="gpc-eyebrow">A FEW THINGS YOU MIGHT BE WONDERING</p>
            <h2 id="faq-heading">
              Good questions.
              <br />
              <em>Clear answers.</em>
            </h2>
            <p className="section-lead">
              Choosing a cleaning team should feel straightforward. We’re happy
              to talk through the details.
            </p>
            <a href={`tel:${site.telephone}`} className="gpc-text-link">
              <Phone size={17} aria-hidden="true" /> {site.phone}
            </a>
          </div>
          <div className="faq-list">
            {homeFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span className="faq-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
            <Link href="/commercial-cleaning/faq" className="gpc-text-link">
              More about our cleaning services{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="free-quote"
        className="home-quote gpc-section"
        aria-labelledby="quote-heading"
      >
        <div className="gpc-container quote-grid">
          <div className="quote-copy">
            <p className="gpc-eyebrow">YOUR NEXT CLEAN STARTS HERE</p>
            <h2 id="quote-heading">
              One less thing
              <br />
              on <em>your plate.</em>
            </h2>
            <p>
              Tell us a little about your business. We’ll take it from there
              with a free walkthrough and a clear cleaning plan.
            </p>
            <ul>
              <li>
                <Check size={18} aria-hidden="true" /> Free, no-obligation
                walkthrough
              </li>
              <li>
                <Check size={18} aria-hidden="true" /> Written quote within 24
                hours of our visit
              </li>
              <li>
                <Check size={18} aria-hidden="true" /> 30-day trial. No lock-in.
                Cancel anytime.
              </li>
            </ul>
            <div className="quote-call">
              <Phone size={23} aria-hidden="true" />
              <div>
                <span>Prefer a conversation?</span>
                <a href={`tel:${site.telephone}`}>{site.phone}</a>
              </div>
            </div>
          </div>
          <div className="quote-card">
            <span className="gpc-eyebrow">LET’S MAKE YOUR SPACE SHINE</span>
            <h3>Get your free quote.</h3>
            <LeadForm source="homepage-quote" />
            <p className="residential-handoff">
              Looking for home cleaning?{" "}
              <Link href="/request-walkthrough?type=residential">
                Request a home estimate{" "}
                <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
