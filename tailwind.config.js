/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        primaryDark: "#58E6D9",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      //
      animation: {
        "spin-slow": "spin 8s linear infinite",
        appear: "appear 1s forwards", // Add the custom appear animation
        glitch: "glitch 3s infinite linear",
        typing: "typing 3s steps(30) 1s 1 normal both",
      },
      keyframes: {
        glitch: {
          "0%": {
            transform: "translate3d(-1px, -1px, 0)",
            opacity: "1",
          },
          "10%": {
            transform: "translate3d(1px, 1px, 0)",
            opacity: "0.8",
          },
          "20%": {
            transform: "translate3d(-2px, -2px, 0)",
            opacity: "1",
          },
          "30%": {
            transform: "translate3d(2px, 2px, 0)",
            opacity: "0.8",
          },
          "40%": {
            transform: "translate3d(-3px, -3px, 0)",
            opacity: "1",
          },
          "50%": {
            transform: "translate3d(3px, 3px, 0)",
            opacity: "0.7",
          },
          "60%": {
            transform: "translate3d(-4px, -4px, 0)",
            opacity: "1",
          },
          "70%": {
            transform: "translate3d(4px, 4px, 0)",
            opacity: "0.6",
          },
          "80%": {
            transform: "translate3d(-5px, -5px, 0)",
            opacity: "1",
          },
          "90%": {
            transform: "translate3d(5px,5px, 0)",
            opacity: "0.5",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
            opacity: "1",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px,#f5f5f5 100px);",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
