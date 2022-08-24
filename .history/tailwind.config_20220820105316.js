module.exports = {
  presets: [require("../../tailwind-workspace-preset.js")],
  content: [
    "src/**/*.{js,jsx,ts,tsx}",
    "libs/ui/src/**/*.{js,jsx,ts,tsx}",
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
