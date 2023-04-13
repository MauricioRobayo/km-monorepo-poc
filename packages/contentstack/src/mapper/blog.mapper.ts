import { PageMainContentBlogBlock } from "../__generated__/graphql";
import { Image, imageMapper } from "./image.mapper";
import { linkMapper } from "./link.mapper";

export interface FeaturedPosts {
  title: string;
  link: {
    href: string;
    title: string;
  };
  posts: Array<{
    title: string;
    url: string;
    summary: string;
    image: Image;
  }>;
}
export function mapBlogToFeaturedPosts(data: PageMainContentBlogBlock): FeaturedPosts {
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
