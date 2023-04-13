import type { AppProps } from "next/app";
import App, { AppContext } from "next/app";
import { getSettings } from "contentstack";
import { Footer, Header } from "ui";
import "../styles/globals.css";
import type { Settings } from "types";

type TProps = Pick<AppProps, "Component" | "pageProps"> & {
  settings: Settings;
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
  const uid = process.env.CONTENTSTACK_SETTINGS_UID;
  if (!uid) {
    throw new Error("Settings uid env var is missing.");
  }
  const [ctx, settings] = await Promise.all([
    App.getInitialProps(context),
    getSettings(uid),
  ]);

  return {
    ...ctx,
    settings,
  };
};
