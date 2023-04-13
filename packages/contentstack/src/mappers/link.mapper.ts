import type { Link as ContentstackLink } from "../__generated__/graphql";
import type { Link } from "types";

export function linkMapper(data?: ContentstackLink | null): Link {
  return {
    title: data?.title ?? "",
    href: data?.href ?? "",
  };
}
