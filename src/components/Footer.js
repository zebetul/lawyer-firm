import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          contact {
            phone
            email
          }
        }
      }

      footerServices: allMarkdownRemark(
        filter: { frontmatter: { title: { ne: "Despre" } } }
      ) {
        nodes {
          frontmatter {
            title
          }
          id
        }
      }
    }
  `);

  const metadata = data.site.siteMetadata;
  const services = data.footerServices.nodes;

  return (
    <footer className="bg-secondary text-white">
      <div className="logo_container flex justify-center items-center py-10">
        <Link to="/">
          <StaticImage
            src="../images/logos/logo_500x182.png"
            className="w-80"
            alt="logo"
          />
        </Link>
      </div>

      <div className="footer_links max-w-3xl mx-auto mb-20 flex flex-col gap-10 md:flex-row justify-center md:justify-around items-center md:items-start text-center md:text-start">
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-bold text-accentDark font-serif">
            DOMENII DE PRACTICA
          </h4>

          {services.map((service) => (
            <Link to="/domenii-de-practica">{service.frontmatter.title}</Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-bold text-accentDark font-serif">
            CONTACT
          </h4>

          <p>{metadata.contact.phone}</p>

          <p>{metadata.contact.email}</p>
        </div>
      </div>

      <div className="coyright_container max-w-7xl mx-auto mb-5 text-center text-sm">
        <p>{metadata.title.toUpperCase()} &copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
