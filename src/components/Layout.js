import "../styles/global.css";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => (
	<div className="layout flex flex-col font-sans">
		<NavBar />

		<main className="content-container mx-auto w-full max-w-7xl">
			{children}
		</main>

		<Footer />
	</div>
);

export default Layout;
