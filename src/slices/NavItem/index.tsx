import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { NavbarItem } from "@heroui/navbar";
import { Content, asLink, asText } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { ChevronDown } from "lucide-react";
import React from "react";

/**
 * Props for `NavItem`.
 */
export type NavItemProps = SliceComponentProps<Content.NavItemSlice>;

/**
 * Component for "NavItem" Slices.
 */
const NavItem = ({ slice }: NavItemProps): JSX.Element => {
  if (slice.variation === "default") {
    return (
      <NavbarItem className="text-black text-lg">
        <PrismicNextLink field={slice.primary.link}>
          <PrismicText field={slice.primary.label} />
        </PrismicNextLink>
      </NavbarItem>
    );
  }
  if (slice.variation === "menu") {
    return (
      <Dropdown className="bg-white" shouldBlockScroll={false}>
        <NavbarItem>
          <DropdownTrigger className="p-5">
            <Button
              className="p-0 text-lg bg-transparent data-[hover=true]:bg-transparent text-black antialiased"
              disableRipple
              endContent={<ChevronDown size={16} />}
              radius="sm"
              variant="light"
            >
              <PrismicText field={slice.primary.label} />
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          itemClasses={{
            base: "gap-4",
          }}
        >
          {slice.primary.menu_links.map((link) => (
            <DropdownItem
              className="text-black antialiased data-[hover=true]:underline data-[hover=true]:bg-white"
              key={asText(link.label)}
              textValue={asText(link.label)}
              href={asLink(link.link) ?? undefined}
            >
              {asText(link.label)}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
  return <div>ERROR</div>;
};

export default NavItem;
