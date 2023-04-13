import type { Buckets } from "types";
import type { PageMainContentBucketsBlock } from "../__generated__/graphql";
import { imageMapper } from "./image.mapper";
import { linkMapper } from "./link.mapper";

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
