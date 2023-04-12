import { gql } from "@apollo/client";

export const GET_SETTINGS_BY_UID = gql`
  query GetSettingsByUid($uid: String!) {
    settings(uid: $uid) {
      copyright
      site_title
      logoConnection {
        ...imageParts
      }
      menuConnection {
        edges {
          node {
            ... on Menu {
              title
              menu_items {
                label
                external_link {
                  ...linkParts
                }
                internal_linkConnection {
                  edges {
                    node {
                      ... on Page {
                        title
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      social_links {
        social_links {
          iconConnection {
            ...imageParts
          }
          link {
            ...linkParts
          }
          name
        }
      }
    }
  }
`;
