import { PageMainContent } from "./__generated__/graphql";

type GetTypename<T> = T extends { __typename?: string }
  ? T["__typename"]
  : never;

export type Typename = NonNullable<GetTypename<PageMainContent>>;
