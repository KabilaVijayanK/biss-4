/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF9",
        paper2: "#F5F5F4",
        ink: "#0A0A0A",
        ink2: "#171717",
        line: "#E5E5E5",
        line2: "#D4D4D4",
        muted: "#525252",
        muted2: "#737373",
        red: {
          DEFAULT: "#E8302B",
          600: "#D5261D",
          700: "#B91C1C",
        },
        background: "#FAFAF9",
        foreground: "#0A0A0A",
        border: "#E5E5E5",
        input: "#E5E5E5",
        ring: "#0A0A0A",
        primary: { DEFAULT: "#0A0A0A", foreground: "#FAFAF9" },
        secondary: { DEFAULT: "#F5F5F4", foreground: "#0A0A0A" },
        destructive: { DEFAULT: "#E8302B", foreground: "#FAFAF9" },
        accent: { DEFAULT: "#F5F5F4", foreground: "#0A0A0A" },
        muted_c: { DEFAULT: "#F5F5F4", foreground: "#525252" },
        popover: { DEFAULT: "#FAFAF9", foreground: "#0A0A0A" },
        card: { DEFAULT: "#FFFFFF", foreground: "#0A0A0A" },
      },
      fontFamily: {
        display: ['"Clash Display"', "sans-serif"],
        sans: ['"Satoshi"', "Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        lg: "6px",
        md: "4px",
        sm: "2px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter2: "-0.03em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
