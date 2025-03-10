"use client";
import { useState, useRef, useEffect, FC } from "react";
import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

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
    <div className={"m-auto px-6 w-full max-w-7xl"}>
      <div
        ref={containerRef}
        className="relative w-full h-[600px] overflow-hidden select-none"
      >
        <PrismicNextImage
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          field={beforeImage}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <PrismicNextImage
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            field={afterImage}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute top-0 h-full cursor-pointer"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          <div className="w-[4px] h-full bg-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
