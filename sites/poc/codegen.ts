import { CodegenConfig } from "@graphql-codegen/cli";

const apiBaseUrl = process.env.CONTENTSTACK_API_BASE_URL ?? "";
const deliveryToken = process.env.CONTENTSTACK_DELIVERY_TOKEN ?? "";
const apiKey = process.env.CONTENTSTACK_API_KEY ?? "";
const environment = process.env.CONTENTSTACK_ENVIRONMENT ?? "";

const config: CodegenConfig = {
  schema: [
    {
      [`${apiBaseUrl}/stacks/${apiKey}?environment=${environment}`]: {
        headers: {
          "content-type": "application/json",
          access_token: deliveryToken,
        },
      },
    },
  ],
  documents: "./src/**/*.ts",
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
