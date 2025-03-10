import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ImageSlider from "@/components/ImageSlider";

/**
 * Props for `BeforeAfterImage`.
 */
export type BeforeAfterImageProps =
  SliceComponentProps<Content.BeforeAfterImageSlice>;

/**
 * Component for "BeforeAfterImage" Slices.
 */
const BeforeAfterImage: FC<BeforeAfterImageProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ImageSlider
        beforeImage={slice.primary.before_image}
        afterImage={slice.primary.after_image}
      />
    </section>
  );
};

export default BeforeAfterImage;
