/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#FFFFFF', // Primary text color
        secondary: '#CCCCCC', // Secondary text color
        accent: '#1E90FF', // Accent color for links and buttons
        hoverAccent: '#FF6347', // Hover color for links and buttons
        navbarHover: '#FF4500', // Navbar hover color
        h1: '#FFFFFF', // H1 color
        h1Subtitle: '#CCCCCC', // H1 subtitle color
        h2: '#FFFFFF', // H2 color
        h3: '#FFFFFF', // H3 color
        h3Subpoints: '#BBBBBB', // H3 subpoints color
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Primary font
        serif: ['Playfair Display', 'serif'], // Serif font for headings
        secondary: ['Roboto', 'sans-serif'], // Secondary font
      },
    },
  },
  plugins: [],
};
