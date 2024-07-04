import { PrismicNextLink } from "@prismicio/next";
import React from "react";

export const Logo = () => (
  <PrismicNextLink href="/">
    <div className="flex flex-col">
      <div className="text-xl font-bold tracking-[.5em] text-white">
        PICKAROOM
      </div>
      <div className="text-xl font-bold text-white">Interior design studio</div>
    </div>
  </PrismicNextLink>
);
