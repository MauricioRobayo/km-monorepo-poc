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
    "\n  query GetPostByUrl($url: String!) {\n    all_blog_article(where: { url: $url }) {\n      items {\n        date\n        title\n        url\n        summary\n        featured_imageConnection {\n          edges {\n            node {\n              dimension {\n                height\n                width\n              }\n              url\n            }\n          }\n        }\n        content {\n          json\n        }\n        authorConnection {\n          edges {\n            node {\n              ... on Author {\n                title\n                url\n                photoConnection {\n                  edges {\n                    node {\n                      url\n                      dimension {\n                        height\n                        width\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        global_field {\n          description\n          title\n          keywords\n        }\n        system {\n          content_type_uid\n          locale\n          uid\n        }\n      }\n    }\n  }\n": types.GetPostByUrlDocument,
    "\n  query GetSettingsByUid($uid: String!) {\n    settings(uid: $uid) {\n      copyright\n      site_title\n      logoConnection {\n        edges {\n          node {\n            url\n            dimension {\n              height\n              width\n            }\n          }\n        }\n      }\n      menuConnection {\n        edges {\n          node {\n            ... on Menu {\n              title\n              menu_items {\n                label\n                external_link {\n                  href\n                  title\n                }\n                internal_linkConnection {\n                  edges {\n                    node {\n                      ... on Page {\n                        title\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      social_links {\n        social_links {\n          iconConnection {\n            edges {\n              node {\n                url\n                dimension {\n                  height\n                  width\n                }\n              }\n            }\n          }\n          link {\n            href\n            title\n          }\n          name\n        }\n      }\n    }\n  }\n": types.GetSettingsByUidDocument,
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
export function graphql(source: "\n  query GetPostByUrl($url: String!) {\n    all_blog_article(where: { url: $url }) {\n      items {\n        date\n        title\n        url\n        summary\n        featured_imageConnection {\n          edges {\n            node {\n              dimension {\n                height\n                width\n              }\n              url\n            }\n          }\n        }\n        content {\n          json\n        }\n        authorConnection {\n          edges {\n            node {\n              ... on Author {\n                title\n                url\n                photoConnection {\n                  edges {\n                    node {\n                      url\n                      dimension {\n                        height\n                        width\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        global_field {\n          description\n          title\n          keywords\n        }\n        system {\n          content_type_uid\n          locale\n          uid\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostByUrl($url: String!) {\n    all_blog_article(where: { url: $url }) {\n      items {\n        date\n        title\n        url\n        summary\n        featured_imageConnection {\n          edges {\n            node {\n              dimension {\n                height\n                width\n              }\n              url\n            }\n          }\n        }\n        content {\n          json\n        }\n        authorConnection {\n          edges {\n            node {\n              ... on Author {\n                title\n                url\n                photoConnection {\n                  edges {\n                    node {\n                      url\n                      dimension {\n                        height\n                        width\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        global_field {\n          description\n          title\n          keywords\n        }\n        system {\n          content_type_uid\n          locale\n          uid\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSettingsByUid($uid: String!) {\n    settings(uid: $uid) {\n      copyright\n      site_title\n      logoConnection {\n        edges {\n          node {\n            url\n            dimension {\n              height\n              width\n            }\n          }\n        }\n      }\n      menuConnection {\n        edges {\n          node {\n            ... on Menu {\n              title\n              menu_items {\n                label\n                external_link {\n                  href\n                  title\n                }\n                internal_linkConnection {\n                  edges {\n                    node {\n                      ... on Page {\n                        title\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      social_links {\n        social_links {\n          iconConnection {\n            edges {\n              node {\n                url\n                dimension {\n                  height\n                  width\n                }\n              }\n            }\n          }\n          link {\n            href\n            title\n          }\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSettingsByUid($uid: String!) {\n    settings(uid: $uid) {\n      copyright\n      site_title\n      logoConnection {\n        edges {\n          node {\n            url\n            dimension {\n              height\n              width\n            }\n          }\n        }\n      }\n      menuConnection {\n        edges {\n          node {\n            ... on Menu {\n              title\n              menu_items {\n                label\n                external_link {\n                  href\n                  title\n                }\n                internal_linkConnection {\n                  edges {\n                    node {\n                      ... on Page {\n                        title\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      social_links {\n        social_links {\n          iconConnection {\n            edges {\n              node {\n                url\n                dimension {\n                  height\n                  width\n                }\n              }\n            }\n          }\n          link {\n            href\n            title\n          }\n          name\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;