import React from "react";
import { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PiPhoneFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { debounce } from "lodash";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 200) {
        console.log("scrolling");
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }, 100); // Adjust the debounce delay as per your requirement

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <nav
      className={`sticky top-0 z-10 py-2 text-primary ${
        isScrolled ? "bg-secondary " : ""
      }`}
    >
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
                <PiPhoneFill className="text-accentDark" size={20} />
                <p>{siteMetadata.contact.phone}</p>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteMetadata.contact.email}`}
                className="nav_email flex gap-2"
              >
                <MdEmail className="text-accentDark" size={20} />
                <p>{siteMetadata.contact.email}</p>
              </a>
            </li>
          </ul>

          <ul className="nav_links flex justify-end gap-10 font-bold text-sm">
            <li>
              <Link className="hover:text-accentDark" to="/despre">
                DESPRE
              </Link>
            </li>
            <li>
              <Link className="hover:text-accentDark" to="/domenii-de-practica">
                DOMENII DE PRACTICA
              </Link>
            </li>
            <li>
              <Link className="hover:text-accentDark" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
