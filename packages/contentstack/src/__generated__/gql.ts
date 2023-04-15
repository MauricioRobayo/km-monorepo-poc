/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment actionsFields on PageMainContentActions {\n  __typename\n  actions {\n    actions {\n      description\n      title\n      link {\n        ...linkFields\n      }\n    }\n  }\n}": types.ActionsFieldsFragmentDoc,
    "fragment blogArticleFields on BlogArticle {\n  date\n  title\n  url\n  summary\n  featured_imageConnection {\n    ...imageFields\n  }\n  content {\n    json\n  }\n  authorConnection {\n    edges {\n      node {\n        ... on Author {\n          title\n          url\n          photoConnection {\n            ...imageFields\n          }\n        }\n      }\n    }\n  }\n  global_field {\n    ...seoFields\n  }\n  system {\n    ...systemFields\n  }\n}": types.BlogArticleFieldsFragmentDoc,
    "fragment blogFields on PageMainContentBlog {\n  __typename\n  blog {\n    title\n    link {\n      ...linkFields\n    }\n    referenceConnection(limit: 2) {\n      edges {\n        node {\n          ... on BlogArticle {\n            ...blogArticleFields\n          }\n        }\n      }\n    }\n  }\n}": types.BlogFieldsFragmentDoc,
    "fragment bucketsFields on PageMainContentBuckets {\n  __typename\n  buckets {\n    actions {\n      description\n      iconConnection {\n        ...imageFields\n      }\n      link {\n        ...linkFields\n      }\n      title\n    }\n    title\n    description\n  }\n}": types.BucketsFieldsFragmentDoc,
    "query GetPageByUrl($url: String!) {\n  all_page(where: {url: $url}) {\n    items {\n      title\n      url\n      main_content {\n        ... on PageMainContentBuckets {\n          ...bucketsFields\n        }\n        ... on PageMainContentHeroSection {\n          ...heroFields\n        }\n        ... on PageMainContentActions {\n          ...actionsFields\n        }\n        ... on PageMainContentSpotlight {\n          ...spotlightFields\n        }\n        ... on PageMainContentBlog {\n          ...blogFields\n        }\n      }\n      global_field {\n        ...seoFields\n      }\n      system {\n        ...systemFields\n      }\n    }\n  }\n}": types.GetPageByUrlDocument,
    "query GetPostByUrl($url: String!) {\n  all_blog_article(where: {url: $url}) {\n    items {\n      ...blogArticleFields\n    }\n  }\n}": types.GetPostByUrlDocument,
    "query GetSettingsByUid($uid: String!) {\n  settings(uid: $uid) {\n    copyright\n    site_title\n    logoConnection {\n      ...imageFields\n    }\n    menuConnection {\n      edges {\n        node {\n          ... on Menu {\n            title\n            menu_items {\n              label\n              external_link {\n                ...linkFields\n              }\n              internal_linkConnection {\n                edges {\n                  node {\n                    ... on Page {\n                      title\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    social_links {\n      social_links {\n        iconConnection {\n          ...imageFields\n        }\n        link {\n          ...linkFields\n        }\n        name\n      }\n    }\n  }\n}": types.GetSettingsByUidDocument,
    "fragment heroFields on PageMainContentHeroSection {\n  __typename\n  hero_section {\n    background_color\n    description\n    hero_image {\n      imageConnection {\n        ...imageFields\n      }\n      position\n    }\n    link {\n      ...linkFields\n    }\n    text_color\n    title\n  }\n}": types.HeroFieldsFragmentDoc,
    "fragment imageFields on SysAssetConnection {\n  edges {\n    node {\n      url\n      dimension {\n        height\n        width\n      }\n    }\n  }\n}": types.ImageFieldsFragmentDoc,
    "fragment linkFields on Link {\n  title\n  href\n}": types.LinkFieldsFragmentDoc,
    "fragment seoFields on Seo {\n  description\n  title\n  keywords\n}": types.SeoFieldsFragmentDoc,
    "fragment spotlightFields on PageMainContentSpotlight {\n  __typename\n  spotlight {\n    description\n    title\n    caption {\n      description\n      title\n      imageConnection {\n        ...imageFields\n      }\n    }\n  }\n}": types.SpotlightFieldsFragmentDoc,
    "fragment systemFields on EntrySystemField {\n  content_type_uid\n  locale\n  uid\n}": types.SystemFieldsFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment actionsFields on PageMainContentActions {\n  __typename\n  actions {\n    actions {\n      description\n      title\n      link {\n        ...linkFields\n      }\n    }\n  }\n}"): (typeof documents)["fragment actionsFields on PageMainContentActions {\n  __typename\n  actions {\n    actions {\n      description\n      title\n      link {\n        ...linkFields\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment blogArticleFields on BlogArticle {\n  date\n  title\n  url\n  summary\n  featured_imageConnection {\n    ...imageFields\n  }\n  content {\n    json\n  }\n  authorConnection {\n    edges {\n      node {\n        ... on Author {\n          title\n          url\n          photoConnection {\n            ...imageFields\n          }\n        }\n      }\n    }\n  }\n  global_field {\n    ...seoFields\n  }\n  system {\n    ...systemFields\n  }\n}"): (typeof documents)["fragment blogArticleFields on BlogArticle {\n  date\n  title\n  url\n  summary\n  featured_imageConnection {\n    ...imageFields\n  }\n  content {\n    json\n  }\n  authorConnection {\n    edges {\n      node {\n        ... on Author {\n          title\n          url\n          photoConnection {\n            ...imageFields\n          }\n        }\n      }\n    }\n  }\n  global_field {\n    ...seoFields\n  }\n  system {\n    ...systemFields\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment blogFields on PageMainContentBlog {\n  __typename\n  blog {\n    title\n    link {\n      ...linkFields\n    }\n    referenceConnection(limit: 2) {\n      edges {\n        node {\n          ... on BlogArticle {\n            ...blogArticleFields\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["fragment blogFields on PageMainContentBlog {\n  __typename\n  blog {\n    title\n    link {\n      ...linkFields\n    }\n    referenceConnection(limit: 2) {\n      edges {\n        node {\n          ... on BlogArticle {\n            ...blogArticleFields\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment bucketsFields on PageMainContentBuckets {\n  __typename\n  buckets {\n    actions {\n      description\n      iconConnection {\n        ...imageFields\n      }\n      link {\n        ...linkFields\n      }\n      title\n    }\n    title\n    description\n  }\n}"): (typeof documents)["fragment bucketsFields on PageMainContentBuckets {\n  __typename\n  buckets {\n    actions {\n      description\n      iconConnection {\n        ...imageFields\n      }\n      link {\n        ...linkFields\n      }\n      title\n    }\n    title\n    description\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPageByUrl($url: String!) {\n  all_page(where: {url: $url}) {\n    items {\n      title\n      url\n      main_content {\n        ... on PageMainContentBuckets {\n          ...bucketsFields\n        }\n        ... on PageMainContentHeroSection {\n          ...heroFields\n        }\n        ... on PageMainContentActions {\n          ...actionsFields\n        }\n        ... on PageMainContentSpotlight {\n          ...spotlightFields\n        }\n        ... on PageMainContentBlog {\n          ...blogFields\n        }\n      }\n      global_field {\n        ...seoFields\n      }\n      system {\n        ...systemFields\n      }\n    }\n  }\n}"): (typeof documents)["query GetPageByUrl($url: String!) {\n  all_page(where: {url: $url}) {\n    items {\n      title\n      url\n      main_content {\n        ... on PageMainContentBuckets {\n          ...bucketsFields\n        }\n        ... on PageMainContentHeroSection {\n          ...heroFields\n        }\n        ... on PageMainContentActions {\n          ...actionsFields\n        }\n        ... on PageMainContentSpotlight {\n          ...spotlightFields\n        }\n        ... on PageMainContentBlog {\n          ...blogFields\n        }\n      }\n      global_field {\n        ...seoFields\n      }\n      system {\n        ...systemFields\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPostByUrl($url: String!) {\n  all_blog_article(where: {url: $url}) {\n    items {\n      ...blogArticleFields\n    }\n  }\n}"): (typeof documents)["query GetPostByUrl($url: String!) {\n  all_blog_article(where: {url: $url}) {\n    items {\n      ...blogArticleFields\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetSettingsByUid($uid: String!) {\n  settings(uid: $uid) {\n    copyright\n    site_title\n    logoConnection {\n      ...imageFields\n    }\n    menuConnection {\n      edges {\n        node {\n          ... on Menu {\n            title\n            menu_items {\n              label\n              external_link {\n                ...linkFields\n              }\n              internal_linkConnection {\n                edges {\n                  node {\n                    ... on Page {\n                      title\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    social_links {\n      social_links {\n        iconConnection {\n          ...imageFields\n        }\n        link {\n          ...linkFields\n        }\n        name\n      }\n    }\n  }\n}"): (typeof documents)["query GetSettingsByUid($uid: String!) {\n  settings(uid: $uid) {\n    copyright\n    site_title\n    logoConnection {\n      ...imageFields\n    }\n    menuConnection {\n      edges {\n        node {\n          ... on Menu {\n            title\n            menu_items {\n              label\n              external_link {\n                ...linkFields\n              }\n              internal_linkConnection {\n                edges {\n                  node {\n                    ... on Page {\n                      title\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    social_links {\n      social_links {\n        iconConnection {\n          ...imageFields\n        }\n        link {\n          ...linkFields\n        }\n        name\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment heroFields on PageMainContentHeroSection {\n  __typename\n  hero_section {\n    background_color\n    description\n    hero_image {\n      imageConnection {\n        ...imageFields\n      }\n      position\n    }\n    link {\n      ...linkFields\n    }\n    text_color\n    title\n  }\n}"): (typeof documents)["fragment heroFields on PageMainContentHeroSection {\n  __typename\n  hero_section {\n    background_color\n    description\n    hero_image {\n      imageConnection {\n        ...imageFields\n      }\n      position\n    }\n    link {\n      ...linkFields\n    }\n    text_color\n    title\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment imageFields on SysAssetConnection {\n  edges {\n    node {\n      url\n      dimension {\n        height\n        width\n      }\n    }\n  }\n}"): (typeof documents)["fragment imageFields on SysAssetConnection {\n  edges {\n    node {\n      url\n      dimension {\n        height\n        width\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment linkFields on Link {\n  title\n  href\n}"): (typeof documents)["fragment linkFields on Link {\n  title\n  href\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment seoFields on Seo {\n  description\n  title\n  keywords\n}"): (typeof documents)["fragment seoFields on Seo {\n  description\n  title\n  keywords\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment spotlightFields on PageMainContentSpotlight {\n  __typename\n  spotlight {\n    description\n    title\n    caption {\n      description\n      title\n      imageConnection {\n        ...imageFields\n      }\n    }\n  }\n}"): (typeof documents)["fragment spotlightFields on PageMainContentSpotlight {\n  __typename\n  spotlight {\n    description\n    title\n    caption {\n      description\n      title\n      imageConnection {\n        ...imageFields\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment systemFields on EntrySystemField {\n  content_type_uid\n  locale\n  uid\n}"): (typeof documents)["fragment systemFields on EntrySystemField {\n  content_type_uid\n  locale\n  uid\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;