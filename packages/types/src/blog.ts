import type { Image } from "./image";

export interface Blog {
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
