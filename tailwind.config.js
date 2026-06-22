/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFBF7",
          100: "#FAF7F2",
          200: "#F7F3EC",
          300: "#EDE8DF",
        },
        forest: {
          50: "#E8F5EE",
          100: "#C6E7D4",
          200: "#8FCCAA",
          300: "#52A87E",
          400: "#2D6A4F",
          500: "#1B4332",
          600: "#163728",
          700: "#0F2A1E",
          800: "#0A1F15",
          900: "#05140D",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(27, 67, 50, 0.08)",
        "card-hover": "0 20px 48px -12px rgba(27, 67, 50, 0.18)",
        premium: "0 25px 60px -15px rgba(15, 42, 30, 0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
