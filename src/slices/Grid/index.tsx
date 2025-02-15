import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import CustomAnimation from "@/components/CustomAnimation";

/**
 * Props for `Grid`.
 */
export type GridProps = SliceComponentProps<Content.GridSlice>;

/**
 * Component for "Grid" Slices.
 */
const Grid = ({ slice }: GridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded yPadding="sm" className="relative">
        <CustomAnimation className="mb-16">
          <PrismicRichText field={slice.primary.title} />
        </CustomAnimation>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {slice.primary.items.map((item, index) => (
            <div key={index}>
              <div className="aspect-w-[214] aspect-h-[270]">
                <PrismicNextImage field={item.image} />
              </div>
              <div className={"mt-4"}>
                <PrismicRichText
                  field={item.rtlabel}
                  globalClassName={"tracking-widest mb-0"}
                />

                <PrismicRichText field={item.rtdescription} />
              </div>
            </div>
          ))}
        </div>
      </Bounded>
    </section>
  );
};

export default Grid;
