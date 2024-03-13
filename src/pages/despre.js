// src/pages/about.js
import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Seo } from "../components/seo";

export default function About({ data }) {
	const { frontmatter, html } = data.markdownRemark;
	const title = frontmatter.title;
	const image = getImage(frontmatter.image);
	const icon = getImage(frontmatter.icon);

	return (
		<Layout>
			<div className="about-page flex flex-col px-5">
				<h1 className="services-title mx-auto mb-20 md:mb-32 mt-20 border-b-2 pb-2 border-accent text-center text-xl md:text-4xl text-secondary font-serif">
					DESPRE
				</h1>

				<div className="about-container mb-32 flex flex-col-reverse md:flex-row gap-20 text-secondary">
					<div className="content-container relative max-w-lg mx-auto flex-1 flex flex-col justify-center">
						<div className="icon-container absolute md:-top-20 left-0 w-full h-full flex items-center justify-center -z-10">
							<GatsbyImage
								className="w-full"
								image={icon}
								alt={frontmatter.title}
								style={{ filter: "brightness(95%)" }}
							/>
						</div>

						<h2 className="mb-10 font-serif md:text-xl font-bold">{title}</h2>

						<div
							className="markdown mb-10"
							dangerouslySetInnerHTML={{ __html: html }}
						/>

						<Link
							className="hero_button px-10 py-3 mr-auto rounded-md bg-accent text-secondary text-lg hover:bg-accentDark"
							to="/contact">
							CONTACT
						</Link>
					</div>

					<GatsbyImage
						className="flex-1 rounded-lg max-w-lg mx-auto"
						image={image}
						alt={frontmatter.title}
					/>
				</div>
			</div>
		</Layout>
	);
}

export const query = graphql`
	query {
		markdownRemark(
			frontmatter: { title: { eq: "Succesul tău, misiunea mea!" } }
		) {
			frontmatter {
				title
				icon {
					childImageSharp {
						gatsbyImageData
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
	}
`;

export const Head = () => (
	<Seo
		title="Despre"
		pathname={"/despre"}
	/>
);
