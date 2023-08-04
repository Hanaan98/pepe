/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "about-image": "url('/Section 2 bg 1.png')",
        "benefits-image": "url('/Benefits of PEPE 1.png')",
        "benefits-element": "url('/Vector 629.png')",
        "benefits-element-lg": "url('/Vector 630.png')",
        "roadmap-image": "url('/Roadmap.png')",
        "faqs-image": "url('/pngwing 7.png')",
      },
    },
    screens: {
      md: "750px",
      // => @media (min-width: 640px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
