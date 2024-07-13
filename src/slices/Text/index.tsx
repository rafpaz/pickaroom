import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";
import SlideIn from "@/components/SlideIn";

type TextProps = SliceComponentProps<Content.TextSlice>;

const component = (slice: Content.TextSlice) => (
  <PrismicRichText field={slice.primary.text} />
);

const Text = ({ slice }: TextProps) => {
  const margins = slice.primary.margins;
  const marginSize = slice.primary.margin_size;
  return (
    <Bounded
      as="section"
      yPadding="none"
      className={clsx(
        "bg-white leading-relaxed",
        margins === "None" && "py-0",
        margins === "Top" && marginSize === "Large" && "pt-32",
        margins === "Bottom" && marginSize === "Large" && "pb-32",
        margins === "Both" && marginSize === "Large" && "py-32",
        margins === "Top" && marginSize === "Small" && "pt-8",
        margins === "Bottom" && marginSize === "Small" && "pb-8",
        margins === "Both" && marginSize === "Small" && "py-8",
        margins === "Top" && marginSize === "Medium" && "pt-20",
        margins === "Bottom" && marginSize === "Medium" && "pb-20",
        margins === "Both" && marginSize === "Medium" && "py-20"
      )}
    >
      {slice.variation === "textWithAnimation" ? (
        <SlideIn>{component(slice)}</SlideIn>
      ) : (
        component(slice)
      )}
    </Bounded>
  );
};

export default Text;
