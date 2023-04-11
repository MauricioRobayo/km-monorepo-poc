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
import {
  BucketsQuery,
  FeaturedPostsQuery,
  HeroQuery,
  SpotlightQuery,
  GET_PAGE_BY_URL,
} from "../contentstack/queries";

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
  const { data } = await client.query({
    query: GET_PAGE_BY_URL,
    variables: { url: `/${context.query.page ?? ""}` },
  });
  const {
    system,
    main_content: content,
    global_field: metadata,
  } = data.all_page.items[0];

  return {
    props: {
      page: {
        system: {
          contentType: system.content_type_uid,
          locale: system.locale,
          pageRef: system.uid,
        },
        metadata: metadata,
        content: content.map((block: any) => {
          return Object.fromEntries(
            Object.entries(block).map(([key, value]) => {
              if (key === "__typename") {
                return ["type", value];
              } else {
                return ["content", value];
              }
            })
          );
        }),
      },
    },
  };
};

function mapHeroToHeroProps(data: HeroQuery): HeroProps {
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

function mapBucketsToBucketsProps(data: BucketsQuery): BucketsProps {
  return {
    title: data.title,
    description: data.description,
    buckets: data.actions.map((action) => {
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

function mapBlogToFeaturedPosts(data: FeaturedPostsQuery): FeaturedPostsProps {
  return {
    title: data.title,
    link: data.link,
    posts: data.referenceConnection.edges.map((post) => ({
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

function mapSpotlightToSpotlightProps(data: SpotlightQuery): SpotlightProps {
  return {
    description: data.description,
    title: data.title,
    highlights: data.caption.map((highlight) => ({
      description: highlight.description,
      title: highlight.title,
      image: {
        url: highlight.imageConnection.edges[0].node.url,
        dimensions: highlight.imageConnection.edges[0].node.dimension,
      },
    })),
  };
}
