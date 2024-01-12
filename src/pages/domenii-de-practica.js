// src/pages/services.js
import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Services({ data }) {
  const services = data.services.nodes;

  return (
    <Layout>
      <h2 className="services-title mb-20 md:mb-32 mt-20 text-center text-xl md:text-4xl text-secondary font-serif">
        DOMENII DE PRACTICĂ
      </h2>

      <div className="services-container mb-32 flex flex-col gap-40 text-secondary">
        {services.map((service, i) => {
          const id = service.id;
          const image = getImage(service.frontmatter.image);
          const title = service.frontmatter.title;
          const icon = getImage(service.frontmatter.icon);
          const content = service.html;

          return (
            <div
              key={id}
              className={`service-card flex flex-col md:flex-row gap-10 md:gap-20 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }
              `}
            >
              <GatsbyImage
                className="flex-1 rounded-lg mx-5"
                image={getImage(image)}
                alt={title}
              />

              <div className="content-container relative mx-5 flex-1 flex flex-col justify-center">
                <div className="icon-container absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <GatsbyImage
                    className=""
                    image={getImage(icon)}
                    alt={title}
                    style={{ filter: "brightness(95%)", zIndex: "-1" }}
                  />
                </div>

                <h3 className="mb-10 font-serif md:text-xl font-bold">
                  {title}
                </h3>

                <div
                  className="markdown mb-5"
                  dangerouslySetInnerHTML={{ __html: content }}
                />

                <Link
                  className="hero_button px-10 py-3 mr-auto rounded-md bg-accent text-secondary text-lg hover:bg-accentDark"
                  to="/contact"
                >
                  CONTACTEAZĂ-NE
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ServicesPageQuery {
    services: allMarkdownRemark(
      filter: { frontmatter: { title: { ne: "Despre" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          icon {
            childImageSharp {
              gatsbyImageData
            }
          }
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        html
      }
    }
  }
`;
