import Link from "next/link";
import { useRouter } from "next/router";

export interface MenuProps {
  menu: Array<{
    label: string;
    link: {
      href: string;
      title: string;
    };
  }>;
}
export function Menu({ menu }: MenuProps) {
  const { asPath } = useRouter();
  return (
    <nav className="flex gap-4">
      {menu.map((item) => {
        if (item.link.href === asPath) {
          return (
            <div key={item.label} className="">
              {item.label}
            </div>
          );
        }
        return (
          <Link
            key={item.label}
            href={item.link.href}
            className="font-bold"
            style={{ color: "#715cdd" }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
