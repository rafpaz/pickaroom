import { PrismicNextLink } from "@prismicio/next";
import React from "react";

export const Logo = () => (
  <PrismicNextLink href="/">
    <div className="flex flex-col">
      <div className="text-xl font-bold tracking-[.5em]">PICKAROOM</div>
      <div className="text-xl font-bold">Interior design studio</div>
    </div>
  </PrismicNextLink>
);
