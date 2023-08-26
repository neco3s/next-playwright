import { test, expect } from "@playwright/test";

test("have greeting", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("こんばんわ")).toBeVisible();
});