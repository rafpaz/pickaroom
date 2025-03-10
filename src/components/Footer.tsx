import { FooterDocumentData } from "../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const Footer = ({
  logo,
  right_side_text,
  social_links,
  left_side_text,
  bottom_text,
  bottom_links,
}: FooterDocumentData) => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 w-full max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col justify-between">
            <PrismicRichText field={left_side_text} />
            <div className="flex gap-4 mt-4">
              {social_links.map(
                ({ link, icon }) =>
                  link.link_type === "Web" && (
                    <PrismicNextLink field={link} key={link.url}>
                      <PrismicNextImage field={icon} />
                    </PrismicNextLink>
                  ),
              )}
            </div>
          </div>
          <div>
            <PrismicRichText field={right_side_text} />
            <PrismicNextImage field={logo} className="mt-8" />
          </div>
        </div>
        <div className="flex mt-8 text-sm flex-row max-w-lg gap-4 max-[467px]:flex-col">
          <div className={"flex-1"}>{bottom_text}</div>
          {bottom_links.map((link) => (
            <PrismicNextLink
              field={link}
              key={link.text}
              className="underline"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
