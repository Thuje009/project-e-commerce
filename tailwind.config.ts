import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
 colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textHighlight: "var(--text-highlight)",
        buttonPrimary: "var(--button-primary)",
        buttonPrimaryHover: "var(--button-primary-hover)",
        buttonSecondary: "var(--button-secondary)",
        buttonSecondaryHover: "var(--button-secondary-hover)",
        border: "var(--border)",
        cardBackground: "var(--card-background)",
      },
    },
         container: {
        center: true,  
        padding: '2rem',  
      },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
