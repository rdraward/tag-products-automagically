// make sure to replace "@gadget-client/unit-test-sample" with your Gadget API client!
import { Client } from "@gadget-client/tag-products-automagically";

// an API client created using the GADGET_TEST_API_KEY environment variable
export const api = new Client({
  environment: process.env.GADGET_ENV,
  authenticationMode: {
    apiKey: process.env.GADGET_TEST_API_KEY,
  },
});
