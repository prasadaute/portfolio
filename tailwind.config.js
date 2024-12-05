/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary_: "#298e9e",
        secondary_: "#023247",
        tertiary_: "#606f85",
        quaternary_: "#f5f9f9",
      },
    },
  },
  plugins: [],
  important: true, // <<<< HERE
};
