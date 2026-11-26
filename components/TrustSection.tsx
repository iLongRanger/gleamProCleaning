import { ArrowUpRight, ShieldCheck, Star } from "lucide-react";
import {
  businessProfile,
  publishedCredentials,
  publishedReviews,
} from "@/lib/business-profile";

type Tone = "light" | "dark";

const toneClasses: Record<Tone, Record<string, string>> = {
  light: {
    wrap: "bg-[#FFFDF8] border border-[#D8CEB9] text-[#0B192C]",
    eyebrow: "text-[#055F4B]",
    muted: "text-[#4B5968]",
    card: "border border-[#D8CEB9] bg-[#F5F1E8]",
    icon: "text-[#055F4B]",
    link: "text-[#055F4B] hover:text-[#014A5E]",
  },
  dark: {
    wrap: "bg-white/5 border border-white/10 text-white",
    eyebrow: "text-[#B59961]",
    muted: "text-white/75",
    card: "border border-white/10 bg-[#0B192C]/40",
    icon: "text-[#B59961]",
    link: "text-[#B59961] hover:text-white",
  },
};

/**
 * Credentials + reviews. Only renders owner-confirmed credentials and
 * reviews with permission to publish (see lib/business-profile.ts).
 */
export default function TrustSection({
  tone = "light",
  headingId = "trust-heading",
}: {
  tone?: Tone;
  headingId?: string;
}) {
  const t = toneClasses[tone];
  const reviewUrl = businessProfile.googleBusinessProfileUrl;

  return (
    <section
      aria-labelledby={headingId}
      className={`rounded-3xl p-6 sm:p-10 ${t.wrap}`}
    >
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${t.eyebrow}`}>
        Proof, not promises
      </p>
      <h2
        id={headingId}
        className="mt-3 font-display text-3xl leading-tight sm:text-4xl"
      >
        What you can verify before we start
      </h2>
      <p className={`mt-4 max-w-2xl text-base leading-7 ${t.muted}`}>
        Ask for any of these during your walkthrough. We will send the
        documents before the first visit.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {publishedCredentials.map((item) => (
          <li key={item.id} className={`flex gap-3 rounded-2xl p-5 ${t.card}`}>
            <ShieldCheck
              className={`mt-0.5 h-5 w-5 shrink-0 ${t.icon}`}
              aria-hidden="true"
            />
            <div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className={`mt-1 text-sm leading-6 ${t.muted}`}>{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>

      {publishedReviews.length > 0 ? (
        <div className="mt-10">
          <h3 className="text-lg font-semibold">What clients say</h3>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {publishedReviews.map((review) => (
              <li key={`${review.author}-${review.date}`} className={`rounded-2xl p-5 ${t.card}`}>
                <figure>
                  <div className={`flex gap-1 ${t.icon}`} aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-base leading-7">
                    “{review.quote}”
                  </blockquote>
                  <figcaption className={`mt-3 text-sm ${t.muted}`}>
                    {review.author}
                    {review.context ? `, ${review.context}` : ""} · {review.source}{" "}
                    review
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
        {reviewUrl ? (
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 ${t.link}`}
          >
            Read our reviews on Google
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : null}
        <a
          href={businessProfile.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 ${t.link}`}
        >
          Already a client? Leave us a Google review
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
