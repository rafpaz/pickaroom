import { FooterDocumentData, GlobalNavDocument } from "../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";

const Footer = ({ logo, social_links, left_side_text }: FooterDocumentData) => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {logo && (
              <img
                src={logo.url}
                alt={logo.alt || "Logo"}
                className="h-12 w-auto"
              />
            )}
          </div>
          <div className="mb-4 md:mb-0">
            {left_side_text && <PrismicRichText field={left_side_text} />}
          </div>
          <div className="flex space-x-4">
            {social_links?.map((item, index) => (
              <a
                key={index}
                href={item.link.link_type || "#"}
                className="text-gray-600 hover:text-gray-900"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
