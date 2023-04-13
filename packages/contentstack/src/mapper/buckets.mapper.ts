import type { PageMainContentBucketsBlock } from "../__generated__/graphql";
import type { Image } from "./image.mapper";
import type { Link } from "./link.mapper";
import { imageMapper } from "./image.mapper";
import { linkMapper } from "./link.mapper";

export interface Buckets {
  title: string;
  description: string;
  buckets: Array<{
    title: string;
    description: string;
    icon: Image;
    link: Link;
  }>;
}
export function bucketsMapper(data: PageMainContentBucketsBlock): Buckets {
  return {
    title: data?.title ?? "",
    description: data?.description ?? "",
    buckets:
      data?.actions?.map((action) => {
        return {
          title: action?.title ?? "",
          description: action?.description ?? "",
          link: linkMapper(action?.link),
          icon: imageMapper(action?.iconConnection),
        };
      }) ?? [],
  };
}
