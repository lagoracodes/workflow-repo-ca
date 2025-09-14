import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("User can successfully log in with valid credentials from environment variables", async ({
    page,
  }) => {
    // make sure we have test credentials
    expect(process.env.TEST_USER_EMAIL).toBeDefined();
    expect(process.env.TEST_USER_PASSWORD).toBeDefined();

    await page.goto("/login");

    // put in the test email and password
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    // click the login button
    await page.getByRole("button", { name: "Login" }).click();

    // should go back to homepage and show logout button
    await expect(page).toHaveURL("/");
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login");

    // try with wrong email and password
    await page.locator('input[name="email"]').fill("invalid@example.com");
    await page.locator('input[name="password"]').fill("wrongpassword");

    // click login button
    await page.getByRole("button", { name: "Login" }).click();

    // should show error message
    await expect(page.locator("#message-container")).toBeVisible();

    // check the error text
    await expect(page.locator("#message-container")).toContainText(
      "Please enter a noroff.no or stud.noroff.no email address"
    );
  });

  test("User sees an error message with invalid password length", async ({
    page,
  }) => {
    await page.goto("/login");

    // use good email but short password
    await page.locator('input[name="email"]').fill("test@stud.noroff.no");
    await page.locator('input[name="password"]').fill("short");

    // click login button
    await page.getByRole("button", { name: "Login" }).click();

    // should show error message
    await expect(page.locator("#message-container")).toBeVisible();

    // check error about password length
    await expect(page.locator("#message-container")).toContainText(
      "Password must be at least 8 characters long"
    );
  });
});
