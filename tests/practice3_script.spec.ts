import { test, expect } from "@playwright/test";

test("Login test example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  // locators
  const usernameInput = page.locator("#username");
  const passwordInput = page.locator("#password");
  const loginButton = page.getByRole("button", { name: "Login" });

  // assertions
  await expect(usernameInput).toBeVisible();
  await expect(loginButton).toBeVisible();

  // actions
  await usernameInput.fill("tomsmith");
  await passwordInput.fill("SuperSecretPassword!");
  await page.screenshot({ path: "custom_screenshot.png" });

  await loginButton.click();

  // result check
  await expect(page.getByText("You logged into a secure area!")).toBeVisible();
});
