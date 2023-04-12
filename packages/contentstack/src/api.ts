import { jsonToHtml } from "@contentstack/json-rte-serializer";
import client from "./apollo-client";
import {
  GetPageByUrlDocument,
  GetPostByUrlDocument,
  GetSettingsByUidDocument,
} from "./gql/graphql";

export async function getSettings() {
  const uid = process.env.CONTENTSTACK_SETTINGS_UID;
  if (!uid) {
    throw new Error("Settings uid env var is missing.");
  }
  const { data } = await client.query({
    query: GetSettingsByUidDocument,
    variables: { uid },
  });

  const { settings } = data;

  if (!settings) {
    throw new Error("Unable to get settings");
  }

  return {
    copyright: settings.copyright,
    siteTitle: settings.site_title,
    logo: {
      // @ts-ignore
      url: settings.logoConnection?.edges?.[0]?.node.url,
      // @ts-ignore
      dimensions: settings.logoConnection?.edges?.[0]?.node.dimension,
    },
    socialLinks: settings.social_links?.social_links?.map((socialLink) => ({
      logo: {
        // @ts-ignore
        url: socialLink?.iconConnection?.edges?.[0]?.node.url,
        // @ts-ignore
        dimensions: socialLink?.iconConnection?.edges?.[0]?.node.dimension,
      },
      name: socialLink?.name,
      link: socialLink?.link,
    })),
    menu: settings.menuConnection?.edges?.[0]?.node?.menu_items?.map(
      (menuItem) => ({
        label: menuItem?.label,
        link: {
          href:
            menuItem?.internal_linkConnection?.edges?.[0]?.node?.url ||
            // @ts-ignore
            menuItem?.external_link?.href,
          title:
            menuItem?.internal_linkConnection?.edges?.[0]?.node?.title ||
            // @ts-ignore
            menuItem?.external_link?.title,
        },
      })
    ),
  };
}

export async function getPageByUrl(url: string) {
  const { data } = await client.query({
    query: GetPageByUrlDocument,
    variables: { url },
  });
  const {
    system,
    main_content: content,
    global_field: metadata,
  } = data.all_page?.items?.[0] ?? {};

  return {
    system: {
      // @ts-ignore
      contentType: system?.content_type_uid,
      // @ts-ignore
      locale: system?.locale,
      // @ts-ignore
      pageRef: system?.uid,
    },
    metadata: metadata,
    content: content?.map((block: any) => {
      return Object.fromEntries(
        Object.entries(block).map(([key, value]) => {
          if (key === "__typename") {
            return ["type", value];
          } else {
            return ["content", value];
          }
        })
      );
    }),
  };
}

export async function getPostByUrl(url: string) {
  const { data } = await client.query({
    query: GetPostByUrlDocument,
    variables: { url },
  });

  const post = data.all_blog_article?.items?.[0];

  return {
    system: {
      // @ts-ignore
      pageRef: post?.system?.uid,
      // @ts-ignore
      contentType: post?.system?.content_type_uid,
      // @ts-ignore
      locale: post?.system?.locale,
    },
    // @ts-ignore
    metadata: post?.global_field,
    // @ts-ignore
    date: post?.date,
    image: {
      // @ts-ignore
      dimensions: post?.featured_imageConnection?.edges?.[0]?.node?.dimension,
      // @ts-ignore
      url: post?.featured_imageConnection?.edges?.[0]?.node?.url,
    },
    // @ts-ignore
    title: post?.title,
    // @ts-ignore
    content: jsonToHtml(data?.all_blog_article?.items?.[0]?.content?.json),
    author: {
      // @ts-ignore
      name: post?.authorConnection?.edges?.[0]?.node?.title,
      // @ts-ignore
      url: post?.authorConnection?.edges?.[0]?.node?.url,
      image: {
        // @ts-ignore
        url: post?.authorConnection?.edges?.[0]?.node?.photoConnection
          ?.edges?.[0]?.node?.url,
        dimensions:
          // @ts-ignore
          post?.authorConnection?.edges?.[0]?.node?.photoConnection?.edges?.[0]
            ?.node?.dimension,
      },
    },
  };
}
