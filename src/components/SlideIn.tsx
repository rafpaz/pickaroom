"use client";

import { useIsVisible } from "@/components/__hooks__/useIsVisible";
import cn from "@/lib/utils/cn";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

const SlideIn: React.FC<
  PropsWithChildren & {
    direction?: "top" | "left";
    trigger?: boolean;
    active?: boolean;
  }
> = ({ children, direction = "top", trigger, active = true }) => {
  const elemRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const isVisible = useIsVisible(elemRef);

  useEffect(() => {
    if ((isVisible || trigger) && !showAnimation) {
      setShowAnimation(true);
    }
  }, [isVisible, trigger, showAnimation]);

  if (!active) return children;

  const animation =
    direction === "top" ? "animate-slideInTop" : "animate-slideInLeft";

  return (
    <div
      ref={elemRef}
      className={cn(
        "mb-4 transition-all overflow-hidden",
        showAnimation ? animation : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export default SlideIn;
