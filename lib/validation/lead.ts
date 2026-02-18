export type LeadType = "commercial" | "residential";

export const FIELD_LIMITS = {
  businessName: { min: 2, max: 80 },
  fullName: { min: 2, max: 80 },
  address: { min: 5, max: 160 },
  phone: { min: 10, max: 20 },
  email: { max: 120 },
  notes: { max: 1000 },
  painPoints: { max: 1000 },
  sqft: { min: 100, max: 1_000_000 },
  source: { max: 80 },
  pageUrl: { max: 500 },
} as const;

export const PHONE_INPUT_PATTERN = "^\\+?[0-9()\\-\\s.]{10,20}$";
const PHONE_VALIDATION_PATTERN = /^\+?[0-9()\-\s.]{10,20}$/;
const EMAIL_VALIDATION_PATTERN =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;

const ALLOWED_FREQUENCIES = new Set([
  "one-time",
  "daily",
  "5x-week",
  "weekly",
  "bi-weekly",
  "monthly",
  "custom",
]);

const ALLOWED_FACILITY_TYPES = new Set([
  "restaurant",
  "office",
  "community",
  "other",
]);

type LeadPayload = {
  leadType: LeadType;
  website?: string;
  businessName?: string;
  facilityType?: string;
  fullName?: string;
  address: string;
  frequency: string;
  phone: string;
  email: string;
  notes?: string;
  sqft?: number;
  painPoints?: string;
  source?: string;
  pageUrl?: string;
};

export type ValidationIssue = {
  field: string;
  message: string;
};

export type ValidationResult =
  | { ok: true; data: LeadPayload }
  | { ok: false; errors: ValidationIssue[] };

const ALLOWED_KEYS = new Set([
  "leadType",
  "website",
  "businessName",
  "facilityType",
  "fullName",
  "address",
  "frequency",
  "phone",
  "email",
  "notes",
  "sqft",
  "painPoints",
  "source",
  "pageUrl",
]);

function asTrimmedString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  return value.trim();
}

function pushRequired(
  errors: ValidationIssue[],
  field: string,
  value: string | undefined
) {
  if (!value) {
    errors.push({ field, message: "This field is required." });
  }
}

function pushLength(
  errors: ValidationIssue[],
  field: string,
  value: string | undefined,
  min: number,
  max: number
) {
  if (!value) return;
  if (value.length < min || value.length > max) {
    errors.push({
      field,
      message: `Must be between ${min} and ${max} characters.`,
    });
  }
}

function pushMaxLength(
  errors: ValidationIssue[],
  field: string,
  value: string | undefined,
  max: number
) {
  if (!value) return;
  if (value.length > max) {
    errors.push({
      field,
      message: `Must be ${max} characters or less.`,
    });
  }
}

export function validateLeadPayload(input: unknown): ValidationResult {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return {
      ok: false,
      errors: [{ field: "body", message: "Payload must be a JSON object." }],
    };
  }

  const body = input as Record<string, unknown>;
  const errors: ValidationIssue[] = [];

  for (const key of Object.keys(body)) {
    if (!ALLOWED_KEYS.has(key)) {
      errors.push({ field: key, message: "Unexpected field." });
    }
  }

  const leadType: LeadType =
    body.leadType === "residential" ? "residential" : "commercial";

  const website = asTrimmedString(body.website);
  const businessName = asTrimmedString(body.businessName);
  const facilityType = asTrimmedString(body.facilityType)?.toLowerCase();
  const fullName = asTrimmedString(body.fullName);
  const address = asTrimmedString(body.address);
  const frequency = asTrimmedString(body.frequency)?.toLowerCase();
  const phone = asTrimmedString(body.phone);
  const email = asTrimmedString(body.email)?.toLowerCase();
  const notes = asTrimmedString(body.notes);
  const painPoints = asTrimmedString(body.painPoints);
  const source = asTrimmedString(body.source);
  const pageUrl = asTrimmedString(body.pageUrl);
  const rawSqft = asTrimmedString(body.sqft) ?? body.sqft;

  pushMaxLength(errors, "website", website, 200);

  if (leadType === "commercial") {
    pushRequired(errors, "businessName", businessName);
    pushRequired(errors, "facilityType", facilityType);
    pushLength(
      errors,
      "businessName",
      businessName,
      FIELD_LIMITS.businessName.min,
      FIELD_LIMITS.businessName.max
    );

    if (facilityType && !ALLOWED_FACILITY_TYPES.has(facilityType)) {
      errors.push({
        field: "facilityType",
        message: "Invalid facility type.",
      });
    }
  } else {
    pushRequired(errors, "fullName", fullName);
    pushLength(
      errors,
      "fullName",
      fullName,
      FIELD_LIMITS.fullName.min,
      FIELD_LIMITS.fullName.max
    );
  }

  pushRequired(errors, "address", address);
  pushRequired(errors, "frequency", frequency);
  pushRequired(errors, "phone", phone);
  pushRequired(errors, "email", email);

  pushLength(
    errors,
    "address",
    address,
    FIELD_LIMITS.address.min,
    FIELD_LIMITS.address.max
  );
  pushLength(
    errors,
    "phone",
    phone,
    FIELD_LIMITS.phone.min,
    FIELD_LIMITS.phone.max
  );
  pushMaxLength(errors, "email", email, FIELD_LIMITS.email.max);
  pushMaxLength(errors, "notes", notes, FIELD_LIMITS.notes.max);
  pushMaxLength(errors, "painPoints", painPoints, FIELD_LIMITS.painPoints.max);
  pushMaxLength(errors, "source", source, FIELD_LIMITS.source.max);
  pushMaxLength(errors, "pageUrl", pageUrl, FIELD_LIMITS.pageUrl.max);

  if (frequency && !ALLOWED_FREQUENCIES.has(frequency)) {
    errors.push({
      field: "frequency",
      message: "Invalid cleaning frequency.",
    });
  }

  if (phone && !PHONE_VALIDATION_PATTERN.test(phone)) {
    errors.push({ field: "phone", message: "Invalid phone format." });
  }

  if (email && !EMAIL_VALIDATION_PATTERN.test(email)) {
    errors.push({ field: "email", message: "Invalid email format." });
  }

  let sqft: number | undefined;
  if (rawSqft !== undefined && rawSqft !== null && rawSqft !== "") {
    const parsed = Number(rawSqft);
    if (!Number.isFinite(parsed) || !Number.isInteger(parsed)) {
      errors.push({
        field: "sqft",
        message: "Approx. size must be a whole number.",
      });
    } else if (parsed < FIELD_LIMITS.sqft.min || parsed > FIELD_LIMITS.sqft.max) {
      errors.push({
        field: "sqft",
        message: `Approx. size must be between ${FIELD_LIMITS.sqft.min} and ${FIELD_LIMITS.sqft.max}.`,
      });
    } else {
      sqft = parsed;
    }
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      leadType,
      website,
      businessName,
      facilityType,
      fullName,
      address: address as string,
      frequency: frequency as string,
      phone: phone as string,
      email: email as string,
      notes,
      sqft,
      painPoints,
      source,
      pageUrl,
    },
  };
}
