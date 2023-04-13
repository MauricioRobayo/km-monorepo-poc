import { getPageByUrl } from "contentstack";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Actions, Buckets, FeaturedPosts, Hero, Spotlight } from "ui";

const mainContentComponents: { [key: string]: any } = {
  PageMainContentBuckets: Buckets,
  PageMainContentHeroSection: Hero,
  PageMainContentActions: Actions,
  PageMainContentBlog: FeaturedPosts,
  PageMainContentSpotlight: Spotlight,
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
