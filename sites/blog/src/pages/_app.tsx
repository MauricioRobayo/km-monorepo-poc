import type { AppProps } from "next/app";
import App, { AppContext } from "next/app";
import { getSettings } from "contentstack";
import { Footer, Header } from "ui";
import "../styles/globals.css";

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

export default function BlogApp({ Component, pageProps, settings }: TProps) {
  const { system } = pageProps.page ?? {};
  return (
    <div
      className="text-slate-600"
      data-contenttype={system?.contentType ?? false}
      data-locale={system?.locale ?? false}
      data-pageref={system?.pageRef ?? false}
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

BlogApp.getInitialProps = async (context: AppContext) => {
  const [ctx, settings] = await Promise.all([
    App.getInitialProps(context),
    getSettings(),
  ]);

  return {
    ...ctx,
    settings,
  };
};
