"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Logo } from "./Logo";
import { SliceZone } from "@prismicio/react";
import { GlobalNavDocument } from "../../prismicio-types";
import { components } from "@/slices";
import useScrollDirection from "./__hooks__/useScrollDirection";
import CustomNavbarMenu from "./CustomNavbarMenu";
import cn from "@/lib/utils/cn";

export default function CustomNavbar({ data }: GlobalNavDocument) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const scrollDirection = useScrollDirection();

  const handleItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBlurred={false}
      maxWidth="xl"
      className={cn(
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
      <CustomNavbarMenu
        slices={data.slices}
        handleItemClick={handleItemClick}
      />
    </Navbar>
  );
}
