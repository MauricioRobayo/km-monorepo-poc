import { gql } from "@apollo/client";

export const GET_SETTINGS_BY_UID = gql`
  query GetSettingsByUid($uid: String!) {
    settings(uid: $uid) {
      copyright
      site_title
      logoConnection {
        edges {
          node {
            url
            dimension {
              height
              width
            }
          }
        }
      }
      menuConnection {
        edges {
          node {
            ... on Menu {
              title
              menu_items {
                label
                external_link {
                  href
                  title
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
            edges {
              node {
                url
                dimension {
                  height
                  width
                }
              }
            }
          }
          link {
            href
            title
          }
          name
        }
      }
    }
  }
`;
