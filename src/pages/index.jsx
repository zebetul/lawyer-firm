import React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import { ElfsightWidget } from "react-elfsight-widget";

import Layout from "../components/Layout";
import ServiceCard from "../components/index/ServiceCard";
import useToggleSubtitles from "../components/index/useToggleSubtitles";
import { Seo } from "../components/seo";

export default function Home({ data }) {
	const about = data.about;
	const { frontmatter, html } = about;
	const image = getImage(frontmatter.image);
	const icon = getImage(frontmatter.icon);

	const siteMetadata = data.site.siteMetadata;
	const subtitles = siteMetadata.subtitles;
	const { subtitle } = useToggleSubtitles(subtitles);

	const services = data.services.nodes;

	return (
		<>
			<div className="hero_image_container absolute top-0 left-0 h-screen w-full overflow-hidden">
				<StaticImage
					className="hero_image h-full w-full object-cover"
					src="../images/hero/Hero-bg-img.png"
					alt="Imagine reprezentând Justiția"
					placeholder="none"
					style={{ filter: "brightness(70%)" }}
					loading="eager"
				/>
			</div>

			<Layout>
				<section className="hero_section relative h-screen w-full">
					<div className="hero_title-container relative w-full h-3/4 pl-5 2xl:pl-28 flex flex-col justify-center text-primary">
						<h2 className="hero_subtitle mb-5 h-10 md:h-2 flex flex-col md:flex-row text-base font-serif">
							<span className="text-accentDark mr-2">SERVICII DE</span>

							<span>{subtitle}</span>
						</h2>

						<h1 className="hero_title mb-5 font-serif text-6xl opacity-0 animate-fade-in">
							{siteMetadata.title}
						</h1>

						<p className="hero_text mb-10 max-w-3xl pe-4 font-light text-lg">
							{siteMetadata.motto}
						</p>

						<Link
							className="hero_button px-10 py-3 mr-auto rounded-md bg-accent text-secondary text-lg hover:bg-accentDark opacity-0 animate-fade-in"
							to="/contact"
						>
							CONTACT
						</Link>
					</div>
				</section>

				<section className="about_section w-full px-5">
					<div className="about-container mb-32 flex flex-col-reverse md:flex-row gap-20 text-secondary">
						<div className="content-container relative py-20 flex-1 max-w-lg mx-auto flex flex-col justify-center">
							<div className="icon-container absolute md:top-0 left-0 w-full h-full flex items-center justify-center -z-10">
								<GatsbyImage
									className="w-full h-full"
									image={icon}
									alt={frontmatter.title}
									style={{ filter: "brightness(95%)" }}
								/>
							</div>

							<h1 className="about_subtitle font-semibold text-xl md:text-3xl text-center md:text-start font-serif mb-10">
								DESPRE NOI
							</h1>

							<div
								className="mb-10"
								dangerouslySetInnerHTML={{ __html: html }}
							/>

							<Link
								className="hero_button px-10 py-3 mr-auto rounded-md bg-accent text-secondary text-lg hover:bg-accentDark whitespace-nowrap"
								to="/despre"
							>
								AFLĂ MAI MULTE
							</Link>
						</div>

						<GatsbyImage
							className="about-image flex-1 max-w-lg mx-auto rounded-lg"
							image={image}
							alt={frontmatter.title}
						/>
					</div>
				</section>

				<section className="services_section text-secondary flex flex-col">
					<h1 className="services_title mx-auto mb-20 text-center font-semibold text-xl md:text-3xl font-serif">
						DOMENII DE PRACTICĂ
					</h1>

					<div className="mb-32 grid grid-cols-1 md:grid-cols-2 px-10 sm:px-32 md:px-20 lg:px-32 gap-20 lg:gap-32">
						{services.map((service) => (
							<ServiceCard
								key={service.frontmatter.title}
								service={service}
							/>
						))}
					</div>
				</section>

				<section className="reviews_section w-full px-5 h-96 mt-10 mb-32">
					<h1 className="google-reviews_title font-semibold text-xl md:text-3xl font-serif text-center mb-20">
						PĂREREA CLIENȚILOR
					</h1>

					<div className="relative google-reviews_container w-full overflow-hidden">
						<ElfsightWidget
							widgetId="667eb523-5899-497e-8bec-f4292d104cdc"
							className="elfsight-reviews"
							modern={true}
						/>

						<div className="elfsightWidget_cover absolute bottom-0 left-0 w-full h-12 bg-white z-10"></div>
					</div>
				</section>
			</Layout>
		</>
	);
}

export const query = graphql`
	query HomePageQuery {
		services: allMarkdownRemark(
			filter: {
				frontmatter: {
					title: { nin: ["Succesul tău, misiunea mea!", "About"] }
				}
			}
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
							gatsbyImageData(placeholder: NONE)
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
						gatsbyImageData(placeholder: BLURRED)
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
				subtitles
			}
		}
	}
`;

export const Head = () => <Seo />;
