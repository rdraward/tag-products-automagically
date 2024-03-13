import { Client } from "@gadget-client/tag-products-automagically";

export const api = new Client({ environment: window.gadgetConfig.environment });
