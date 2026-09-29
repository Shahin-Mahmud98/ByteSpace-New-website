import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: "#0038E0", lime: "#CCFF00", ink: "#0B0B1E" },
      fontFamily: { heading: ["Poppins", "sans-serif"], body: ["DM Sans", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
