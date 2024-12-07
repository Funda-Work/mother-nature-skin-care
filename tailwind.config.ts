import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        // Playful yet natural color palette
        primary: "#7C9082", // Sage green
        secondary: "#F2CC8F", // Warm yellow
        accent: "#E07A5F", // Terra cotta
        dark: "#3D405B", // Deep blue-gray
        light: "#F4F1DE", // Cream
        bright: "#FF6B6B", // Bright coral for kid-friendly accents
        success: "#81B29A", // Soft green
        warning: "#F2CC8F", // Warm yellow
        error: "#E07A5F", // Terra cotta
        info: "#3D405B", // Deep blue-gray
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
