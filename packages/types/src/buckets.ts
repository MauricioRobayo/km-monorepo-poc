import type { Image } from "./image";
import type { Link } from "./link";

export interface Buckets {
  title: string;
  description: string;
  buckets: Array<{
    title: string;
    description: string;
    icon: Image;
    link: Link;
  }>;
}
