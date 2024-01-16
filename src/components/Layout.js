import "../styles/global.css";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="layout flex flex-col font-sans">
    <NavBar />

    <div className="content-container mx-auto w-full max-w-7xl">{children}</div>

    <Footer />
  </div>
);

export default Layout;
