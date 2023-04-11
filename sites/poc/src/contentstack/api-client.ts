import { PostProps } from "../pages/blog/[post]";
import {
  BlogQueryResult,
  PageQueryResult,
  SettingsQueryResult,
  pageQuery,
  postQuery,
  settingsQuery,
} from "./queries";
import { jsonToHtml } from "@contentstack/json-rte-serializer";
import { PocSettings } from "../pages/_app";

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

async function contentstackClient(
  query: string,
  variables?: Record<string, string | number>
) {
  const response = await fetch(
    `${config.apiBaseUrl}/stacks/${config.apiKey}?environment=${config.environment}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        access_token: config.deliveryToken,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.log(JSON.stringify({ data, query }, null, 2));
    throw new Error(`GraphQL API Error: ${response.status}`);
  }

  return data;
}

export async function getBlogPost(url: string): Promise<PostProps["page"]> {
  const response: BlogQueryResult = await contentstackClient(postQuery, {
    url,
  });

  const post = response.data.all_blog_article.items[0];

  return {
    system: {
      pageRef: post.system.uid,
      contentType: post.system.content_type_uid,
      locale: post.system.locale,
    },
    metadata: post.global_field,
    date: post.date,
    image: {
      dimensions: post.featured_imageConnection.edges[0].node.dimension,
      url: post.featured_imageConnection.edges[0].node.url,
    },
    title: post.title,
    content: jsonToHtml(response.data.all_blog_article.items[0].content.json),
    author: {
      name: post.authorConnection.edges[0].node.title,
      url: post.authorConnection.edges[0].node.url,
      image: {
        url: post.authorConnection.edges[0].node.photoConnection.edges[0].node
          .url,
        dimensions:
          post.authorConnection.edges[0].node.photoConnection.edges[0].node
            .dimension,
      },
    },
  };
}
