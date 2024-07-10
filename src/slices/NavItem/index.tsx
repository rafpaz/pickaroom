import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { NavbarItem } from "@nextui-org/navbar";
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
  const [isOpen, setIsOpen] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState<
    NodeJS.Timeout | undefined
  >();

  const delay = 1000; // Adjust the delay as needed

  if (slice.variation === "default") {
    return (
      <NavbarItem className="text-white">
        <PrismicNextLink field={slice.primary.link}>
          <PrismicText field={slice.primary.label} />
        </PrismicNextLink>
      </NavbarItem>
    );
  }
  if (slice.variation === "menu") {
    return (
      <Dropdown className="bg-customGray" isOpen={isOpen}>
        <NavbarItem>
          <DropdownTrigger className="p-5">
            <Button
              className="p-0 text-medium bg-transparent data-[hover=true]:bg-transparent text-white antialiased"
              disableRipple
              endContent={<ChevronDown size={16} />}
              radius="sm"
              variant="light"
              onMouseEnter={() => {
                clearTimeout(timeoutId);
                setIsOpen(true);
              }}
              onMouseLeave={() => {
                const id = setTimeout(() => setIsOpen(false), delay);
                setTimeoutId(id);
              }}
            >
              <PrismicText field={slice.primary.label} />
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          onMouseEnter={() => {
            clearTimeout(timeoutId);
            setIsOpen(true);
          }}
          onMouseLeave={() => {
            setIsOpen(false);
          }}
          itemClasses={{
            base: "gap-4",
          }}
        >
          {slice.primary.menu_links.map((link) => (
            <DropdownItem
              className="text-white antialiased"
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
