import { gql } from "@apollo/client";
import {
  imageFragment,
  linkFragment,
  seoFragment,
  systemFragment,
} from "./fragments";

export const GET_PAGE_BY_URL = gql`
  query GetPageByUrl($url: String!) {
    all_page(where: { url: $url }) {
      items {
        title
        url
        main_content {
          ... on PageMainContentBuckets {
            ...bucketsParts
          }
          ... on PageMainContentHeroSection {
            ...heroParts
          }
          ... on PageMainContentActions {
            ...actionsParts
          }
          ... on PageMainContentSpotlight {
            ...spotlightParts
          }
          ... on PageMainContentBlog {
            ...blogParts
          }
        }
        global_field {
          ...seoParts
        }
        system {
          ...systemParts
        }
      }
    }
  }
`;
