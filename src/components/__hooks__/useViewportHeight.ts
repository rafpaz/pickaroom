import { useEffect } from "react";

function useViewportHeight() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    return () => window.removeEventListener("resize", setVh);
  }, []);
}

export default useViewportHeight;
