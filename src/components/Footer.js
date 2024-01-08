import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

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
    }
  `);

  const metadata = data.site.siteMetadata;

  return (
    <footer className="py-5 bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-2">
          <Link to="/" className="font-bold text-xl">
            {metadata.title.toUpperCase()}
          </Link>

          <p>{metadata.contact.phone}</p>

          <p>{metadata.contact.email}</p>
        </div>

        <div className="flex flex-col gap-2">
          <Link to="/despre">DESPRE</Link>

          <Link to="/servicii">SERVICII</Link>

          <Link to="/contact">CONTACT</Link>
        </div>
      </div>

      <div className="container mx-auto text-center text-sm">
        <p>{metadata.title.toUpperCase()} &copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
