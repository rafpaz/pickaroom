import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { asText, SliceZone } from "@prismicio/client";
import { NavItemSlice } from "../../prismicio-types";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

interface NavbarMenuItemProps {
  slices: SliceZone<NavItemSlice>;
}

const CustomNavbarMenu: React.FC<NavbarMenuItemProps> = ({ slices }) => {
  return (
    <NavbarMenu>
      {slices.map((slice, index) =>
        slice.variation === "default" ? (
          <NavbarMenuItem key={index}>
            <PrismicNextLink field={slice.primary.link}>
              <PrismicText field={slice.primary.label} />
            </PrismicNextLink>
          </NavbarMenuItem>
        ) : (
          <NavbarMenuItem key={index}>
            <Accordion>
              <AccordionItem title={asText(slice.primary.label)}>
                {slice.primary.menu_links.map((item, index) => (
                  <NavbarMenuItem key={`${item.label}-${index}`}>
                    <PrismicNextLink
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
      {/* <Accordion>
        <AccordionItem title="BLA">
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
        </AccordionItem>
      </Accordion> */}
    </NavbarMenu>
  );
};
export default CustomNavbarMenu;
