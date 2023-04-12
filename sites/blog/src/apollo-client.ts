import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const config = {
  apiBaseUrl: process.env.CONTENTSTACK_API_BASE_URL ?? "",
  deliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN ?? "",
  apiKey: process.env.CONTENTSTACK_API_KEY ?? "",
  environment: process.env.CONTENTSTACK_ENVIRONMENT ?? "",
};

const missingEnvVars = Object.entries(config).filter(([, value]) => !value);

if (typeof window === "undefined" && missingEnvVars.length > 0) {
  throw new Error(
    `Missing env vars: ${missingEnvVars.map(([key]) => key).join()}`
  );
}

const link = createHttpLink({
  uri: `${config.apiBaseUrl}/stacks/${config.apiKey}?environment=${config.environment}`,
  headers: {
    "content-type": "application/json",
    access_token: config.deliveryToken,
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  ssrMode: true,
});

export default client;
