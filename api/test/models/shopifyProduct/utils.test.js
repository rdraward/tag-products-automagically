import { expect, test, vi, describe } from "vitest";
import { applyTags } from "../../../models/shopifyProduct/utils";

describe("test the shopifyProduct utils", () => {
  test("should apply tags", async () => {
    const mockUpdate = vi.fn();
    const record = {
      id: 0,
      body: "This is my product",
      changed: vi.fn().mockImplementation(() => true),
      tags: [],
    };
    const logger = { info: vi.fn() };
    const api = {
      allowedTag: {
        findMany: vi.fn().mockImplementation(() => [{ keyword: "product" }]),
      },
    };
    const connections = {
      shopify: { current: { product: { update: mockUpdate } } },
    };

    await applyTags({
      record,
      logger,
      api,
      connections,
    });

    expect(mockUpdate).toHaveBeenCalledWith(0, { tags: "product" });
  });
});
