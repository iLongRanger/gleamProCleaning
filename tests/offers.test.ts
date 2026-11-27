import { test } from "node:test";
import assert from "node:assert/strict";
import { isOfferActive, januaryOffer } from "../lib/offers.ts";

test("January offer is live through January 31, 2027 in Pacific time", () => {
  assert.equal(isOfferActive(januaryOffer, new Date("2026-12-01T12:00:00Z")), true);
  assert.equal(
    isOfferActive(januaryOffer, new Date("2027-01-31T23:59:00-08:00")),
    true,
  );
});

test("January offer hides itself from February 1, 2027 Pacific time", () => {
  assert.equal(
    isOfferActive(januaryOffer, new Date("2027-02-01T00:00:00-08:00")),
    false,
  );
});

test("January offer never promises a free deep clean", () => {
  const copy = `${januaryOffer.message} ${januaryOffer.shortMessage}`.toLowerCase();
  assert.equal(copy.includes("deep clean"), false);
});
