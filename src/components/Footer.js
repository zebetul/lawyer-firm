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
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto mt-20 mb-10 flex flex-col md:flex-row justify-around">
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

      <div className="max-w-7xl mx-auto mb-5 text-center text-sm">
        <p>{metadata.title.toUpperCase()} &copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
