import type { Spotlight } from "types";
import type { PageMainContentSpotlightBlock } from "../__generated__/graphql";
import { imageMapper } from "./image.mapper";

export function spotlightMapper(
  data: PageMainContentSpotlightBlock
): Spotlight {
  return {
    description: data?.description ?? "",
    title: data?.title ?? "",
    highlights:
      data?.caption?.map((highlight: any) => ({
        description: highlight.description,
        title: highlight.title,
        image: imageMapper(highlight.imageConnection),
      })) ?? [],
  };
}
