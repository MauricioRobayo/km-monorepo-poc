import { jsonToHtml } from "@contentstack/json-rte-serializer";
import client from "./apollo-client";
import {
  GetPageByUrlDocument,
  GetPostByUrlDocument,
  GetSettingsByUidDocument,
  SysAssetConnection,
} from "./__generated__/graphql";

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
    logo: mapSysAssetConnectionToImage(settings.logoConnection),
    socialLinks: settings.social_links?.social_links?.map((socialLink) => ({
      logo: mapSysAssetConnectionToImage(socialLink?.iconConnection),
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
      pageRef: post?.system?.uid,
      contentType: post?.system?.content_type_uid,
      locale: post?.system?.locale,
    },
    metadata: post?.global_field,
    date: post?.date,
    image: mapSysAssetConnectionToImage(post?.featured_imageConnection),
    title: post?.title,
    content: jsonToHtml(data?.all_blog_article?.items?.[0]?.content?.json),
    author: {
      name: post?.authorConnection?.edges?.[0]?.node?.title,
      url: post?.authorConnection?.edges?.[0]?.node?.url,
      image: mapSysAssetConnectionToImage(
        post?.authorConnection?.edges?.[0]?.node?.photoConnection
      ),
    },
  };
}

function mapSysAssetConnectionToImage(
  sysAssetConnection?: SysAssetConnection | null
) {
  const node = sysAssetConnection?.edges?.[0]?.node;
  return {
    url: node?.url,
    dimensions: node?.dimension,
  };
}
