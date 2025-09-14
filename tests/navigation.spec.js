import { test, expect } from "@playwright/test";

test("Navigation test - Navigate to home page, wait for venue list, click first venue, verify venue details heading", async ({
  page,
}) => {
  // go to homepage
  await page.goto("/");

  // wait for venues to load
  await page.waitForSelector("#venue-container");
  await page.waitForFunction(() => {
    const container = document.querySelector("#venue-container");
    return container && !container.textContent?.includes("Loading");
  });

  // check that venues are there
  const venueLinks = page.locator("#venue-container a");
  await expect(venueLinks.first()).toBeVisible();

  // click on the first venue
  await venueLinks.first().click();

  // should show venue details heading
  await expect(page.locator("h1")).toContainText("Venue details");

  // make sure we're on venue page
  await expect(page).toHaveURL(/.*\/venue\//);
});
