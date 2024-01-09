import "../styles/global.css";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="layout flex flex-col">
    <NavBar />

    <div className="content mx-auto max-w-7xl">{children}</div>

    <Footer />
  </div>
);

export default Layout;
