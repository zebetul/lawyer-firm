/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
  ],
  siteMetadata: {
    title: "Avocat Simona Oros",
    subtitle:
      "Sunt aici pentru a vă ajuta să găsim cea mai bună soluție legală.",
    description: "Cabinet de Avocatură Simona Oros din Satu Mare",
    motto: "SERIOZITATE, PROFESIONALISM, EXPERIENȚĂ",
    contact: {
      phone: "0722 123 456",
      email: "email@gmail.com",
    },
  },
};
