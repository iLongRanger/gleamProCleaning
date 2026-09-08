import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { validateLeadPayload } from "../lib/validation/lead";

test.beforeEach(async ({ page }) => {
  // Browser checks must never send real enquiries or pollute production analytics.
  await page.route(
    /google-analytics\.com|googletagmanager\.com|analytics\.google\.com/,
    (route) => route.abort(),
  );
  await page.route("**/api/walkthrough", (route) =>
    route.fulfill({ status: 503, json: { ok: false } }),
  );
  await page.addInitScript(() => {
    const browser = window as unknown as {
      testEvents: unknown[][];
      gtag: (...args: unknown[]) => void;
    };
    browser.testEvents = [];
    browser.gtag = (...args) => browser.testEvents.push(args);
  });
});

async function fillCommercial(page: Page) {
  await page.getByLabel("Business name", { exact: true }).fill("Test Office");
  await page
    .getByLabel("Type of space", { exact: true })
    .selectOption("office");
  await page
    .getByLabel("Email address", { exact: true })
    .fill("test@example.com");
  await page.getByLabel("Phone number", { exact: true }).fill("6045550123");
}

async function analyticsEvents(page: Page) {
  return page.evaluate(() => {
    const browser = window as unknown as {
      testEvents: unknown[][];
      dataLayer?: unknown[][];
    };
    return [...browser.testEvents, ...(browser.dataLayer || [])];
  });
}

test("homepage sends a minimal valid lead and records a conversion only after success", async ({
  page,
}) => {
  const requests: unknown[] = [];
  await page.route("**/api/walkthrough", async (route) => {
    const payload = route.request().postDataJSON();
    expect(validateLeadPayload(payload).ok).toBe(true);
    requests.push(payload);
    await route.fulfill({ status: 200, json: { ok: true } });
  });
  await page.goto("/");
  await page
    .getByRole("link", { name: "Get a free cleaning quote", exact: true })
    .click();
  await fillCommercial(page);
  await expect(page.locator(".lead-details")).not.toHaveAttribute("open");
  await page
    .getByRole("button", { name: "Request my free walkthrough" })
    .click();
  await expect(
    page.getByRole("heading", { name: "You’re on our list." }),
  ).toBeVisible();
  expect(requests).toHaveLength(1);
  expect(requests[0]).toMatchObject({
    source: "homepage-quote",
    leadType: "commercial",
    facilityType: "office",
  });
  const events = await analyticsEvents(page);
  expect(events.filter((event) => event[1] === "generate_lead")).toHaveLength(
    1,
  );
  await expect(page.locator(".lead-success")).toBeFocused();
});

test("delivery failure keeps entered details and allows a successful retry", async ({
  page,
}) => {
  await page.goto("/request-walkthrough?type=commercial");
  await fillCommercial(page);
  await page
    .getByRole("button", { name: "Request my free walkthrough" })
    .click();
  await expect(page.locator(".lead-form").getByRole("alert")).toContainText(
    "We couldn’t send your request",
  );
  await expect(page.getByLabel("Email address", { exact: true })).toHaveValue(
    "test@example.com",
  );
  await expect(
    page.getByRole("button", { name: "Request my free walkthrough" }),
  ).toBeEnabled();
  const events = await analyticsEvents(page);
  expect(events.filter((event) => event[1] === "generate_lead")).toHaveLength(
    0,
  );
  await page.route("**/api/walkthrough", (route) =>
    route.fulfill({ status: 200, json: { ok: true } }),
  );
  await page
    .getByRole("button", { name: "Request my free walkthrough" })
    .click();
  await expect(page.locator(".lead-success")).toBeVisible();
});

test("an analytics failure cannot turn a delivered enquiry into an error", async ({
  page,
}) => {
  await page.route("**/api/walkthrough", (route) =>
    route.fulfill({ status: 200, json: { ok: true } }),
  );
  await page.goto("/request-walkthrough");
  await fillCommercial(page);
  await page.evaluate(() => {
    window.gtag = () => {
      throw new Error("Analytics unavailable");
    };
  });
  await page
    .getByRole("button", { name: "Request my free walkthrough" })
    .click();
  await expect(page.locator(".lead-success")).toBeVisible();
  await expect(page.locator(".lead-error")).toHaveCount(0);
});

test("server validation opens optional details and focuses the rejected field", async ({
  page,
}) => {
  await page.route("**/api/walkthrough", (route) =>
    route.fulfill({
      status: 400,
      json: {
        ok: false,
        details: [
          {
            field: "address",
            message: "Please confirm your service location.",
          },
        ],
      },
    }),
  );
  await page.goto("/request-walkthrough");
  await fillCommercial(page);
  await page
    .getByRole("button", { name: "Request my free walkthrough" })
    .click();
  await expect(page.locator(".lead-details")).toHaveAttribute("open");
  await expect(
    page.getByLabel("City or service address", { exact: true }),
  ).toBeFocused();
  await expect(
    page.getByLabel("City or service address", { exact: true }),
  ).toHaveAttribute("aria-invalid", "true");
});

test("residential enquiries and facility links preserve the requested service", async ({
  page,
}) => {
  let payload: Record<string, unknown> | undefined;
  await page.route("**/api/walkthrough", async (route) => {
    payload = route.request().postDataJSON();
    expect(validateLeadPayload(payload).ok).toBe(true);
    await route.fulfill({ status: 200, json: { ok: true } });
  });
  await page.goto("/request-walkthrough?type=commercial&facility=clinic");
  await expect(page.getByLabel("Type of space", { exact: true })).toHaveValue(
    "clinic",
  );
  await page.getByRole("radio", { name: "For my home" }).check();
  await expect(page.getByLabel("Business name", { exact: true })).toHaveCount(
    0,
  );
  await page.getByLabel("Your name", { exact: true }).fill("Test Customer");
  await page
    .getByLabel("Email address", { exact: true })
    .fill("home@example.com");
  await page.getByLabel("Phone number", { exact: true }).fill("7785550123");
  await page.getByRole("button", { name: "Request my home estimate" }).click();
  await expect(page.locator(".lead-success")).toContainText(
    "home cleaning estimate",
  );
  expect(payload).toMatchObject({
    leadType: "residential",
    source: "walkthrough-page",
    fullName: "Test Customer",
  });
  expect(payload).not.toHaveProperty("lane-choice");
  await page.goto("/request-walkthrough?type=residential");
  await expect(page.getByRole("radio", { name: "For my home" })).toBeChecked();
});

test("invalid contact details stay local and errors in optional details remain reachable", async ({
  page,
}) => {
  let requests = 0;
  page.on("request", (request) => {
    if (request.url().endsWith("/api/walkthrough")) requests++;
  });
  await page.goto("/request-walkthrough");
  await fillCommercial(page);
  await page.getByLabel("Phone number", { exact: true }).fill("----------");
  await page
    .getByRole("button", { name: "Request my free walkthrough" })
    .click();
  await expect(
    page.getByLabel("Phone number", { exact: true }),
  ).toHaveAttribute("aria-invalid", "true");
  await expect(page.getByLabel("Phone number", { exact: true })).toBeFocused();
  expect(requests).toBe(0);
  await page.getByLabel("Phone number", { exact: true }).fill("6045550123");
  await page.locator(".lead-details summary").click();
  await page.getByLabel("Approx. size (sq. ft.)").fill("20");
  await page.locator(".lead-details summary").click();
  await page
    .getByRole("button", { name: "Request my free walkthrough" })
    .click();
  await expect(page.locator(".lead-details")).toHaveAttribute("open");
  expect(requests).toBe(0);
});

test("desktop service navigation works by keyboard and closed links cannot receive focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const summary = page.locator(".services-menu summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".services-dropdown")).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(page.locator(".services-dropdown a").first()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.locator(".services-dropdown")).not.toBeVisible();
  await expect(summary).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Our story", exact: true }).first(),
  ).toBeFocused();
});

test("mobile navigation traps focus, scrolls, and restores focus when dismissed", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 700 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open navigation menu" });
  await trigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.locator(".mobile-services summary").click();
  await expect(
    page
      .getByRole("dialog")
      .getByRole("link", { name: "Clinics & medical offices" }),
  ).toBeVisible();
  await page.getByRole("dialog").locator("a").last().focus();
  await page.keyboard.press("Tab");
  expect(
    await page.evaluate(() =>
      Boolean(document.activeElement?.closest("dialog")),
    ),
  ).toBe(true);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page
    .getByRole("dialog")
    .getByRole("link", { name: "Get a free quote" })
    .click();
  await expect(page).toHaveURL(/request-walkthrough/);
  await expect(page.getByRole("dialog")).not.toBeVisible();
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
    "hidden",
  );
});

test("key pages fit narrow mobile, tablet, and desktop screens", async ({
  page,
}) => {
  for (const path of [
    "/",
    "/request-walkthrough?type=residential",
    "/commercial-cleaning/restaurants",
    "/service-areas/burnaby",
  ]) {
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(path);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${path} at ${width}px`,
      ).toBe(true);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("main")).toHaveCount(1);
    }
  }
});

test("homepage content, FAQs, and service links are available without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
  });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
  await expect(
    page.locator('a.service-card[href="/commercial-cleaning/restaurants"]'),
  ).toBeVisible();
  const faq = page.locator(".faq-list details").first();
  await faq.locator("summary").click();
  await expect(faq.locator("p")).toBeVisible();
  await context.close();
});

test("homepage and quote form pass automated WCAG checks", async ({ page }) => {
  for (const path of ["/", "/request-walkthrough?type=residential"]) {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map(({ id, nodes }) => ({
        id,
        elements: nodes.map((node) => node.target),
      })),
      path,
    ).toEqual([]);
  }
});

test("optional chat opens on request and its initial view is accessible", async ({
  page,
}) => {
  await page.goto("/");
  const launcher = page.getByRole("button", {
    name: "Chat with Lisa",
    exact: true,
  });
  test.skip(
    (await launcher.count()) === 0,
    "Lisa is disabled in this environment",
  );
  await expect(
    page.getByRole("dialog", { name: /Chat with Lisa/ }),
  ).not.toBeVisible();
  await launcher.click();
  const chat = page.getByRole("dialog", { name: /Chat with Lisa/ });
  await expect(chat).toBeVisible();
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(
    results.violations.map(({ id, nodes }) => ({
      id,
      elements: nodes.map((node) => node.target),
    })),
  ).toEqual([]);
  await page.getByRole("button", { name: "Close chat", exact: true }).click();
  await expect(chat).not.toBeVisible();
});

test("public pages have their own canonical URLs and valid structured data", async ({
  page,
}) => {
  for (const path of [
    "/",
    "/service-areas",
    "/service-areas/burnaby",
    "/breweries",
    "/clinics",
    "/commercial-cleaning/restaurants",
    "/request-walkthrough",
  ]) {
    await page.goto(path);
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute("href");
    expect(canonical?.replace(/\/$/, "")).toBe(
      `https://gleampro.ca${path}`.replace(/\/$/, ""),
    );
    const title = await page.title();
    expect(title.match(/Gleam Pro/g)?.length, path).toBe(1);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /\S.{60,}/,
    );
    for (const json of await page
      .locator('script[type="application/ld+json"]')
      .allTextContents())
      expect(() => JSON.parse(json)).not.toThrow();
    if (path === "/service-areas/burnaby") {
      const schema = JSON.parse(
        (await page
          .locator('script[type="application/ld+json"]')
          .first()
          .textContent()) || "{}",
      );
      expect(schema["@type"]).toBe("Service");
      expect(schema.provider.address.addressLocality).toBe("New Westminster");
    }
  }
});
