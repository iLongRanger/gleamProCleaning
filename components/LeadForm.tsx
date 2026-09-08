"use client";

import Link from "next/link";
import { useId, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  LoaderCircle,
  LockKeyhole,
  Phone,
} from "lucide-react";
import {
  FIELD_LIMITS,
  PHONE_INPUT_PATTERN,
  validateLeadPayload,
  type LeadType,
  type ValidationIssue,
} from "@/lib/validation/lead";
import { site } from "@/lib/site";

const facilityOptions = [
  ["restaurant", "Restaurant / pub"],
  ["brewery", "Brewery / taproom"],
  ["office", "Office / workplace"],
  ["clinic", "Clinic / medical office"],
  ["community", "Community facility / school"],
  ["other", "Property management / other"],
];

export default function LeadForm({
  source,
  initialType = "commercial",
  initialFacility = "",
  allowResidential = false,
}: {
  source: string;
  initialType?: LeadType;
  initialFacility?: string;
  allowResidential?: boolean;
}) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const submissionPending = useRef(false);
  const started = useRef(false);
  const [lane, setLane] = useState<LeadType>(initialType);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function track(event: string) {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", event, { source, lead_type: lane });
      }
    } catch {
      // Optional analytics must never interrupt an enquiry or hide its success.
    }
  }

  function showFieldErrors(issues: ValidationIssue[]) {
    setErrors(
      Object.fromEntries(issues.map(({ field, message }) => [field, message])),
    );
    requestAnimationFrame(() => {
      // Wait for the sending state to clear before focusing an enabled field.
      const field = formRef.current?.elements.namedItem(issues[0]?.field);
      if (field instanceof HTMLElement) {
        const details = field.closest("details");
        if (details) details.open = true;
        field.focus();
      }
    });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionPending.current) return;
    setError("");
    setErrors({});
    const values = Object.fromEntries(new FormData(event.currentTarget));
    delete values["lane-choice"];
    const validation = validateLeadPayload({
      ...values,
      leadType: lane,
      source,
      pageUrl: window.location.href.slice(0, FIELD_LIMITS.pageUrl.max),
    });
    if (!validation.ok) {
      setError("Please check the highlighted fields and try again.");
      showFieldErrors(validation.errors);
      return;
    }
    submissionPending.current = true;
    setStatus("sending");
    try {
      const response = await fetch("/api/walkthrough", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
        signal: AbortSignal.timeout(20000),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        details?: ValidationIssue[];
      } | null;
      if (!response.ok || !result?.ok) {
        if (result?.details?.length) showFieldErrors(result.details);
        setError(
          response.status === 429
            ? "Too many attempts. Please wait a few minutes or call us to arrange your walkthrough."
            : "We couldn’t send your request. Your details are still here. Please try again or call us.",
        );
        setStatus("idle");
        return;
      }
      setStatus("success");
      track("generate_lead");
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("idle");
      setError(
        "We couldn’t confirm your request. Please check your connection and try again, or call us.",
      );
    } finally {
      submissionPending.current = false;
    }
  }

  function fieldProps(name: string) {
    return {
      id: `${id}-${name}`,
      name,
      "aria-invalid": Boolean(errors[name]),
      "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
      onChange: () => setErrors((previous) => ({ ...previous, [name]: "" })),
    };
  }

  function fieldError(name: string) {
    return errors[name] ? (
      <span className="lead-field-error" id={`${id}-${name}-error`}>
        {errors[name]}
      </span>
    ) : null;
  }

  if (status === "success") {
    return (
      <div
        className="lead-success"
        role="status"
        tabIndex={-1}
        ref={successRef}
      >
        <CheckCircle2 size={44} aria-hidden="true" />
        <h3>You’re on our list.</h3>
        <p>
          Thank you for reaching out. We’ll contact you within one business day
          to{" "}
          {lane === "commercial"
            ? "arrange your free walkthrough"
            : "discuss your home cleaning estimate"}
          .
        </p>
        <div className="lead-next">
          <strong>What happens next?</strong>
          <p>
            {lane === "commercial"
              ? "We’ll visit your space, agree on the details, and send a written quote within 24 hours after the walkthrough."
              : "We’ll confirm your space, cleaning priorities, and preferred schedule before preparing your estimate."}
          </p>
        </div>
        <a className="gpc-text-link" href={`tel:${site.telephone}`}>
          <Phone size={16} aria-hidden="true" /> {site.phone}
        </a>
      </div>
    );
  }

  return (
    <>
      <noscript>
        <style>{".lead-form { display: none; }"}</style>
        <p className="section-lead">
          To request your free quote, call{" "}
          <a className="gpc-text-link" href={`tel:${site.telephone}`}>
            {site.phone}
          </a>{" "}
          or email{" "}
          <a className="gpc-text-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </noscript>
      <form
        ref={formRef}
        className="lead-form"
        onSubmit={submit}
        aria-busy={status === "sending"}
        onInvalidCapture={(event) => {
          const details = (event.target as HTMLElement).closest("details");
          if (details) details.open = true;
        }}
        onFocus={() => {
          if (!started.current) {
            started.current = true;
            track("form_start");
          }
        }}
      >
        {allowResidential && (
          <fieldset className="lead-lane" disabled={status === "sending"}>
            <legend className="sr-only">Cleaning service</legend>
            {(["commercial", "residential"] as const).map((type) => (
              <label key={type} className={lane === type ? "is-selected" : ""}>
                <input
                  type="radio"
                  name="lane-choice"
                  value={type}
                  checked={lane === type}
                  onChange={() => {
                    setLane(type);
                    setErrors({});
                    setError("");
                  }}
                />
                {type === "commercial" ? "For my business" : "For my home"}
              </label>
            ))}
          </fieldset>
        )}
        <p className="lead-form-intro">
          {lane === "commercial"
            ? "Free 15-minute walkthrough. No obligation."
            : "A cleaning estimate tailored to your home."}
        </p>
        <fieldset className="lead-fields" disabled={status === "sending"}>
          <legend className="sr-only">Your contact details</legend>
          <div className="lead-honeypot" aria-hidden="true">
            <label htmlFor={`${id}-website`}>Leave this field empty</label>
            <input
              id={`${id}-website`}
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="lead-grid">
            {lane === "commercial" ? (
              <>
                <div className="lead-field">
                  <label htmlFor={`${id}-businessName`}>Business name</label>
                  <input
                    {...fieldProps("businessName")}
                    required
                    autoComplete="organization"
                    placeholder="Your business or facility"
                    minLength={2}
                    maxLength={FIELD_LIMITS.businessName.max}
                  />
                  {fieldError("businessName")}
                </div>
                <div className="lead-field">
                  <label htmlFor={`${id}-facilityType`}>Type of space</label>
                  <select
                    {...fieldProps("facilityType")}
                    required
                    defaultValue={initialFacility}
                  >
                    <option value="">Select your space</option>
                    {facilityOptions.map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                  {fieldError("facilityType")}
                </div>
              </>
            ) : (
              <div className="lead-field lead-full">
                <label htmlFor={`${id}-fullName`}>Your name</label>
                <input
                  {...fieldProps("fullName")}
                  required
                  autoComplete="name"
                  placeholder="First and last name"
                  minLength={2}
                  maxLength={FIELD_LIMITS.fullName.max}
                />
                {fieldError("fullName")}
              </div>
            )}
            <div className="lead-field">
              <label htmlFor={`${id}-email`}>Email address</label>
              <input
                {...fieldProps("email")}
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                maxLength={FIELD_LIMITS.email.max}
              />
              {fieldError("email")}
            </div>
            <div className="lead-field">
              <label htmlFor={`${id}-phone`}>Phone number</label>
              <input
                {...fieldProps("phone")}
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                placeholder="(778) 555-0123"
                pattern={PHONE_INPUT_PATTERN}
                title="Enter a phone number with 10–15 digits."
                maxLength={FIELD_LIMITS.phone.max}
              />
              {fieldError("phone")}
            </div>
          </div>
          <details className="lead-details">
            <summary>
              Add details about your space <span>optional</span>
            </summary>
            <div className="lead-grid">
              <div className="lead-field lead-full">
                <label htmlFor={`${id}-address`}>City or service address</label>
                <input
                  {...fieldProps("address")}
                  autoComplete="street-address"
                  placeholder="e.g. Burnaby or your street address"
                  minLength={FIELD_LIMITS.address.min}
                  maxLength={FIELD_LIMITS.address.max}
                />
                {fieldError("address")}
              </div>
              <div className="lead-field">
                <label htmlFor={`${id}-frequency`}>Cleaning frequency</label>
                <select {...fieldProps("frequency")} defaultValue="">
                  <option value="">Not sure yet</option>
                  <option value="daily">Every day</option>
                  <option value="5x-week">Five days a week</option>
                  <option value="weekly">Weekly</option>
                  <option value="bi-weekly">Every two weeks</option>
                  <option value="monthly">Monthly</option>
                  <option value="one-time">One time</option>
                  <option value="custom">Let’s discuss</option>
                </select>
                {fieldError("frequency")}
              </div>
              <div className="lead-field">
                <label htmlFor={`${id}-sqft`}>Approx. size (sq. ft.)</label>
                <input
                  {...fieldProps("sqft")}
                  type="number"
                  inputMode="numeric"
                  min={FIELD_LIMITS.sqft.min}
                  max={FIELD_LIMITS.sqft.max}
                  step="1"
                  placeholder="If you know it"
                />
                {fieldError("sqft")}
              </div>
              <div className="lead-field lead-full">
                <label htmlFor={`${id}-notes`}>Anything we should know?</label>
                <textarea
                  {...fieldProps("notes")}
                  rows={3}
                  maxLength={FIELD_LIMITS.notes.max}
                  placeholder="Your priorities, preferred timing, or questions…"
                />
                {fieldError("notes")}
              </div>
            </div>
          </details>
          {error && (
            <div className="lead-error" role="alert">
              <p>{error}</p>
              <a href={`tel:${site.telephone}`}>Call {site.phone}</a>
            </div>
          )}
          <button
            className="gpc-button lead-submit"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                <LoaderCircle
                  className="animate-spin"
                  size={18}
                  aria-hidden="true"
                />{" "}
                Sending your request…
              </>
            ) : (
              <>
                {lane === "commercial"
                  ? "Request my free walkthrough"
                  : "Request my home estimate"}
                <ArrowRight size={18} aria-hidden="true" />
              </>
            )}
          </button>
        </fieldset>
        <p className="lead-reassurance">
          <Check size={14} aria-hidden="true" /> Reply within one business day{" "}
          <span>·</span> No obligation
        </p>
        <p className="lead-privacy">
          <LockKeyhole size={13} aria-hidden="true" />
          <span>
            We use your details to respond to your enquiry. By submitting, you
            agree to our <Link href="/terms">Terms</Link> and{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </span>
        </p>
      </form>
    </>
  );
}
