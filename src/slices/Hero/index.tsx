import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";
import ConditionalWrap from "@/components/ConditionalWrap";
import cn from "@/lib/utils/cn";
import CustomAnimation from "@/components/CustomAnimation";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as="h1"
      size="xl"
      className="mb-4 first:mt-0 last:mb-0 tracking-wide font-bold"
    >
      {children}
    </Heading>
  ),
};

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps) => {
  const backgroundImage = slice.primary.backgroundImage;
  const mobileBackgroundImage = slice.primary.mobileImage;

  return (
    <section className="relative min-h-screen mb-8 overflow-hidden">
      {isFilled.image(mobileBackgroundImage) ? (
        <>
          {/* Default image for desktop */}
          <PrismicNextImage
            field={backgroundImage}
            alt=""
            fill={true}
            className="pointer-events-none select-none object-cover opacity-60 animate-kenburnsTop hidden sm:block"
            priority
          />
          {/* Mobile image for mobile devices */}
          <PrismicNextImage
            field={mobileBackgroundImage}
            alt=""
            fill={true}
            className="pointer-events-none select-none object-cover opacity-60 animate-kenburnsTop block sm:hidden"
            priority
          />
        </>
      ) : (
        isFilled.image(backgroundImage) && (
          <PrismicNextImage
            field={backgroundImage}
            alt=""
            fill={true}
            className="pointer-events-none select-none object-cover opacity-60 animate-kenburnsTop"
            priority
          />
        )
      )}
      <Bounded yPadding="sm" className="relative h-screen">
        {slice.variation === "default" && (
          <div
            className={cn(
              "grid gap-8 h-[calc(100vh-80px)]",
              slice.primary.text_location === "Center" &&
                "items-center justify-items-center",
              slice.primary.text_location === "Center Left" &&
                "items-center justify-items-start",
              slice.primary.text_location === "Center Right" &&
                "items-center justify-items-end",
              slice.primary.text_location === "Bottom Left" &&
                "justify-items-start items-end",
            )}
          >
            <div className="text-left text-black">
              <ConditionalWrap
                if={slice.primary.animated_title}
                with={CustomAnimation}
                wrapperProps={{ trigger: true, animationType: "slideInLeft" }}
              >
                <PrismicRichText
                  field={slice.primary.text}
                  components={components}
                />
              </ConditionalWrap>
              <PrismicRichText
                field={slice.primary.description}
                components={components}
              />
            </div>
            {isFilled.link(slice.primary.buttonLink) && (
              <PrismicNextLink
                field={slice.primary.buttonLink}
                className="rounded bg-white px-5 py-3 font-medium text-slate-800"
              >
                {slice.primary.buttonText || "Learn More"}
              </PrismicNextLink>
            )}
          </div>
        )}
        {slice.variation === "twoButtons" && (
          <div className="grid justify-items-center items-center min-h-screen gap-8">
            <div className="flex flex-col sm:flex-row gap-4">
              {isFilled.link(slice.primary.leftButton) && (
                <PrismicNextLink
                  field={slice.primary.leftButton}
                  className="rounded bg-white px-5 py-3 font-medium text-slate-800"
                >
                  {slice.primary.leftButtonText || "Learn More"}
                </PrismicNextLink>
              )}
              {isFilled.link(slice.primary.right_button) && (
                <PrismicNextLink
                  field={slice.primary.right_button}
                  className="rounded bg-white px-5 py-3 font-medium text-slate-800"
                >
                  {slice.primary.right_button_text || "Contact Us"}
                </PrismicNextLink>
              )}
            </div>
          </div>
        )}
      </Bounded>
    </section>
  );
};

export default Hero;
