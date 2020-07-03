// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

const clientConfig = require("./client-config")

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  plugins: [
    // "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter:300,400,600,700,800"],
        },
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        tailwind: true,
        ignore: [
          "/node_modules/slick-carousel/slick/slick.css",
          "/node_modules/slick-carousel/slick/slick-theme.css",
          "src/components/Card/Card.css",
          "src/components/Carousel/Carousel.css",
          "src/components/Header1/Header.css",
          "src/components/NavigationDrawer/NavigationDrawer.css",
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
  ],
}
