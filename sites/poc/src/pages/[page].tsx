import { GetServerSideProps } from "next";
import Head from "next/head";
import {
  Actions,
  Buckets,
  BucketsProps,
  FeaturedPosts,
  FeaturedPostsProps,
  Hero,
  HeroProps,
  Spotlight,
  SpotlightProps,
} from "ui";
import client from "../apollo-client";
import { GetPageByUrlDocument } from "../gql/graphql";
import { getPageByUrl } from "../contentstack/api";

const mainContentComponents: { [key: string]: any } = {
  // PageMainContentRichText: richText,
  PageMainContentBuckets: {
    Component: Buckets,
    mapper: mapBucketsToBucketsProps,
  },
  PageMainContentHeroSection: {
    Component: Hero,
    mapper: mapHeroToHeroProps,
  },
  PageMainContentActions: {
    Component: Actions,
  },
  PageMainContentBlog: {
    Component: FeaturedPosts,
    mapper: mapBlogToFeaturedPosts,
  },
  PageMainContentSpotlight: {
    Component: Spotlight,
    mapper: mapSpotlightToSpotlightProps,
  },
};

export default function Page({
  page,
}: {
  page: {
    system: {
      contentType: string;
      locale: string;
      pageRef: string;
    };
    metadata: { title: string; description: string };
    content: Array<{
      type: string;
      content: any;
    }>;
  };
}) {
  return page.content.map(({ type, content }) => {
    const { Component, mapper } = mainContentComponents[type] ?? {};
    const props = mapper ? mapper(content) : content;
    if (Component) {
      return (
        <>
          <Head>
            <title>{page.metadata.title}</title>
            <meta name="description" content={page.metadata.description} />
          </Head>
          <Component key={`${type}-${content.title}`} {...props} />
        </>
      );
    }

    return null;
  });
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = await getPageByUrl(`/${context.query.page ?? ""}`);
  return {
    props: {
      page,
    },
  };
};

function mapHeroToHeroProps(data: any): HeroProps {
  return {
    title: data.title,
    description: data.description,
    backgroundColor: data.background_color,
    textColor: data.text_color,
    link: data.link,
    image: {
      url: data.hero_image.imageConnection.edges[0].node.url,
      dimensions: data.hero_image.imageConnection.edges[0].node.dimension,
      position: data.hero_image.position,
    },
  };
}

function mapBucketsToBucketsProps(data: any): BucketsProps {
  return {
    title: data.title,
    description: data.description,
    buckets: data.actions.map((action: any) => {
      return {
        title: action.title,
        description: action.description,
        link: action.link,
        icon: {
          url: action.iconConnection.edges[0].node.url,
          dimensions: action.iconConnection.edges[0].node.dimension,
        },
      };
    }),
  };
}

function mapBlogToFeaturedPosts(data: any): FeaturedPostsProps {
  return {
    title: data.title,
    link: data.link,
    posts: data.referenceConnection.edges.map((post: any) => ({
      summary: post.node.summary,
      title: post.node.title,
      url: post.node.url,
      image: {
        url: post.node.featured_imageConnection.edges[0].node.url,
        dimensions: post.node.featured_imageConnection.edges[0].node.dimension,
      },
    })),
  };
}

function mapSpotlightToSpotlightProps(data: any): SpotlightProps {
  return {
    description: data.description,
    title: data.title,
    highlights: data.caption.map((highlight: any) => ({
      description: highlight.description,
      title: highlight.title,
      image: {
        url: highlight.imageConnection.edges[0].node.url,
        dimensions: highlight.imageConnection.edges[0].node.dimension,
      },
    })),
  };
}
