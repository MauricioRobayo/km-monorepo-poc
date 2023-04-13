import type { Blog } from "types";
import { PageMainContentBlogBlock } from "../__generated__/graphql";
import { imageMapper } from "./image.mapper";
import { linkMapper } from "./link.mapper";

export function blogMapper(data: PageMainContentBlogBlock): Blog {
  return {
    title: data?.title ?? "",
    link: linkMapper(data?.link),
    posts:
      data?.referenceConnection?.edges?.map((post) => ({
        summary: post?.node?.summary ?? "",
        title: post?.node?.title ?? "",
        url: post?.node?.url ?? "",
        image: imageMapper(post?.node?.featured_imageConnection),
      })) ?? [],
  };
}
