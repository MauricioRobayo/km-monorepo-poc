import Image from "next/image";
import { Menu } from "./menu";

export interface HeaderProps {
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
}
export function Header({ logo, siteTitle, menu }: HeaderProps) {
  return (
    <header className="flex justify-between max-w-screen-lg m-auto p-8">
      <Image src={logo.url} alt={siteTitle} {...logo.dimensions} />
      <Menu menu={menu} />
    </header>
  );
}
