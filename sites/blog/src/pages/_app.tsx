import type { AppProps } from "next/app";
import App, { AppContext } from "next/app";
import { Footer, Header } from "ui";
import client from "../apollo-client";
import "../styles/globals.css";
import {
  GetSettingsByUidDocument,
  GetSettingsByUidQuery,
} from "../gql/graphql";
import { getSettings } from "../contentstack/api";

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
  const [ctx, settings] = await Promise.all([
    App.getInitialProps(context),
    getSettings(),
  ]);

  return {
    ...ctx,
    settings,
  };
};
