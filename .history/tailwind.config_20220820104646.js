// apps/<app-name>/tailwind.config.js
const { createGlobPatternsForDependencies } = require("@nrwl/react/tailwind")

module.exports = {
  content: [
    "apps/bembe-tube/src/**/*.{js,jsx,ts,tsx}",
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
