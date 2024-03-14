import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

function ServiceCard({ service }) {
	const image = getImage(service.frontmatter.image);
	const title = service.frontmatter.title;
	const icon = getImage(service.frontmatter.icon);

	return (
		<Link
			className="service_preview_card flex flex-col hover:transform hover:scale-105 transition-all duration-300 ease-in-out"
			to={`/domenii-de-practica#${title}`}
			key={service.id}
		>
			<div className="image_container relative w-full">
				<GatsbyImage
					className="service_image w-full rounded-lg"
					image={image}
					style={{ filter: "brightness(40%)" }}
					alt={`Imagine reprezentând domeniul ${title}`}
					placeholder="blurred"
				/>

				<div className="service-icon-container absolute top-0 left-0 w-full h-full p-2 flex items-center justify-center">
					<GatsbyImage
						className="service_icon w-32"
						image={icon}
						alt={`Icoană reprezentând domeniul ${title}`}
						placeholder="blurred"
						style={{ filter: "brightness(90%)" }}
					/>
				</div>
			</div>

			<h2 className="service-title mx-auto mt-5 text-center text-2xl border-b-2 pb-2 border-accent">
				{title}
			</h2>
		</Link>
	);
}

export default ServiceCard;
