import { SysAssetConnection } from "../__generated__/graphql";

export interface Image {
  url: string;
  dimensions: {
    width: number;
    height: number;
  };
}
export function imageMapper(
  sysAssetConnection?: SysAssetConnection | null
): Image {
  const node = sysAssetConnection?.edges?.[0]?.node;
  if (
    !node ||
    !node.url ||
    !node.dimension ||
    !node.dimension.height ||
    !node.dimension.width
  ) {
    throw new Error("Invariant violation: missing image properties.");
  }
  return {
    url: node.url,
    dimensions: {
      width: node.dimension.width,
      height: node.dimension.width,
    },
  };
}
