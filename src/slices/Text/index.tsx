import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";
import CustomAnimation from "@/components/CustomAnimation";
import cn from "@/lib/utils/cn";

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
      className={cn(
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
      {slice.variation === "textWithAnimation" && (
        <CustomAnimation animationType={slice.primary.animate_type}>
          {component(slice)}
        </CustomAnimation>
      )}
      {slice.variation === "default" && component(slice)}
      {slice.variation === "rightAlignedText" && (
        <div className="flex">
          <div className="flex-grow-1 w-full"></div>
          <div className="flex-grow-2">{component(slice)}</div>
        </div>
      )}
    </Bounded>
  );
};

export default Text;
