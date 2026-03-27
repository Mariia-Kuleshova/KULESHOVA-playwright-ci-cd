import { type Locator, type Page } from "@playwright/test";

export class MyFormPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly phoneInput: Locator;
  readonly emailInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly postalCodeInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = page.locator('input[name="firstName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.phoneInput = page.locator('input[name="phone"]');
    this.emailInput = page.locator('input[name="userName"]');
    this.addressInput = page.locator('input[name="address1"]');
    this.cityInput = page.locator('input[name="city"]');
    this.stateInput = page.locator('input[name="state"]');
    this.postalCodeInput = page.locator('input[name="postalCode"]');

    this.submitButton = page.locator('input[name="submit"]');
  }

  async goto() {
    await this.page.goto("https://demo.guru99.com/test/newtours/register.php");
  }

  async fillForm() {
    await this.firstNameInput.fill("Mary");
    await this.lastNameInput.fill("Kuleshova");
    await this.phoneInput.fill("123456789");
    await this.emailInput.fill("mary@test.com");
    await this.addressInput.fill("Test street");
    await this.cityInput.fill("Kyiv");
    await this.stateInput.fill("Kyiv");
    await this.postalCodeInput.fill("01001");
  }

  async submit() {
    await this.submitButton.click();
  }
}
