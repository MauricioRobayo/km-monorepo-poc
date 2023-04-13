import type { PageMainContentSpotlightBlock } from "../__generated__/graphql";
import { Image, imageMapper } from "./image.mapper";

export interface Spotlight {
  title: string;
  description: string;
  highlights: Array<{
    title: string;
    description: string;
    image: Image;
  }>;
}
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
