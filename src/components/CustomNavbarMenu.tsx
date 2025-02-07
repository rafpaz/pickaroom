import { Accordion, AccordionItem } from "@heroui/accordion";
import { NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
import { asText, SliceZone } from "@prismicio/client";
import { NavItemSlice } from "../../prismicio-types";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

interface NavbarMenuItemProps {
  slices: SliceZone<NavItemSlice>;
  handleItemClick?: () => void;
}

const CustomNavbarMenu: React.FC<NavbarMenuItemProps> = ({
  slices,
  handleItemClick,
}) => {
  return (
    <NavbarMenu>
      {slices.map((slice, index) =>
        slice.variation === "default" ? (
          <NavbarMenuItem key={index}>
            <PrismicNextLink
              field={slice.primary.link}
              onClick={handleItemClick}
            >
              <PrismicText field={slice.primary.label} />
            </PrismicNextLink>
          </NavbarMenuItem>
        ) : (
          <NavbarMenuItem key={index} className="p-0">
            <Accordion className="p-0">
              <AccordionItem
                title={asText(slice.primary.label)}
                classNames={{
                  trigger: "p-0",
                  titleWrapper: "flex-grow-0",
                  content: "px-4",
                }}
              >
                {slice.primary.menu_links.map((item, index) => (
                  <NavbarMenuItem
                    key={`${item.label}-${index}`}
                    className="mt-2"
                  >
                    <PrismicNextLink
                      onClick={handleItemClick}
                      color={
                        index === 2
                          ? "primary"
                          : index === slice.items.length - 1
                            ? "danger"
                            : "foreground"
                      }
                      className="w-full"
                      field={item.link}
                    >
                      <PrismicText field={item.label} />
                    </PrismicNextLink>
                  </NavbarMenuItem>
                ))}
              </AccordionItem>
            </Accordion>
          </NavbarMenuItem>
        )
      )}
    </NavbarMenu>
  );
};
export default CustomNavbarMenu;
