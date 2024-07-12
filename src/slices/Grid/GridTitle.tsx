"use client";

import { useIsVisible } from "@/components/__hooks__/useIsVisible";
import { PrismicRichText } from "@/components/PrismicRichText";
import { RichTextField } from "@prismicio/client";
import clsx from "clsx";
import { useRef } from "react";

const GridTitle = ({ title }: { title: RichTextField }): JSX.Element => {
  const titleRef = useRef(null);
  const isVisible = useIsVisible(titleRef);
  // bla

  return (
    <div
      ref={titleRef}
      className={clsx(
        "mb-4 transition-all overflow-hidden",
        isVisible ? "animate-slideInTop" : "opacity-0"
      )}
    >
      <PrismicRichText field={title} />
    </div>
  );
};

export default GridTitle;
