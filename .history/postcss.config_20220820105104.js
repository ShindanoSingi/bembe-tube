// apps/<app-name>/postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {
      config: "apps/bembe-tube/tailwind.config.js",
    },
    autoprefixer: {},
  },
}
