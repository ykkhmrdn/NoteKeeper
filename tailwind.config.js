module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        primary: "#6366F1",
        secondary: "#8B5CF6",
      }),
    },
  },
  plugins: [],
};
