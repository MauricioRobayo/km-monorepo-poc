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
    "\n  fragment linkParts on Link {\n    title\n    href\n  }\n": types.LinkPartsFragmentDoc,
    "\n  fragment imageParts on SysAssetConnection {\n    edges {\n      node {\n        url\n        dimension {\n          height\n          width\n        }\n      }\n    }\n  }\n": types.ImagePartsFragmentDoc,
    "\n  fragment seoParts on Seo {\n    description\n    title\n    keywords\n  }\n": types.SeoPartsFragmentDoc,
    "\n  fragment systemParts on EntrySystemField {\n    content_type_uid\n    locale\n    uid\n  }\n": types.SystemPartsFragmentDoc,
    "\n  fragment blogArticleParts on BlogArticle {\n    date\n    title\n    url\n    summary\n    featured_imageConnection {\n      ...imageParts\n    }\n    content {\n      json\n    }\n    authorConnection {\n      edges {\n        node {\n          ... on Author {\n            title\n            url\n            photoConnection {\n              ...imageParts\n            }\n          }\n        }\n      }\n    }\n    global_field {\n      ...seoParts\n    }\n    system {\n      ...systemParts\n    }\n  }\n": types.BlogArticlePartsFragmentDoc,
    "\n  fragment bucketsParts on PageMainContentBuckets {\n    __typename\n    buckets {\n      actions {\n        description\n        iconConnection {\n          ...imageParts\n        }\n        link {\n          ...linkParts\n        }\n        title\n      }\n      title\n      description\n    }\n  }\n": types.BucketsPartsFragmentDoc,
    "\n  fragment heroParts on PageMainContentHeroSection {\n    __typename\n    hero_section {\n      background_color\n      description\n      hero_image {\n        imageConnection {\n          ...imageParts\n        }\n        position\n      }\n      link {\n        ...linkParts\n      }\n      text_color\n      title\n    }\n  }\n": types.HeroPartsFragmentDoc,
    "\n  fragment actionsParts on PageMainContentActions {\n    __typename\n    actions {\n      actions {\n        description\n        title\n        link {\n          ...linkParts\n        }\n      }\n    }\n  }\n": types.ActionsPartsFragmentDoc,
    "\n  fragment spotlightParts on PageMainContentSpotlight {\n    __typename\n    spotlight {\n      description\n      title\n      caption {\n        description\n        title\n        imageConnection {\n          ...imageParts\n        }\n      }\n    }\n  }\n": types.SpotlightPartsFragmentDoc,
    "\n  fragment blogParts on PageMainContentBlog {\n    __typename\n    blog {\n      title\n      link {\n        ...linkParts\n      }\n      referenceConnection(limit: 2) {\n        edges {\n          node {\n            ... on BlogArticle {\n              ...blogArticleParts\n            }\n          }\n        }\n      }\n    }\n  }\n": types.BlogPartsFragmentDoc,
    "\n  query GetPageByUrl($url: String!) {\n    all_page(where: { url: $url }) {\n      items {\n        title\n        url\n        main_content {\n          ... on PageMainContentBuckets {\n            ...bucketsParts\n          }\n          ... on PageMainContentHeroSection {\n            ...heroParts\n          }\n          ... on PageMainContentActions {\n            ...actionsParts\n          }\n          ... on PageMainContentSpotlight {\n            ...spotlightParts\n          }\n          ... on PageMainContentBlog {\n            ...blogParts\n          }\n        }\n        global_field {\n          ...seoParts\n        }\n        system {\n          ...systemParts\n        }\n      }\n    }\n  }\n": types.GetPageByUrlDocument,
    "\n  query GetPostByUrl($url: String!) {\n    all_blog_article(where: { url: $url }) {\n      items {\n        ...blogArticleParts\n      }\n    }\n  }\n": types.GetPostByUrlDocument,
    "\n  query GetSettingsByUid($uid: String!) {\n    settings(uid: $uid) {\n      copyright\n      site_title\n      logoConnection {\n        ...imageParts\n      }\n      menuConnection {\n        edges {\n          node {\n            ... on Menu {\n              title\n              menu_items {\n                label\n                external_link {\n                  ...linkParts\n                }\n                internal_linkConnection {\n                  edges {\n                    node {\n                      ... on Page {\n                        title\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      social_links {\n        social_links {\n          iconConnection {\n            ...imageParts\n          }\n          link {\n            ...linkParts\n          }\n          name\n        }\n      }\n    }\n  }\n": types.GetSettingsByUidDocument,
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
export function graphql(source: "\n  fragment linkParts on Link {\n    title\n    href\n  }\n"): (typeof documents)["\n  fragment linkParts on Link {\n    title\n    href\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment imageParts on SysAssetConnection {\n    edges {\n      node {\n        url\n        dimension {\n          height\n          width\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment imageParts on SysAssetConnection {\n    edges {\n      node {\n        url\n        dimension {\n          height\n          width\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment seoParts on Seo {\n    description\n    title\n    keywords\n  }\n"): (typeof documents)["\n  fragment seoParts on Seo {\n    description\n    title\n    keywords\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment systemParts on EntrySystemField {\n    content_type_uid\n    locale\n    uid\n  }\n"): (typeof documents)["\n  fragment systemParts on EntrySystemField {\n    content_type_uid\n    locale\n    uid\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment blogArticleParts on BlogArticle {\n    date\n    title\n    url\n    summary\n    featured_imageConnection {\n      ...imageParts\n    }\n    content {\n      json\n    }\n    authorConnection {\n      edges {\n        node {\n          ... on Author {\n            title\n            url\n            photoConnection {\n              ...imageParts\n            }\n          }\n        }\n      }\n    }\n    global_field {\n      ...seoParts\n    }\n    system {\n      ...systemParts\n    }\n  }\n"): (typeof documents)["\n  fragment blogArticleParts on BlogArticle {\n    date\n    title\n    url\n    summary\n    featured_imageConnection {\n      ...imageParts\n    }\n    content {\n      json\n    }\n    authorConnection {\n      edges {\n        node {\n          ... on Author {\n            title\n            url\n            photoConnection {\n              ...imageParts\n            }\n          }\n        }\n      }\n    }\n    global_field {\n      ...seoParts\n    }\n    system {\n      ...systemParts\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment bucketsParts on PageMainContentBuckets {\n    __typename\n    buckets {\n      actions {\n        description\n        iconConnection {\n          ...imageParts\n        }\n        link {\n          ...linkParts\n        }\n        title\n      }\n      title\n      description\n    }\n  }\n"): (typeof documents)["\n  fragment bucketsParts on PageMainContentBuckets {\n    __typename\n    buckets {\n      actions {\n        description\n        iconConnection {\n          ...imageParts\n        }\n        link {\n          ...linkParts\n        }\n        title\n      }\n      title\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment heroParts on PageMainContentHeroSection {\n    __typename\n    hero_section {\n      background_color\n      description\n      hero_image {\n        imageConnection {\n          ...imageParts\n        }\n        position\n      }\n      link {\n        ...linkParts\n      }\n      text_color\n      title\n    }\n  }\n"): (typeof documents)["\n  fragment heroParts on PageMainContentHeroSection {\n    __typename\n    hero_section {\n      background_color\n      description\n      hero_image {\n        imageConnection {\n          ...imageParts\n        }\n        position\n      }\n      link {\n        ...linkParts\n      }\n      text_color\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment actionsParts on PageMainContentActions {\n    __typename\n    actions {\n      actions {\n        description\n        title\n        link {\n          ...linkParts\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment actionsParts on PageMainContentActions {\n    __typename\n    actions {\n      actions {\n        description\n        title\n        link {\n          ...linkParts\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment spotlightParts on PageMainContentSpotlight {\n    __typename\n    spotlight {\n      description\n      title\n      caption {\n        description\n        title\n        imageConnection {\n          ...imageParts\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment spotlightParts on PageMainContentSpotlight {\n    __typename\n    spotlight {\n      description\n      title\n      caption {\n        description\n        title\n        imageConnection {\n          ...imageParts\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment blogParts on PageMainContentBlog {\n    __typename\n    blog {\n      title\n      link {\n        ...linkParts\n      }\n      referenceConnection(limit: 2) {\n        edges {\n          node {\n            ... on BlogArticle {\n              ...blogArticleParts\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment blogParts on PageMainContentBlog {\n    __typename\n    blog {\n      title\n      link {\n        ...linkParts\n      }\n      referenceConnection(limit: 2) {\n        edges {\n          node {\n            ... on BlogArticle {\n              ...blogArticleParts\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPageByUrl($url: String!) {\n    all_page(where: { url: $url }) {\n      items {\n        title\n        url\n        main_content {\n          ... on PageMainContentBuckets {\n            ...bucketsParts\n          }\n          ... on PageMainContentHeroSection {\n            ...heroParts\n          }\n          ... on PageMainContentActions {\n            ...actionsParts\n          }\n          ... on PageMainContentSpotlight {\n            ...spotlightParts\n          }\n          ... on PageMainContentBlog {\n            ...blogParts\n          }\n        }\n        global_field {\n          ...seoParts\n        }\n        system {\n          ...systemParts\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPageByUrl($url: String!) {\n    all_page(where: { url: $url }) {\n      items {\n        title\n        url\n        main_content {\n          ... on PageMainContentBuckets {\n            ...bucketsParts\n          }\n          ... on PageMainContentHeroSection {\n            ...heroParts\n          }\n          ... on PageMainContentActions {\n            ...actionsParts\n          }\n          ... on PageMainContentSpotlight {\n            ...spotlightParts\n          }\n          ... on PageMainContentBlog {\n            ...blogParts\n          }\n        }\n        global_field {\n          ...seoParts\n        }\n        system {\n          ...systemParts\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostByUrl($url: String!) {\n    all_blog_article(where: { url: $url }) {\n      items {\n        ...blogArticleParts\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostByUrl($url: String!) {\n    all_blog_article(where: { url: $url }) {\n      items {\n        ...blogArticleParts\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSettingsByUid($uid: String!) {\n    settings(uid: $uid) {\n      copyright\n      site_title\n      logoConnection {\n        ...imageParts\n      }\n      menuConnection {\n        edges {\n          node {\n            ... on Menu {\n              title\n              menu_items {\n                label\n                external_link {\n                  ...linkParts\n                }\n                internal_linkConnection {\n                  edges {\n                    node {\n                      ... on Page {\n                        title\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      social_links {\n        social_links {\n          iconConnection {\n            ...imageParts\n          }\n          link {\n            ...linkParts\n          }\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSettingsByUid($uid: String!) {\n    settings(uid: $uid) {\n      copyright\n      site_title\n      logoConnection {\n        ...imageParts\n      }\n      menuConnection {\n        edges {\n          node {\n            ... on Menu {\n              title\n              menu_items {\n                label\n                external_link {\n                  ...linkParts\n                }\n                internal_linkConnection {\n                  edges {\n                    node {\n                      ... on Page {\n                        title\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      social_links {\n        social_links {\n          iconConnection {\n            ...imageParts\n          }\n          link {\n            ...linkParts\n          }\n          name\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;