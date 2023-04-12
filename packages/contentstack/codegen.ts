import { CodegenConfig } from "@graphql-codegen/cli";

// TODO: Reduce bundle size
// https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size-babel-plugin

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
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      overwrite: true,
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
