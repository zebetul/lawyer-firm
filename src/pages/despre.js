// src/pages/about.js
import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function About({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  const image = getImage(frontmatter.image);
  const icon = getImage(frontmatter.icon);

  return (
    <Layout>
      <div className="about-page">
        <h2 className="services-title mb-20 md:mb-32 mt-20 text-center text-xl md:text-4xl text-secondary font-serif">
          DESPRE
        </h2>

        <div className="about-container mb-32 flex flex-col-reverse md:flex-row gap-20 text-secondary">
          <div className="content-container relative mx-5 flex-1 flex flex-col justify-center">
            <div className="icon-container absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <GatsbyImage
                className="w-full"
                image={icon}
                alt={frontmatter.title}
                style={
                  // I want to transform the colors of the image to white
                  { filter: "invert(1)", opacity: "0.05" }
                }
              />
            </div>

            <div className="mb-10" dangerouslySetInnerHTML={{ __html: html }} />

            <Link
              className="hero_button px-10 py-3 mr-auto rounded-md bg-accent text-secondary text-lg hover:bg-accentDark"
              to="/contact"
            >
              CONTACT
            </Link>
          </div>

          <GatsbyImage
            className="flex-1 rounded-lg mx-5"
            image={image}
            alt={frontmatter.title}
          />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/despre.md/" }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }

        icon {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
