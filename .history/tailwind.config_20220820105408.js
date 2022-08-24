const { createGlobPatternsForDependencies } = require("@nrwl/react/tailwind")

module.exports = {
  content: [
    "../../apps/**/*.{js,jsx,ts,tsx}",
    "../../libs/**/*.{js,jsx,ts,tsx}",
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
