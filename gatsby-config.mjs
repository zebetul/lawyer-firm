/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
import { dirname } from "path";
import { fileURLToPath } from "url";
// import { createRequire } from "module";

const __dirname = dirname(fileURLToPath(import.meta.url));
// const require = createRequire(import.meta.url);

const config = {
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Libre Baskerville\:400,700`, `Roboto\:400,500,700,900`],
        display: "swap",
      },
    },
  ],

  siteMetadata: {
    title: "Avocat Simona Oros",
    subtitle:
      "Sunt aici pentru a vă ajuta să găsim cea mai bună soluție legală.",
    description: "Cabinet de Avocatură Simona Oros din Satu Mare",
    motto: "SERIOZITATE, PROFESIONALISM, EXPERIENȚĂ",
    siteUrl: "https://avocatsimonaoros.ro",
    contact: {
      phone: "0740.886.617",
      email: "avocat.simonaoros@gmail.com",
      linkedin: "https://www.linkedin.com/in/simona-oros-nistor-38941088/",
      address: "Str. Horea, nr. 11, Satu Mare",
      googleMapsUrl: "https://maps.app.goo.gl/yruHt4NrMY8qmqQm6",
      googleMapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2680.3260892591416!2d22.87489547610295!3d47.79451427498279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473805e431ae843b%3A0xb5a1c14876828b3b!2sOros%20Simona!5e0!3m2!1sro!2sro!4v1705356125278!5m2!1sro!2sro",
    },
  },
};

export default config;
