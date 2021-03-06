// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

const _ = require("lodash")

const clientConfig = require("./client-config")

const isProd = process.env.NODE_ENV === "production"

const buildWhitelist = () => {
  const sizes = _.range(1, 20)
  const screenSizes = ["xs", "sm", "md", "lg", "xl"]
  let classes = []

  screenSizes.forEach(size => {
    if (size === "xs") {
      sizes.forEach(s => {
        classes.push(`gap-${s}`)
        classes.push(`row-gap-${s}`)
        classes.push(`grid-cols-${s}`)
      })
    } else {
      sizes.forEach(s => {
        classes.push(`${size}:gap-${s}`)
        classes.push(`${size}:row-gap-${s}`)
        classes.push(`${size}:grid-cols-${s}`)
      })
    }
  })

  return classes
}

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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        tailwind: true,
        ignore: [
          "/node_modules/slick-carousel/slick/slick.css",
          "/node_modules/slick-carousel/slick/slick-theme.css",
          "/node_modules/react-image-lightbox/style.css",
          "src/components/Card/Card.css",
          "src/components/Carousel/Carousel.css",
          "src/components/Header1/Header.css",
          "src/components/InstagramFeed/InstagramFeed.css",
          "src/components/NavigationDrawer/NavigationDrawer.css",
        ],
        whitelist: [
          "grid",
          ...buildWhitelist(),
          // "gap-6",
          // "gap-8",
          // "sm:gap-6",
          // "md:gap-8",
          // "lg:gap-10",
          // "lg:gap-16",
          // "xl:gap-12",
          // "row-gap-10",
          // "grid-cols-1",
          // "grid-cols-2",
          // "sm:grid-cols-2",
          // "md:grid-cols-2",
          // "lg:grid-cols-3",
          // "lg:grid-cols-4",
          // "xl:grid-cols-3",
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `7002496980`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    "gatsby-plugin-netlify",
  ],
}
