import { PrismicNextLink } from "@prismicio/next";
import { LinkField } from "@prismicio/client";

interface OptionalPrismicNextLinkProps {
  field: LinkField | null | undefined;
  children?: React.ReactNode;
  className?: string;
}

export const OptionalPrismicNextLink: React.FC<
  OptionalPrismicNextLinkProps
> = ({ field, children, className }) => {
  if (field?.link_type === "Any") {
    return <div className={className}>{children}</div>;
  }

  return (
    <PrismicNextLink field={field} className={className}>
      {children}
    </PrismicNextLink>
  );
};
