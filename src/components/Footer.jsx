import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PiPhoneFill } from "react-icons/pi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					contact {
						phone
						email
						address
						linkedin
						googleMapsUrl
					}
				}
			}

			footerServices: allMarkdownRemark(
				filter: { frontmatter: { title: { nin: ["Despre", "About"] } } }
				sort: { frontmatter: { title: ASC } }
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
	const { phone, email, address, linkedin, googleMapsUrl } = metadata.contact;

	return (
		<footer className="bg-secondary text-white">
			<div className="logo_container flex justify-center items-center py-10">
				<Link to="/">
					<StaticImage
						src="../images/logos/logo.png"
						className="w-80"
						alt="logo"
					/>
				</Link>
			</div>

			<div className="footer_links max-w-3xl mx-auto mb-20 flex gap-10 flex-col md:flex-row items-center md:justify-around">
				<div className="column_services w-80 flex flex-col gap-3">
					<h1 className="font-bold text-accentDark font-serif">
						DOMENII DE PRACTICA
					</h1>

					<ul className="services_list flex flex-col gap-3">
						{services.map((service) => (
							<li key={service.id}>
								<Link to={`/domenii-de-practica#${service.frontmatter.title}`}>
									{service.frontmatter.title}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="column_contact w-80 flex flex-col gap-3">
					<h1 className="text-l font-bold text-accentDark font-serif">
						CONTACT
					</h1>

					<ul className="contact_list flex flex-col gap-3">
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={`tel:${phone}`}
								className="contact_phone flex items-center gap-2">
								<PiPhoneFill
									className="text-accentDark"
									size={20}
								/>

								{phone}
							</a>
						</li>

						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={`mailto:${email}`}
								className="contact_email flex items-center gap-2">
								<MdEmail
									className="text-accentDark"
									size={20}
								/>

								{email}
							</a>
						</li>

						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={linkedin}
								className="contact_linkedin flex items-center gap-2">
								<FaLinkedin
									className="text-accentDark"
									size={20}
								/>
								/simona-oros-nistor
							</a>
						</li>

						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={googleMapsUrl}
								className="contact_linkedin flex items-center gap-2">
								<MdLocationOn
									className="text-accentDark"
									size={20}
								/>

								{address}
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="coyright_container max-w-7xl mx-auto mb-5 text-center text-sm">
				<p>
					{metadata.title.toUpperCase()} &copy; {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
