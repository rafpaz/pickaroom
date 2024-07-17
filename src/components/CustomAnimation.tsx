"use client";

import { useIsVisible } from "@/components/__hooks__/useIsVisible";
import cn from "@/lib/utils/cn";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

const CustomAnimation: React.FC<
  PropsWithChildren & {
    animationType?: "slideInLeft" | "slideInTop" | "jelloHorizontal";
    trigger?: boolean;
    active?: boolean;
    className?: string;
  }
> = ({
  children,
  animationType = "slideInLeft",
  trigger,
  active = true,
  className,
}) => {
  const elemRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const isVisible = useIsVisible(elemRef);

  useEffect(() => {
    if ((isVisible || trigger) && !showAnimation) {
      setShowAnimation(true);
    }
  }, [isVisible, trigger, showAnimation]);

  if (!active) return children;

  return (
    <div
      ref={elemRef}
      className={cn(
        "mb-4 transition-all overflow-hidden",
        className,
        showAnimation &&
          animationType === "slideInLeft" &&
          "animate-slideInLeft",
        showAnimation && animationType === "slideInTop" && "animate-slideInTop",
        showAnimation &&
          animationType === "jelloHorizontal" &&
          "animate-jelloHorizontal"
      )}
    >
      {children}
    </div>
  );
};

export default CustomAnimation;
