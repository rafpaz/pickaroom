"use client";

import { ImageProps } from "next/image";
import { useState } from "react";
import cn from "@/lib/utils/cn";
import { PrismicNextImage } from "@prismicio/next";
import { ImageField } from "@prismicio/client";

type CustomImageProps = {
  parentClassName?: ImageProps["className"];
  field: ImageField;
} & ImageProps;

const CustomImage = (props: CustomImageProps) => {
  const { parentClassName, className, alt, ...rest } = props;
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isLoading ? "animate-pulse" : "animate-none",
        parentClassName,
      )}
    >
      <PrismicNextImage
        className={cn(
          "duration-150 ease-in-out",
          isLoading ? "scale-[1.02] blur-xl" : "scale-100 blur-0",
          className,
        )}
        onLoad={() => setIsLoading(false)}
        fill
        alt=""
        {...rest}
      />
    </div>
  );
};

export default CustomImage;
