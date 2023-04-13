import { PageMainContentHeroSectionBlock } from "../__generated__/graphql";
import { imageMapper } from "./image.mapper";
import { linkMapper } from "./link.mapper";
import type { Hero } from "types";

export function heroMapper(data: PageMainContentHeroSectionBlock): Hero {
  return {
    title: data?.title ?? "",
    description: data?.description ?? "",
    backgroundColor: data?.background_color ?? "",
    textColor: data?.text_color ?? "",
    link: linkMapper(data?.link),
    image: {
      ...imageMapper(data?.hero_image?.imageConnection),
      position: data?.hero_image?.position === "Left" ? "Left" : "Right",
    },
  };
}
