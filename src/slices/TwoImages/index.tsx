import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `TwoImages`.
 */
export type TwoImagesProps = SliceComponentProps<Content.TwoImagesSlice>;

/**
 * Component for "TwoImages" Slices.
 */
const TwoImages = ({ slice }: TwoImagesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded as="section" yPadding="sm" className="bg-white">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="order-1">
            {isFilled.image(slice.primary.first_image) && (
              <div className="bg-gray-100">
                <PrismicNextImage
                  field={slice.primary.first_image}
                  sizes="100vw"
                  className="w-full"
                />
              </div>
            )}
          </div>
          <div className="order-2">
            {isFilled.image(slice.primary.second_image) && (
              <div className="bg-gray-100">
                <PrismicNextImage
                  field={slice.primary.second_image}
                  sizes="100vw"
                  className="w-full"
                />
              </div>
            )}
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default TwoImages;
