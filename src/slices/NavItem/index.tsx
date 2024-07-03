import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { NavbarItem } from "@nextui-org/navbar";
import { Content, asText } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { ChevronDown } from "lucide-react";

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
      <NavbarItem className="text-white">
        <PrismicNextLink field={slice.primary.link}>
          <PrismicText field={slice.primary.label} />
        </PrismicNextLink>
      </NavbarItem>
    );
  }
  if (slice.variation === "menu") {
    return (
      <Dropdown>
        <NavbarItem className="text-white">
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"
              endContent={<ChevronDown />}
              radius="sm"
              variant="light"
            >
              <PrismicText field={slice.primary.label} />
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          className="w-[340px]"
          itemClasses={{
            base: "gap-4",
          }}
        >
          {slice.primary.menu_links.map((link) => (
            <DropdownItem
              key={asText(link.label)}
              textValue={asText(link.label)}
            >
              <PrismicNextLink field={link.link}>
                <PrismicText field={link.label} />
              </PrismicNextLink>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
  return <div>ERROR</div>;
};

export default NavItem;
