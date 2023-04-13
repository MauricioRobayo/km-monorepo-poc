import { jsonToHtml } from "@contentstack/json-rte-serializer";
import client from "./apollo-client";
import {
  GetPageByUrlDocument,
  GetPostByUrlDocument,
  GetSettingsByUidDocument,
} from "./__generated__/graphql";
import { imageMapper } from "./mappers/image.mapper";
import { dataMappers } from "./mappers";

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
      contentType: system?.content_type_uid,
      locale: system?.locale,
      pageRef: system?.uid,
    },
    metadata: metadata,
    content: content?.map((block) => {
      const type = block?.__typename;
      if (!type) {
        return {
          type: null,
          content: null,
        };
      }
      switch (type) {
        case "PageMainContentActions":
          return {
            type,
            content: dataMappers[type]?.(block.actions) ?? block.actions,
          };
        case "PageMainContentBlog":
          return {
            type,
            content: dataMappers[type]?.(block.blog) ?? block.blog,
          };
        case "PageMainContentBuckets":
          return {
            type,
            content: dataMappers[type]?.(block.buckets) ?? block.buckets,
          };
        case "PageMainContentHeroSection":
          return {
            type,
            content:
              dataMappers[type]?.(block.hero_section) ?? block.hero_section,
          };
        case "PageMainContentSpotlight":
          return {
            type,
            content: dataMappers[type]?.(block.spotlight) ?? block.spotlight,
          };
        case "PageMainContentRichText":
          return {
            type,
            content: null,
          };
        default:
          return {
            type: null,
            content: null,
          };
      }
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
      pageRef: post?.system?.uid,
      contentType: post?.system?.content_type_uid,
      locale: post?.system?.locale,
    },
    metadata: post?.global_field,
    date: post?.date,
    image: imageMapper(post?.featured_imageConnection),
    title: post?.title,
    content: jsonToHtml(data?.all_blog_article?.items?.[0]?.content?.json),
    author: {
      name: post?.authorConnection?.edges?.[0]?.node?.title,
      url: post?.authorConnection?.edges?.[0]?.node?.url,
      image: imageMapper(
        post?.authorConnection?.edges?.[0]?.node?.photoConnection
      ),
    },
  };
}

export async function getSettings(uid: string) {
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
    logo: imageMapper(settings.logoConnection),
    socialLinks: settings.social_links?.social_links?.map((socialLink) => ({
      logo: imageMapper(socialLink?.iconConnection),
      name: socialLink?.name,
      link: socialLink?.link,
    })),
    menu: settings.menuConnection?.edges?.[0]?.node?.menu_items?.map(
      (menuItem) => ({
        label: menuItem?.label,
        link: {
          href:
            menuItem?.internal_linkConnection?.edges?.[0]?.node?.url ||
            menuItem?.external_link?.href,
          title:
            menuItem?.internal_linkConnection?.edges?.[0]?.node?.title ||
            menuItem?.external_link?.title,
        },
      })
    ),
  };
}
