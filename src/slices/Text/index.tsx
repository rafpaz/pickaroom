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

const getMarginSize = (
  selectValue: TextProps["slice"]["primary"]["margin_size"] = "Medium"
) => {
  switch (selectValue) {
    case "Small":
      return 8;
    case "Large":
      return 32;
    default:
      return 20;
  }
};

const getMarginByDropdown = (
  marginType: TextProps["slice"]["primary"]["margins"] = "Both",
  marginSize: TextProps["slice"]["primary"]["margin_size"] = "Medium"
) => {
  const marginValue = getMarginSize(marginSize);
  switch (marginType) {
    case "Top":
      return `pt-${marginValue}`;
    case "Bottom":
      return `pb-${marginValue}`;
    case "None":
      return "py-0";
    default:
      return `py-${marginValue}`;
  }
};

const Text = ({ slice }: TextProps) => {
  return (
    <Bounded
      as="section"
      yPadding="none"
      className={clsx(
        "bg-white leading-relaxed",
        getMarginByDropdown(slice.primary.margins, slice.primary.margin_size)
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
