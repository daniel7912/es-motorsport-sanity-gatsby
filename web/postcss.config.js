module.exports = {
  plugins: [
    require("postcss-import")({
      plugins: [require("stylelint")],
    }),
    require("tailwindcss")("./tailwind.js"),
    require("postcss-preset-env")({
      autoprefixer: { grid: false },
      features: {
        "nesting-rules": true,
      },
      browsers: ["> 1%", "last 2 versions", "Firefox ESR"],
    }),
  ],
}

// module.exports = () => ({
//   plugins: [
//     require('postcss-import'),
//     require('postcss-preset-env')({
//       stage: 3,
//       features: {
//         'color-mod-function': {unresolved: 'warn'},
//         'nesting-rules': true,
//         'custom-media-queries': {
//           preserve: false
//         },
//         'custom-properties': {
//           preserve: false
//         }
//       }
//     })
//   ]
// })
