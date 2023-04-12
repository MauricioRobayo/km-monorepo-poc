import { gql } from "@apollo/client";

export const GET_POST_BY_URL = gql`
  query GetPostByUrl($url: String!) {
    all_blog_article(where: { url: $url }) {
      items {
        ...blogArticleParts
      }
    }
  }
`;
