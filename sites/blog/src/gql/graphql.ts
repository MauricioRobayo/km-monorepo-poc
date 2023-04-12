/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** This field accepts both ISODateString and ISODateTimeStringexample: 1992-08-14 or 1992-08-14T03:42:00.000Z */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AllAuthor = {
  __typename?: 'AllAuthor';
  items?: Maybe<Array<Maybe<Author>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllBlogArticle = {
  __typename?: 'AllBlogArticle';
  items?: Maybe<Array<Maybe<BlogArticle>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllBlt7Cd35243Deeac36B = {
  __typename?: 'AllBlt7Cd35243Deeac36B';
  items?: Maybe<Array<Maybe<Blt7Cd35243Deeac36B>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllCategory = {
  __typename?: 'AllCategory';
  items?: Maybe<Array<Maybe<Category>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllFaq = {
  __typename?: 'AllFaq';
  items?: Maybe<Array<Maybe<Faq>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllFooter = {
  __typename?: 'AllFooter';
  items?: Maybe<Array<Maybe<Footer>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllMenu = {
  __typename?: 'AllMenu';
  items?: Maybe<Array<Maybe<Menu>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllNews = {
  __typename?: 'AllNews';
  items?: Maybe<Array<Maybe<News>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllPage = {
  __typename?: 'AllPage';
  items?: Maybe<Array<Maybe<Page>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllSettings = {
  __typename?: 'AllSettings';
  items?: Maybe<Array<Maybe<Settings>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllSysAsset = {
  __typename?: 'AllSysAsset';
  items?: Maybe<Array<Maybe<SysAsset>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Author = {
  __typename?: 'Author';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['Float']>;
  photoConnection?: Maybe<SysAssetConnection>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum AuthorOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type AuthorWhere = {
  AND?: InputMaybe<Array<InputMaybe<AuthorWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_ne?: InputMaybe<Scalars['String']>;
  email_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone?: InputMaybe<Scalars['Float']>;
  phone_exists?: InputMaybe<Scalars['Boolean']>;
  phone_gt?: InputMaybe<Scalars['Float']>;
  phone_gte?: InputMaybe<Scalars['Float']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  phone_lt?: InputMaybe<Scalars['Float']>;
  phone_lte?: InputMaybe<Scalars['Float']>;
  phone_ne?: InputMaybe<Scalars['Float']>;
  phone_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  photo?: InputMaybe<SysAssetWhere>;
  photo_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlogArticle = {
  __typename?: 'BlogArticle';
  authorConnection?: Maybe<BlogArticleAuthorConnection>;
  content?: Maybe<BlogArticleContent>;
  custom?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['DateTime']>;
  featured_imageConnection?: Maybe<SysAssetConnection>;
  global_field?: Maybe<Seo>;
  imageConnection?: Maybe<SysAssetConnection>;
  related_postsConnection?: Maybe<BlogArticleRelatedPostsConnection>;
  summary?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type BlogArticleAuthorConnection = {
  __typename?: 'BlogArticleAuthorConnection';
  edges?: Maybe<Array<Maybe<BlogArticleAuthorEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BlogArticleAuthorEdge = {
  __typename?: 'BlogArticleAuthorEdge';
  node?: Maybe<BlogArticleAuthorNode>;
};

export type BlogArticleAuthorNode = Author;

export type BlogArticleAuthorWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  author?: InputMaybe<AuthorWhere>;
};

export type BlogArticleContent = {
  __typename?: 'BlogArticleContent';
  embedded_itemsConnection?: Maybe<BlogArticleContentConnection>;
  json?: Maybe<Scalars['JSON']>;
};


export type BlogArticleContentEmbedded_ItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type BlogArticleContentConnection = {
  __typename?: 'BlogArticleContentConnection';
  edges?: Maybe<Array<Maybe<BlogArticleContentEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BlogArticleContentEdge = {
  __typename?: 'BlogArticleContentEdge';
  node?: Maybe<BlogArticleContentNode>;
};

export type BlogArticleContentNode = SysAsset;

export enum BlogArticleOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type BlogArticleRelatedPostsConnection = {
  __typename?: 'BlogArticleRelatedPostsConnection';
  edges?: Maybe<Array<Maybe<BlogArticleRelatedPostsEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BlogArticleRelatedPostsEdge = {
  __typename?: 'BlogArticleRelatedPostsEdge';
  node?: Maybe<BlogArticleRelatedPostsNode>;
};

export type BlogArticleRelatedPostsNode = BlogArticle;

export type BlogArticleRelatedPostsWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  blog_article?: InputMaybe<BlogArticleWhere>;
};

export type BlogArticleWhere = {
  AND?: InputMaybe<Array<InputMaybe<BlogArticleWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogArticleWhere>>>;
  author?: InputMaybe<BlogArticleAuthorWhere>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['JSON']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  custom?: InputMaybe<Scalars['Float']>;
  custom_exists?: InputMaybe<Scalars['Boolean']>;
  custom_gt?: InputMaybe<Scalars['Float']>;
  custom_gte?: InputMaybe<Scalars['Float']>;
  custom_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  custom_lt?: InputMaybe<Scalars['Float']>;
  custom_lte?: InputMaybe<Scalars['Float']>;
  custom_ne?: InputMaybe<Scalars['Float']>;
  custom_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_ne?: InputMaybe<Scalars['DateTime']>;
  date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  featured_image?: InputMaybe<SysAssetWhere>;
  featured_image_exists?: InputMaybe<Scalars['Boolean']>;
  global_field?: InputMaybe<SeoWhere>;
  global_field_exists?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<SysAssetWhere>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  related_posts?: InputMaybe<BlogArticleRelatedPostsWhere>;
  related_posts_exists?: InputMaybe<Scalars['Boolean']>;
  summary?: InputMaybe<Scalars['String']>;
  summary_exists?: InputMaybe<Scalars['Boolean']>;
  summary_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary_ne?: InputMaybe<Scalars['String']>;
  summary_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Blt7Cd35243Deeac36B = {
  __typename?: 'Blt7Cd35243Deeac36B';
  featured_imageConnection?: Maybe<SysAssetConnection>;
  json_rte?: Maybe<Blt7Cd35243Deeac36BJsonRte>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Blt7Cd35243Deeac36BJsonRte = {
  __typename?: 'Blt7Cd35243Deeac36BJsonRte';
  embedded_itemsConnection?: Maybe<Blt7Cd35243Deeac36BJsonRteConnection>;
  json?: Maybe<Scalars['JSON']>;
};


export type Blt7Cd35243Deeac36BJsonRteEmbedded_ItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type Blt7Cd35243Deeac36BJsonRteConnection = {
  __typename?: 'Blt7Cd35243Deeac36BJsonRteConnection';
  edges?: Maybe<Array<Maybe<Blt7Cd35243Deeac36BJsonRteEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Blt7Cd35243Deeac36BJsonRteEdge = {
  __typename?: 'Blt7Cd35243Deeac36BJsonRteEdge';
  node?: Maybe<Blt7Cd35243Deeac36BJsonRteNode>;
};

export type Blt7Cd35243Deeac36BJsonRteNode = SysAsset;

export enum Blt7Cd35243Deeac36BOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type Blt7Cd35243Deeac36BWhere = {
  AND?: InputMaybe<Array<InputMaybe<Blt7Cd35243Deeac36BWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<Blt7Cd35243Deeac36BWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  featured_image?: InputMaybe<SysAssetWhere>;
  featured_image_exists?: InputMaybe<Scalars['Boolean']>;
  json_rte?: InputMaybe<Scalars['JSON']>;
  json_rte_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Category = {
  __typename?: 'Category';
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export enum CategoryOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type CategoryWhere = {
  AND?: InputMaybe<Array<InputMaybe<CategoryWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type EntrySystemField = {
  __typename?: 'EntrySystemField';
  branch?: Maybe<Scalars['String']>;
  content_type_uid?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  extensionConnection?: Maybe<SysExtensionConnection>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<SystemPublishDetails>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};


export type EntrySystemFieldExtensionConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum EvalReferenceEnum {
  All = 'ALL',
  Any = 'ANY'
}

export type Faq = {
  __typename?: 'Faq';
  faq?: Maybe<Array<Maybe<FaqFaq>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export type FaqFaq = {
  __typename?: 'FaqFaq';
  answer?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['String']>;
};

export type FaqFaqWhere = {
  answer?: InputMaybe<Scalars['String']>;
  answer_exists?: InputMaybe<Scalars['Boolean']>;
  answer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  answer_ne?: InputMaybe<Scalars['String']>;
  answer_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question?: InputMaybe<Scalars['String']>;
  question_exists?: InputMaybe<Scalars['Boolean']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question_ne?: InputMaybe<Scalars['String']>;
  question_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum FaqOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type FaqWhere = {
  AND?: InputMaybe<Array<InputMaybe<FaqWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  faq?: InputMaybe<FaqFaqWhere>;
  faq_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type Footer = {
  __typename?: 'Footer';
  copyright?: Maybe<Scalars['String']>;
  referenceConnection?: Maybe<FooterReferenceConnection>;
  social_links?: Maybe<SocialLinks>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export enum FooterOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type FooterReferenceConnection = {
  __typename?: 'FooterReferenceConnection';
  edges?: Maybe<Array<Maybe<FooterReferenceEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FooterReferenceEdge = {
  __typename?: 'FooterReferenceEdge';
  node?: Maybe<FooterReferenceNode>;
};

export type FooterReferenceNode = Menu;

export type FooterReferenceWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  menu?: InputMaybe<MenuWhere>;
};

export type FooterWhere = {
  AND?: InputMaybe<Array<InputMaybe<FooterWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterWhere>>>;
  copyright?: InputMaybe<Scalars['String']>;
  copyright_exists?: InputMaybe<Scalars['Boolean']>;
  copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  copyright_ne?: InputMaybe<Scalars['String']>;
  copyright_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reference?: InputMaybe<FooterReferenceWhere>;
  reference_exists?: InputMaybe<Scalars['Boolean']>;
  social_links?: InputMaybe<SocialLinksWhere>;
  social_links_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type Link = {
  __typename?: 'Link';
  href?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type LinkWhere = {
  href?: InputMaybe<Scalars['String']>;
  href_exists?: InputMaybe<Scalars['Boolean']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  href_ne?: InputMaybe<Scalars['String']>;
  href_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Menu = {
  __typename?: 'Menu';
  menu_items?: Maybe<Array<Maybe<MenuMenuItems>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export type MenuMenuItems = {
  __typename?: 'MenuMenuItems';
  external_link?: Maybe<Link>;
  internal_linkConnection?: Maybe<MenuMenuItemsInternalLinkConnection>;
  label?: Maybe<Scalars['String']>;
  menu_level_2?: Maybe<Array<Maybe<MenuMenuItemsMenuLevel2>>>;
};

export type MenuMenuItemsInternalLinkConnection = {
  __typename?: 'MenuMenuItemsInternalLinkConnection';
  edges?: Maybe<Array<Maybe<MenuMenuItemsInternalLinkEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MenuMenuItemsInternalLinkEdge = {
  __typename?: 'MenuMenuItemsInternalLinkEdge';
  node?: Maybe<MenuMenuItemsInternalLinkNode>;
};

export type MenuMenuItemsInternalLinkNode = Page;

export type MenuMenuItemsInternalLinkWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  page?: InputMaybe<PageWhere>;
};

export type MenuMenuItemsMenuLevel2 = {
  __typename?: 'MenuMenuItemsMenuLevel2';
  external_link?: Maybe<Link>;
  internal_linkConnection?: Maybe<MenuMenuItemsMenuLevel2InternalLinkConnection>;
  label?: Maybe<Scalars['String']>;
};

export type MenuMenuItemsMenuLevel2InternalLinkConnection = {
  __typename?: 'MenuMenuItemsMenuLevel2InternalLinkConnection';
  edges?: Maybe<Array<Maybe<MenuMenuItemsMenuLevel2InternalLinkEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MenuMenuItemsMenuLevel2InternalLinkEdge = {
  __typename?: 'MenuMenuItemsMenuLevel2InternalLinkEdge';
  node?: Maybe<MenuMenuItemsMenuLevel2InternalLinkNode>;
};

export type MenuMenuItemsMenuLevel2InternalLinkNode = BlogArticle;

export type MenuMenuItemsMenuLevel2InternalLinkWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  blog_article?: InputMaybe<BlogArticleWhere>;
};

export type MenuMenuItemsMenuLevel2Where = {
  external_link?: InputMaybe<LinkWhere>;
  external_link_exists?: InputMaybe<Scalars['Boolean']>;
  internal_link?: InputMaybe<MenuMenuItemsMenuLevel2InternalLinkWhere>;
  internal_link_exists?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_ne?: InputMaybe<Scalars['String']>;
  label_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MenuMenuItemsWhere = {
  external_link?: InputMaybe<LinkWhere>;
  external_link_exists?: InputMaybe<Scalars['Boolean']>;
  internal_link?: InputMaybe<MenuMenuItemsInternalLinkWhere>;
  internal_link_exists?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_ne?: InputMaybe<Scalars['String']>;
  label_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  menu_level_2?: InputMaybe<MenuMenuItemsMenuLevel2Where>;
  menu_level_2_exists?: InputMaybe<Scalars['Boolean']>;
};

export enum MenuOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type MenuWhere = {
  AND?: InputMaybe<Array<InputMaybe<MenuWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  menu_items?: InputMaybe<MenuMenuItemsWhere>;
  menu_items_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type News = {
  __typename?: 'News';
  authorConnection?: Maybe<NewsAuthorConnection>;
  body?: Maybe<NewsBody>;
  categoryConnection?: Maybe<NewsCategoryConnection>;
  date?: Maybe<Scalars['DateTime']>;
  featured_imageConnection?: Maybe<SysAssetConnection>;
  featured_image_caption?: Maybe<Scalars['String']>;
  seo?: Maybe<Seo>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type NewsCategoryConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NewsAuthorConnection = {
  __typename?: 'NewsAuthorConnection';
  edges?: Maybe<Array<Maybe<NewsAuthorEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NewsAuthorEdge = {
  __typename?: 'NewsAuthorEdge';
  node?: Maybe<NewsAuthorNode>;
};

export type NewsAuthorNode = Author;

export type NewsAuthorWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  author?: InputMaybe<AuthorWhere>;
};

export type NewsBody = {
  __typename?: 'NewsBody';
  embedded_itemsConnection?: Maybe<NewsBodyConnection>;
  json?: Maybe<Scalars['JSON']>;
};


export type NewsBodyEmbedded_ItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NewsBodyConnection = {
  __typename?: 'NewsBodyConnection';
  edges?: Maybe<Array<Maybe<NewsBodyEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NewsBodyEdge = {
  __typename?: 'NewsBodyEdge';
  node?: Maybe<NewsBodyNode>;
};

export type NewsBodyNode = SysAsset;

export type NewsCategoryConnection = {
  __typename?: 'NewsCategoryConnection';
  edges?: Maybe<Array<Maybe<NewsCategoryEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NewsCategoryEdge = {
  __typename?: 'NewsCategoryEdge';
  node?: Maybe<NewsCategoryNode>;
};

export type NewsCategoryNode = Category;

export type NewsCategoryWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  category?: InputMaybe<CategoryWhere>;
};

export enum NewsOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type NewsWhere = {
  AND?: InputMaybe<Array<InputMaybe<NewsWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsWhere>>>;
  author?: InputMaybe<NewsAuthorWhere>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<Scalars['JSON']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<NewsCategoryWhere>;
  category_count?: InputMaybe<Scalars['Int']>;
  category_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_ne?: InputMaybe<Scalars['DateTime']>;
  date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  featured_image?: InputMaybe<SysAssetWhere>;
  featured_image_caption?: InputMaybe<Scalars['String']>;
  featured_image_caption_exists?: InputMaybe<Scalars['Boolean']>;
  featured_image_caption_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featured_image_caption_ne?: InputMaybe<Scalars['String']>;
  featured_image_caption_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featured_image_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo?: InputMaybe<SeoWhere>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Page = {
  __typename?: 'Page';
  global_field?: Maybe<Seo>;
  main_content?: Maybe<Array<Maybe<PageMainContent>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PageMainContent = PageMainContentActions | PageMainContentBlog | PageMainContentBuckets | PageMainContentHeroSection | PageMainContentRichText | PageMainContentSpotlight;

export type PageMainContentActions = {
  __typename?: 'PageMainContentActions';
  actions?: Maybe<PageMainContentActionsBlock>;
};

export type PageMainContentActionsBlock = {
  __typename?: 'PageMainContentActionsBlock';
  actions?: Maybe<Array<Maybe<PageMainContentActionsBlockActions>>>;
};

export type PageMainContentActionsBlockActions = {
  __typename?: 'PageMainContentActionsBlockActions';
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
};

export type PageMainContentActionsBlockActionsWhere = {
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageMainContentActionsBlockWhere = {
  actions?: InputMaybe<PageMainContentActionsBlockActionsWhere>;
  actions_exists?: InputMaybe<Scalars['Boolean']>;
};

export type PageMainContentBlog = {
  __typename?: 'PageMainContentBlog';
  blog?: Maybe<PageMainContentBlogBlock>;
};

export type PageMainContentBlogBlock = {
  __typename?: 'PageMainContentBlogBlock';
  link?: Maybe<Link>;
  referenceConnection?: Maybe<PageMainContentBlogBlockReferenceConnection>;
  title?: Maybe<Scalars['String']>;
};


export type PageMainContentBlogBlockReferenceConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PageMainContentBlogBlockReferenceConnection = {
  __typename?: 'PageMainContentBlogBlockReferenceConnection';
  edges?: Maybe<Array<Maybe<PageMainContentBlogBlockReferenceEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageMainContentBlogBlockReferenceEdge = {
  __typename?: 'PageMainContentBlogBlockReferenceEdge';
  node?: Maybe<PageMainContentBlogBlockReferenceNode>;
};

export type PageMainContentBlogBlockReferenceNode = BlogArticle;

export type PageMainContentBlogBlockReferenceWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  blog_article?: InputMaybe<BlogArticleWhere>;
};

export type PageMainContentBlogBlockWhere = {
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  reference?: InputMaybe<PageMainContentBlogBlockReferenceWhere>;
  reference_count?: InputMaybe<Scalars['Int']>;
  reference_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageMainContentBuckets = {
  __typename?: 'PageMainContentBuckets';
  buckets?: Maybe<PageMainContentBucketsBlock>;
};

export type PageMainContentBucketsBlock = {
  __typename?: 'PageMainContentBucketsBlock';
  actions?: Maybe<Array<Maybe<PageMainContentBucketsBlockActions>>>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PageMainContentBucketsBlockActions = {
  __typename?: 'PageMainContentBucketsBlockActions';
  description?: Maybe<Scalars['String']>;
  iconConnection?: Maybe<SysAssetConnection>;
  link?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
};

export type PageMainContentBucketsBlockActionsWhere = {
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon?: InputMaybe<SysAssetWhere>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageMainContentBucketsBlockWhere = {
  actions?: InputMaybe<PageMainContentBucketsBlockActionsWhere>;
  actions_exists?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageMainContentHeroSection = {
  __typename?: 'PageMainContentHeroSection';
  hero_section?: Maybe<PageMainContentHeroSectionBlock>;
};

export type PageMainContentHeroSectionBlock = {
  __typename?: 'PageMainContentHeroSectionBlock';
  background_color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hero_image?: Maybe<PageMainContentHeroSectionBlockHeroImage>;
  link?: Maybe<Link>;
  text_color?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PageMainContentHeroSectionBlockHeroImage = {
  __typename?: 'PageMainContentHeroSectionBlockHeroImage';
  imageConnection?: Maybe<SysAssetConnection>;
  position?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['JSON']>;
};

export type PageMainContentHeroSectionBlockHeroImageWhere = {
  image?: InputMaybe<SysAssetWhere>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['String']>;
  position_exists?: InputMaybe<Scalars['Boolean']>;
  position_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  position_ne?: InputMaybe<Scalars['String']>;
  position_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  video?: InputMaybe<Scalars['JSON']>;
  video_exists?: InputMaybe<Scalars['Boolean']>;
};

export type PageMainContentHeroSectionBlockWhere = {
  background_color?: InputMaybe<Scalars['String']>;
  background_color_exists?: InputMaybe<Scalars['Boolean']>;
  background_color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  background_color_ne?: InputMaybe<Scalars['String']>;
  background_color_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hero_image?: InputMaybe<PageMainContentHeroSectionBlockHeroImageWhere>;
  hero_image_exists?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  text_color?: InputMaybe<Scalars['String']>;
  text_color_exists?: InputMaybe<Scalars['Boolean']>;
  text_color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_color_ne?: InputMaybe<Scalars['String']>;
  text_color_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageMainContentRichText = {
  __typename?: 'PageMainContentRichText';
  rich_text?: Maybe<PageMainContentRichTextBlock>;
};

export type PageMainContentRichTextBlock = {
  __typename?: 'PageMainContentRichTextBlock';
  rich_text_editor?: Maybe<PageMainContentRichTextBlockRichTextEditor>;
};

export type PageMainContentRichTextBlockRichTextEditor = {
  __typename?: 'PageMainContentRichTextBlockRichTextEditor';
  embedded_itemsConnection?: Maybe<PageMainContentRichTextBlockRichTextEditorConnection>;
  json?: Maybe<Scalars['JSON']>;
};


export type PageMainContentRichTextBlockRichTextEditorEmbedded_ItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PageMainContentRichTextBlockRichTextEditorConnection = {
  __typename?: 'PageMainContentRichTextBlockRichTextEditorConnection';
  edges?: Maybe<Array<Maybe<PageMainContentRichTextBlockRichTextEditorEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageMainContentRichTextBlockRichTextEditorEdge = {
  __typename?: 'PageMainContentRichTextBlockRichTextEditorEdge';
  node?: Maybe<PageMainContentRichTextBlockRichTextEditorNode>;
};

export type PageMainContentRichTextBlockRichTextEditorNode = SysAsset;

export type PageMainContentRichTextBlockWhere = {
  rich_text_editor?: InputMaybe<Scalars['JSON']>;
  rich_text_editor_exists?: InputMaybe<Scalars['Boolean']>;
};

export type PageMainContentSpotlight = {
  __typename?: 'PageMainContentSpotlight';
  spotlight?: Maybe<PageMainContentSpotlightBlock>;
};

export type PageMainContentSpotlightBlock = {
  __typename?: 'PageMainContentSpotlightBlock';
  caption?: Maybe<Array<Maybe<PageMainContentSpotlightBlockCaption>>>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PageMainContentSpotlightBlockCaption = {
  __typename?: 'PageMainContentSpotlightBlockCaption';
  description?: Maybe<Scalars['String']>;
  imageConnection?: Maybe<SysAssetConnection>;
  title?: Maybe<Scalars['String']>;
};

export type PageMainContentSpotlightBlockCaptionWhere = {
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image?: InputMaybe<SysAssetWhere>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageMainContentSpotlightBlockWhere = {
  caption?: InputMaybe<PageMainContentSpotlightBlockCaptionWhere>;
  caption_exists?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageMainContentWhere = {
  actions?: InputMaybe<PageMainContentActionsBlockWhere>;
  actions_exists?: InputMaybe<Scalars['Boolean']>;
  blog?: InputMaybe<PageMainContentBlogBlockWhere>;
  blog_exists?: InputMaybe<Scalars['Boolean']>;
  buckets?: InputMaybe<PageMainContentBucketsBlockWhere>;
  buckets_exists?: InputMaybe<Scalars['Boolean']>;
  hero_section?: InputMaybe<PageMainContentHeroSectionBlockWhere>;
  hero_section_exists?: InputMaybe<Scalars['Boolean']>;
  rich_text?: InputMaybe<PageMainContentRichTextBlockWhere>;
  rich_text_exists?: InputMaybe<Scalars['Boolean']>;
  spotlight?: InputMaybe<PageMainContentSpotlightBlockWhere>;
  spotlight_exists?: InputMaybe<Scalars['Boolean']>;
};

export enum PageOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type PageWhere = {
  AND?: InputMaybe<Array<InputMaybe<PageWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<PageWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  global_field?: InputMaybe<SeoWhere>;
  global_field_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  main_content?: InputMaybe<PageMainContentWhere>;
  main_content_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  all_assets?: Maybe<AllSysAsset>;
  all_author?: Maybe<AllAuthor>;
  all_blog_article?: Maybe<AllBlogArticle>;
  all_blt7cd35243deeac36b?: Maybe<AllBlt7Cd35243Deeac36B>;
  all_category?: Maybe<AllCategory>;
  all_faq?: Maybe<AllFaq>;
  all_footer?: Maybe<AllFooter>;
  all_menu?: Maybe<AllMenu>;
  all_news?: Maybe<AllNews>;
  all_page?: Maybe<AllPage>;
  all_settings?: Maybe<AllSettings>;
  assets?: Maybe<SysAsset>;
  author?: Maybe<Author>;
  blog_article?: Maybe<BlogArticle>;
  blt7cd35243deeac36b?: Maybe<Blt7Cd35243Deeac36B>;
  category?: Maybe<Category>;
  faq?: Maybe<Faq>;
  footer?: Maybe<Footer>;
  menu?: Maybe<Menu>;
  news?: Maybe<News>;
  page?: Maybe<Page>;
  settings?: Maybe<Settings>;
};


export type QueryAll_AssetsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<SysAssetOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysAssetWhere>;
};


export type QueryAll_AuthorArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<AuthorOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuthorWhere>;
};


export type QueryAll_Blog_ArticleArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<BlogArticleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogArticleWhere>;
};


export type QueryAll_Blt7cd35243deeac36bArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<Blt7Cd35243Deeac36BOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Blt7Cd35243Deeac36BWhere>;
};


export type QueryAll_CategoryArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<CategoryOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhere>;
};


export type QueryAll_FaqArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<FaqOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqWhere>;
};


export type QueryAll_FooterArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<FooterOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterWhere>;
};


export type QueryAll_MenuArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<MenuOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuWhere>;
};


export type QueryAll_NewsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<NewsOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsWhere>;
};


export type QueryAll_PageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<PageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhere>;
};


export type QueryAll_SettingsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  order_by?: InputMaybe<Array<InputMaybe<SettingsOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingsWhere>;
};


export type QueryAssetsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  uid: Scalars['String'];
};


export type QueryAuthorArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryBlog_ArticleArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryBlt7cd35243deeac36bArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryCategoryArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryFaqArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryFooterArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryMenuArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryNewsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryPageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QuerySettingsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};

export type Seo = {
  __typename?: 'Seo';
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SeoWhere = {
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords?: InputMaybe<Scalars['String']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords_ne?: InputMaybe<Scalars['String']>;
  keywords_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Settings = {
  __typename?: 'Settings';
  copyright?: Maybe<Scalars['String']>;
  logoConnection?: Maybe<SysAssetConnection>;
  menuConnection?: Maybe<SettingsMenuConnection>;
  site_title?: Maybe<Scalars['String']>;
  social_links?: Maybe<SocialLinks>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export type SettingsMenuConnection = {
  __typename?: 'SettingsMenuConnection';
  edges?: Maybe<Array<Maybe<SettingsMenuEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SettingsMenuEdge = {
  __typename?: 'SettingsMenuEdge';
  node?: Maybe<SettingsMenuNode>;
};

export type SettingsMenuNode = Menu;

export type SettingsMenuWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  menu?: InputMaybe<MenuWhere>;
};

export enum SettingsOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type SettingsWhere = {
  AND?: InputMaybe<Array<InputMaybe<SettingsWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<SettingsWhere>>>;
  copyright?: InputMaybe<Scalars['String']>;
  copyright_exists?: InputMaybe<Scalars['Boolean']>;
  copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  copyright_ne?: InputMaybe<Scalars['String']>;
  copyright_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logo?: InputMaybe<SysAssetWhere>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  menu?: InputMaybe<SettingsMenuWhere>;
  menu_exists?: InputMaybe<Scalars['Boolean']>;
  site_title?: InputMaybe<Scalars['String']>;
  site_title_exists?: InputMaybe<Scalars['Boolean']>;
  site_title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  site_title_ne?: InputMaybe<Scalars['String']>;
  site_title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  social_links?: InputMaybe<SocialLinksWhere>;
  social_links_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type SocialLinks = {
  __typename?: 'SocialLinks';
  social_links?: Maybe<Array<Maybe<SocialLinksSocialLinks>>>;
};

export type SocialLinksSocialLinks = {
  __typename?: 'SocialLinksSocialLinks';
  iconConnection?: Maybe<SysAssetConnection>;
  link?: Maybe<Link>;
  name?: Maybe<Scalars['String']>;
};

export type SocialLinksSocialLinksWhere = {
  icon?: InputMaybe<SysAssetWhere>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SocialLinksWhere = {
  social_links?: InputMaybe<SocialLinksSocialLinksWhere>;
  social_links_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SysAsset = {
  __typename?: 'SysAsset';
  content_type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dimension?: Maybe<SysAssetDimension>;
  file_size?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  system?: Maybe<SysAssetSystemField>;
  title?: Maybe<Scalars['String']>;
  unique_identifier?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type SysAssetUrlArgs = {
  transform?: InputMaybe<SysAssetTransformUrl>;
};

/** WEBP images are usually lower in size and have good quality. */
export enum SysAssetAutoValues {
  Webp = 'WEBP'
}

export type SysAssetConnection = {
  __typename?: 'SysAssetConnection';
  edges?: Maybe<Array<Maybe<SysAssetEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SysAssetDimension = {
  __typename?: 'SysAssetDimension';
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type SysAssetDimensionWhere = {
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_ne?: InputMaybe<Scalars['Int']>;
  height_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_ne?: InputMaybe<Scalars['Int']>;
  width_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum SysAssetDisableValues {
  /** UPSCALE is always enabled, in which the image is upscaled if the output image (by specifying the width or height) is bigger than the source image */
  Upscale = 'UPSCALE'
}

/** This parameter allows an image to be downloaded or rendered on page */
export enum SysAssetDispositionValues {
  /** Allows to download an image */
  Attachment = 'ATTACHMENT',
  /** Allows an image to be rendered on page */
  Inline = 'INLINE'
}

export type SysAssetEdge = {
  __typename?: 'SysAssetEdge';
  node?: Maybe<SysAsset>;
};

export enum SysAssetFitValues {
  Bounds = 'BOUNDS',
  Crop = 'CROP'
}

export enum SysAssetImageFormats {
  /** Convert an image to GIF format */
  Gif = 'GIF',
  /** Convert an image to JPEG format */
  Jpg = 'JPG',
  /** A Progressive JPEG is an image file created using a compression method that displays higher detail in progression */
  Pjpg = 'PJPG',
  /** Convert an image to PNG format */
  Png = 'PNG',
  /** WEBP images are usually lower in size and have good quality */
  Webp = 'WEBP',
  /** WEBP Lossless format */
  Webpll = 'WEBPLL',
  /** WEBP Lossy format */
  Webply = 'WEBPLY'
}

export enum SysAssetOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export enum SysAssetOrientValues {
  /** Flip image horizontally and vertically */
  Both = 'BOTH',
  /** Set image to default */
  Default = 'DEFAULT',
  /** Flip image horizontally */
  Horizontally = 'HORIZONTALLY',
  /** Flip image horizontally and then rotate 90 degrees towards left */
  Rotate90Left = 'ROTATE90LEFT',
  /** Rotate image 90 degrees towards right */
  Rotate90Right = 'ROTATE90RIGHT',
  /** Flip image vertically */
  Vertically = 'VERTICALLY'
}

/** The overlay_align parameter allows you to put one image on top of another */
export enum SysAssetOverlayAlignValues {
  /** Align the overlay image to the bottom of the actual image */
  Bottom = 'BOTTOM',
  /** Align the overlay image to the center (horizontally) of the actual image */
  Center = 'CENTER',
  /** Align the overlay image to the left of the actual image */
  Left = 'LEFT',
  /** Align the overlay image to the middle (vertically) of the actual image */
  Middle = 'MIDDLE',
  /** Align the overlay image to the right of the actual image */
  Right = 'RIGHT',
  /** Align the overlay image to the top of the actual image */
  Top = 'TOP'
}

export enum SysAssetOverlayRepeatValues {
  /** Horizontal and vertical repetition */
  Both = 'BOTH',
  /** Horizontal repetition */
  X = 'X',
  /** Vertical repetition */
  Y = 'Y'
}

export type SysAssetSystemField = {
  __typename?: 'SysAssetSystemField';
  branch?: Maybe<Scalars['String']>;
  content_type_uid?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  extensionConnection?: Maybe<SysExtensionConnection>;
  publish_details?: Maybe<SystemPublishDetails>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};


export type SysAssetSystemFieldExtensionConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SysAssetTransformUrl = {
  /** When the auto parameter is set to webp, it enables WebP image support. WebP images have higher compression rate with minimum loss of quality. */
  auto?: InputMaybe<SysAssetAutoValues>;
  /** The bg-color parameter lets you set a backgroud color for the given image. This is useful when applying padding or for replacing the transparent pixels of an image */
  bg_color?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Scalars['String']>;
  /** The disable parameter disables the functionality that is enabled by default */
  disable?: InputMaybe<SysAssetDisableValues>;
  /** The disposition parameter lets you allow image to download or render.  */
  disposition?: InputMaybe<SysAssetDispositionValues>;
  /** The dpr parameter lets you deliver images with appropriate size to devices that come with a defined device pixel ratio. The device pixel ratio of any device determines the screen resolution that its CSS would interpret */
  dpr?: InputMaybe<Scalars['String']>;
  /** Fit parameter enables you to fit the given image properly within the specified height and width */
  fit?: InputMaybe<SysAssetFitValues>;
  /** Format parameter lets you converts a given image from one format to another */
  format?: InputMaybe<SysAssetImageFormats>;
  height?: InputMaybe<Scalars['String']>;
  /** The orient parameter lets you control the cardinal orientation of the given image */
  orient?: InputMaybe<SysAssetOrientValues>;
  overlay?: InputMaybe<Scalars['String']>;
  overlay_align?: InputMaybe<SysAssetOverlayAlignValues>;
  /** The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When height is defined in percentage, it relative to the output image */
  overlay_height?: InputMaybe<Scalars['String']>;
  /** The overlay_repeat parameter lets you define how the overlay image will be repeated on the given image */
  overlay_repeat?: InputMaybe<SysAssetOverlayRepeatValues>;
  /** The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When width is defined in percentage, it is relative to the output image */
  overlay_width?: InputMaybe<Scalars['String']>;
  /** This parameter lets you add extra pixels to the edges of an image. You can specify values for top, right, bottom, and left padding for an image */
  pad?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
};

export type SysAssetWhere = {
  AND?: InputMaybe<Array<InputMaybe<SysAssetWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<SysAssetWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dimension?: InputMaybe<SysAssetDimensionWhere>;
  dimension_exists?: InputMaybe<Scalars['Boolean']>;
  file_size?: InputMaybe<Scalars['Int']>;
  file_size_exists?: InputMaybe<Scalars['Boolean']>;
  file_size_gt?: InputMaybe<Scalars['Int']>;
  file_size_gte?: InputMaybe<Scalars['Int']>;
  file_size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  file_size_lt?: InputMaybe<Scalars['Int']>;
  file_size_lte?: InputMaybe<Scalars['Int']>;
  file_size_ne?: InputMaybe<Scalars['Int']>;
  file_size_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filename?: InputMaybe<Scalars['String']>;
  filename_exists?: InputMaybe<Scalars['Boolean']>;
  filename_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename_ne?: InputMaybe<Scalars['String']>;
  filename_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags?: InputMaybe<Scalars['String']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysExtensionConnection = {
  __typename?: 'SysExtensionConnection';
  edges?: Maybe<Array<Maybe<SysExtensionEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SysExtensionEdge = {
  __typename?: 'SysExtensionEdge';
  node?: Maybe<SysMetadata>;
};

export type SysMetadata = {
  __typename?: 'SysMetadata';
  extension_uid?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<Maybe<Scalars['JSON']>>>;
};

export type SystemPublishDetails = {
  __typename?: 'SystemPublishDetails';
  environment?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
};

export type LinkPartsFragment = { __typename?: 'Link', title?: string | null, href?: string | null } & { ' $fragmentName'?: 'LinkPartsFragment' };

export type ImagePartsFragment = { __typename?: 'SysAssetConnection', edges?: Array<{ __typename?: 'SysAssetEdge', node?: { __typename?: 'SysAsset', url?: string | null, dimension?: { __typename?: 'SysAssetDimension', height?: number | null, width?: number | null } | null } | null } | null> | null } & { ' $fragmentName'?: 'ImagePartsFragment' };

export type SeoPartsFragment = { __typename?: 'Seo', description?: string | null, title?: string | null, keywords?: string | null } & { ' $fragmentName'?: 'SeoPartsFragment' };

export type SystemPartsFragment = { __typename?: 'EntrySystemField', content_type_uid?: string | null, locale?: string | null, uid?: string | null } & { ' $fragmentName'?: 'SystemPartsFragment' };

export type BlogArticlePartsFragment = { __typename?: 'BlogArticle', date?: any | null, title?: string | null, url?: string | null, summary?: string | null, featured_imageConnection?: (
    { __typename?: 'SysAssetConnection' }
    & { ' $fragmentRefs'?: { 'ImagePartsFragment': ImagePartsFragment } }
  ) | null, content?: { __typename?: 'BlogArticleContent', json?: any | null } | null, authorConnection?: { __typename?: 'BlogArticleAuthorConnection', edges?: Array<{ __typename?: 'BlogArticleAuthorEdge', node?: { __typename?: 'Author', title?: string | null, url?: string | null, photoConnection?: (
          { __typename?: 'SysAssetConnection' }
          & { ' $fragmentRefs'?: { 'ImagePartsFragment': ImagePartsFragment } }
        ) | null } | null } | null> | null } | null, global_field?: (
    { __typename?: 'Seo' }
    & { ' $fragmentRefs'?: { 'SeoPartsFragment': SeoPartsFragment } }
  ) | null, system?: (
    { __typename?: 'EntrySystemField' }
    & { ' $fragmentRefs'?: { 'SystemPartsFragment': SystemPartsFragment } }
  ) | null } & { ' $fragmentName'?: 'BlogArticlePartsFragment' };

export type BucketsPartsFragment = { __typename: 'PageMainContentBuckets', buckets?: { __typename?: 'PageMainContentBucketsBlock', title?: string | null, description?: string | null, actions?: Array<{ __typename?: 'PageMainContentBucketsBlockActions', description?: string | null, title?: string | null, iconConnection?: (
        { __typename?: 'SysAssetConnection' }
        & { ' $fragmentRefs'?: { 'ImagePartsFragment': ImagePartsFragment } }
      ) | null, link?: (
        { __typename?: 'Link' }
        & { ' $fragmentRefs'?: { 'LinkPartsFragment': LinkPartsFragment } }
      ) | null } | null> | null } | null } & { ' $fragmentName'?: 'BucketsPartsFragment' };

export type HeroPartsFragment = { __typename: 'PageMainContentHeroSection', hero_section?: { __typename?: 'PageMainContentHeroSectionBlock', background_color?: string | null, description?: string | null, text_color?: string | null, title?: string | null, hero_image?: { __typename?: 'PageMainContentHeroSectionBlockHeroImage', position?: string | null, imageConnection?: (
        { __typename?: 'SysAssetConnection' }
        & { ' $fragmentRefs'?: { 'ImagePartsFragment': ImagePartsFragment } }
      ) | null } | null, link?: (
      { __typename?: 'Link' }
      & { ' $fragmentRefs'?: { 'LinkPartsFragment': LinkPartsFragment } }
    ) | null } | null } & { ' $fragmentName'?: 'HeroPartsFragment' };

export type ActionsPartsFragment = { __typename: 'PageMainContentActions', actions?: { __typename?: 'PageMainContentActionsBlock', actions?: Array<{ __typename?: 'PageMainContentActionsBlockActions', description?: string | null, title?: string | null, link?: (
        { __typename?: 'Link' }
        & { ' $fragmentRefs'?: { 'LinkPartsFragment': LinkPartsFragment } }
      ) | null } | null> | null } | null } & { ' $fragmentName'?: 'ActionsPartsFragment' };

export type SpotlightPartsFragment = { __typename: 'PageMainContentSpotlight', spotlight?: { __typename?: 'PageMainContentSpotlightBlock', description?: string | null, title?: string | null, caption?: Array<{ __typename?: 'PageMainContentSpotlightBlockCaption', description?: string | null, title?: string | null, imageConnection?: (
        { __typename?: 'SysAssetConnection' }
        & { ' $fragmentRefs'?: { 'ImagePartsFragment': ImagePartsFragment } }
      ) | null } | null> | null } | null } & { ' $fragmentName'?: 'SpotlightPartsFragment' };

export type BlogPartsFragment = { __typename: 'PageMainContentBlog', blog?: { __typename?: 'PageMainContentBlogBlock', title?: string | null, link?: (
      { __typename?: 'Link' }
      & { ' $fragmentRefs'?: { 'LinkPartsFragment': LinkPartsFragment } }
    ) | null, referenceConnection?: { __typename?: 'PageMainContentBlogBlockReferenceConnection', edges?: Array<{ __typename?: 'PageMainContentBlogBlockReferenceEdge', node?: (
          { __typename?: 'BlogArticle' }
          & { ' $fragmentRefs'?: { 'BlogArticlePartsFragment': BlogArticlePartsFragment } }
        ) | null } | null> | null } | null } | null } & { ' $fragmentName'?: 'BlogPartsFragment' };

export type GetPageByUrlQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type GetPageByUrlQuery = { __typename?: 'Query', all_page?: { __typename?: 'AllPage', items?: Array<{ __typename?: 'Page', title?: string | null, url?: string | null, main_content?: Array<(
        { __typename?: 'PageMainContentActions' }
        & { ' $fragmentRefs'?: { 'ActionsPartsFragment': ActionsPartsFragment } }
      ) | (
        { __typename?: 'PageMainContentBlog' }
        & { ' $fragmentRefs'?: { 'BlogPartsFragment': BlogPartsFragment } }
      ) | (
        { __typename?: 'PageMainContentBuckets' }
        & { ' $fragmentRefs'?: { 'BucketsPartsFragment': BucketsPartsFragment } }
      ) | (
        { __typename?: 'PageMainContentHeroSection' }
        & { ' $fragmentRefs'?: { 'HeroPartsFragment': HeroPartsFragment } }
      ) | { __typename?: 'PageMainContentRichText' } | (
        { __typename?: 'PageMainContentSpotlight' }
        & { ' $fragmentRefs'?: { 'SpotlightPartsFragment': SpotlightPartsFragment } }
      ) | null> | null, global_field?: (
        { __typename?: 'Seo' }
        & { ' $fragmentRefs'?: { 'SeoPartsFragment': SeoPartsFragment } }
      ) | null, system?: (
        { __typename?: 'EntrySystemField' }
        & { ' $fragmentRefs'?: { 'SystemPartsFragment': SystemPartsFragment } }
      ) | null } | null> | null } | null };

export type GetPostByUrlQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type GetPostByUrlQuery = { __typename?: 'Query', all_blog_article?: { __typename?: 'AllBlogArticle', items?: Array<(
      { __typename?: 'BlogArticle' }
      & { ' $fragmentRefs'?: { 'BlogArticlePartsFragment': BlogArticlePartsFragment } }
    ) | null> | null } | null };

export type GetSettingsByUidQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetSettingsByUidQuery = { __typename?: 'Query', settings?: { __typename?: 'Settings', copyright?: string | null, site_title?: string | null, logoConnection?: (
      { __typename?: 'SysAssetConnection' }
      & { ' $fragmentRefs'?: { 'ImagePartsFragment': ImagePartsFragment } }
    ) | null, menuConnection?: { __typename?: 'SettingsMenuConnection', edges?: Array<{ __typename?: 'SettingsMenuEdge', node?: { __typename?: 'Menu', title?: string | null, menu_items?: Array<{ __typename?: 'MenuMenuItems', label?: string | null, external_link?: (
              { __typename?: 'Link' }
              & { ' $fragmentRefs'?: { 'LinkPartsFragment': LinkPartsFragment } }
            ) | null, internal_linkConnection?: { __typename?: 'MenuMenuItemsInternalLinkConnection', edges?: Array<{ __typename?: 'MenuMenuItemsInternalLinkEdge', node?: { __typename?: 'Page', title?: string | null, url?: string | null } | null } | null> | null } | null } | null> | null } | null } | null> | null } | null, social_links?: { __typename?: 'SocialLinks', social_links?: Array<{ __typename?: 'SocialLinksSocialLinks', name?: string | null, iconConnection?: (
          { __typename?: 'SysAssetConnection' }
          & { ' $fragmentRefs'?: { 'ImagePartsFragment': ImagePartsFragment } }
        ) | null, link?: (
          { __typename?: 'Link' }
          & { ' $fragmentRefs'?: { 'LinkPartsFragment': LinkPartsFragment } }
        ) | null } | null> | null } | null } | null };

export const ImagePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SysAssetConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ImagePartsFragment, unknown>;
export const LinkPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"linkParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]} as unknown as DocumentNode<LinkPartsFragment, unknown>;
export const BucketsPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"bucketsParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentBuckets"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buckets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"iconConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"linkParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SysAssetConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"linkParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]} as unknown as DocumentNode<BucketsPartsFragment, unknown>;
export const HeroPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"heroParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentHeroSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hero_section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"background_color"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"linkParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text_color"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SysAssetConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"linkParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]} as unknown as DocumentNode<HeroPartsFragment, unknown>;
export const ActionsPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"actionsParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentActions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"actions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"linkParts"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"linkParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]} as unknown as DocumentNode<ActionsPartsFragment, unknown>;
export const SpotlightPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"spotlightParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentSpotlight"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"spotlight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"caption"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imageConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SysAssetConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SpotlightPartsFragment, unknown>;
export const SeoPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"seoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Seo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}}]}}]} as unknown as DocumentNode<SeoPartsFragment, unknown>;
export const SystemPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"systemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EntrySystemField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content_type_uid"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]} as unknown as DocumentNode<SystemPartsFragment, unknown>;
export const BlogArticlePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blogArticleParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogArticle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"featured_imageConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"photoConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"global_field"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"seoParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"systemParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SysAssetConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"seoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Seo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"systemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EntrySystemField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content_type_uid"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]} as unknown as DocumentNode<BlogArticlePartsFragment, unknown>;
export const BlogPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blogParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentBlog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"blog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"linkParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogArticle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"blogArticleParts"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SysAssetConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"seoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Seo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"systemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EntrySystemField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content_type_uid"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"linkParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blogArticleParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogArticle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"featured_imageConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"photoConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"global_field"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"seoParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"systemParts"}}]}}]}}]} as unknown as DocumentNode<BlogPartsFragment, unknown>;
export const GetPageByUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageByUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"all_page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"main_content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentBuckets"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"bucketsParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentHeroSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"heroParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentActions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"actionsParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentSpotlight"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"spotlightParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentBlog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"blogParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"global_field"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"seoParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"systemParts"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SysAssetConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"linkParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"seoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Seo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"systemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EntrySystemField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content_type_uid"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blogArticleParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogArticle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"featured_imageConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"photoConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"global_field"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"seoParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"systemParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"bucketsParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentBuckets"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buckets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"iconConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"linkParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"heroParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentHeroSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hero_section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"background_color"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"linkParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text_color"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"actionsParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentActions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"actions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"linkParts"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"spotlightParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentSpotlight"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"spotlight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"caption"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imageConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blogParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageMainContentBlog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"blog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"linkParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogArticle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"blogArticleParts"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPageByUrlQuery, GetPageByUrlQueryVariables>;
export const GetPostByUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostByUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"all_blog_article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"blogArticleParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SysAssetConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"seoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Seo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"systemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EntrySystemField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content_type_uid"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blogArticleParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogArticle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"featured_imageConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"photoConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"global_field"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"seoParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"systemParts"}}]}}]}}]} as unknown as DocumentNode<GetPostByUrlQuery, GetPostByUrlQueryVariables>;
export const GetSettingsByUidDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSettingsByUid"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"settings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"copyright"}},{"kind":"Field","name":{"kind":"Name","value":"site_title"}},{"kind":"Field","name":{"kind":"Name","value":"logoConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Menu"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"menu_items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"external_link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"linkParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"internal_linkConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"social_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"social_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iconConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"linkParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SysAssetConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"linkParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]} as unknown as DocumentNode<GetSettingsByUidQuery, GetSettingsByUidQueryVariables>;