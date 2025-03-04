import { type Content, isFilled } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import cn from "@/lib/utils/cn";
import CustomImage from "@/components/CutomImage";

type ImageProps = SliceComponentProps<Content.ImageSlice>;

const Image = ({ slice, index }: ImageProps) => {
  const image = slice.primary.image;

  return (
    <Bounded
      as="section"
      yPadding="sm"
      className={cn("bg-white", index === 0 && "pt-0 md:pt-0")}
    >
      {isFilled.image(image) && (
        <div className="bg-gray-100">
          {/*<PrismicNextImage field={image} sizes="100vw" className="w-full" />*/}
          <CustomImage
            field={image}
            sizes="100vw"
            className="w-full h-full"
            parentClassName="w-full h-full"
          />
        </div>
      )}
    </Bounded>
  );
};

export default Image;
