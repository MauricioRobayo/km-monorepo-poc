import Image from "next/image";
import { ButtonLink } from "./button-link";
import { type Hero as HeroProps } from "contentstack/src/mappers/hero.mapper";

export function Hero({
  backgroundColor,
  description,
  image,
  link,
  textColor,
  title,
}: HeroProps) {
  return (
    <div style={{ backgroundColor, color: textColor }}>
      <div
        className={`p-16 flex max-w-screen-xl m-auto gap-8 justify-between ${
          image.position === "Left" ? "flex-row-reverse" : ""
        }`}
      >
        <div className="flex flex-col justify-center gap-4 max-w-xl">
          <div className="text-3xl font-bold">{title}</div>
          <div>{description}</div>
          {link?.href && <ButtonLink href={link.href}>{link.title}</ButtonLink>}
        </div>
        <Image src={image.url} alt="" {...image.dimensions}></Image>
      </div>
    </div>
  );
}
