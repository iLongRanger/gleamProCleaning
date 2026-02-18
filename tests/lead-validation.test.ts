import test from "node:test";
import assert from "node:assert/strict";
import { validateLeadPayload } from "../lib/validation/lead.ts";

test("accepts a valid commercial lead payload", () => {
  const result = validateLeadPayload({
    leadType: "commercial",
    businessName: "North Shore Office Hub",
    facilityType: "office",
    address: "123 Main St, Vancouver, BC",
    frequency: "weekly",
    phone: "+1 604-555-1234",
    email: "ops@example.com",
    sqft: "2500",
    notes: "Night clean preferred",
  });

  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.data.sqft, 2500);
    assert.equal(result.data.email, "ops@example.com");
  }
});

test("rejects invalid email and unexpected field", () => {
  const result = validateLeadPayload({
    leadType: "residential",
    fullName: "Jane Doe",
    address: "123 Main St, Vancouver, BC",
    frequency: "weekly",
    phone: "604-555-1234",
    email: "not-an-email",
    injected: "bad",
  });

  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.equal(result.errors.some((x) => x.field === "email"), true);
    assert.equal(result.errors.some((x) => x.field === "injected"), true);
  }
});

test("rejects out-of-range sqft", () => {
  const result = validateLeadPayload({
    leadType: "commercial",
    businessName: "Office",
    facilityType: "office",
    address: "123 Main St, Vancouver, BC",
    frequency: "weekly",
    phone: "604-555-1234",
    email: "hello@example.com",
    sqft: "20",
  });

  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.equal(result.errors.some((x) => x.field === "sqft"), true);
  }
});
