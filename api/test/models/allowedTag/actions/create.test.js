import { describe, expect, test, beforeAll } from "vitest";
import { api } from "../../../api";

beforeAll(async () => {
  // cleanup: delete all post records with name: "Unit Test Post" from old test runs
  // api.internal.post.deleteMany() with no args will wipe the development db
  // make sure your API client is set to the Development environment!!!
  await api.internal.allowedTag.deleteMany({
    filter: { keyword: { equals: "auto-test" } },
  });
});

// this is an example of testing a Gadget model action
// it makes an API call to the action using a test API client and adds records to the database
// you can use this pattern to test model actions in Gadget
describe("test the allowedTag.create action", () => {
  test("should create a new post record", async () => {
    const result = await api.allowedTag.create({
      keyword: "auto-test",
    });
    expect(result.id).toBeDefined();
    expect(result.keyword).toBe("auto-test");
  });
});
