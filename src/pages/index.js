import * as React from "react";
import Layout from "../components/layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import { ElfsightWidget } from "react-elfsight-widget";

export default function Home({ data }) {
  const services = data.services.nodes;
  const siteMetadata = data.site.siteMetadata;
  const about = data.about;
  const { frontmatter, html } = about;
  const image = getImage(frontmatter.image);
  const icon = getImage(frontmatter.icon);

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
            <h2 className="hero_subtitle mb-5 text-sm">
              {siteMetadata.subtitle}
            </h2>

            <h1 className="hero_title mb-5 font-serif text-6xl">
              {siteMetadata.title}
            </h1>

            <p className="hero_subtitle mb-10 text-2xl">{siteMetadata.motto}</p>

            <Link
              className="hero_button px-10 py-3 mr-auto rounded-md bg-accent text-secondary text-lg hover:bg-accentDark"
              to="/contact"
            >
              CONTACT
            </Link>
          </div>
        </section>

        <section className="about_section w-full">
          <div className="about-container mb-32 flex flex-col-reverse md:flex-row gap-20 text-secondary">
            <div className="content-container relative mx-5 py-20 flex-1 flex flex-col justify-center">
              <div className="icon-container absolute md:top-0 left-0 w-full h-full flex items-center justify-center -z-10">
                <GatsbyImage
                  className="w-full h-full"
                  image={icon}
                  alt={frontmatter.title}
                  style={{ filter: "brightness(95%)" }}
                />
              </div>

              <h1 className="about_subtitle text-2xl md:text-3xl text-center md:text-start font-serif mb-10">
                DESPRE NOI
              </h1>

              <div
                className="mb-10"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              <Link
                className="hero_button px-10 py-3 mr-auto rounded-md bg-accent text-secondary text-lg hover:bg-accentDark"
                to="/despre"
              >
                AFLĂ MAI MULTE
              </Link>
            </div>

            <GatsbyImage
              className="flex-1 rounded-lg mx-5"
              image={image}
              alt={frontmatter.title}
            />
          </div>
        </section>

        <section className="services_section text-secondary flex flex-col">
          <h1 className="services_title mx-auto text-center text-2xl md:text-3xl font-serif">
            DOMENII DE PRACTICĂ
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 px-10 py-20 sm:px-32 md:px-20 lg:px-32 lg:py-32 gap-20 lg:gap-32">
            {services.map((service) => {
              const image = getImage(service.frontmatter.image);
              const title = service.frontmatter.title;
              const icon = getImage(service.frontmatter.icon);

              return (
                <Link
                  className="service_preview_card"
                  to={`/domenii-de-practica#${title}`}
                  key={service.id}
                >
                  <div className="image_container relative w-full">
                    <GatsbyImage
                      className="service_image w-full rounded-lg"
                      image={image}
                      style={{ filter: "brightness(40%)" }}
                      alt={title}
                      placeholder="blurred"
                    />

                    <div className="service-icon-container absolute top-0 left-0 w-full h-full p-2 flex items-center justify-center">
                      <GatsbyImage
                        className="service_icon w-32"
                        image={icon}
                        alt={title}
                        placeholder="blurred"
                        style={{ filter: "brightness(90%)" }}
                      />
                    </div>
                  </div>

                  <h3 className="service-title mt-5 text-center text-2xl">
                    {title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="reviews_section w-full px-5 h-96 mt-10 mb-20">
          <h1 className="google-reviews_title text-2xl md:text-3xl font-serif text-center mb-20">
            PĂREREA CLIENȚILOR
          </h1>

          <div className="google-reviews_container mx-auto w-full">
            <ElfsightWidget
              widgetId="667eb523-5899-497e-8bec-f4292d104cdc"
              className="elfsight-reviews"
            />
          </div>
        </section>
      </Layout>
    </>
  );
}

export const query = graphql`
  query HomePageQuery {
    services: allMarkdownRemark(
      filter: { frontmatter: { title: { nin: ["Despre", "About"] } } }
      sort: { frontmatter: { title: ASC } }
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
          icon {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }

    about: markdownRemark(frontmatter: { title: { eq: "About" } }) {
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
