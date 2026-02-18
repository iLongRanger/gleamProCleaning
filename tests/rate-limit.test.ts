import test from "node:test";
import assert from "node:assert/strict";
import { takeRateLimit } from "../lib/server/rate-limit.ts";

test("allows requests until max is reached", () => {
  const key = `test-key-${Date.now()}-1`;

  const one = takeRateLimit({ key, windowMs: 60_000, max: 2 });
  const two = takeRateLimit({ key, windowMs: 60_000, max: 2 });
  const three = takeRateLimit({ key, windowMs: 60_000, max: 2 });

  assert.equal(one.allowed, true);
  assert.equal(two.allowed, true);
  assert.equal(three.allowed, false);
  assert.equal(three.remaining, 0);
});

test("bucket resets after window expires", async () => {
  const key = `test-key-${Date.now()}-2`;

  const one = takeRateLimit({ key, windowMs: 20, max: 1 });
  const two = takeRateLimit({ key, windowMs: 20, max: 1 });
  assert.equal(one.allowed, true);
  assert.equal(two.allowed, false);

  await new Promise((resolve) => setTimeout(resolve, 30));

  const three = takeRateLimit({ key, windowMs: 20, max: 1 });
  assert.equal(three.allowed, true);
});
