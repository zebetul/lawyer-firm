import React from "react";
import { Link } from "gatsby";

function NavLinks() {
	return (
		<>
			<li>
				<Link
					className="hover:text-accentDark"
					to="/"
				>
					ACASĂ
				</Link>
			</li>

			<li>
				<Link
					className="hover:text-accentDark"
					to="/despre"
				>
					DESPRE
				</Link>
			</li>

			<li>
				<Link
					className="hover:text-accentDark"
					to="/domenii-de-practica"
				>
					DOMENII DE PRACTICA
				</Link>
			</li>

			<li>
				<Link
					className="hover:text-accentDark"
					to="/contact"
				>
					CONTACT
				</Link>
			</li>
		</>
	);
}

export default NavLinks;
