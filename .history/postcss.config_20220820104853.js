// apps/<app-name>/postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {
      config: "apps/fail/tailwind.config.js",
    },
    autoprefixer: {},
  },
}
