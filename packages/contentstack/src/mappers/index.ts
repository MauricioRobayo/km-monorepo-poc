import type { Typename } from "../type.helpers";
import { blogMapper } from "./blog.mapper";
import { bucketsMapper } from "./buckets.mapper";
import { heroMapper } from "./hero.mapper";
import { spotlightMapper } from "./spotlight.mapper";

export const dataMappers: Record<Typename, Function | null> = {
  PageMainContentActions: null,
  PageMainContentBlog: blogMapper,
  PageMainContentBuckets: bucketsMapper,
  PageMainContentHeroSection: heroMapper,
  PageMainContentRichText: null,
  PageMainContentSpotlight: spotlightMapper,
};
