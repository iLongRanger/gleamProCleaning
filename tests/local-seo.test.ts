import { test } from "node:test";
import assert from "node:assert/strict";
import { serviceAreas } from "../lib/service-areas.ts";
import {
  credentials,
  publishedCredentials,
  publishedReviews,
  reviews,
} from "../lib/business-profile.ts";

test("every city page has a search-length meta description", () => {
  for (const area of serviceAreas) {
    const length = area.metaDescription.length;
    assert.ok(length >= 120 && length <= 160, `${area.slug}: ${length} chars`);
  }
});

test("city meta descriptions and intros are unique", () => {
  const metas = new Set(serviceAreas.map((area) => area.metaDescription));
  const intros = new Set(serviceAreas.map((area) => area.intro.join(" ")));
  assert.equal(metas.size, serviceAreas.length);
  assert.equal(intros.size, serviceAreas.length);
});

test("every city page has unique local content", () => {
  for (const area of serviceAreas) {
    assert.ok(area.intro.length >= 2, area.slug);
    assert.ok(area.focus.length >= 3, area.slug);
    assert.ok(area.considerations.length >= 3, area.slug);
    assert.ok(area.faqs.length >= 3, area.slug);
  }
});

test("only owner-confirmed credentials are published", () => {
  assert.ok(publishedCredentials.every((item) => item.status === "confirmed"));
  assert.ok(
    credentials.some((item) => item.status === "needs-owner-confirmation"),
  );
});

test("only reviews with permission are published", () => {
  assert.equal(
    publishedReviews.length,
    reviews.filter((item) => item.permissionToPublish).length,
  );
});
