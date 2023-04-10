import Image from "next/image";
import { Menu } from "./menu";
import Link from "next/link";

export interface FooterProps {
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
export function Footer({
  logo,
  siteTitle,
  copyright,
  menu,
  socialLinks,
}: FooterProps) {
  return (
    <div className="flex max-w-screen-lg p-16 justify-between m-auto">
      <Image src={logo.url} alt={siteTitle} {...logo.dimensions} />
      <div className="flex flex-col items-center gap-2 text-sm">
        <Menu menu={menu} />
        <div>{copyright}</div>
      </div>
      <div className="flex gap-4">
        {socialLinks.map((link) => {
          return (
            <Link key={link.name} href={link.link.href}>
              <Image
                src={link.logo.url}
                alt={link.name}
                {...link.logo.dimensions}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
