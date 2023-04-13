import { getPageByUrl } from "contentstack";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { Actions, BucketsProps, FeaturedPosts, Hero, Spotlight } from "ui";

const mainContentComponents: { [key: string]: any } = {
  PageMainContentBuckets: BucketsProps,
  PageMainContentHeroSection: Hero,
  PageMainContentActions: Actions,
  PageMainContentBlog: FeaturedPosts,
  PageMainContentSpotlight: Spotlight,
};

export default function Page({
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return page.content?.map(({ type, content }) => {
    const Component = mainContentComponents[type!] ?? {};
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
