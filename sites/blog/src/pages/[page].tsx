import { getPageByUrl } from "contentstack";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { Actions, Buckets, FeaturedPosts, Hero, Spotlight } from "ui";

const mainContentComponents = {
  PageMainContentBuckets: Buckets,
  PageMainContentHeroSection: Hero,
  PageMainContentActions: Actions,
  PageMainContentBlog: FeaturedPosts,
  PageMainContentSpotlight: Spotlight,
  PageMainContentRichText: () => null,
};

export default function Page({
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return page.content?.map(({ type, content }) => {
    if (!type) {
      return null;
    }
    const Component = mainContentComponents[type] ?? {};
    if (Component) {
      return (
        <>
          {page.metadata && (
            <Head>
              <title>{page.metadata.title ?? ""}</title>
              <meta
                name="description"
                content={page.metadata.description ?? ""}
              />
            </Head>
          )}
          <Component key={`${type}-${content.title}`} {...content} />
        </>
      );
    }

    return null;
  });
}

export const getServerSideProps = async (context: any) => {
  const page = await getPageByUrl(`/${context.query.page ?? ""}`);
  return {
    props: {
      page,
    },
  };
};
