import React from "react";
import { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { MdEmail, MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";

import useNavBackground from "./useNavBackground";
import NavLinks from "./NavLinks";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { isNavBackground } = useNavBackground();

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

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<nav
			className={`nav_background sticky top-0 z-50 py-2 text-primary transition-all duration-300 ${
				isNavBackground || isMenuOpen ? "bg-secondary" : ""
			}`}
		>
			<div className="max-w-7xl mx-auto flex justify-between px-5">
				<Link
					className="nav_logo"
					to="/"
				>
					<StaticImage
						src="../../images/logos/logo.png"
						className="w-40 md:w-52"
						alt="logo"
						placeholder="none"
					/>
				</Link>

				<div className="nav_links_container flex flex-col justify-center mr-0">
					<ul className="nav_contact mt-2 md:mt-0 mb-3 me-1 md:me-0 flex flex-row justify-end gap-10 text-sm">
						<li>
							<a
								href={`tel:${siteMetadata.contact.phone}`}
								className="nav_phone flex gap-2"
							>
								<PiPhoneFill
									className="text-accentDark"
									size={20}
								/>

								<p className="hidden md:flex">{siteMetadata.contact.phone}</p>
							</a>
						</li>

						<li>
							<a
								href={`mailto:${siteMetadata.contact.email}`}
								className="nav_email flex gap-2"
							>
								<MdEmail
									className="text-accentDark"
									size={20}
								/>

								<p className="hidden md:flex">{siteMetadata.contact.email}</p>
							</a>
						</li>
					</ul>

					{isMenuOpen ? (
						<>
							<MdOutlineClose
								size={30}
								className="md:hidden text-accentDark cursor-pointer my-auto ms-auto"
								onClick={toggleMenu}
							/>

							<ul className="nav_links absolute left-0 top-20 w-full md:hidden flex flex-col justify-start bg-secondary gap-10 py-10 ps-5 font-bold font-serif text-sm">
								<NavLinks />
							</ul>
						</>
					) : (
						<MdOutlineMenu
							size={30}
							className="md:hidden text-accentDark cursor-pointer my-auto ms-auto"
							onClick={toggleMenu}
						/>
					)}

					<ul className="nav_links hidden md:flex justify-end gap-10 font-serif font-bold text-sm">
						<NavLinks />
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
