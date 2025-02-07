const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-poppins), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      keyframes: {
        kenburnsTop: {
          "0%": {
            transform: "scale(1) translateY(0)",
            transformOrigin: "50% 16%",
          },
          "100%": {
            transform: "scale(1.25) translateY(-15px)",
            transformOrigin: "top",
          },
        },
        jelloHorizontal: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },
          "65%": {
            transform: "scale3d(0.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-10%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceTop: {
          "0%": {
            transform: "translateY(-45px)",
            animationTimingFunction: "ease-in",
            opacity: 1,
          },
          "24%": {
            opacity: 1,
          },
          "40%": {
            transform: "translateY(-24px)",
            animationTimingFunction: "ease-in",
          },
          "65%": {
            transform: "translateY(-12px)",
            animationTimingFunction: "ease-in",
          },
          "82%": {
            transform: "translateY(-6px)",
            animationTimingFunction: "ease-in",
          },
          "93%": {
            transform: "translateY(-4px)",
            animationTimingFunction: "ease-in",
          },
          "25%, 55%, 75%, 87%": {
            transform: "translateY(0px)",
            animationTimingFunction: "ease-out",
          },
          "100%": {
            transform: "translateY(0px)",
            animationTimingFunction: "ease-out",
            opacity: 1,
          },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 1s ease-in forwards",
        slideInTop: "slideInTop 1s ease-in forwards",
        jelloHorizontal: "jelloHorizontal 0.9s both;",
        kenburnsTop: "kenburnsTop 15s ease-out both;",
        bounceTop: "bounceTop 2s both",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(63,62,62, 0.7), rgba(92, 92, 92, 0) 89.06%)",
      },
      colors: {
        customGray: "rgb(74, 74, 104)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), heroui()],
};
