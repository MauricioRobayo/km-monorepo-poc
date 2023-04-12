import { gql } from "@apollo/client";

export const linkFragment = gql`
  fragment linkParts on Link {
    title
    href
  }
`;

export const imageFragment = gql`
  fragment imageParts on SysAssetConnection {
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
`;

export const seoFragment = gql`
  fragment seoParts on Seo {
    description
    title
    keywords
  }
`;

export const systemFragment = gql`
  fragment systemParts on EntrySystemField {
    content_type_uid
    locale
    uid
  }
`;

export const blogArticleFragment = gql`
  fragment blogArticleParts on BlogArticle {
    date
    title
    url
    summary
    featured_imageConnection {
      ...imageParts
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
              ...imageParts
            }
          }
        }
      }
    }
    global_field {
      ...seoParts
    }
    system {
      ...systemParts
    }
  }
`;

export const bucketsFragment = gql`
  fragment bucketsParts on PageMainContentBuckets {
    __typename
    buckets {
      actions {
        description
        iconConnection {
          ...imageParts
        }
        link {
          ...linkParts
        }
        title
      }
      title
      description
    }
  }
`;

export const heroFragment = gql`
  fragment heroParts on PageMainContentHeroSection {
    __typename
    hero_section {
      background_color
      description
      hero_image {
        imageConnection {
          ...imageParts
        }
        position
      }
      link {
        ...linkParts
      }
      text_color
      title
    }
  }
`;

export const actionsFragment = gql`
  fragment actionsParts on PageMainContentActions {
    __typename
    actions {
      actions {
        description
        title
        link {
          ...linkParts
        }
      }
    }
  }
`;

export const spotlightFragment = gql`
  fragment spotlightParts on PageMainContentSpotlight {
    __typename
    spotlight {
      description
      title
      caption {
        description
        title
        imageConnection {
          ...imageParts
        }
      }
    }
  }
`;

export const blogFragment = gql`
  fragment blogParts on PageMainContentBlog {
    __typename
    blog {
      title
      link {
        ...linkParts
      }
      referenceConnection(limit: 2) {
        edges {
          node {
            ... on BlogArticle {
              ...blogArticleParts
            }
          }
        }
      }
    }
  }
`;
