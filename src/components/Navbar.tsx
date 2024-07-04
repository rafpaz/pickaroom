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
import { PrismicNextLink } from "@prismicio/next";
import { Logo } from "./Logo";
import { SliceZone } from "@prismicio/react";
import { GlobalNavDocument } from "../../prismicio-types";
import { components } from "@/slices";
import useScrollDirection from "./__hooks__/useScrollDirection";
import clsx from "clsx";

export default function CustomNavbar({ data }: GlobalNavDocument) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const scrollDirection = useScrollDirection();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

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
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <SliceZone slices={data.slices} components={components} />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <PrismicNextLink
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full"
              href="#"
            >
              {item}
            </PrismicNextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
