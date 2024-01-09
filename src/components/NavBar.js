import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { PiPhoneFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const NavBar = () => {
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

  const siteMetadata = data.site.siteMetadata;

  return (
    <nav className="sticky top-0 z-10 text-white bg-black">
      <div className="max-w-7xl mx-auto flex justify-between px-5">
        <Link className="nav_logo" to="/">
          <StaticImage
            src="../images/logos/logo_500x182.png"
            className="w-52"
            alt="logo"
          />
        </Link>

        <div className="nav_links_container flex flex-col justify-center mr-0">
          <ul className="nav_contact mb-3 flex flex-row justify-end gap-10 text-sm">
            <li>
              <a
                href={`tel:${siteMetadata.contact.phone}`}
                className="nav_phone flex gap-2"
              >
                <PiPhoneFill size={20} />
                <p>{siteMetadata.contact.phone}</p>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteMetadata.contact.email}`}
                className="nav_email flex gap-2"
              >
                <MdEmail size={20} />
                <p>{siteMetadata.contact.email}</p>
              </a>
            </li>
          </ul>

          <ul className="nav_links flex justify-end gap-10 font-bold text-sm">
            <li>
              <Link to="/despre">DESPRE</Link>
            </li>
            <li>
              <Link to="/domenii-de-practica">DOMENII DE PRACTICA</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
