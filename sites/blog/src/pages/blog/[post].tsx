import { getPostByUrl } from "contentstack";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next/types";

export default function Post({
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { date, title, content, image, author, metadata } = page;
  return (
    <>
      {metadata && (
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description ?? ""} />
        </Head>
      )}
      <div className="p-16 m-auto max-w-screen-lg">
        <div className="text-4xl font-bold">{title}</div>
        <div className="text-sm">
          <div>{date}</div>
          <div className="flex items-center gap-2 text-base mt-4">
            by{" "}
            <Link
              href={author.url}
              style={{ color: "#715cdd" }}
              className="flex items-center gap-2"
            >
              <Image
                className="w-8 h-8"
                src={author.image.url}
                alt={author.name ?? ""}
                {...author.image.dimensions}
              />
              {author.name}
            </Link>
          </div>
        </div>
        <Image
          className="my-8 w-full"
          src={image.url}
          alt={title ?? ""}
          {...image.dimensions}
        />
        <article
          className="prose-xl prose"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const post = await getPostByUrl(`/blog/${context.query.post}`);

  return {
    props: {
      page: post,
    },
  };
}
