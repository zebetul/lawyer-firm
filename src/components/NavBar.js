import React from "react";
import { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PiPhoneFill } from "react-icons/pi";
import { MdEmail, MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { debounce } from "lodash";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotHomePage, setIsNotHomePage] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);

    if (window.location.pathname !== "/") {
      setIsNotHomePage(true);
    } else {
      setIsNotHomePage(false);
    }

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

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`nav_background sticky top-0 z-10 py-2 text-primary ${
        isScrolled || isMenuOpen || isNotHomePage
          ? "bg-secondary transition-all duration-300"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between px-5">
        <Link className="nav_logo" to="/">
          <StaticImage
            src="../images/logos/logo_500x182.png"
            className="w-40 md:w-52"
            alt="logo"
          />
        </Link>

        <div className="nav_links_container flex flex-col justify-center mr-0">
          <ul className="nav_contact mt-2 md:mt-0 mb-3 me-1 md:me-0 flex flex-row justify-end gap-10 text-sm">
            <li>
              <a
                href={`tel:${siteMetadata.contact.phone}`}
                className="nav_phone flex gap-2"
              >
                <PiPhoneFill className="text-accentDark" size={20} />

                <p className="hidden md:flex">{siteMetadata.contact.phone}</p>
              </a>
            </li>

            <li>
              <a
                href={`mailto:${siteMetadata.contact.email}`}
                className="nav_email flex gap-2"
              >
                <MdEmail className="text-accentDark" size={20} />

                <p className="hidden md:flex">{siteMetadata.contact.email}</p>
              </a>
            </li>
          </ul>

          {isMenuOpen ? (
            <>
              <MdOutlineClose
                size={30}
                className="md:hidden text-accentDark cursor-pointer my-auto ms-auto"
                onClick={handleMenuToggle}
              />

              <ul className="nav_links absolute left-0 top-20 w-full md:hidden flex flex-col justify-start bg-secondary gap-10 py-10 ps-5 font-bold font-serif text-sm">
                <li>
                  <Link to="/">ACASĂ</Link>
                </li>

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
            </>
          ) : (
            <MdOutlineMenu
              size={30}
              className="md:hidden text-accentDark cursor-pointer my-auto ms-auto"
              onClick={handleMenuToggle}
            />
          )}

          <ul className="nav_links hidden md:flex justify-end gap-10 font-serif font-bold text-sm">
            <li>
              <Link className="hover:text-accentDark" to="/">
                ACASĂ
              </Link>
            </li>

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
