import { getBlogPost } from "../../contentstack/api-client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetServerSideProps } from "next/types";
import client from "../../apollo-client";
import { postQuery } from "../../contentstack/queries";
import { jsonToHtml } from "@contentstack/json-rte-serializer";

export interface PostProps {
  page: {
    system: {
      pageRef: string;
      contentType: string;
      locale: string;
    };
    metadata: {
      title: string;
      description: string;
    };
    date: string;
    title: string;
    content: string;
    image: {
      url: string;
      dimensions: {
        width: number;
        height: number;
      };
    };
    author: {
      name: string;
      url: string;
      image: {
        url: string;
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
  };
}
export default function Post({ page }: PostProps) {
  const { date, title, content, image, author, metadata } = page;
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
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
                alt={author.name}
                {...author.image.dimensions}
              />
              {author.name}
            </Link>
          </div>
        </div>
        <Image
          className="my-8 w-full"
          src={image.url}
          alt={title}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await client.query({
    query: postQuery,
    variables: { url: `/blog/${context.query.post}` },
  });

  const post = data.all_blog_article.items[0];

  return {
    props: {
      page: {
        system: {
          pageRef: post.system.uid,
          contentType: post.system.content_type_uid,
          locale: post.system.locale,
        },
        metadata: post.global_field,
        date: post.date,
        image: {
          dimensions: post.featured_imageConnection.edges[0].node.dimension,
          url: post.featured_imageConnection.edges[0].node.url,
        },
        title: post.title,
        content: jsonToHtml(data.all_blog_article.items[0].content.json),
        author: {
          name: post.authorConnection.edges[0].node.title,
          url: post.authorConnection.edges[0].node.url,
          image: {
            url: post.authorConnection.edges[0].node.photoConnection.edges[0]
              .node.url,
            dimensions:
              post.authorConnection.edges[0].node.photoConnection.edges[0].node
                .dimension,
          },
        },
      },
    },
  };
};
