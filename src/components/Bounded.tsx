import cn from "@/lib/utils/cn";
import type { ReactNode } from "react";

type BoundedProps = {
  as?: "div" | "section" | "header";
  yPadding?: "none" | "sm" | "base" | "lg";
  collapsible?: boolean;
  className?: string;
  children?: ReactNode;
};

export function Bounded({
  as: Comp = "div",
  yPadding = "base",
  collapsible = true,
  className,
  children,
}: BoundedProps) {
  return (
    <Comp
      data-collapsible={collapsible}
      className={cn(
        yPadding === "none" && "",
        yPadding === "sm" && "py-8 md:py-10",
        yPadding === "base" && "py-16 md:py-16",
        yPadding === "lg" && "py-32 md:py-48",
        className,
      )}
    >
      <div className="px-6 mx-auto w-full max-w-7xl">{children}</div>
    </Comp>
  );
}
