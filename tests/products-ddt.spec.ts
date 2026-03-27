import { test, expect } from "@playwright/test";

// імпорт JSON
import productsDataset from "../data/products.json";

// імпорт типу
import type { ProductType } from "../types/ddt-products-dataset";

// типізація
const testData: ProductType[] = productsDataset as ProductType[];

test.describe("Data Driven Testing for Products API", () => {
  for (const product of testData) {
    test(`Check product: ${product.title}`, async ({ request }) => {
      // запит до API
      const response = await request.get(
        `https://dummyjson.com/products/${product.id}`,
      );

      // перевірка статусу
      expect(response).toBeOK();

      const data = await response.json();

      // перевірка назви
      expect(data.title).toBe(product.title);

      //перевірка ціни
      expect(data.price).toBe(product.expectedPrice);
    });
  }
});
