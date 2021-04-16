/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  // flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: "Guitar Mania",
    description: "Rock out with your cock out",
    author: "@stevegriesel",
    person: {
      name: "Stephan",
      age: "35",
    },
    testDataBasic: ["item1", "item 2", "item 3"],
    testDataAdvanced: [
      {
        name: "Stephan",
        age: "36",
      },
      {
        name: "Belinda",
        age: "32",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `examples`,
    //     path: `${__dirname}/src/examples`,
    //   },
    // },
  ],
}
