import * as React from "react";
import Layout from "../components/layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";

export default function Home({ data }) {
  const services = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <section className="hero_section relative" style={{ height: 800 }}>
        <StaticImage
          className="hero_image h-full"
          src="../images/hero/Hero-bg-img.png"
          alt=""
          placeholder="blurred"
          style={{ filter: "brightness(70%)" }}
          loading="eager"
        />

        <div className="hero_title-container absolute top-1/4 ml-5 2xl:ml-28 flex flex-col text-3xl text-white">
          <h5 className="hero_subtitle mb-5 text-sm">
            Sunt aici pentru a va ajuta să găsiți soluții legale
          </h5>

          <h1 className="hero_title mb-5 text-6xl">AVOCAT SIMONA OROS</h1>

          <h2 className="hero_subtitle mb-10 text-2xl">
            SERIOZITATE, PROFESIONALISM, EXPERIENȚĂ
          </h2>

          <Link
            className="hero_button px-10 py-3 mr-auto rounded-md bg-white text-black text-lg hover:bg-gray-200"
            to="/contact"
          >
            CONTACT
          </Link>
        </div>
      </section>

      <section className="services_section relative">
        {services.map((service) => {
          const image = getImage(service.frontmatter.image);
          const title = service.frontmatter.title;

          return (
            <Link className="service-link" to="/servicii" key={service.id}>
              <GatsbyImage
                className="service_image"
                image={image}
                alt={title}
              />

              <h3 className="service-title">{title}</h3>
            </Link>
          );
        })}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
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
  }
`;
