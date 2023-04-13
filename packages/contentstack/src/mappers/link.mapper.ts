import type { Link as ContentstackLink } from "../__generated__/graphql";

export interface Link {
  title: string;
  href: string;
}
export function linkMapper(data?: ContentstackLink | null): Link {
  return {
    title: data?.title ?? "",
    href: data?.href ?? "",
  };
}
