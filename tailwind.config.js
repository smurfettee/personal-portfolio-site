import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0a0a0f",
          surface: "#12121a",
        },
        accent: {
          cyan: "#00fff0",
          magenta: "#ff00e5",
        },
        ink: {
          primary: "#e8e8ef",
          muted: "#8a8a9a",
        },
      },
      fontFamily: {
        heading: ["'JetBrains Mono'", "monospace"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0, 255, 240, 0.35)",
        "glow-magenta": "0 0 20px rgba(255, 0, 229, 0.35)",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-glow-cyan": { textShadow: "0 0 12px rgba(0, 255, 240, 0.6)" },
        ".text-glow-magenta": { textShadow: "0 0 12px rgba(255, 0, 229, 0.6)" },
      });
    }),
  ],
};
