import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("browser native navigation work", async ({ page }) => {
    await expect(page).toHaveTitle("Home");

    await page.goto("/profile");

    await expect(page).toHaveTitle("Profile");
  });

  test("app router navigation work", async ({ page }) => {
    await expect(page).toHaveTitle("Home");

    await page.getByRole("link", { name: "Profile" }).click();

    await expect(page).toHaveTitle("Profile");

    await page.getByRole("link", { name: "Home" }).click();

    await expect(page).toHaveTitle("Home");
  });
});
