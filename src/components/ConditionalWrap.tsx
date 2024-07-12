import type { ElementType, ReactNode, FC } from "react";
import { createElement } from "react";

interface ConditionalWrapProps<T extends ElementType> {
  if?: boolean;
  with: T;
  wrapperProps: React.ComponentPropsWithoutRef<T>;
  children: NonNullable<ReactNode>;
}

const ConditionalWrap = <T extends ElementType = "div">({
  if: condition,
  with: wrapper,
  wrapperProps,
  children,
}: ConditionalWrapProps<T>) =>
  condition ? (
    createElement(wrapper, wrapperProps, [children])
  ) : (
    <>{children}</>
  );

export default ConditionalWrap;
