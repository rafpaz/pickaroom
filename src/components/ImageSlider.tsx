"use client";
import { useState, useRef, useEffect, FC } from "react";
import { ImageField } from "@prismicio/client";

interface ImageSliderProps {
  beforeImage: ImageField;
  afterImage: ImageField;
}

const ImageSlider: FC<ImageSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef<boolean>(false);

  // Begin dragging when the user presses/touches the slider handle
  const startDrag = (): void => {
    draggingRef.current = true;
  };

  // Stop dragging when the user releases the mouse/touch
  const stopDrag = (): void => {
    draggingRef.current = false;
  };

  // Update slider based on the client's X position
  const handleDrag = (clientX: number): void => {
    const container = containerRef.current;
    if (!container) return;
    const { left, width } = container.getBoundingClientRect();
    let newPosition = ((clientX - left) / width) * 100;
    newPosition = Math.max(0, Math.min(newPosition, 100));
    setSliderPosition(newPosition);
  };

  // Mouse and touch event handlers
  const onMouseMove = (e: MouseEvent): void => {
    if (draggingRef.current) {
      handleDrag(e.clientX);
    }
  };

  const onTouchMove = (e: TouchEvent): void => {
    if (draggingRef.current && e.touches.length > 0) {
      handleDrag(e.touches[0].clientX);
    }
  };

  // Attach event listeners to handle dragging even when the cursor leaves the slider handle
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", stopDrag);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] overflow-hidden"
    >
      {/* Background image (Before) */}
      <img
        src={typeof beforeImage === "string" ? beforeImage : beforeImage.url}
        alt="Before"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* After image using clip-path to reveal the left portion */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={typeof afterImage === "string" ? afterImage : afterImage.url}
          alt="After"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      {/* Slider handle */}
      <div
        className="absolute top-0 h-full w-2 bg-white cursor-pointer"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      />
    </div>
  );
};

export default ImageSlider;
