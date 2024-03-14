import "../styles/global.css";
import React from "react";
import NavBar from "./navBar/NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => (
	<div className="layout flex flex-col font-sans">
		<NavBar />

		<main className="content-container mx-auto w-full max-w-7xl p-2 flex flex-col">
			{children}
		</main>

		<Footer />
	</div>
);

export default Layout;
