import { type Content, isFilled } from "@prismicio/client";
import { PrismicText, type SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import cn from "@/lib/utils/cn";

type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

const Quote = ({ slice }: QuoteProps) => {
  return (
    <Bounded as="section" className="bg-white">
      {isFilled.richText(slice.primary.quote) && (
        <figure className="grid gap-6">
          <blockquote>
            <p
              className={cn(
                "text-xl leading-tight md:text-2xl font-extralight",
                !isFilled.keyText(slice.primary.source) && "text-center"
              )}
            >
              <span className="-ml-3.5 select-none md:-ml-5">&ldquo;</span>
              <PrismicText field={slice.primary.quote} />
              <span className="select-none">&rdquo;</span>
            </p>
          </blockquote>
          {isFilled.keyText(slice.primary.source) && (
            <figcaption className="text-right">
              &mdash; {slice.primary.source}
            </figcaption>
          )}
        </figure>
      )}
    </Bounded>
  );
};

export default Quote;
