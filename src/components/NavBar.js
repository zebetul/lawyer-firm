import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title.toUpperCase();

  return (
    <nav className="sticky top-0 z-10 w-full flex justify-between py-5 px-5 text-sm text-white bg-black bg-opacity-50">
      <Link to="/">
        <h1 className="font-bold text-xl">{siteTitle}</h1>
      </Link>

      <div className="nav-links mr-0 flex gap-2 font-bold">
        <Link to="/despre">DESPRE</Link>

        <Link to="/servicii">SERVICII</Link>

        <Link to="/contact">CONTACT</Link>
      </div>
    </nav>
  );
};

export default NavBar;
