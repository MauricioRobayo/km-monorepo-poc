import type { Image } from "./image";
import type { Link } from "./link";

export interface Settings {
  copyright: string;
  siteTitle: string;
  logo: Image;
  menu: Array<{
    label: string;
    link: Link;
  }>;
  socialLinks: Array<{
    name: string;
    logo: Image;
    link: Link;
  }>;
}
