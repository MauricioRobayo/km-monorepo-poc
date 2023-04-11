import { gql } from "@apollo/client";

export const GET_POST_BY_URL = gql`
  query GetPostByUrl($url: String!) {
    all_blog_article(where: { url: $url }) {
      items {
        date
        title
        url
        summary
        featured_imageConnection {
          edges {
            node {
              dimension {
                height
                width
              }
              url
            }
          }
        }
        content {
          json
        }
        authorConnection {
          edges {
            node {
              ... on Author {
                title
                url
                photoConnection {
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
              }
            }
          }
        }
        global_field {
          description
          title
          keywords
        }
        system {
          content_type_uid
          locale
          uid
        }
      }
    }
  }
`;
