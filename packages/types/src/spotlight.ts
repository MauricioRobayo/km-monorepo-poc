import type { Image } from "./image";

export interface Spotlight {
  title: string;
  description: string;
  highlights: Array<{
    title: string;
    description: string;
    image: Image;
  }>;
}
