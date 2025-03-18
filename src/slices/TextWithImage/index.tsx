import { type Content, isFilled } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";
import cn from "@/lib/utils/cn";

type TextWithImageProps = SliceComponentProps<Content.TextWithImageSlice>;

const TextWithImage = ({ slice }: TextWithImageProps) => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" yPadding="sm" className="bg-white">
      {slice.variation === "imageWithText" && (
        <div className="mb-8 text-2xl flex gap-2 flex-col md:flex-row md:justify-between">
          <div>{slice.primary.left_title}</div>
          <div>{slice.primary.middle_title}</div>
          <div>{slice.primary.right_title}</div>
        </div>
      )}
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div
          className={cn(
            slice.variation === "default" && "order-1",
            slice.variation === "imageWithText" && "order-2",
          )}
        >
          <PrismicRichText field={slice.primary.text} />
          {slice.variation === "withButton" && slice.primary.buttonLink ? (
            <PrismicNextLink
              field={slice.primary.buttonLink}
              className="font-semibold"
            >
              {slice.primary.buttonText || "Learn more"}
            </PrismicNextLink>
          ) : null}
        </div>
        <div
          className={cn(
            slice.variation === "default" && "order-2",
            slice.variation === "imageWithText" && "order-1",
          )}
        >
          {isFilled.image(image) && (
            <div className="bg-gray-100">
              <PrismicNextImage
                field={image}
                sizes="100vw"
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
