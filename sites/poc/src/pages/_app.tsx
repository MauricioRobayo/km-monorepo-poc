import type { AppProps } from "next/app";
import App, { AppContext } from "next/app";
import { Footer, Header } from "ui";
import client from "../apollo-client";
import "../styles/globals.css";
import {
  GetSettingsByUidDocument,
  GetSettingsByUidQuery,
} from "../gql/graphql";

export interface PocSettings {
  copyright: string;
  siteTitle: string;
  logo: {
    url: string;
    dimensions: {
      width: number;
      height: number;
    };
  };
  menu: Array<{
    label: string;
    link: {
      href: string;
      title: string;
    };
  }>;
  socialLinks: Array<{
    name: string;
    logo: {
      url: string;
      dimensions: {
        width: number;
        height: number;
      };
    };
    link: {
      href: string;
      title: string;
    };
  }>;
}

type TProps = Pick<AppProps, "Component" | "pageProps"> & {
  settings: PocSettings;
};

export default function PocApp({ Component, pageProps, settings }: TProps) {
  const { system } = pageProps.page;
  return (
    <div
      className="text-slate-600"
      data-contenttype={system.contentType}
      data-locale={system.locale}
      data-pageref={system.pageRef}
    >
      <Header
        logo={settings.logo}
        siteTitle={settings.siteTitle}
        menu={settings.menu}
      />
      <Component {...pageProps} />
      <Footer {...settings} />
    </div>
  );
}

PocApp.getInitialProps = async (context: AppContext) => {
  const [ctx, query] = await Promise.all([
    App.getInitialProps(context),
    client.query({
      query: GetSettingsByUidDocument,
      variables: { uid: "blt57e0dcd59e4ebe6e" },
    }),
  ]);

  return {
    ...ctx,
    settings: query.data.settings
      ? mapQueryResultToSettings(query.data.settings)
      : null,
  };
};

function mapQueryResultToSettings(
  settings: NonNullable<GetSettingsByUidQuery["settings"]>
) {
  return {
    copyright: settings.copyright,
    siteTitle: settings.site_title,
    logo: {
      url: settings.logoConnection?.edges?.[0]?.node?.url,
      dimensions: settings.logoConnection?.edges?.[0]?.node?.dimension,
    },
    socialLinks: settings.social_links?.social_links?.map((socialLink) => ({
      logo: {
        url: socialLink?.iconConnection?.edges?.[0]?.node?.url,
        dimensions: socialLink?.iconConnection?.edges?.[0]?.node?.dimension,
      },
      name: socialLink?.name,
      link: socialLink?.link,
    })),
    menu: settings.menuConnection?.edges?.[0]?.node?.menu_items?.map(
      (menuItem) => ({
        label: menuItem?.label,
        link: {
          href:
            menuItem?.internal_linkConnection?.edges?.[0]?.node?.url ||
            menuItem?.external_link?.href,
          title:
            menuItem?.internal_linkConnection?.edges?.[0]?.node?.title ||
            menuItem?.external_link?.title,
        },
      })
    ),
  };
}
