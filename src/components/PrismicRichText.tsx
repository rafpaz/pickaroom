import {
  PrismicRichText as BasePrismicRichText,
  type PrismicRichTextProps,
  type JSXMapSerializer,
} from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import { Heading } from "./Heading";

// Define keys for element-specific custom classNames.
export interface CustomClassNames {
  heading1?: string;
  heading2?: string;
  heading3?: string;
  paragraph?: string;
  oList?: string;
  oListItem?: string;
  list?: string;
  listItem?: string;
  preformatted?: string;
  strong?: string;
  hyperlink?: string;
}

// A variadic helper to merge class names.
function mergeClassNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Build default components with the ability to merge in both a global class and element-specific custom classes.
function getDefaultComponents(
  customClassNames?: CustomClassNames,
  globalClassName?: string,
): JSXMapSerializer {
  return {
    heading1: ({ children }) => (
      <Heading
        as="h1"
        size="xl"
        className={mergeClassNames(
          "mb-7 first:mt-0 last:mb-0 font-bold",
          globalClassName,
          customClassNames?.heading1,
        )}
      >
        {children}
      </Heading>
    ),
    heading2: ({ children }) => (
      <Heading
        as="h2"
        size="lg"
        className={mergeClassNames(
          "mb-7 first:mt-0 last:mb-0 tracking-wide",
          globalClassName,
          customClassNames?.heading2,
        )}
      >
        {children}
      </Heading>
    ),
    heading3: ({ children }) => (
      <Heading
        as="h3"
        size="sm"
        className={mergeClassNames(
          "mb-7 first:mt-0 last:mb-0",
          globalClassName,
          customClassNames?.heading3,
        )}
      >
        {children}
      </Heading>
    ),
    paragraph: ({ children }) => (
      <p
        className={mergeClassNames(
          "font-light text-lg mb-4 last:mb-0",
          globalClassName,
          customClassNames?.paragraph,
        )}
      >
        {children}
      </p>
    ),
    oList: ({ children }) => (
      <ol
        className={mergeClassNames(
          "mb-7 pl-4 last:mb-0 md:pl-6",
          globalClassName,
          customClassNames?.oList,
        )}
      >
        {children}
      </ol>
    ),
    oListItem: ({ children }) => (
      <li
        className={mergeClassNames(
          "mb-1 list-decimal pl-1 last:mb-0 md:pl-2",
          globalClassName,
          customClassNames?.oListItem,
        )}
      >
        {children}
      </li>
    ),
    list: ({ children }) => (
      <ul
        className={mergeClassNames(
          "mb-7 pl-4 last:mb-0 md:pl-6",
          globalClassName,
          customClassNames?.list,
        )}
      >
        {children}
      </ul>
    ),
    listItem: ({ children }) => (
      <li
        className={mergeClassNames(
          "mb-1 list-disc pl-1 last:mb-0 md:pl-2",
          globalClassName,
          customClassNames?.listItem,
        )}
      >
        {children}
      </li>
    ),
    preformatted: ({ children }) => (
      <pre
        className={mergeClassNames(
          "mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg",
          globalClassName,
          customClassNames?.preformatted,
        )}
      >
        <code>{children}</code>
      </pre>
    ),
    strong: ({ children }) => (
      <strong
        className={mergeClassNames(
          "font-bold",
          globalClassName,
          customClassNames?.strong,
        )}
      >
        {children}
      </strong>
    ),
    hyperlink: ({ children, node }) => (
      <PrismicNextLink
        field={node.data}
        className={mergeClassNames(
          "underline decoration-1 underline-offset-2",
          globalClassName,
          customClassNames?.hyperlink,
        )}
      >
        {children}
      </PrismicNextLink>
    ),
  };
}

interface ExtendedPrismicRichTextProps extends PrismicRichTextProps {
  customClassNames?: CustomClassNames;
  /** A class name that will be merged into every element */
  globalClassName?: string;
}

export function PrismicRichText({
  components,
  customClassNames,
  globalClassName,
  ...props
}: ExtendedPrismicRichTextProps) {
  const defaultComponents = getDefaultComponents(
    customClassNames,
    globalClassName,
  );

  return (
    <BasePrismicRichText
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
}
