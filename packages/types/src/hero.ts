import type { Image } from "./image";

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
