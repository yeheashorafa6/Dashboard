/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#CFCEFF",
        primaryPurpleLight: "#F1F0FF",
        secondaryYellow: "#FAE27C",
        secondaryYellowLight: "#FEFCE8",
        sky: "#C3EBFA",
        skyight: "#EDF9FD",
      },
    },
  },
  plugins: [],
};
