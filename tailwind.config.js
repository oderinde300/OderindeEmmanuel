/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "418px",
        // => @media (min-width: 418px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        SairaExtraCondensed: ["Saira Extra Condensed", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-gold": "#ffa900",
        "primary-gray": "#878786",
        "primary-gray-2": "#222323",
        "primary-black": "#292828",
        white: "white",
        // "primary-gold": "#1266F1",
        // "primary-gray": "#222323",
        // "primary-gray-2": "#222323",
        // "primary-black": "#adb5bd",
        // white: "black",
      },
    },
  },
  plugins: [],
};
