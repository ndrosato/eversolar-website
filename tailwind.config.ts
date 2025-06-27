import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-montserrat)"],
      },
      colors: {
        // Primary palette - refined blue spectrum
        primary: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },
        // Secondary palette - gold/amber for energy
        secondary: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          950: "#451A03",
        },
        // Accent palette - bright green from logo
        accent: {
          50: "#f0fdf0",
          100: "#dcfcdc",
          200: "#bbf7bb",
          300: "#86ef86",
          400: "#4ade4a",
          500: "#23ad24", // New primary accent color
          600: "#16a316",
          700: "#158015",
          800: "#166516",
          900: "#14531d",
          950: "#052e0a",
        },
        // Neutral palette - slate for text and backgrounds
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
        // Semantic colors for specific purposes
        success: {
          50: "#F0FDF4",
          500: "#22C55E",
          900: "#14532D",
        },
        warning: {
          50: "#FFFBEB",
          500: "#F59E0B",
          900: "#78350F",
        },
        error: {
          50: "#FEF2F2",
          500: "#EF4444",
          900: "#7F1D1D",
        },
        info: {
          50: "#EFF6FF",
          500: "#3B82F6",
          900: "#1E3A8A",
        },

        // Brand-specific named colors (for backward compatibility)
        "brand-navy": {
          DEFAULT: "#1E3A8A", // primary-900
          light: "#1D4ED8", // primary-700
          dark: "#172554", // primary-950
        },
        "brand-gold": {
          DEFAULT: "#F59E0B", // secondary-500
          light: "#FBBF24", // secondary-400
          dark: "#B45309", // secondary-700
        },
        "brand-teal": {
          DEFAULT: "#22C55E", // accent-500 (updated to green)
          light: "#4ADE80", // accent-400 (updated to green)
          dark: "#15803D", // accent-700 (updated to green)
        },

        // UI-specific colors
        "ui-light": "#F8FAFC", // neutral-50
        "ui-dark": "#0F172A", // neutral-900

        // Legacy colors (keeping for backward compatibility)
        charcoal: "#334155", // neutral-700
        navy: "#1E3A8A", // primary-900
        "solar-gold": "#F59E0B", // secondary-500
        "blue-green": "#22C55E", // updated to match new accent-500

        // Shadcn colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.08)",
        card: "0 10px 30px rgba(0, 0, 0, 0.05)",
        highlight: "0 0 0 2px rgba(34, 197, 94, 0.3)", // Updated to green
        glow: "0 0 15px rgba(74, 222, 128, 0.5)", // Updated to green
        "inner-light": "inset 0 1px 2px rgba(255, 255, 255, 0.2)",
        "inner-dark": "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(to right, #1E40AF, #3B82F6)",
        "gradient-secondary": "linear-gradient(to right, #B45309, #F59E0B)",
        "gradient-accent": "linear-gradient(to right, #1a8a1a, #23ad24)", // Updated to green
        "texture-dots":
          "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
