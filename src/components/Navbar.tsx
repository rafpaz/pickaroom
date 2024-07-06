"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { PrismicNextLink } from "@prismicio/next";
import { Logo } from "./Logo";
import { SliceZone } from "@prismicio/react";
import { GlobalNavDocument } from "../../prismicio-types";
import { components } from "@/slices";
import useScrollDirection from "./__hooks__/useScrollDirection";
import clsx from "clsx";
import CustomNavbarMenu from "./CustomNavbarMenu";

export default function CustomNavbar({ data }: GlobalNavDocument) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className={clsx(
        "top-0 fixed transition-opacity bg-custom-gradient backdrop-blur-[1px] duration-500",
        scrollDirection === "down" && "opacity-0"
      )}
      height={"124px"}
    >
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <SliceZone slices={data.slices} components={components} />
      </NavbarContent>
      <CustomNavbarMenu slices={data.slices} />
    </Navbar>
  );
}
