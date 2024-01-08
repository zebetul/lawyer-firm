import * as React from "react";
import Layout from "../components/layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";

export default function Home({ data }) {
  const services = data.services.nodes;
  const siteMetadata = data.site.siteMetadata;

  return (
    <>
      <div className="hero_image_container absolute top-0 left-0 h-screen w-full overflow-hidden">
        <StaticImage
          className="hero_image h-full w-full object-cover"
          src="../images/hero/Hero-bg-img.png"
          alt=""
          placeholder="blurred"
          style={{ filter: "brightness(70%)" }}
          loading="eager"
        />
      </div>

      <Layout>
        <section className="hero_section h-screen w-full">
          <div className="hero_title-container absolute top-1/3 ml-5 2xl:ml-28 flex flex-col text-3xl text-white">
            <h5 className="hero_subtitle mb-5 text-sm">
              {siteMetadata.subtitle}
            </h5>

            <h1 className="hero_title mb-5 text-6xl">{siteMetadata.title}</h1>

            <h2 className="hero_subtitle mb-10 text-2xl">
              {siteMetadata.motto}
            </h2>

            <Link
              className="hero_button px-10 py-3 mr-auto rounded-md bg-white text-black text-lg hover:bg-gray-200"
              to="/contact"
            >
              CONTACT
            </Link>
          </div>
        </section>

        <section className="services_section grid grid-cols-1 md:grid-cols-2 px-10 py-20 sm:px-32 md:px-20 lg:px-32 lg:py-32 gap-20 lg:gap-32">
          {services.map((service) => {
            const image = getImage(service.frontmatter.image);
            const title = service.frontmatter.title;

            return (
              <Link
                className="service_preview_card mx-auto relative flex flex-col items-center justify-center"
                to="/servicii"
                key={service.id}
              >
                <GatsbyImage
                  className="service_image w-full h-full"
                  image={image}
                  alt={title}
                  placeholder="blurred"
                />

                <h3 className="service-title text-white text-lg bg-black bg-opacity-50 p-2 absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  {title}
                </h3>
              </Link>
            );
          })}
        </section>
      </Layout>
    </>
  );
}

export const query = graphql`
  query HomePageQuery {
    services: allMarkdownRemark(
      filter: { frontmatter: { title: { ne: "Despre" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        motto
        subtitle
      }
    }
  }
`;
