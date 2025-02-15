import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React from "react";
import { ImageField } from "@prismicio/client";

export const Logo = ({ image }: { image: ImageField }) => (
  <PrismicNextLink href="/">
    <div className="flex flex-col">
      <PrismicNextImage field={image} height={200} width={200} />
    </div>
  </PrismicNextLink>
);
