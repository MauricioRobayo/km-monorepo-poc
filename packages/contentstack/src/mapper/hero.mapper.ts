import { PageMainContentHeroSectionBlock } from "../__generated__/graphql";
import { Image, imageMapper } from "./image.mapper";
import { linkMapper } from "./link.mapper";

export interface Hero {
  backgroundColor: string;
  description: string;
  image: Image & {
    position: "Left" | "Right";
  };
  link?: {
    href: string;
    title: string;
  };
  textColor: string;
  title: string;
}
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
