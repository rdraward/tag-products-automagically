import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "session" model, go to https://tag-products-automagically.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "NxpYEG5850-O",
  fields: { roles: { type: "roleList", default: ["unauthenticated"], storageKey: "9v3mrHgEh47G" } },
  shopify: { fields: ["shop", "shopifySID"] },
};
