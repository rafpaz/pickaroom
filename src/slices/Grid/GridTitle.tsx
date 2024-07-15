"use client";

import { useIsVisible } from "@/components/__hooks__/useIsVisible";
import { PrismicRichText } from "@/components/PrismicRichText";
import cn from "@/lib/utils/cn";
import { RichTextField } from "@prismicio/client";
import { useRef } from "react";

const GridTitle = ({ title }: { title: RichTextField }): JSX.Element => {
  const titleRef = useRef(null);
  const isVisible = useIsVisible(titleRef);

  return (
    <div
      ref={titleRef}
      className={cn(
        "mb-4 transition-all overflow-hidden",
        isVisible ? "animate-slideInTop" : "opacity-0"
      )}
    >
      <PrismicRichText field={title} />
    </div>
  );
};

export default GridTitle;
