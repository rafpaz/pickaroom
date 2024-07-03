import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("up");
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setScrollDirection("up");
      } else if (currentScroll > lastScrollTop && currentScroll > 70) {
        console.log("down", currentScroll);
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return scrollDirection;
};

export default useScrollDirection;
