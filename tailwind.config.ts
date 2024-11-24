import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [],
};
export default config;
