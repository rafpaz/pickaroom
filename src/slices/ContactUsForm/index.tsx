"use client";

import { FC } from "react";
import CustomForm from "@/components/CustomForm";
import { Bounded } from "@/components/Bounded";
import type { SliceComponentProps } from "@prismicio/react";
import { type Content } from "@prismicio/client";
import { PrismicRichText } from "@/components/PrismicRichText";

type ContactUsFormProps = SliceComponentProps<Content.ContactUsFormSlice>;
/**
 * Component for "ContactUsForm" Slices.
 */
const ContactUsForm: FC<ContactUsFormProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded yPadding={"sm"}>
        <PrismicRichText
          field={slice.primary.title}
          globalClassName="text-center"
        />
        <CustomForm />
      </Bounded>
    </section>
  );
};

export default ContactUsForm;
